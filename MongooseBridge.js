import mongoose from "mongoose/browser";
import { Bridge, joinName } from "uniforms";

const findType = props => {
        if (props.type) {
                return props.type;
        }
        if (Array.isArray(props)) {
                return Array;
        }
        if (typeof props === "object") {
                return Object;
        }
        if (props.type === mongoose.Schema.ObjectId) {
                return String;
        }
        return props;
};

const normalizeProps = props => {
        const type = findType(props);
        const item = type === Array && normalizeProps(props[0]);
        const subfields = type === Object && normalizePaths(props);
        return {
                type,
                ...(props.default ? { ["default"]: props.default } : {}),
                ...(subfields ? { subfields } : {}),
                ...(item ? { item } : {}),
        };
};

const normalizePaths = paths => {
        if (typeof paths === "object") {
                return Object.keys(paths).reduce(
                        (normalizedPaths, path) => ({
                                ...normalizedPaths,
                                [path]: normalizeProps(paths[path]),
                        }),
                        {}
                );
        }
        return normalizeProps(paths);
};

const traverseSubfields = (tree, name) => {
        const split = name.match(/([^\.]+)\.?(.*)/);
        const node = split[1] === "$" ? tree.item : tree[split[1]];
        if (split[2]) {
                if (split[2][1]) {
                        return traverseSubfields(node.subfields || node, split[2]);
                }
                return node.item;
        }
        return node;
};

export default class MongooseBridge extends Bridge {
        constructor(schema) {
                super();

                this.schema = schema;
                window.schema = schema;
                this.paths = normalizePaths(this.schema.tree);
                window.paths = this.paths;
                this.__fields = {}; // fields name cache so traversing is minimized
        }

        static check(schema) {
                return schema && schema instanceof mongoose.Schema;
        }

        getSubfields(name) {
                if (!name) {
                        return Object.keys(this.paths);
                }
                const field = this.getField(name);
                return field.subfields ? Object.keys(field.subfields) : [];
        }

        getField(name) {
                name = name.replace(/\.\d+/g, ".$");
                if (!this.__fields[name]) {
                        this.__fields[name] = traverseSubfields(this.paths, name);
                }
                return this.__fields[name];
        }

        getType(name) {
                return this.getField(name).type;
        }

        getProps(name, props = {}) {
                // Type should be omitted.
                let { optional, type, uniforms, ...field } = this.getField(name);

                field = { ...field, required: !optional };

                if (uniforms) {
                        if (typeof uniforms === "string" || typeof uniforms === "function") {
                                field = { ...field, component: uniforms };
                        } else {
                                field = { ...field, ...uniforms };
                        }
                }

                if (type === Array) {
                        try {
                                const itemProps = this.getProps(`${name}.$`, props);
                                if (itemProps.allowedValues && !props.allowedValues) {
                                        field.allowedValues = itemProps.allowedValues;
                                }

                                if (itemProps.transform && !props.transform) {
                                        field.transform = itemProps.transform;
                                }
                        } catch (_) {
                                /* ignore it */
                        }
                } else if (type === Number) {
                        field = { ...field, decimal: true };
                }

                let options = props.options || field.options;
                if (options) {
                        if (typeof options === "function") {
                                options = options();
                        }

                        if (!Array.isArray(options)) {
                                field = {
                                        ...field,
                                        transform: value => options[value],
                                        allowedValues: Object.keys(options),
                                };
                        } else {
                                field = {
                                        ...field,
                                        transform: value => options.find(option => option.value === value).label,
                                        allowedValues: options.map(option => option.value),
                                };
                        }
                }

                field.label = field.label || name.replace(/\.\d+/g, ".$");
                field.fieldType = typeof type === "function" ? type : type.constructor;

                return field;
        }

        getInitialValue(name, props = {}) {
                const field = this.getProps(name);

                if (field.fieldType === Array) {
                        const item = this.getInitialValue(joinName(name, "0"));
                        const items = Math.max(props.initialCount || 0, field.minCount || 0);
                        return Array.from({ length: items }, () => item);
                }

                if (field.fieldType === Object || MongooseBridge.check(field.fieldType)) {
                        return {};
                }

                return typeof field.default === "function" ? field.default() : field.default;
        }

        getValidator() {
                return data => {
                        const err = new mongoose.Document(data, this.schema).validateSync();
                        if (err) {
                                console.log(err);
                                throw err;
                        }
                };
        }

        getError(name, error) {
                const err = error && error.errors && error.errors[name.replace(/\.\d+/g, ".$")];
                return (err && err.properties) || err;
        }

        getErrorMessage(name, error) {
                const err = this.getError(name, error);
                return (err && err.message) || "";
                const scopedError = this.getError(name, error);
                return !scopedError ? "" : this.schema.messageForError(scopedError);
        }

        getErrorMessages(error) {
                if (error) {
                        return Object.values(error.errors).map(e => e.properties.message);
                }

                if (error !== undefined) {
                        return [error];
                }

                return [];
        }
}

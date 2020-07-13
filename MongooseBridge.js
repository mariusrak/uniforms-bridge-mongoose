import mongoose from "mongoose";
// import invariant from 'invariant';
import { Bridge, joinName } from "uniforms";

export default class MongooseBridge extends Bridge {
        schema;

        constructor(schema) {
                super();

                this.schema = schema;
                window.schema = schema;
                window.paths = this.paths;
                console.log(this.schema, this.paths);
        }

        static check(schema) {
                return schema && schema instanceof mongoose.Schema;
        }

        _buildPaths() {
                return [
                        this.schema.paths,
                        this.schema.subpaths,
                        Object.keys(this.schema.nested).reduce(
                                (nested, n) => ({ ...nested, [n]: { options: { type: Object } } }),
                                {}
                        ),
                ].reduce(
                        (allPaths, source) => ({
                                ...allPaths,
                                ...Object.keys(source).reduce((allPaths, path) => {
                                        const add = { [path]: source[path] };
                                        if (source[path].$embeddedSchemaType) {
                                                add[source[path].$embeddedSchemaType.path] =
                                                        source[path].$embeddedSchemaType;
                                        }
                                        return { ...allPaths, ...add };
                                }, allPaths),
                        }),
                        {}
                );
        }

        get paths() {
                if (!this.__paths) {
                        this.__paths = this._buildPaths();
                }
                return this.__paths;
        }

        getSubfields(name) {
                if (!name) {
                        return Object.keys(this.paths)
                                .map(f => f.split(".")[0])
                                .filter((v, i, a) => a.indexOf(v) === i);
                }

                // console.log("getSubfields(%s)", name, name.replace(/\.[\$\d]+/, ""), name.match(/\.[\$\d]+/));
                // if (name.match(/\.[\$\d]+$/)) {
                //         return Object.keys(this.schema.tree[name.replace(/\.[\$\d]+/, "")][0]);
                // }

                return [];
        }

        _getPath(name) {
                return this.paths[name.replace(/\.\d+/, ".$")];
        }

        getField(name) {
                console.log("getField(%s)", name, this._getPath(name));
                return this._getPath(name).options;

                /*
                if (name.match(/\.[\$\d]+/)) {
                        return { type: Object };
                        const field = this.schema.tree[name.replace(/\.[\$\d]+/, "")];
                        return field[0];
                }

                const field = this.schema.tree[name];

                // console.log('getField(%s)', name, field);

                if (Array.isArray(field)) {
                        return { type: Array };
                }
                if (!field.type && typeof field === "object") {
                        return { type: Object };
                }
                if (typeof field === "function") {
                        return { type: field };
                }
                if (field.auto === true && field.type === "ObjectId") {
                        return { ...field, type: String };
                }

                return field;*/
        }

        getType(name) {
                const path = this._getPath(name);
                if (path.$isMongooseArray) {
                        return Array;
                }
                if (path.schema) {
                        return Object;
                }
                return path.options.type;
        }

        getProps(name, props = {}) {
                // Type should be omitted.
                // eslint-disable-next-line no-unused-vars, prefer-const
                let { optional, uniforms, ...field } = this.getField(name);
                const type = this.getType(name);
                console.log("getProps(%s), type: ", name, type);

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

                field.label = field.label || name;
                field.defaultValue = field.default || "";
                delete field.default;
                field.fieldType = typeof type === "function" ? type : type.constructor;
                // if (Array.isArray(type)) {
                //         field.fieldType = Array;
                // }
                // if (typeof type === "object") {
                //         field.fieldType = Object;
                // }

                return field;
        }

        getInitialValue(name, props = {}) {
                const field = this.getProps(name);
                console.log(name, field);

                if (field.fieldType === Array) {
                        const item = this.getInitialValue(joinName(name, "0"));
                        const items = Math.max(props.initialCount || 0, field.minCount || 0);
                        return Array.from({ length: items }, () => item);
                }

                if (field.fieldType === Object || MongooseBridge.check(field.fieldType)) {
                        return {};
                }

                return typeof field.defaultValue === "function" ? field.defaultValue() : field.defaultValue;
        }

        getValidator(options = { clean: true, mutate: true }) {
                model => new mongoose.model("", this.schema)(model);

                /*
                const validator = this.schema.validate(options);

                // Clean mutate its argument, even if mutate is false.
                if (options.clean) {
                        return model => validator(cloneDeep({ ...model }));
                }

                return validator;*/
        }

        getError(name, error) {
                return (
                        (error &&
                                error.details &&
                                error.details.find &&
                                error.details.find(error => error.name === name)) ||
                        null
                );
        }

        getErrorMessage(name, error) {
                const scopedError = this.getError(name, error);
                return !scopedError ? "" : this.schema.messageForError(scopedError);
        }

        getErrorMessages(error) {
                if (error) {
                        if (Array.isArray(error.details)) {
                                return error.details.map(error => this.schema.messageForError(error));
                        }

                        if (error.message) {
                                return [error.message];
                        }
                }

                if (error !== undefined) {
                        return [error];
                }

                return [];
        }
}

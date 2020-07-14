/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./uniforms-bridge-mongoose/MongooseBridge.js":
/*!****************************************************!*\
  !*** ./uniforms-bridge-mongoose/MongooseBridge.js ***!
  \****************************************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ MongooseBridge
/* harmony export */ });
/* harmony import */ var mongoose_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose/browser */ "?4f26");
/* harmony import */ var mongoose_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uniforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uniforms */ "?b635");
/* harmony import */ var uniforms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uniforms__WEBPACK_IMPORTED_MODULE_1__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var findType = function findType(props) {
  if (props.type) {
    return props.type;
  }

  if (Array.isArray(props)) {
    return Array;
  }

  if (_typeof(props) === "object") {
    return Object;
  }

  if (props.type === (mongoose_browser__WEBPACK_IMPORTED_MODULE_0___default().Schema.ObjectId)) {
    return String;
  }

  return props;
};

var normalizeProps = function normalizeProps(props) {
  var type = findType(props);
  var item = type === Array && normalizeProps(props[0]);
  var subfields = type === Object && normalizePaths(props);
  return _objectSpread(_objectSpread(_objectSpread({
    type: type
  }, props.default ? _defineProperty({}, "default", props.default) : {}), subfields ? {
    subfields: subfields
  } : {}), item ? {
    item: item
  } : {});
};

var normalizePaths = function normalizePaths(paths) {
  if (_typeof(paths) === "object") {
    return Object.keys(paths).reduce(function (normalizedPaths, path) {
      return _objectSpread(_objectSpread({}, normalizedPaths), {}, _defineProperty({}, path, normalizeProps(paths[path])));
    }, {});
  }

  return normalizeProps(paths);
};

var traverseSubfields = function traverseSubfields(tree, name) {
  var split = name.match(/([^\.]+)\.?(.*)/);
  var node = split[1] === "$" ? tree.item : tree[split[1]];

  if (split[2]) {
    if (split[2][1]) {
      return traverseSubfields(node.subfields || node, split[2]);
    }

    return node.item;
  }

  return node;
};

var MongooseBridge = /*#__PURE__*/function (_Bridge) {
  _inherits(MongooseBridge, _Bridge);

  var _super = _createSuper(MongooseBridge);

  function MongooseBridge(schema) {
    var _this;

    _classCallCheck(this, MongooseBridge);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "schema", void 0);

    _this.schema = schema;
    window.schema = schema;
    _this.paths = normalizePaths(_this.schema.tree);
    window.paths = _this.paths;
    _this.__fields = {}; // fields name cache so traversing is minimized

    return _this;
  }

  _createClass(MongooseBridge, [{
    key: "getSubfields",
    value: function getSubfields(name) {
      if (!name) {
        return Object.keys(this.paths);
      }

      var field = this.getField(name);
      return field.subfields ? Object.keys(field.subfields) : [];
    }
  }, {
    key: "getField",
    value: function getField(name) {
      name = name.replace(/\.\d+/g, ".$");

      if (!this.__fields[name]) {
        this.__fields[name] = traverseSubfields(this.paths, name);
      }

      return this.__fields[name];
    }
  }, {
    key: "getType",
    value: function getType(name) {
      return this.getField(name).type;
    }
  }, {
    key: "getProps",
    value: function getProps(name) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // Type should be omitted.
      var _this$getField = this.getField(name),
          optional = _this$getField.optional,
          type = _this$getField.type,
          uniforms = _this$getField.uniforms,
          field = _objectWithoutProperties(_this$getField, ["optional", "type", "uniforms"]);

      field = _objectSpread(_objectSpread({}, field), {}, {
        required: !optional
      });

      if (uniforms) {
        if (typeof uniforms === "string" || typeof uniforms === "function") {
          field = _objectSpread(_objectSpread({}, field), {}, {
            component: uniforms
          });
        } else {
          field = _objectSpread(_objectSpread({}, field), uniforms);
        }
      }

      if (type === Array) {
        try {
          var itemProps = this.getProps("".concat(name, ".$"), props);

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
        field = _objectSpread(_objectSpread({}, field), {}, {
          decimal: true
        });
      }

      var options = props.options || field.options;

      if (options) {
        if (typeof options === "function") {
          options = options();
        }

        if (!Array.isArray(options)) {
          field = _objectSpread(_objectSpread({}, field), {}, {
            transform: function transform(value) {
              return options[value];
            },
            allowedValues: Object.keys(options)
          });
        } else {
          field = _objectSpread(_objectSpread({}, field), {}, {
            transform: function transform(value) {
              return options.find(function (option) {
                return option.value === value;
              }).label;
            },
            allowedValues: options.map(function (option) {
              return option.value;
            })
          });
        }
      }

      field.label = field.label || name.replace(/\.\d+/g, ".$");
      field.fieldType = typeof type === "function" ? type : type.constructor;
      return field;
    }
  }, {
    key: "getInitialValue",
    value: function getInitialValue(name) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var field = this.getProps(name);

      if (field.fieldType === Array) {
        var item = this.getInitialValue((0,uniforms__WEBPACK_IMPORTED_MODULE_1__.joinName)(name, "0"));
        var items = Math.max(props.initialCount || 0, field.minCount || 0);
        return Array.from({
          length: items
        }, function () {
          return item;
        });
      }

      if (field.fieldType === Object || MongooseBridge.check(field.fieldType)) {
        return {};
      }

      return typeof field.default === "function" ? field.default() : field.default;
    }
  }, {
    key: "getValidator",
    value: function getValidator() {
      var _this2 = this;

      return function (data) {
        var err = new (mongoose_browser__WEBPACK_IMPORTED_MODULE_0___default().Document)(data, _this2.schema).validateSync();

        if (err) {
          console.log(err);
          throw err;
        }
      };
    }
  }, {
    key: "getError",
    value: function getError(name, error) {
      var err = error && error.errors && error.errors[name.replace(/\.\d+/g, ".$")];
      return err && err.properties || err;
    }
  }, {
    key: "getErrorMessage",
    value: function getErrorMessage(name, error) {
      var err = this.getError(name, error);
      return err && err.message || "";
      var scopedError = this.getError(name, error);
      return !scopedError ? "" : this.schema.messageForError(scopedError);
    }
  }, {
    key: "getErrorMessages",
    value: function getErrorMessages(error) {
      if (error) {
        return Object.values(error.errors).map(function (e) {
          return e.properties.message;
        });
      }

      if (error !== undefined) {
        return [error];
      }

      return [];
    }
  }], [{
    key: "check",
    value: function check(schema) {
      return schema && schema instanceof (mongoose_browser__WEBPACK_IMPORTED_MODULE_0___default().Schema);
    }
  }]);

  return MongooseBridge;
}(uniforms__WEBPACK_IMPORTED_MODULE_1__.Bridge);



/***/ }),

/***/ "./uniforms-bridge-mongoose/register.js":
/*!**********************************************!*\
  !*** ./uniforms-bridge-mongoose/register.js ***!
  \**********************************************/
/*! namespace exports */
/*! exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var uniforms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniforms */ "?b635");
/* harmony import */ var uniforms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniforms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MongooseBridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MongooseBridge */ "./uniforms-bridge-mongoose/MongooseBridge.js");

 // Register bridge.

uniforms__WEBPACK_IMPORTED_MODULE_0__.createSchemaBridge.register(_MongooseBridge__WEBPACK_IMPORTED_MODULE_1__.default); // filterDOMProps.register("auto");

/***/ }),

/***/ "?4f26":
/*!**********************************!*\
  !*** mongoose/browser (ignored) ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements:  */
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b635":
/*!**************************!*\
  !*** uniforms (ignored) ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! export Bridge [maybe provided (runtime-defined)] [used] [provision prevents renaming] */
/*! export createSchemaBridge [maybe provided (runtime-defined)] [used] [provision prevents renaming] */
/*! export joinName [maybe provided (runtime-defined)] [used] [provision prevents renaming] */
/*! other exports [maybe provided (runtime-defined)] [unused] */
/*! runtime requirements:  */
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./uniforms-bridge-mongoose/index.js ***!
  \*******************************************/
/*! namespace exports */
/*! export MongooseBridge [provided] [unused] [could be renamed] */
/*! export default [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__ */
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register */ "./uniforms-bridge-mongoose/register.js");
/* harmony import */ var _MongooseBridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MongooseBridge */ "./uniforms-bridge-mongoose/MongooseBridge.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW5ueS8uL3VuaWZvcm1zLWJyaWRnZS1tb25nb29zZS9Nb25nb29zZUJyaWRnZS5qcyIsIndlYnBhY2s6Ly9jYW5ueS8uL3VuaWZvcm1zLWJyaWRnZS1tb25nb29zZS9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly9jYW5ueS9pZ25vcmVkfG1vbmdvb3NlL2Jyb3dzZXIiLCJ3ZWJwYWNrOi8vY2FubnkvaWdub3JlZHx1bmlmb3JtcyIsIndlYnBhY2s6Ly9jYW5ueS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYW5ueS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jYW5ueS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2Fubnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYW5ueS8uL3VuaWZvcm1zLWJyaWRnZS1tb25nb29zZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJmaW5kVHlwZSIsInByb3BzIiwidHlwZSIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsIm1vbmdvb3NlIiwiU3RyaW5nIiwibm9ybWFsaXplUHJvcHMiLCJpdGVtIiwic3ViZmllbGRzIiwibm9ybWFsaXplUGF0aHMiLCJkZWZhdWx0IiwicGF0aHMiLCJrZXlzIiwicmVkdWNlIiwibm9ybWFsaXplZFBhdGhzIiwicGF0aCIsInRyYXZlcnNlU3ViZmllbGRzIiwidHJlZSIsIm5hbWUiLCJzcGxpdCIsIm1hdGNoIiwibm9kZSIsIk1vbmdvb3NlQnJpZGdlIiwic2NoZW1hIiwid2luZG93IiwiX19maWVsZHMiLCJmaWVsZCIsImdldEZpZWxkIiwicmVwbGFjZSIsIm9wdGlvbmFsIiwidW5pZm9ybXMiLCJyZXF1aXJlZCIsImNvbXBvbmVudCIsIml0ZW1Qcm9wcyIsImdldFByb3BzIiwiYWxsb3dlZFZhbHVlcyIsInRyYW5zZm9ybSIsIl8iLCJOdW1iZXIiLCJkZWNpbWFsIiwib3B0aW9ucyIsInZhbHVlIiwiZmluZCIsIm9wdGlvbiIsImxhYmVsIiwibWFwIiwiZmllbGRUeXBlIiwiY29uc3RydWN0b3IiLCJnZXRJbml0aWFsVmFsdWUiLCJqb2luTmFtZSIsIml0ZW1zIiwiTWF0aCIsIm1heCIsImluaXRpYWxDb3VudCIsIm1pbkNvdW50IiwiZnJvbSIsImxlbmd0aCIsImNoZWNrIiwiZGF0YSIsImVyciIsInZhbGlkYXRlU3luYyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImVycm9ycyIsInByb3BlcnRpZXMiLCJnZXRFcnJvciIsIm1lc3NhZ2UiLCJzY29wZWRFcnJvciIsIm1lc3NhZ2VGb3JFcnJvciIsInZhbHVlcyIsImUiLCJ1bmRlZmluZWQiLCJCcmlkZ2UiLCJjcmVhdGVTY2hlbWFCcmlkZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxLQUFLLEVBQUk7QUFDbEIsTUFBSUEsS0FBSyxDQUFDQyxJQUFWLEVBQWdCO0FBQ1IsV0FBT0QsS0FBSyxDQUFDQyxJQUFiO0FBQ1A7O0FBQ0QsTUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNILEtBQWQsQ0FBSixFQUEwQjtBQUNsQixXQUFPRSxLQUFQO0FBQ1A7O0FBQ0QsTUFBSSxRQUFPRixLQUFQLE1BQWlCLFFBQXJCLEVBQStCO0FBQ3ZCLFdBQU9JLE1BQVA7QUFDUDs7QUFDRCxNQUFJSixLQUFLLENBQUNDLElBQU4sS0FBZUkseUVBQW5CLEVBQTZDO0FBQ3JDLFdBQU9DLE1BQVA7QUFDUDs7QUFDRCxTQUFPTixLQUFQO0FBQ1AsQ0FkRDs7QUFnQkEsSUFBTU8sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBUCxLQUFLLEVBQUk7QUFDeEIsTUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNDLEtBQUQsQ0FBckI7QUFDQSxNQUFNUSxJQUFJLEdBQUdQLElBQUksS0FBS0MsS0FBVCxJQUFrQkssY0FBYyxDQUFDUCxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQTdDO0FBQ0EsTUFBTVMsU0FBUyxHQUFHUixJQUFJLEtBQUtHLE1BQVQsSUFBbUJNLGNBQWMsQ0FBQ1YsS0FBRCxDQUFuRDtBQUNBO0FBQ1FDLFFBQUksRUFBSkE7QUFEUixLQUVZRCxLQUFLLENBQUNXLE9BQU4sdUJBQW1CLFNBQW5CLEVBQStCWCxLQUFLLENBQUNXLE9BQXJDLElBQWlELEVBRjdELEdBR1lGLFNBQVMsR0FBRztBQUFFQSxhQUFTLEVBQVRBO0FBQUYsR0FBSCxHQUFtQixFQUh4QyxHQUlZRCxJQUFJLEdBQUc7QUFBRUEsUUFBSSxFQUFKQTtBQUFGLEdBQUgsR0FBYyxFQUo5QjtBQU1QLENBVkQ7O0FBWUEsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBRSxLQUFLLEVBQUk7QUFDeEIsTUFBSSxRQUFPQSxLQUFQLE1BQWlCLFFBQXJCLEVBQStCO0FBQ3ZCLFdBQU9SLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZRCxLQUFaLEVBQW1CRSxNQUFuQixDQUNDLFVBQUNDLGVBQUQsRUFBa0JDLElBQWxCO0FBQUEsNkNBQ1dELGVBRFgsMkJBRVNDLElBRlQsRUFFZ0JULGNBQWMsQ0FBQ0ssS0FBSyxDQUFDSSxJQUFELENBQU4sQ0FGOUI7QUFBQSxLQURELEVBS0MsRUFMRCxDQUFQO0FBT1A7O0FBQ0QsU0FBT1QsY0FBYyxDQUFDSyxLQUFELENBQXJCO0FBQ1AsQ0FYRDs7QUFhQSxJQUFNSyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUNsQyxNQUFNQyxLQUFLLEdBQUdELElBQUksQ0FBQ0UsS0FBTCxDQUFXLGlCQUFYLENBQWQ7QUFDQSxNQUFNQyxJQUFJLEdBQUdGLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYSxHQUFiLEdBQW1CRixJQUFJLENBQUNWLElBQXhCLEdBQStCVSxJQUFJLENBQUNFLEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBaEQ7O0FBQ0EsTUFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBVCxFQUFjO0FBQ04sUUFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTLENBQVQsQ0FBSixFQUFpQjtBQUNULGFBQU9ILGlCQUFpQixDQUFDSyxJQUFJLENBQUNiLFNBQUwsSUFBa0JhLElBQW5CLEVBQXlCRixLQUFLLENBQUMsQ0FBRCxDQUE5QixDQUF4QjtBQUNQOztBQUNELFdBQU9FLElBQUksQ0FBQ2QsSUFBWjtBQUNQOztBQUNELFNBQU9jLElBQVA7QUFDUCxDQVZEOztJQVlxQkMsYzs7Ozs7QUFHYiwwQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUFBOztBQUNaOztBQURZOztBQUdaLFVBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBQyxVQUFNLENBQUNELE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0EsVUFBS1osS0FBTCxHQUFhRixjQUFjLENBQUMsTUFBS2MsTUFBTCxDQUFZTixJQUFiLENBQTNCO0FBQ0FPLFVBQU0sQ0FBQ2IsS0FBUCxHQUFlLE1BQUtBLEtBQXBCO0FBQ0EsVUFBS2MsUUFBTCxHQUFnQixFQUFoQixDQVBZLENBT1E7O0FBUFI7QUFRbkI7Ozs7aUNBTVlQLEksRUFBTTtBQUNYLFVBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ0gsZUFBT2YsTUFBTSxDQUFDUyxJQUFQLENBQVksS0FBS0QsS0FBakIsQ0FBUDtBQUNQOztBQUNELFVBQU1lLEtBQUssR0FBRyxLQUFLQyxRQUFMLENBQWNULElBQWQsQ0FBZDtBQUNBLGFBQU9RLEtBQUssQ0FBQ2xCLFNBQU4sR0FBa0JMLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZYyxLQUFLLENBQUNsQixTQUFsQixDQUFsQixHQUFpRCxFQUF4RDtBQUNQOzs7NkJBRVFVLEksRUFBTTtBQUNQQSxVQUFJLEdBQUdBLElBQUksQ0FBQ1UsT0FBTCxDQUFhLFFBQWIsRUFBdUIsSUFBdkIsQ0FBUDs7QUFDQSxVQUFJLENBQUMsS0FBS0gsUUFBTCxDQUFjUCxJQUFkLENBQUwsRUFBMEI7QUFDbEIsYUFBS08sUUFBTCxDQUFjUCxJQUFkLElBQXNCRixpQkFBaUIsQ0FBQyxLQUFLTCxLQUFOLEVBQWFPLElBQWIsQ0FBdkM7QUFDUDs7QUFDRCxhQUFPLEtBQUtPLFFBQUwsQ0FBY1AsSUFBZCxDQUFQO0FBQ1A7Ozs0QkFFT0EsSSxFQUFNO0FBQ04sYUFBTyxLQUFLUyxRQUFMLENBQWNULElBQWQsRUFBb0JsQixJQUEzQjtBQUNQOzs7NkJBRVFrQixJLEVBQWtCO0FBQUEsVUFBWm5CLEtBQVksdUVBQUosRUFBSTs7QUFDbkI7QUFEbUIsMkJBRTBCLEtBQUs0QixRQUFMLENBQWNULElBQWQsQ0FGMUI7QUFBQSxVQUViVyxRQUZhLGtCQUViQSxRQUZhO0FBQUEsVUFFSDdCLElBRkcsa0JBRUhBLElBRkc7QUFBQSxVQUVHOEIsUUFGSCxrQkFFR0EsUUFGSDtBQUFBLFVBRWdCSixLQUZoQjs7QUFJbkJBLFdBQUssbUNBQVFBLEtBQVI7QUFBZUssZ0JBQVEsRUFBRSxDQUFDRjtBQUExQixRQUFMOztBQUVBLFVBQUlDLFFBQUosRUFBYztBQUNOLFlBQUksT0FBT0EsUUFBUCxLQUFvQixRQUFwQixJQUFnQyxPQUFPQSxRQUFQLEtBQW9CLFVBQXhELEVBQW9FO0FBQzVESixlQUFLLG1DQUFRQSxLQUFSO0FBQWVNLHFCQUFTLEVBQUVGO0FBQTFCLFlBQUw7QUFDUCxTQUZELE1BRU87QUFDQ0osZUFBSyxtQ0FBUUEsS0FBUixHQUFrQkksUUFBbEIsQ0FBTDtBQUNQO0FBQ1I7O0FBRUQsVUFBSTlCLElBQUksS0FBS0MsS0FBYixFQUFvQjtBQUNaLFlBQUk7QUFDSSxjQUFNZ0MsU0FBUyxHQUFHLEtBQUtDLFFBQUwsV0FBaUJoQixJQUFqQixTQUEyQm5CLEtBQTNCLENBQWxCOztBQUNBLGNBQUlrQyxTQUFTLENBQUNFLGFBQVYsSUFBMkIsQ0FBQ3BDLEtBQUssQ0FBQ29DLGFBQXRDLEVBQXFEO0FBQzdDVCxpQkFBSyxDQUFDUyxhQUFOLEdBQXNCRixTQUFTLENBQUNFLGFBQWhDO0FBQ1A7O0FBRUQsY0FBSUYsU0FBUyxDQUFDRyxTQUFWLElBQXVCLENBQUNyQyxLQUFLLENBQUNxQyxTQUFsQyxFQUE2QztBQUNyQ1YsaUJBQUssQ0FBQ1UsU0FBTixHQUFrQkgsU0FBUyxDQUFDRyxTQUE1QjtBQUNQO0FBQ1IsU0FURCxDQVNFLE9BQU9DLENBQVAsRUFBVTtBQUNKO0FBQ1A7QUFDUixPQWJELE1BYU8sSUFBSXJDLElBQUksS0FBS3NDLE1BQWIsRUFBcUI7QUFDcEJaLGFBQUssbUNBQVFBLEtBQVI7QUFBZWEsaUJBQU8sRUFBRTtBQUF4QixVQUFMO0FBQ1A7O0FBRUQsVUFBSUMsT0FBTyxHQUFHekMsS0FBSyxDQUFDeUMsT0FBTixJQUFpQmQsS0FBSyxDQUFDYyxPQUFyQzs7QUFDQSxVQUFJQSxPQUFKLEVBQWE7QUFDTCxZQUFJLE9BQU9BLE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7QUFDM0JBLGlCQUFPLEdBQUdBLE9BQU8sRUFBakI7QUFDUDs7QUFFRCxZQUFJLENBQUN2QyxLQUFLLENBQUNDLE9BQU4sQ0FBY3NDLE9BQWQsQ0FBTCxFQUE2QjtBQUNyQmQsZUFBSyxtQ0FDTUEsS0FETjtBQUVHVSxxQkFBUyxFQUFFLG1CQUFBSyxLQUFLO0FBQUEscUJBQUlELE9BQU8sQ0FBQ0MsS0FBRCxDQUFYO0FBQUEsYUFGbkI7QUFHR04seUJBQWEsRUFBRWhDLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZNEIsT0FBWjtBQUhsQixZQUFMO0FBS1AsU0FORCxNQU1PO0FBQ0NkLGVBQUssbUNBQ01BLEtBRE47QUFFR1UscUJBQVMsRUFBRSxtQkFBQUssS0FBSztBQUFBLHFCQUFJRCxPQUFPLENBQUNFLElBQVIsQ0FBYSxVQUFBQyxNQUFNO0FBQUEsdUJBQUlBLE1BQU0sQ0FBQ0YsS0FBUCxLQUFpQkEsS0FBckI7QUFBQSxlQUFuQixFQUErQ0csS0FBbkQ7QUFBQSxhQUZuQjtBQUdHVCx5QkFBYSxFQUFFSyxPQUFPLENBQUNLLEdBQVIsQ0FBWSxVQUFBRixNQUFNO0FBQUEscUJBQUlBLE1BQU0sQ0FBQ0YsS0FBWDtBQUFBLGFBQWxCO0FBSGxCLFlBQUw7QUFLUDtBQUNSOztBQUVEZixXQUFLLENBQUNrQixLQUFOLEdBQWNsQixLQUFLLENBQUNrQixLQUFOLElBQWUxQixJQUFJLENBQUNVLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLElBQXZCLENBQTdCO0FBQ0FGLFdBQUssQ0FBQ29CLFNBQU4sR0FBa0IsT0FBTzlDLElBQVAsS0FBZ0IsVUFBaEIsR0FBNkJBLElBQTdCLEdBQW9DQSxJQUFJLENBQUMrQyxXQUEzRDtBQUVBLGFBQU9yQixLQUFQO0FBQ1A7OztvQ0FFZVIsSSxFQUFrQjtBQUFBLFVBQVpuQixLQUFZLHVFQUFKLEVBQUk7QUFDMUIsVUFBTTJCLEtBQUssR0FBRyxLQUFLUSxRQUFMLENBQWNoQixJQUFkLENBQWQ7O0FBRUEsVUFBSVEsS0FBSyxDQUFDb0IsU0FBTixLQUFvQjdDLEtBQXhCLEVBQStCO0FBQ3ZCLFlBQU1NLElBQUksR0FBRyxLQUFLeUMsZUFBTCxDQUFxQkMsa0RBQVEsQ0FBQy9CLElBQUQsRUFBTyxHQUFQLENBQTdCLENBQWI7QUFDQSxZQUFNZ0MsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU3JELEtBQUssQ0FBQ3NELFlBQU4sSUFBc0IsQ0FBL0IsRUFBa0MzQixLQUFLLENBQUM0QixRQUFOLElBQWtCLENBQXBELENBQWQ7QUFDQSxlQUFPckQsS0FBSyxDQUFDc0QsSUFBTixDQUFXO0FBQUVDLGdCQUFNLEVBQUVOO0FBQVYsU0FBWCxFQUE4QjtBQUFBLGlCQUFNM0MsSUFBTjtBQUFBLFNBQTlCLENBQVA7QUFDUDs7QUFFRCxVQUFJbUIsS0FBSyxDQUFDb0IsU0FBTixLQUFvQjNDLE1BQXBCLElBQThCbUIsY0FBYyxDQUFDbUMsS0FBZixDQUFxQi9CLEtBQUssQ0FBQ29CLFNBQTNCLENBQWxDLEVBQXlFO0FBQ2pFLGVBQU8sRUFBUDtBQUNQOztBQUVELGFBQU8sT0FBT3BCLEtBQUssQ0FBQ2hCLE9BQWIsS0FBeUIsVUFBekIsR0FBc0NnQixLQUFLLENBQUNoQixPQUFOLEVBQXRDLEdBQXdEZ0IsS0FBSyxDQUFDaEIsT0FBckU7QUFDUDs7O21DQUVjO0FBQUE7O0FBQ1AsYUFBTyxVQUFBZ0QsSUFBSSxFQUFJO0FBQ1AsWUFBTUMsR0FBRyxHQUFHLElBQUl2RCxrRUFBSixDQUFzQnNELElBQXRCLEVBQTRCLE1BQUksQ0FBQ25DLE1BQWpDLEVBQXlDcUMsWUFBekMsRUFBWjs7QUFDQSxZQUFJRCxHQUFKLEVBQVM7QUFDREUsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0EsZ0JBQU1BLEdBQU47QUFDUDtBQUNSLE9BTkQ7QUFPUDs7OzZCQUVRekMsSSxFQUFNNkMsSyxFQUFPO0FBQ2QsVUFBTUosR0FBRyxHQUFHSSxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsTUFBZixJQUF5QkQsS0FBSyxDQUFDQyxNQUFOLENBQWE5QyxJQUFJLENBQUNVLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLElBQXZCLENBQWIsQ0FBckM7QUFDQSxhQUFRK0IsR0FBRyxJQUFJQSxHQUFHLENBQUNNLFVBQVosSUFBMkJOLEdBQWxDO0FBQ1A7OztvQ0FFZXpDLEksRUFBTTZDLEssRUFBTztBQUNyQixVQUFNSixHQUFHLEdBQUcsS0FBS08sUUFBTCxDQUFjaEQsSUFBZCxFQUFvQjZDLEtBQXBCLENBQVo7QUFDQSxhQUFRSixHQUFHLElBQUlBLEdBQUcsQ0FBQ1EsT0FBWixJQUF3QixFQUEvQjtBQUNBLFVBQU1DLFdBQVcsR0FBRyxLQUFLRixRQUFMLENBQWNoRCxJQUFkLEVBQW9CNkMsS0FBcEIsQ0FBcEI7QUFDQSxhQUFPLENBQUNLLFdBQUQsR0FBZSxFQUFmLEdBQW9CLEtBQUs3QyxNQUFMLENBQVk4QyxlQUFaLENBQTRCRCxXQUE1QixDQUEzQjtBQUNQOzs7cUNBRWdCTCxLLEVBQU87QUFDaEIsVUFBSUEsS0FBSixFQUFXO0FBQ0gsZUFBTzVELE1BQU0sQ0FBQ21FLE1BQVAsQ0FBY1AsS0FBSyxDQUFDQyxNQUFwQixFQUE0Qm5CLEdBQTVCLENBQWdDLFVBQUEwQixDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ04sVUFBRixDQUFhRSxPQUFqQjtBQUFBLFNBQWpDLENBQVA7QUFDUDs7QUFFRCxVQUFJSixLQUFLLEtBQUtTLFNBQWQsRUFBeUI7QUFDakIsZUFBTyxDQUFDVCxLQUFELENBQVA7QUFDUDs7QUFFRCxhQUFPLEVBQVA7QUFDUDs7OzBCQWxJWXhDLE0sRUFBUTtBQUNiLGFBQU9BLE1BQU0sSUFBSUEsTUFBTSxZQUFZbkIsZ0VBQW5DO0FBQ1A7Ozs7RUFmbUNxRSw0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hENUM7Q0FJQTs7QUFDQUMsaUVBQUEsQ0FBNEJwRCxvREFBNUIsRSxDQUVBLG1DOzs7Ozs7Ozs7Ozs7O0FDUEEsZTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGU7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2UvYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBCcmlkZ2UsIGpvaW5OYW1lIH0gZnJvbSBcInVuaWZvcm1zXCI7XHJcblxyXG5jb25zdCBmaW5kVHlwZSA9IHByb3BzID0+IHtcclxuICAgICAgICBpZiAocHJvcHMudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLnR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHByb3BzID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcHMudHlwZSA9PT0gbW9uZ29vc2UuU2NoZW1hLk9iamVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvcHM7XHJcbn07XHJcblxyXG5jb25zdCBub3JtYWxpemVQcm9wcyA9IHByb3BzID0+IHtcclxuICAgICAgICBjb25zdCB0eXBlID0gZmluZFR5cGUocHJvcHMpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0eXBlID09PSBBcnJheSAmJiBub3JtYWxpemVQcm9wcyhwcm9wc1swXSk7XHJcbiAgICAgICAgY29uc3Qgc3ViZmllbGRzID0gdHlwZSA9PT0gT2JqZWN0ICYmIG5vcm1hbGl6ZVBhdGhzKHByb3BzKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgIC4uLihwcm9wcy5kZWZhdWx0ID8geyBbXCJkZWZhdWx0XCJdOiBwcm9wcy5kZWZhdWx0IH0gOiB7fSksXHJcbiAgICAgICAgICAgICAgICAuLi4oc3ViZmllbGRzID8geyBzdWJmaWVsZHMgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIC4uLihpdGVtID8geyBpdGVtIH0gOiB7fSksXHJcbiAgICAgICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZVBhdGhzID0gcGF0aHMgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcGF0aHMgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhwYXRocykucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAobm9ybWFsaXplZFBhdGhzLCBwYXRoKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5vcm1hbGl6ZWRQYXRocyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGF0aF06IG5vcm1hbGl6ZVByb3BzKHBhdGhzW3BhdGhdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9ybWFsaXplUHJvcHMocGF0aHMpO1xyXG59O1xyXG5cclxuY29uc3QgdHJhdmVyc2VTdWJmaWVsZHMgPSAodHJlZSwgbmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNwbGl0ID0gbmFtZS5tYXRjaCgvKFteXFwuXSspXFwuPyguKikvKTtcclxuICAgICAgICBjb25zdCBub2RlID0gc3BsaXRbMV0gPT09IFwiJFwiID8gdHJlZS5pdGVtIDogdHJlZVtzcGxpdFsxXV07XHJcbiAgICAgICAgaWYgKHNwbGl0WzJdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRbMl1bMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYXZlcnNlU3ViZmllbGRzKG5vZGUuc3ViZmllbGRzIHx8IG5vZGUsIHNwbGl0WzJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLml0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uZ29vc2VCcmlkZ2UgZXh0ZW5kcyBCcmlkZ2Uge1xyXG4gICAgICAgIHNjaGVtYTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Ioc2NoZW1hKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNjaGVtYSA9IHNjaGVtYTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF0aHMgPSBub3JtYWxpemVQYXRocyh0aGlzLnNjaGVtYS50cmVlKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5wYXRocyA9IHRoaXMucGF0aHM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fZmllbGRzID0ge307IC8vIGZpZWxkcyBuYW1lIGNhY2hlIHNvIHRyYXZlcnNpbmcgaXMgbWluaW1pemVkXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgY2hlY2soc2NoZW1hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NoZW1hICYmIHNjaGVtYSBpbnN0YW5jZW9mIG1vbmdvb3NlLlNjaGVtYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFN1YmZpZWxkcyhuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMucGF0aHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmdldEZpZWxkKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkLnN1YmZpZWxkcyA/IE9iamVjdC5rZXlzKGZpZWxkLnN1YmZpZWxkcykgOiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldEZpZWxkKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1xcLlxcZCsvZywgXCIuJFwiKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fX2ZpZWxkc1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fZmllbGRzW25hbWVdID0gdHJhdmVyc2VTdWJmaWVsZHModGhpcy5wYXRocywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fX2ZpZWxkc1tuYW1lXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFR5cGUobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmllbGQobmFtZSkudHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFByb3BzKG5hbWUsIHByb3BzID0ge30pIHtcclxuICAgICAgICAgICAgICAgIC8vIFR5cGUgc2hvdWxkIGJlIG9taXR0ZWQuXHJcbiAgICAgICAgICAgICAgICBsZXQgeyBvcHRpb25hbCwgdHlwZSwgdW5pZm9ybXMsIC4uLmZpZWxkIH0gPSB0aGlzLmdldEZpZWxkKG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZpZWxkID0geyAuLi5maWVsZCwgcmVxdWlyZWQ6ICFvcHRpb25hbCB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh1bmlmb3Jtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVuaWZvcm1zID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB1bmlmb3JtcyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgPSB7IC4uLmZpZWxkLCBjb21wb25lbnQ6IHVuaWZvcm1zIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgPSB7IC4uLmZpZWxkLCAuLi51bmlmb3JtcyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVByb3BzID0gdGhpcy5nZXRQcm9wcyhgJHtuYW1lfS4kYCwgcHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUHJvcHMuYWxsb3dlZFZhbHVlcyAmJiAhcHJvcHMuYWxsb3dlZFZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuYWxsb3dlZFZhbHVlcyA9IGl0ZW1Qcm9wcy5hbGxvd2VkVmFsdWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Qcm9wcy50cmFuc2Zvcm0gJiYgIXByb3BzLnRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudHJhbnNmb3JtID0gaXRlbVByb3BzLnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBpZ25vcmUgaXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBOdW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgPSB7IC4uLmZpZWxkLCBkZWNpbWFsOiB0cnVlIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zIHx8IGZpZWxkLm9wdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHZhbHVlID0+IG9wdGlvbnNbdmFsdWVdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFZhbHVlczogT2JqZWN0LmtleXMob3B0aW9ucyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB2YWx1ZSA9PiBvcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdmFsdWUpLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFZhbHVlczogb3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZpZWxkLmxhYmVsID0gZmllbGQubGFiZWwgfHwgbmFtZS5yZXBsYWNlKC9cXC5cXGQrL2csIFwiLiRcIik7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5maWVsZFR5cGUgPSB0eXBlb2YgdHlwZSA9PT0gXCJmdW5jdGlvblwiID8gdHlwZSA6IHR5cGUuY29uc3RydWN0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0SW5pdGlhbFZhbHVlKG5hbWUsIHByb3BzID0ge30pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5nZXRQcm9wcyhuYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQuZmllbGRUeXBlID09PSBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRJbml0aWFsVmFsdWUoam9pbk5hbWUobmFtZSwgXCIwXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBNYXRoLm1heChwcm9wcy5pbml0aWFsQ291bnQgfHwgMCwgZmllbGQubWluQ291bnQgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBpdGVtcyB9LCAoKSA9PiBpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQuZmllbGRUeXBlID09PSBPYmplY3QgfHwgTW9uZ29vc2VCcmlkZ2UuY2hlY2soZmllbGQuZmllbGRUeXBlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBmaWVsZC5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgPyBmaWVsZC5kZWZhdWx0KCkgOiBmaWVsZC5kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VmFsaWRhdG9yKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgbW9uZ29vc2UuRG9jdW1lbnQoZGF0YSwgdGhpcy5zY2hlbWEpLnZhbGlkYXRlU3luYygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRFcnJvcihuYW1lLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gZXJyb3IgJiYgZXJyb3IuZXJyb3JzICYmIGVycm9yLmVycm9yc1tuYW1lLnJlcGxhY2UoL1xcLlxcZCsvZywgXCIuJFwiKV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGVyciAmJiBlcnIucHJvcGVydGllcykgfHwgZXJyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0RXJyb3JNZXNzYWdlKG5hbWUsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSB0aGlzLmdldEVycm9yKG5hbWUsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoZXJyICYmIGVyci5tZXNzYWdlKSB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcGVkRXJyb3IgPSB0aGlzLmdldEVycm9yKG5hbWUsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhc2NvcGVkRXJyb3IgPyBcIlwiIDogdGhpcy5zY2hlbWEubWVzc2FnZUZvckVycm9yKHNjb3BlZEVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldEVycm9yTWVzc2FnZXMoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhlcnJvci5lcnJvcnMpLm1hcChlID0+IGUucHJvcGVydGllcy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2Vycm9yXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNjaGVtYUJyaWRnZSwgZmlsdGVyRE9NUHJvcHMgfSBmcm9tIFwidW5pZm9ybXNcIjtcclxuXHJcbmltcG9ydCBNb25nb29zZUJyaWRnZSBmcm9tIFwiLi9Nb25nb29zZUJyaWRnZVwiO1xyXG5cclxuLy8gUmVnaXN0ZXIgYnJpZGdlLlxyXG5jcmVhdGVTY2hlbWFCcmlkZ2UucmVnaXN0ZXIoTW9uZ29vc2VCcmlkZ2UpO1xyXG5cclxuLy8gZmlsdGVyRE9NUHJvcHMucmVnaXN0ZXIoXCJhdXRvXCIpO1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsImltcG9ydCBcIi4vcmVnaXN0ZXJcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCwgZGVmYXVsdCBhcyBNb25nb29zZUJyaWRnZSB9IGZyb20gXCIuL01vbmdvb3NlQnJpZGdlXCI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
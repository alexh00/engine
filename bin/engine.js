var engine =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Engine.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./src/Engine.ts":
/*!***********************!*\
  !*** ./src/Engine.ts ***!
  \***********************/
/*! exports provided: Engine, Loader, Screen, ScreenManager, Settings, version, Timeout, UpdateList, Sequence, EventQueue, UpdateLoop, Easing, Interpolation, Tween, TweenManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return Engine; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Loader */ "./src/core/Loader.ts");
/* harmony import */ var _core_ScreenManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/ScreenManager */ "./src/core/ScreenManager.ts");
/* harmony import */ var _core_Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Settings */ "./src/core/Settings.ts");
/* harmony import */ var _core_version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/version */ "./src/core/version.ts");
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tween */ "./src/tween/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core */ "./src/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _core__WEBPACK_IMPORTED_MODULE_7__["Loader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return _core__WEBPACK_IMPORTED_MODULE_7__["Screen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenManager", function() { return _core__WEBPACK_IMPORTED_MODULE_7__["ScreenManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return _core__WEBPACK_IMPORTED_MODULE_7__["Settings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _core__WEBPACK_IMPORTED_MODULE_7__["version"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeout", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["Timeout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateList", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["UpdateList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sequence", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["Sequence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventQueue", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["EventQueue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateLoop", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["UpdateLoop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Easing", function() { return _tween__WEBPACK_IMPORTED_MODULE_5__["Easing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interpolation", function() { return _tween__WEBPACK_IMPORTED_MODULE_5__["Interpolation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tween", function() { return _tween__WEBPACK_IMPORTED_MODULE_5__["Tween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenManager", function() { return _tween__WEBPACK_IMPORTED_MODULE_5__["TweenManager"]; });








/// <reference path="typings/pixi.js.d.ts" />
var Engine = /** @class */ (function () {
    function Engine() {
        console.log('Engine version', _core_version__WEBPACK_IMPORTED_MODULE_4__["version"].code);
    }
    Engine.prototype.start = function () {
        //probably want to use the pixi loader for everything...
        //so create the app straight away
        this.app = this._createPixiApp();
        this.events = this._createEvents();
        //load the config
        this.settings = new _core_Settings__WEBPACK_IMPORTED_MODULE_3__["Settings"](this.app.loader, this.events);
        return this;
    };
    Engine.prototype.getResource = function (id) {
        return this.app.loader.resources[id].data;
    };
    //config has now loaded
    Engine.prototype.build = function () {
        //update the app with the loaded settings
        this.app.renderer.resize(this.settings.size.width, this.settings.size.height);
        //create the loader
        this.loader = new _core_Loader__WEBPACK_IMPORTED_MODULE_1__["Loader"](this.app.loader, this.events, this.settings);
        //create update loop
        this.updateLoop = this._createUpdateLoop();
        //create tween manager, add to update loop
        this.updateLoop.add(_tween__WEBPACK_IMPORTED_MODULE_5__["TweenManager"].instance);
        //create screen manager
        this.screenManager = this._createScreenManager();
        //create sound manager (rewrite it)
    };
    Engine.prototype._createUpdateLoop = function () {
        var updateLoop = new _utils__WEBPACK_IMPORTED_MODULE_6__["UpdateLoop"](this.events);
        updateLoop.start();
        return updateLoop;
    };
    Engine.prototype._createScreenManager = function () {
        var screenManager = new _core_ScreenManager__WEBPACK_IMPORTED_MODULE_2__["ScreenManager"](this.events, this.settings.size);
        this.app.stage.addChild(screenManager.root);
        this.updateLoop.add(screenManager);
        return screenManager;
    };
    Engine.prototype._createEvents = function () {
        var _this = this;
        var events = new _utils__WEBPACK_IMPORTED_MODULE_6__["EventQueue"]();
        events.on(_core_Settings__WEBPACK_IMPORTED_MODULE_3__["Settings"].CONFIG_LOADED, function () {
            //config is loaded - now build the engine
            _this.build();
            //load global assets
            _this.loader.loadGlobal();
        });
        events.on(_core_Loader__WEBPACK_IMPORTED_MODULE_1__["Loader"].GLOBAL_ASSETS_LOADED, function () {
            //now show first screen
            events.emit('app-ready');
        });
        return events;
    };
    Engine.prototype._createPixiApp = function () {
        var view = document.body.querySelector('canvas');
        return new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Application"]({
            height: 768, width: 1024,
            transparent: true,
            view: view,
            forceCanvas: false,
            antialias: true,
            resolution: 1
        });
    };
    return Engine;
}());






/***/ }),

/***/ "./src/core/Loader.ts":
/*!****************************!*\
  !*** ./src/core/Loader.ts ***!
  \****************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);

//asset loader
var Loader = /** @class */ (function () {
    function Loader(_loader, _events, _settings) {
        this._loader = _loader;
        this._events = _events;
        this._settings = _settings;
        this._setResourceTypes();
    }
    Loader.prototype._setResourceTypes = function () {
        //set it to use xhr for sounds
        pixi_js__WEBPACK_IMPORTED_MODULE_0__["LoaderResource"].setExtensionLoadType('ogg', pixi_js__WEBPACK_IMPORTED_MODULE_0__["LoaderResource"].LOAD_TYPE.XHR);
        pixi_js__WEBPACK_IMPORTED_MODULE_0__["LoaderResource"].setExtensionLoadType('m4a', pixi_js__WEBPACK_IMPORTED_MODULE_0__["LoaderResource"].LOAD_TYPE.XHR);
    };
    Loader.prototype.loadGlobal = function () {
        var _this = this;
        //load items from the global list
        this.loadAssets(this._settings.assets.global);
        this._loader.onComplete.once(function () {
            console.log('global assets loaded');
            _this._events.emit(Loader.GLOBAL_ASSETS_LOADED);
        });
    };
    Loader.prototype.loadAssets = function (assets, load) {
        var _this = this;
        if (load === void 0) { load = true; }
        //TODO - handle setting audio type here
        assets.forEach(function (asset) {
            _this._loader.add(asset.id, asset.src);
        });
        if (load) {
            this._loader.load();
        }
    };
    Loader.prototype.loadScreen = function (screenId) {
        //TODO
    };
    Loader.GLOBAL_ASSETS_LOADED = 'global-assets-loaded';
    return Loader;
}());



/***/ }),

/***/ "./src/core/Screen.ts":
/*!****************************!*\
  !*** ./src/core/Screen.ts ***!
  \****************************/
/*! exports provided: Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_Timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Timeout */ "./src/utils/Timeout.ts");
/* harmony import */ var _utils_UpdateList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/UpdateList */ "./src/utils/UpdateList.ts");



var Screen = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Screen, _super);
    function Screen(config) {
        var _this = _super.call(this) || this;
        Object.assign(_this, config);
        _this.updateList = new _utils_UpdateList__WEBPACK_IMPORTED_MODULE_2__["UpdateList"]();
        _this.timeout = _this.updateList.add(new _utils_Timeout__WEBPACK_IMPORTED_MODULE_1__["Timeout"]());
        return _this;
    }
    Screen.prototype.update = function (delta) {
        this.updateList.update(delta);
    };
    Screen.prototype.dispose = function () {
        this.updateList.removeAll();
        if (this.parent) {
            this.parent.removeChild(this);
            this.destroy();
        }
    };
    return Screen;
}(PIXI.Container));



/***/ }),

/***/ "./src/core/ScreenManager.ts":
/*!***********************************!*\
  !*** ./src/core/ScreenManager.ts ***!
  \***********************************/
/*! exports provided: ScreenManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenManager", function() { return ScreenManager; });
var ScreenManager = /** @class */ (function () {
    function ScreenManager(_events, _size) {
        var _this = this;
        this._events = _events;
        this._size = _size;
        this.showScreen = function (ScreenType) {
            _this.disposeScreen();
            _this.currentScreen = _this._createScreen(ScreenType);
        };
        this.root = new PIXI.Container();
        this.root.position.set(this._size.width / 2, this._size.height / 2);
        //TODO - make this work via queued events actually
        this._events.on('screen', this.showScreen);
    }
    ScreenManager.prototype.update = function (delta) {
        if (this.currentScreen) {
            this.currentScreen.update(delta);
        }
    };
    ScreenManager.prototype._createScreen = function (ScreenType) {
        var screen = new ScreenType({
            screenWidth: this._size.width,
            screenHeight: this._size.height
        });
        this.root.addChild(screen);
        return screen;
    };
    ScreenManager.prototype.resize = function () {
        //TODO - keep root centered? Or maybe not needed...
    };
    ScreenManager.prototype.disposeScreen = function () {
        if (this.currentScreen) {
            this.currentScreen.dispose();
            this.currentScreen = null;
        }
    };
    return ScreenManager;
}());



/***/ }),

/***/ "./src/core/Settings.ts":
/*!******************************!*\
  !*** ./src/core/Settings.ts ***!
  \******************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
//interface for the config
var Settings = /** @class */ (function () {
    function Settings(_loader, _events) {
        var _this = this;
        this._loader = _loader;
        this._events = _events;
        this.configPath = 'json/config.json';
        this.size = { width: 1334, height: 750 };
        this._configLoaded = function () {
            var config = _this._loader.resources.config.data;
            Object.assign(_this, config);
            _this._events.emit(Settings.CONFIG_LOADED);
        };
        this.load();
    }
    Settings.prototype.load = function () {
        this._loader.add('config', this.configPath);
        this._loader.onComplete.once(this._configLoaded);
        this._loader.load();
        return this;
    };
    Settings.CONFIG_LOADED = 'config-loaded';
    return Settings;
}());



/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/*! exports provided: Loader, Screen, ScreenManager, Settings, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader */ "./src/core/Loader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _Loader__WEBPACK_IMPORTED_MODULE_0__["Loader"]; });

/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Screen */ "./src/core/Screen.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return _Screen__WEBPACK_IMPORTED_MODULE_1__["Screen"]; });

/* harmony import */ var _ScreenManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScreenManager */ "./src/core/ScreenManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenManager", function() { return _ScreenManager__WEBPACK_IMPORTED_MODULE_2__["ScreenManager"]; });

/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Settings */ "./src/core/Settings.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return _Settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./version */ "./src/core/version.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version__WEBPACK_IMPORTED_MODULE_4__["version"]; });








/***/ }),

/***/ "./src/core/version.ts":
/*!*****************************!*\
  !*** ./src/core/version.ts ***!
  \*****************************/
/*! exports provided: version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
var version = { code: '0.1.4' };



/***/ }),

/***/ "./src/tween/Easing.ts":
/*!*****************************!*\
  !*** ./src/tween/Easing.ts ***!
  \*****************************/
/*! exports provided: Easing, Interpolation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Easing", function() { return Easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interpolation", function() { return Interpolation; });
var Easing = {
    Linear: {
        None: function (k) {
            return k;
        },
    },
    Quadratic: {
        In: function (k) {
            return k * k;
        },
        Out: function (k) {
            return k * (2 - k);
        },
        InOut: function (k) {
            if ((k *= 2) < 1)
                return 0.5 * k * k;
            return -0.5 * (--k * (k - 2) - 1);
        },
    },
    Cubic: {
        In: function (k) {
            return k * k * k;
        },
        Out: function (k) {
            return --k * k * k + 1;
        },
        InOut: function (k) {
            if ((k *= 2) < 1)
                return 0.5 * k * k * k;
            return 0.5 * ((k -= 2) * k * k + 2);
        },
    },
    Quartic: {
        In: function (k) {
            return k * k * k * k;
        },
        Out: function (k) {
            return 1 - --k * k * k * k;
        },
        InOut: function (k) {
            if ((k *= 2) < 1)
                return 0.5 * k * k * k * k;
            return -0.5 * ((k -= 2) * k * k * k - 2);
        },
    },
    Quintic: {
        In: function (k) {
            return k * k * k * k * k;
        },
        Out: function (k) {
            return --k * k * k * k * k + 1;
        },
        InOut: function (k) {
            if ((k *= 2) < 1)
                return 0.5 * k * k * k * k * k;
            return 0.5 * ((k -= 2) * k * k * k * k + 2);
        },
    },
    Sinusoidal: {
        In: function (k) {
            return 1 - Math.cos((k * Math.PI) / 2);
        },
        Out: function (k) {
            return Math.sin((k * Math.PI) / 2);
        },
        InOut: function (k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        },
    },
    Exponential: {
        In: function (k) {
            return k === 0 ? 0 : Math.pow(1024, k - 1);
        },
        Out: function (k) {
            return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        },
        InOut: function (k) {
            if (k === 0)
                return 0;
            if (k === 1)
                return 1;
            if ((k *= 2) < 1)
                return 0.5 * Math.pow(1024, k - 1);
            return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
        },
    },
    Circular: {
        In: function (k) {
            return 1 - Math.sqrt(1 - k * k);
        },
        Out: function (k) {
            return Math.sqrt(1 - --k * k);
        },
        InOut: function (k) {
            if ((k *= 2) < 1)
                return -0.5 * (Math.sqrt(1 - k * k) - 1);
            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        },
    },
    Elastic: {
        In: function (k) {
            var s, a = 0.1, p = 0.4;
            if (k === 0)
                return 0;
            if (k === 1)
                return 1;
            if (!a || a < 1) {
                a = 1;
                s = p / 4;
            }
            else
                s = (p * Math.asin(1 / a)) / (2 * Math.PI);
            return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin(((k - s) * (2 * Math.PI)) / p));
        },
        Out: function (k) {
            var s, a = 0.1, p = 0.4;
            if (k === 0)
                return 0;
            if (k === 1)
                return 1;
            if (!a || a < 1) {
                a = 1;
                s = p / 4;
            }
            else
                s = (p * Math.asin(1 / a)) / (2 * Math.PI);
            return a * Math.pow(2, -10 * k) * Math.sin(((k - s) * (2 * Math.PI)) / p) + 1;
        },
        InOut: function (k) {
            var s, a = 0.1, p = 0.4;
            if (k === 0)
                return 0;
            if (k === 1)
                return 1;
            if (!a || a < 1) {
                a = 1;
                s = p / 4;
            }
            else
                s = (p * Math.asin(1 / a)) / (2 * Math.PI);
            if ((k *= 2) < 1)
                return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin(((k - s) * (2 * Math.PI)) / p));
            return a * Math.pow(2, -10 * (k -= 1)) * Math.sin(((k - s) * (2 * Math.PI)) / p) * 0.5 + 1;
        },
    },
    Back: {
        In: function (k) {
            var s = 1.70158;
            return k * k * ((s + 1) * k - s);
        },
        Out: function (k) {
            var s = 1.70158;
            return --k * k * ((s + 1) * k + s) + 1;
        },
        InOut: function (k) {
            var s = 1.70158 * 1.525;
            if ((k *= 2) < 1)
                return 0.5 * (k * k * ((s + 1) * k - s));
            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
        },
    },
    Bounce: {
        In: function (k) {
            return 1 - Easing.Bounce.Out(1 - k);
        },
        Out: function (k) {
            if (k < 1 / 2.75) {
                return 7.5625 * k * k;
            }
            else if (k < 2 / 2.75) {
                return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
            }
            else if (k < 2.5 / 2.75) {
                return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
            }
            else {
                return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
            }
        },
        InOut: function (k) {
            if (k < 0.5)
                return Easing.Bounce.In(k * 2) * 0.5;
            return Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
        },
    },
};
var Interpolation = {
    Linear: function (v, k) {
        var m = v.length - 1, f = m * k, i = Math.floor(f), fn = Interpolation.Utils.Linear;
        if (k < 0)
            return fn(v[0], v[1], f);
        if (k > 1)
            return fn(v[m], v[m - 1], m - f);
        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    Bezier: function (v, k) {
        var b = 0, n = v.length - 1, pw = Math.pow, bn = Interpolation.Utils.Bernstein, i;
        for (i = 0; i <= n; i++) {
            b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
        }
        return b;
    },
    CatmullRom: function (v, k) {
        var m = v.length - 1, f = m * k, i = Math.floor(f), fn = Interpolation.Utils.CatmullRom;
        if (v[0] === v[m]) {
            if (k < 0)
                i = Math.floor((f = m * (1 + k)));
            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
        }
        else {
            if (k < 0)
                return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
            if (k > 1)
                return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
        }
    },
    Utils: {
        Linear: function (p0, p1, t) {
            return (p1 - p0) * t + p0;
        },
        Bernstein: function (n, i) {
            var fc = Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: (function () {
            var a = [1];
            return function (n) {
                var s = 1, i;
                if (a[n])
                    return a[n];
                for (i = n; i > 1; i--)
                    s *= i;
                return (a[n] = s);
            };
        })(),
        CatmullRom: function (p0, p1, p2, p3, t) {
            var v0 = (p2 - p0) * 0.5, v1 = (p3 - p1) * 0.5, t2 = t * t, t3 = t * t2;
            return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
        },
    },
};



/***/ }),

/***/ "./src/tween/Tween.ts":
/*!****************************!*\
  !*** ./src/tween/Tween.ts ***!
  \****************************/
/*! exports provided: Tween */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tween", function() { return Tween; });
/* harmony import */ var _Easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Easing */ "./src/tween/Easing.ts");

var Tween = /** @class */ (function () {
    function Tween(object) {
        this._valuesStart = {};
        this._valuesEnd = {};
        this._valuesStartRepeat = {};
        this._duration = 1000;
        this._repeat = 0;
        this._yoyo = false;
        this._isPlaying = false;
        this._reversed = false;
        this._delayTime = 0;
        this._startTime = null;
        this._easingFunction = _Easing__WEBPACK_IMPORTED_MODULE_0__["Easing"].Linear.None;
        this._interpolationFunction = _Easing__WEBPACK_IMPORTED_MODULE_0__["Interpolation"].Linear;
        this._chainedTweens = [];
        this._onStartCallback = null;
        this._onStartCallbackFired = false;
        this._onUpdateCallback = null;
        this._onCompleteCallback = null;
        this._onStopCallback = null;
        this._object = object;
    }
    //returns false if completed
    Tween.prototype.update = function (time) {
        var property;
        if (time < this._startTime) {
            return true;
        }
        if (this._onStartCallbackFired === false) {
            if (this._onStartCallback !== null) {
                this._onStartCallback.call(this._object);
            }
            this._onStartCallbackFired = true;
        }
        var elapsed = (time - this._startTime) / this._duration;
        elapsed = elapsed > 1 ? 1 : elapsed;
        var value = this._easingFunction(elapsed);
        for (property in this._valuesEnd) {
            var start = this._valuesStart[property] || 0;
            var end = this._valuesEnd[property];
            if (end instanceof Array) {
                this._object[property] = this._interpolationFunction(end, value);
            }
            else {
                // Parses relative end values with start as base (e.g.: +10, -3)
                if (typeof end === 'string') {
                    end = start + parseFloat(end); //, 10);
                }
                // protect against non numeric properties.
                if (typeof end === 'number') {
                    this._object[property] = start + (end - start) * value;
                }
            }
        }
        if (this._onUpdateCallback !== null) {
            this._onUpdateCallback.call(this._object, value, elapsed);
        }
        if (elapsed === 1) {
            if (this._repeat > 0) {
                if (isFinite(this._repeat)) {
                    this._repeat--;
                }
                // reassign starting values, restart by making startTime = now
                for (property in this._valuesStartRepeat) {
                    if (typeof this._valuesEnd[property] === 'string') {
                        this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                    }
                    if (this._yoyo) {
                        var tmp = this._valuesStartRepeat[property];
                        this._valuesStartRepeat[property] = this._valuesEnd[property];
                        this._valuesEnd[property] = tmp;
                    }
                    this._valuesStart[property] = this._valuesStartRepeat[property];
                }
                if (this._yoyo) {
                    this._reversed = !this._reversed;
                }
                this._startTime = time + this._delayTime;
                return true;
            }
            else {
                if (this._onCompleteCallback !== null) {
                    this._onCompleteCallback.call(this._object);
                }
                for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                    this._chainedTweens[i].start(time);
                }
                return false;
            }
        }
        return true;
    };
    Tween.prototype.to = function (properties, duration) {
        var _this = this;
        var keys = Object.keys(properties);
        keys.forEach(function (key) {
            _this._valuesStart[key] = parseFloat(_this._object[key]);
            _this._valuesEnd[key] = parseFloat(properties[key]);
        });
        if (duration !== undefined) {
            this._duration = duration;
        }
        this._valuesEnd = properties;
        return this;
    };
    Tween.prototype.from = function (properties, duration) {
        var _this = this;
        var keys = Object.keys(properties);
        keys.forEach(function (key) {
            _this._valuesStart[key] = parseFloat(properties[key]);
            _this._valuesEnd[key] = parseFloat(_this._object[key]);
        });
        if (duration !== undefined) {
            this._duration = duration;
        }
        return this;
    };
    Tween.prototype.fromTo = function (from, to, duration) {
        var _this = this;
        var keys = Object.keys(from);
        keys.forEach(function (key) {
            _this._valuesStart[key] = parseFloat(from[key]);
            _this._valuesEnd[key] = parseFloat(to[key]);
        });
        if (duration !== undefined) {
            this._duration = duration;
        }
        return this;
    };
    Tween.prototype.isTweenOf = function (target) {
        return target === this._object;
    };
    Tween.prototype.start = function (time) {
        if (this.tweenManager)
            this.tweenManager.add(this);
        this._start(time);
        return this;
    };
    Tween.prototype._start = function (time) {
        this._isPlaying = true;
        this._onStartCallbackFired = false;
        this._startTime = time !== undefined ? time : this.tweenManager.passedTime; //Date.now();
        this._startTime += this._delayTime;
        for (var property in this._valuesEnd) {
            // check if an Array was provided as property value
            if (this._valuesEnd[property] instanceof Array) {
                if (this._valuesEnd[property].length === 0) {
                    continue;
                }
                // create a local copy of the Array with the start value at the front
                this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);
            }
            this._valuesStart[property] = this._object[property];
            if (this._valuesStart[property] instanceof Array === false) {
                this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
            }
            this._valuesStartRepeat[property] = this._valuesStart[property] || 0;
        }
        return this;
    };
    Tween.prototype.stop = function () {
        if (!this._isPlaying) {
            return this;
        }
        this.tweenManager.remove(this);
        this._isPlaying = false;
        if (this._onStopCallback !== null) {
            this._onStopCallback.call(this._object);
        }
        this.stopChainedTweens();
        return this;
    };
    Tween.prototype.stopChainedTweens = function () {
        for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            this._chainedTweens[i].stop();
        }
    };
    Tween.prototype.delay = function (amount) {
        this._delayTime = amount;
        return this;
    };
    Tween.prototype.repeat = function (times) {
        this._repeat = times;
        return this;
    };
    Tween.prototype.yoyo = function (yoyo) {
        this._yoyo = yoyo;
        return this;
    };
    Tween.prototype.easing = function (easing) {
        this._easingFunction = easing;
        return this;
    };
    Tween.prototype.interpolation = function (interpolation) {
        this._interpolationFunction = interpolation;
        return this;
    };
    Tween.prototype.chain = function () {
        var tweens = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tweens[_i] = arguments[_i];
        }
        this._chainedTweens = tweens;
        return this;
    };
    Tween.prototype.onStart = function (callback) {
        this._onStartCallback = callback;
        return this;
    };
    Tween.prototype.onUpdate = function (callback) {
        this._onUpdateCallback = callback;
        return this;
    };
    Tween.prototype.onComplete = function (callback) {
        this._onCompleteCallback = callback;
        return this;
    };
    Tween.prototype.onStop = function (callback) {
        this._onStopCallback = callback;
        return this;
    };
    Tween.prototype.restart = function (pause_duration) {
        this._startTime += pause_duration;
    };
    Tween.prototype.changeDuration = function (new_duration) {
        this._duration = new_duration;
    };
    return Tween;
}());



/***/ }),

/***/ "./src/tween/TweenManager.ts":
/*!***********************************!*\
  !*** ./src/tween/TweenManager.ts ***!
  \***********************************/
/*! exports provided: Easing, TweenManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenManager", function() { return TweenManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_UpdateList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/UpdateList */ "./src/utils/UpdateList.ts");
/* harmony import */ var _Tween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tween */ "./src/tween/Tween.ts");
/* harmony import */ var _Easing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Easing */ "./src/tween/Easing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Easing", function() { return _Easing__WEBPACK_IMPORTED_MODULE_3__["Easing"]; });





var TweenManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TweenManager, _super);
    function TweenManager() {
        var _this = _super.call(this) || this;
        _this.passedTime = Date.now();
        return _this;
    }
    TweenManager.prototype.update = function (delta) {
        this.passedTime += delta;
        if (!this.isPaused) {
            var n = this.updateItems.length;
            var item = void 0;
            for (var i = n - 1; i > -1; i--) {
                item = this.updateItems[i];
                if (!item.update(this.passedTime)) {
                    this.removeItems[this.removeItems.length] = item;
                }
            }
            // now remove items
            n = this.removeItems.length;
            if (n > 0) {
                for (var i = 0; i < n; i++) {
                    item = this.removeItems[i];
                    this._remove(item);
                }
                this.removeItems.length = 0;
            }
        }
    };
    TweenManager.prototype.create = function (target) {
        var tw = new _Tween__WEBPACK_IMPORTED_MODULE_2__["Tween"](target);
        tw.tweenManager = this;
        return tw;
    };
    TweenManager.create = function (target, tweenManager) {
        if (tweenManager === void 0) { tweenManager = null; }
        var tw = new _Tween__WEBPACK_IMPORTED_MODULE_2__["Tween"](target);
        tw.tweenManager = tweenManager || TweenManager.instance;
        return tw;
    };
    TweenManager.prototype.killTweensOf = function (target) {
        if (this.updateItems.length > 0) {
            var i = this.updateItems.length - 1, tween = void 0;
            for (; i > -1; i--) {
                tween = this.updateItems[i];
                if (tween.isTweenOf(target)) {
                    this.updateItems.splice(i, 1);
                }
            }
        }
    };
    TweenManager.killTweensOf = function (target) {
        TweenManager.instance.killTweensOf(target);
    };
    Object.defineProperty(TweenManager, "instance", {
        get: function () {
            if (!TweenManager._instance) {
                TweenManager._instance = new TweenManager();
            }
            return TweenManager._instance;
        },
        enumerable: false,
        configurable: true
    });
    return TweenManager;
}(_utils_UpdateList__WEBPACK_IMPORTED_MODULE_1__["UpdateList"]));



/***/ }),

/***/ "./src/tween/index.ts":
/*!****************************!*\
  !*** ./src/tween/index.ts ***!
  \****************************/
/*! exports provided: Easing, Interpolation, Tween, TweenManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Easing */ "./src/tween/Easing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Easing", function() { return _Easing__WEBPACK_IMPORTED_MODULE_0__["Easing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interpolation", function() { return _Easing__WEBPACK_IMPORTED_MODULE_0__["Interpolation"]; });

/* harmony import */ var _Tween__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tween */ "./src/tween/Tween.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tween", function() { return _Tween__WEBPACK_IMPORTED_MODULE_1__["Tween"]; });

/* harmony import */ var _TweenManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TweenManager */ "./src/tween/TweenManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenManager", function() { return _TweenManager__WEBPACK_IMPORTED_MODULE_2__["TweenManager"]; });






/***/ }),

/***/ "./src/utils/EventQueue.ts":
/*!*********************************!*\
  !*** ./src/utils/EventQueue.ts ***!
  \*********************************/
/*! exports provided: EventQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventQueue", function() { return EventQueue; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var EventQueue = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EventQueue, _super);
    function EventQueue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._queue = [];
        return _this;
    }
    EventQueue.prototype.add = function (eventId) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this._queue.push({
            eventId: eventId, args: args
        });
    };
    EventQueue.prototype.update = function (_delta) {
        while (this._queue.length > 0) {
            var item = this._queue.shift();
            this.emit.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([item.eventId], item.args));
        }
    };
    return EventQueue;
}(PIXI.utils.EventEmitter));



/***/ }),

/***/ "./src/utils/Sequence.ts":
/*!*******************************!*\
  !*** ./src/utils/Sequence.ts ***!
  \*******************************/
/*! exports provided: Sequence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sequence", function() { return Sequence; });
var Sequence = /** @class */ (function () {
    function Sequence(stuff, randomise) {
        if (randomise === void 0) { randomise = false; }
        this.list = [];
        if (stuff) {
            this.add(stuff, randomise);
        }
    }
    Sequence.prototype.add = function (stuff, randomise) {
        var _a;
        if (randomise === void 0) { randomise = false; }
        if (Array.isArray(stuff)) {
            var items = stuff;
            (_a = this.list).push.apply(_a, items);
        }
        else {
            this.list[this.list.length] = stuff;
        }
        if (randomise)
            this.randomise();
        return this;
    };
    Sequence.prototype.remove = function (stuff) {
        if (Array.isArray(stuff)) {
            var items = stuff;
            var n = items.length;
            for (var i = 0; i < n; i++) {
                var item = items[i];
                var index = this.list.indexOf(item);
                if (index > -1)
                    this.list.splice(index, 1);
            }
        }
        else {
            var index = this.list.indexOf(stuff);
            if (index > -1)
                this.list.splice(index, 1);
        }
        return this;
    };
    Sequence.prototype.randomise = function () {
        Sequence.randomiseList(this.list);
        return this;
    };
    Sequence.prototype.next = function () {
        var item = null;
        if (this.list.length > 0) {
            item = this.list.shift();
            this.list[this.list.length] = item;
        }
        return item;
    };
    Sequence.prototype.previous = function () {
        var item = null;
        if (this.list.length > 0) {
            item = this.list.pop();
            this.list.unshift(item);
        }
        return item;
    };
    Object.defineProperty(Sequence.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Sequence.HOLDER = [];
    Sequence.randomiseList = function (list) {
        var _a;
        (_a = Sequence.HOLDER).push.apply(_a, list);
        list.length = 0;
        while (Sequence.HOLDER.length > 0) {
            var index = Math.floor(Math.random() * Sequence.HOLDER.length);
            list[list.length] = Sequence.HOLDER.splice(index, 1)[0];
        }
        return list;
    };
    return Sequence;
}());



/***/ }),

/***/ "./src/utils/Timeout.ts":
/*!******************************!*\
  !*** ./src/utils/Timeout.ts ***!
  \******************************/
/*! exports provided: Timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeout", function() { return Timeout; });
var Timeout = /** @class */ (function () {
    function Timeout(poolSize) {
        if (poolSize === void 0) { poolSize = 50; }
        this._actions = [];
        this._cancelledActions = [];
        this._pool = this._createPool(poolSize);
    }
    Timeout.prototype._createPool = function (size) {
        var pool = [];
        while (size > 0) {
            pool.push({ _targetTime: -1, _callback: null });
            size--;
        }
        return pool;
    };
    Timeout.prototype._next = function () {
        var item = this._pool.shift();
        this._pool[this._pool.length] = item;
        return item;
    };
    Timeout.prototype.delay = function (callback, ms) {
        var action = this._next();
        action._targetTime = ms || -1;
        action._callback = callback || null;
        this._actions[this._actions.length] = action;
        return action;
    };
    Timeout.prototype.update = function (elapsedTime) {
        var n = this._actions.length;
        if (n > 0) {
            var i = void 0, action = void 0;
            for (i = n - 1; i > -1; i--) {
                action = this._actions[i];
                // check for ones that were already cancelled or fired
                if (action._targetTime === -1 || !action._callback) {
                    this._cancelledActions[this._cancelledActions.length] = action;
                }
                else if (action._targetTime > 0 && action._callback) {
                    action._targetTime -= elapsedTime;
                    if (action._targetTime <= 0) {
                        var callback = action._callback;
                        action._callback = null;
                        action._targetTime = -1;
                        callback();
                    }
                }
            }
            // now remove any cancelled ones
            while (this._cancelledActions.length > 0) {
                action = this._cancelledActions.pop();
                i = this._actions.indexOf(action);
                if (i > -1) {
                    this._actions.splice(i, 1);
                }
            }
        }
    };
    Timeout.prototype.cancel = function (action) {
        action._targetTime = -1;
    };
    Timeout.prototype.clear = function () {
        var n = this._actions.length;
        if (n > 0) {
            var i = void 0, action = void 0;
            for (i = n - 1; i > -1; i--) {
                action = this._actions[i];
                action._callback = null;
                action._targetTime = -1;
            }
        }
        this._actions.length = 0;
    };
    Timeout.prototype.dispose = function () {
        this.clear();
        this._pool = null;
    };
    return Timeout;
}());



/***/ }),

/***/ "./src/utils/UpdateList.ts":
/*!*********************************!*\
  !*** ./src/utils/UpdateList.ts ***!
  \*********************************/
/*! exports provided: UpdateList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateList", function() { return UpdateList; });
var UpdateList = /** @class */ (function () {
    function UpdateList() {
        this.updateItems = [];
        this.removeItems = [];
        this.isPaused = false;
    }
    UpdateList.prototype.update = function (delta) {
        if (!this.isPaused) {
            var item = void 0, i = void 0, n = this.updateItems.length;
            for (i = n - 1; i > -1; i--) {
                item = this.updateItems[i];
                item.update(delta);
            }
            //now remove items
            n = this.removeItems.length;
            if (n > 0) {
                for (i = 0; i < n; i++) {
                    item = this.removeItems[i];
                    this._remove(item);
                }
                this.removeItems.length = 0;
            }
        }
    };
    UpdateList.prototype.purge = function () {
        this.updateItems.length = 0;
        this.removeItems.length = 0;
    };
    UpdateList.prototype.removeAll = function () {
        var item, i, n = this.updateItems.length;
        for (i = n - 1; i > -1; i--) {
            this.removeItems[i] = this.updateItems[i];
        }
    };
    UpdateList.prototype.add = function (item) {
        //don't allow adding more than once!
        if (this.updateItems.indexOf(item) === -1) {
            this.updateItems[this.updateItems.length] = item;
        }
        return item;
    };
    UpdateList.prototype.remove = function (item) {
        this.removeItems[this.removeItems.length] = item;
        return item;
    };
    UpdateList.prototype._remove = function (item) {
        var index = this.updateItems.indexOf(item);
        if (index > -1)
            this.updateItems.splice(index, 1);
    };
    Object.defineProperty(UpdateList.prototype, "length", {
        get: function () {
            return this.updateItems.length;
        },
        enumerable: false,
        configurable: true
    });
    return UpdateList;
}());



/***/ }),

/***/ "./src/utils/UpdateLoop.ts":
/*!*********************************!*\
  !*** ./src/utils/UpdateLoop.ts ***!
  \*********************************/
/*! exports provided: UpdateLoop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateLoop", function() { return UpdateLoop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _UpdateList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateList */ "./src/utils/UpdateList.ts");


var UpdateLoop = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UpdateLoop, _super);
    function UpdateLoop(_eventQueue) {
        var _this = _super.call(this) || this;
        _this._eventQueue = _eventQueue;
        _this.accumulator = 0;
        _this.currentTime = 0;
        _this.fps = 60;
        _this.update = _this.update.bind(_this);
        _this.interval = 1000 / _this.fps;
        return _this;
    }
    UpdateLoop.prototype.start = function () {
        clearInterval(this.gameLoopId);
        this.currentTime = Date.now();
        this.gameLoopId = setInterval(this.update, this.interval);
        return this;
    };
    UpdateLoop.prototype.stop = function () {
        clearInterval(this.gameLoopId);
    };
    UpdateLoop.prototype.update = function (_delta) {
        var newTime = Date.now();
        var elapsed = newTime - this.currentTime;
        this.currentTime = newTime;
        this.accumulator += elapsed;
        //use accumulator system for processing time with fixed time step
        var chunk = this.interval;
        while (this.accumulator > chunk) {
            this.accumulator -= chunk;
            _super.prototype.update.call(this, chunk);
            //now process the event queue
            this._eventQueue.update(chunk);
        }
    };
    return UpdateLoop;
}(_UpdateList__WEBPACK_IMPORTED_MODULE_1__["UpdateList"]));



/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: Timeout, UpdateList, Sequence, EventQueue, UpdateLoop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timeout */ "./src/utils/Timeout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeout", function() { return _Timeout__WEBPACK_IMPORTED_MODULE_0__["Timeout"]; });

/* harmony import */ var _UpdateList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateList */ "./src/utils/UpdateList.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateList", function() { return _UpdateList__WEBPACK_IMPORTED_MODULE_1__["UpdateList"]; });

/* harmony import */ var _Sequence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sequence */ "./src/utils/Sequence.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sequence", function() { return _Sequence__WEBPACK_IMPORTED_MODULE_2__["Sequence"]; });

/* harmony import */ var _EventQueue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventQueue */ "./src/utils/EventQueue.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventQueue", function() { return _EventQueue__WEBPACK_IMPORTED_MODULE_3__["EventQueue"]; });

/* harmony import */ var _UpdateLoop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UpdateLoop */ "./src/utils/UpdateLoop.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateLoop", function() { return _UpdateLoop__WEBPACK_IMPORTED_MODULE_4__["UpdateLoop"]; });








/***/ }),

/***/ "pixi.js":
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbmdpbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvRW5naW5lLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy9jb3JlL0xvYWRlci50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9TY3JlZW4udHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL2NvcmUvU2NyZWVuTWFuYWdlci50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS92ZXJzaW9uLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy90d2Vlbi9FYXNpbmcudHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL3R3ZWVuL1R3ZWVuLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy90d2Vlbi9Ud2Vlbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL3R3ZWVuL2luZGV4LnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy91dGlscy9FdmVudFF1ZXVlLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy91dGlscy9TZXF1ZW5jZS50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvVGltZW91dC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvVXBkYXRlTGlzdC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvVXBkYXRlTG9vcC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZW5naW5lL2V4dGVybmFsIFwiUElYSVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7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LEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQU0sT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDO1FBQzVCLGlFQUFpRTtRQUNqRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVCLE9BQU0sSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUM7WUFDMUIsaUJBQU0sTUFBTSxZQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLDZCQUE2QjtZQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLENBdEMrQixzREFBVSxHQXNDekM7Ozs7Ozs7Ozs7Ozs7O0FDMUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ0c7QUFDRjtBQUNFO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0o3QixzQiIsImZpbGUiOiJlbmdpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9FbmdpbmUudHNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJ1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuL2NvcmUvTG9hZGVyJztcclxuaW1wb3J0IHsgU2NyZWVuTWFuYWdlciB9IGZyb20gJy4vY29yZS9TY3JlZW5NYW5hZ2VyJztcclxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL2NvcmUvU2V0dGluZ3MnXHJcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuL2NvcmUvdmVyc2lvbic7XHJcbmltcG9ydCB7IFR3ZWVuTWFuYWdlciB9IGZyb20gJy4vdHdlZW4nO1xyXG5pbXBvcnQgeyBFdmVudFF1ZXVlLCBVcGRhdGVMb29wIH0gZnJvbSAnLi91dGlscyc7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL3BpeGkuanMuZC50c1wiIC8+XHJcbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xyXG5cclxuICAgIHB1YmxpYyBhcHA6IFBJWEkuQXBwbGljYXRpb247XHJcblxyXG4gICAgcHVibGljIHNldHRpbmdzOiBTZXR0aW5ncztcclxuXHJcbiAgICBwdWJsaWMgZXZlbnRzOiBFdmVudFF1ZXVlO1xyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVMb29wOiBVcGRhdGVMb29wO1xyXG5cclxuICAgIHB1YmxpYyBsb2FkZXI6IExvYWRlcjtcclxuXHJcbiAgICBwdWJsaWMgc2NyZWVuTWFuYWdlcjogU2NyZWVuTWFuYWdlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0VuZ2luZSB2ZXJzaW9uJywgdmVyc2lvbi5jb2RlKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCgpOiBFbmdpbmUge1xyXG4gICAgICAgIC8vcHJvYmFibHkgd2FudCB0byB1c2UgdGhlIHBpeGkgbG9hZGVyIGZvciBldmVyeXRoaW5nLi4uXHJcbiAgICAgICAgLy9zbyBjcmVhdGUgdGhlIGFwcCBzdHJhaWdodCBhd2F5XHJcbiAgICAgICAgdGhpcy5hcHAgPSB0aGlzLl9jcmVhdGVQaXhpQXBwKClcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB0aGlzLl9jcmVhdGVFdmVudHMoKTtcclxuICAgICAgICAvL2xvYWQgdGhlIGNvbmZpZ1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3ModGhpcy5hcHAubG9hZGVyLCB0aGlzLmV2ZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJlc291cmNlKGlkOiBzdHJpbmcpOiB1bmtub3duIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHAubG9hZGVyLnJlc291cmNlc1tpZF0uZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbmZpZyBoYXMgbm93IGxvYWRlZFxyXG4gICAgcHJpdmF0ZSBidWlsZCgpOiB2b2lkIHtcclxuICAgICAgICAvL3VwZGF0ZSB0aGUgYXBwIHdpdGggdGhlIGxvYWRlZCBzZXR0aW5nc1xyXG4gICAgICAgIHRoaXMuYXBwLnJlbmRlcmVyLnJlc2l6ZSh0aGlzLnNldHRpbmdzLnNpemUud2lkdGgsIHRoaXMuc2V0dGluZ3Muc2l6ZS5oZWlnaHQpXHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHRoZSBsb2FkZXJcclxuICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBMb2FkZXIodGhpcy5hcHAubG9hZGVyLCB0aGlzLmV2ZW50cywgdGhpcy5zZXR0aW5ncylcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgdXBkYXRlIGxvb3BcclxuICAgICAgICB0aGlzLnVwZGF0ZUxvb3AgPSB0aGlzLl9jcmVhdGVVcGRhdGVMb29wKClcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgdHdlZW4gbWFuYWdlciwgYWRkIHRvIHVwZGF0ZSBsb29wXHJcbiAgICAgICAgdGhpcy51cGRhdGVMb29wLmFkZChUd2Vlbk1hbmFnZXIuaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAvL2NyZWF0ZSBzY3JlZW4gbWFuYWdlclxyXG4gICAgICAgIHRoaXMuc2NyZWVuTWFuYWdlciA9IHRoaXMuX2NyZWF0ZVNjcmVlbk1hbmFnZXIoKTtcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgc291bmQgbWFuYWdlciAocmV3cml0ZSBpdClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVVcGRhdGVMb29wKCk6IFVwZGF0ZUxvb3Age1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUxvb3AgPSBuZXcgVXBkYXRlTG9vcCh0aGlzLmV2ZW50cylcclxuICAgICAgICB1cGRhdGVMb29wLnN0YXJ0KCk7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZUxvb3A7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlU2NyZWVuTWFuYWdlcigpOiBTY3JlZW5NYW5hZ2VyIHtcclxuICAgICAgICBjb25zdCBzY3JlZW5NYW5hZ2VyID0gbmV3IFNjcmVlbk1hbmFnZXIodGhpcy5ldmVudHMsIHRoaXMuc2V0dGluZ3Muc2l6ZSlcclxuICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZChzY3JlZW5NYW5hZ2VyLnJvb3QpXHJcbiAgICAgICAgdGhpcy51cGRhdGVMb29wLmFkZChzY3JlZW5NYW5hZ2VyKVxyXG4gICAgICAgIHJldHVybiBzY3JlZW5NYW5hZ2VyO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZUV2ZW50cygpOiBFdmVudFF1ZXVlIHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSBuZXcgRXZlbnRRdWV1ZSgpO1xyXG5cclxuICAgICAgICBldmVudHMub24oU2V0dGluZ3MuQ09ORklHX0xPQURFRCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbmZpZyBpcyBsb2FkZWQgLSBub3cgYnVpbGQgdGhlIGVuZ2luZVxyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkKCk7XHJcbiAgICAgICAgICAgIC8vbG9hZCBnbG9iYWwgYXNzZXRzXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmxvYWRHbG9iYWwoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBldmVudHMub24oTG9hZGVyLkdMT0JBTF9BU1NFVFNfTE9BREVELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vbm93IHNob3cgZmlyc3Qgc2NyZWVuXHJcbiAgICAgICAgICAgIGV2ZW50cy5lbWl0KCdhcHAtcmVhZHknKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVQaXhpQXBwKCk6IFBJWEkuQXBwbGljYXRpb24ge1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUElYSS5BcHBsaWNhdGlvbih7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzY4LCB3aWR0aDogMTAyNCxcclxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHZpZXcsXHJcbiAgICAgICAgICAgIGZvcmNlQ2FudmFzOiBmYWxzZSxcclxuICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgICAgICByZXNvbHV0aW9uOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2NvcmUnXHJcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnXHJcbmV4cG9ydCAqIGZyb20gJy4vdHdlZW4nXHJcbiIsIlxyXG5cclxuaW1wb3J0IHsgSUFzc2V0LCBJQXNzZXRzLCBTZXR0aW5ncyB9IGZyb20gXCIuL1NldHRpbmdzXCI7XHJcbmltcG9ydCB7IExvYWRlclJlc291cmNlIH0gZnJvbSAncGl4aS5qcydcclxuLy9hc3NldCBsb2FkZXJcclxuZXhwb3J0IGNsYXNzIExvYWRlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHTE9CQUxfQVNTRVRTX0xPQURFRDogc3RyaW5nID0gJ2dsb2JhbC1hc3NldHMtbG9hZGVkJztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfbG9hZGVyOiBQSVhJLkxvYWRlcixcclxuICAgICAgICBwcml2YXRlIF9ldmVudHM6IFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyLFxyXG4gICAgICAgIHByaXZhdGUgX3NldHRpbmdzOiBTZXR0aW5nc1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0UmVzb3VyY2VUeXBlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldFJlc291cmNlVHlwZXMoKTogdm9pZCB7XHJcbiAgICAgICAgLy9zZXQgaXQgdG8gdXNlIHhociBmb3Igc291bmRzXHJcbiAgICAgICAgTG9hZGVyUmVzb3VyY2Uuc2V0RXh0ZW5zaW9uTG9hZFR5cGUoJ29nZycsIExvYWRlclJlc291cmNlLkxPQURfVFlQRS5YSFIpXHJcbiAgICAgICAgTG9hZGVyUmVzb3VyY2Uuc2V0RXh0ZW5zaW9uTG9hZFR5cGUoJ200YScsIExvYWRlclJlc291cmNlLkxPQURfVFlQRS5YSFIpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRHbG9iYWwoKTogdm9pZCB7XHJcbiAgICAgICAgLy9sb2FkIGl0ZW1zIGZyb20gdGhlIGdsb2JhbCBsaXN0XHJcbiAgICAgICAgdGhpcy5sb2FkQXNzZXRzKHRoaXMuX3NldHRpbmdzLmFzc2V0cy5nbG9iYWwpXHJcbiAgICAgICAgdGhpcy5fbG9hZGVyLm9uQ29tcGxldGUub25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWwgYXNzZXRzIGxvYWRlZCcpXHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5lbWl0KExvYWRlci5HTE9CQUxfQVNTRVRTX0xPQURFRClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkQXNzZXRzKGFzc2V0czogSUFzc2V0W10sIGxvYWQgPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgLy9UT0RPIC0gaGFuZGxlIHNldHRpbmcgYXVkaW8gdHlwZSBoZXJlXHJcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYXNzZXQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuYWRkKGFzc2V0LmlkLCBhc3NldC5zcmMpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAobG9hZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFNjcmVlbihzY3JlZW5JZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgLy9UT0RPXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUaW1lb3V0IH0gZnJvbSBcIi4uL3V0aWxzL1RpbWVvdXRcIjtcclxuaW1wb3J0IHsgVXBkYXRlTGlzdCB9IGZyb20gXCIuLi91dGlscy9VcGRhdGVMaXN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTY3JlZW5Db25maWcge1xyXG4gICAgc2NyZWVuV2lkdGg6IG51bWJlcixcclxuICAgIHNjcmVlbkhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW4gZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUxpc3Q6IFVwZGF0ZUxpc3Q7XHJcbiAgICBwdWJsaWMgdGltZW91dDogVGltZW91dDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc2NyZWVuV2lkdGg6bnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHNjcmVlbkhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSVNjcmVlbkNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpXHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdCA9IG5ldyBVcGRhdGVMaXN0KCk7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gPFRpbWVvdXQ+dGhpcy51cGRhdGVMaXN0LmFkZChuZXcgVGltZW91dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3QudXBkYXRlKGRlbHRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3QucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpXHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tIFwiLi9TY3JlZW5cIjtcclxuaW1wb3J0IHsgSVNpemUgfSBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbk1hbmFnZXIge1xyXG5cclxuICAgIHB1YmxpYyByb290OiBQSVhJLkNvbnRhaW5lcjtcclxuXHJcbiAgICBwdWJsaWMgY3VycmVudFNjcmVlbjogU2NyZWVuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2V2ZW50czogUElYSS51dGlscy5FdmVudEVtaXR0ZXIsIHByaXZhdGUgX3NpemU6IElTaXplKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucm9vdC5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB0aGlzLl9zaXplLmhlaWdodCAvIDJcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIC8vVE9ETyAtIG1ha2UgdGhpcyB3b3JrIHZpYSBxdWV1ZWQgZXZlbnRzIGFjdHVhbGx5XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLm9uKCdzY3JlZW4nLCB0aGlzLnNob3dTY3JlZW4pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNjcmVlbikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW4udXBkYXRlKGRlbHRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dTY3JlZW4gPSAoU2NyZWVuVHlwZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlzcG9zZVNjcmVlbigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3VycmVudFNjcmVlbiA9IHRoaXMuX2NyZWF0ZVNjcmVlbihTY3JlZW5UeXBlKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVNjcmVlbihTY3JlZW5UeXBlKTogU2NyZWVuIHtcclxuICAgICAgICBjb25zdCBzY3JlZW4gPSA8U2NyZWVuPm5ldyBTY3JlZW5UeXBlKHtcclxuICAgICAgICAgICAgc2NyZWVuV2lkdGg6IHRoaXMuX3NpemUud2lkdGgsXHJcbiAgICAgICAgICAgIHNjcmVlbkhlaWdodDogdGhpcy5fc2l6ZS5oZWlnaHRcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJvb3QuYWRkQ2hpbGQoc2NyZWVuKTtcclxuICAgICAgICByZXR1cm4gc2NyZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy9UT0RPIC0ga2VlcCByb290IGNlbnRlcmVkPyBPciBtYXliZSBub3QgbmVlZGVkLi4uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2VTY3JlZW4oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNjcmVlbikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW4uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW4gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vaW50ZXJmYWNlIGZvciB0aGUgY29uZmlnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBc3NldCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgc3JjOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpemUge1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBc3NldHMge1xyXG4gICAgZ2xvYmFsOiBJQXNzZXRbXTtcclxuICAgIHNjZW5lOiB7XHJcbiAgICAgICAgW3NjZW5lSWQ6IHN0cmluZ106IElBc3NldFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb25maWcge1xyXG4gICAgYXNzZXRzOiBJQXNzZXRzO1xyXG4gICAgc2l6ZTogSVNpemU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5ncyBpbXBsZW1lbnRzIElDb25maWcge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQ09ORklHX0xPQURFRDogc3RyaW5nID0gJ2NvbmZpZy1sb2FkZWQnO1xyXG5cclxuICAgIHB1YmxpYyBjb25maWdQYXRoOiBzdHJpbmcgPSAnanNvbi9jb25maWcuanNvbidcclxuXHJcbiAgICBwdWJsaWMgYXNzZXRzOiBJQXNzZXRzO1xyXG4gICAgcHVibGljIHNpemU6IElTaXplID0ge3dpZHRoOiAxMzM0LCBoZWlnaHQ6IDc1MH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9hZGVyOiBQSVhJLkxvYWRlciwgcHJpdmF0ZSBfZXZlbnRzOiBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlcikge1xyXG4gICAgICAgIHRoaXMubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkKCk6IFNldHRpbmdzIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIuYWRkKCdjb25maWcnLCB0aGlzLmNvbmZpZ1BhdGgpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlci5vbkNvbXBsZXRlLm9uY2UodGhpcy5fY29uZmlnTG9hZGVkKVxyXG4gICAgICAgIHRoaXMuX2xvYWRlci5sb2FkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY29uZmlnTG9hZGVkID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZzogSUNvbmZpZyA9IDxJQ29uZmlnPnRoaXMuX2xvYWRlci5yZXNvdXJjZXMuY29uZmlnLmRhdGE7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpXHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLmVtaXQoU2V0dGluZ3MuQ09ORklHX0xPQURFRClcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vTG9hZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9TY3JlZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL1NjcmVlbk1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1NldHRpbmdzJztcclxuZXhwb3J0ICogZnJvbSAnLi92ZXJzaW9uJzsiLCJjb25zdCB2ZXJzaW9uID0geyBjb2RlOiAnMC4xLjQnIH1cbiAgICBleHBvcnQge3ZlcnNpb259IiwiY29uc3QgRWFzaW5nID0ge1xyXG4gICAgTGluZWFyOiB7XHJcbiAgICAgICAgTm9uZShrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIFF1YWRyYXRpYzoge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIGsgKiBrO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE91dChrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrICogKDIgLSBrKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbk91dChrKSB7XHJcbiAgICAgICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHJldHVybiAwLjUgKiBrICogaztcclxuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiAoLS1rICogKGsgLSAyKSAtIDEpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIEN1YmljOiB7XHJcbiAgICAgICAgSW4oaykge1xyXG4gICAgICAgICAgICByZXR1cm4gayAqIGsgKiBrO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE91dChrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtLWsgKiBrICogayArIDE7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBpZiAoKGsgKj0gMikgPCAxKSByZXR1cm4gMC41ICogayAqIGsgKiBrO1xyXG4gICAgICAgICAgICByZXR1cm4gMC41ICogKChrIC09IDIpICogayAqIGsgKyAyKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBRdWFydGljOiB7XHJcbiAgICAgICAgSW4oaykge1xyXG4gICAgICAgICAgICByZXR1cm4gayAqIGsgKiBrICogaztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gMSAtIC0tayAqIGsgKiBrICogaztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbk91dChrKSB7XHJcbiAgICAgICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHJldHVybiAwLjUgKiBrICogayAqIGsgKiBrO1xyXG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqICgoayAtPSAyKSAqIGsgKiBrICogayAtIDIpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIFF1aW50aWM6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrICogayAqIGsgKiBrICogaztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gLS1rICogayAqIGsgKiBrICogayArIDE7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBpZiAoKGsgKj0gMikgPCAxKSByZXR1cm4gMC41ICogayAqIGsgKiBrICogayAqIGs7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogayAqIGsgKiBrICsgMik7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgU2ludXNvaWRhbDoge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLmNvcygoayAqIE1hdGguUEkpIC8gMik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc2luKChrICogTWF0aC5QSSkgLyAyKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbk91dChrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBrKSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgRXhwb25lbnRpYWw6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrID09PSAwID8gMCA6IE1hdGgucG93KDEwMjQsIGsgLSAxKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gayA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLTEwICogayk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBpZiAoayA9PT0gMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIGlmIChrID09PSAxKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgaWYgKChrICo9IDIpIDwgMSkgcmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIGsgLSAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogKGsgLSAxKSkgKyAyKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBDaXJjdWxhcjoge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIGsgKiBrKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSAtLWsgKiBrKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbk91dChrKSB7XHJcbiAgICAgICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gayAqIGspIC0gMSk7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAoayAtPSAyKSAqIGspICsgMSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgRWxhc3RpYzoge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgbGV0IHMsXHJcbiAgICAgICAgICAgICAgICBhID0gMC4xLFxyXG4gICAgICAgICAgICAgICAgcCA9IDAuNDtcclxuICAgICAgICAgICAgaWYgKGsgPT09IDApIHJldHVybiAwO1xyXG4gICAgICAgICAgICBpZiAoayA9PT0gMSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGlmICghYSB8fCBhIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgYSA9IDE7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBzID0gKHAgKiBNYXRoLmFzaW4oMSAvIGEpKSAvICgyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIHJldHVybiAtKGEgKiBNYXRoLnBvdygyLCAxMCAqIChrIC09IDEpKSAqIE1hdGguc2luKCgoayAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgbGV0IHMsXHJcbiAgICAgICAgICAgICAgICBhID0gMC4xLFxyXG4gICAgICAgICAgICAgICAgcCA9IDAuNDtcclxuICAgICAgICAgICAgaWYgKGsgPT09IDApIHJldHVybiAwO1xyXG4gICAgICAgICAgICBpZiAoayA9PT0gMSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGlmICghYSB8fCBhIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgYSA9IDE7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBzID0gKHAgKiBNYXRoLmFzaW4oMSAvIGEpKSAvICgyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhICogTWF0aC5wb3coMiwgLTEwICogaykgKiBNYXRoLnNpbigoKGsgLSBzKSAqICgyICogTWF0aC5QSSkpIC8gcCkgKyAxO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEluT3V0KGspIHtcclxuICAgICAgICAgICAgbGV0IHMsXHJcbiAgICAgICAgICAgICAgICBhID0gMC4xLFxyXG4gICAgICAgICAgICAgICAgcCA9IDAuNDtcclxuICAgICAgICAgICAgaWYgKGsgPT09IDApIHJldHVybiAwO1xyXG4gICAgICAgICAgICBpZiAoayA9PT0gMSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGlmICghYSB8fCBhIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgYSA9IDE7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBzID0gKHAgKiBNYXRoLmFzaW4oMSAvIGEpKSAvICgyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHJldHVybiAtMC41ICogKGEgKiBNYXRoLnBvdygyLCAxMCAqIChrIC09IDEpKSAqIE1hdGguc2luKCgoayAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhICogTWF0aC5wb3coMiwgLTEwICogKGsgLT0gMSkpICogTWF0aC5zaW4oKChrIC0gcykgKiAoMiAqIE1hdGguUEkpKSAvIHApICogMC41ICsgMTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBCYWNrOiB7XHJcbiAgICAgICAgSW4oaykge1xyXG4gICAgICAgICAgICBsZXQgcyA9IDEuNzAxNTg7XHJcbiAgICAgICAgICAgIHJldHVybiBrICogayAqICgocyArIDEpICogayAtIHMpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE91dChrKSB7XHJcbiAgICAgICAgICAgIGxldCBzID0gMS43MDE1ODtcclxuICAgICAgICAgICAgcmV0dXJuIC0tayAqIGsgKiAoKHMgKyAxKSAqIGsgKyBzKSArIDE7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBsZXQgcyA9IDEuNzAxNTggKiAxLjUyNTtcclxuICAgICAgICAgICAgaWYgKChrICo9IDIpIDwgMSkgcmV0dXJuIDAuNSAqIChrICogayAqICgocyArIDEpICogayAtIHMpKTtcclxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiAoKHMgKyAxKSAqIGsgKyBzKSArIDIpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIEJvdW5jZToge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEgLSBFYXNpbmcuQm91bmNlLk91dCgxIC0gayk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgaWYgKGsgPCAxIC8gMi43NSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIGsgKiBrO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGsgPCAyIC8gMi43NSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIChrIC09IDEuNSAvIDIuNzUpICogayArIDAuNzU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoayA8IDIuNSAvIDIuNzUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAoayAtPSAyLjI1IC8gMi43NSkgKiBrICsgMC45Mzc1O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIChrIC09IDIuNjI1IC8gMi43NSkgKiBrICsgMC45ODQzNzU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbk91dChrKSB7XHJcbiAgICAgICAgICAgIGlmIChrIDwgMC41KSByZXR1cm4gRWFzaW5nLkJvdW5jZS5JbihrICogMikgKiAwLjU7XHJcbiAgICAgICAgICAgIHJldHVybiBFYXNpbmcuQm91bmNlLk91dChrICogMiAtIDEpICogMC41ICsgMC41O1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgSW50ZXJwb2xhdGlvbiA9IHtcclxuICAgIExpbmVhcih2LCBrKSB7XHJcbiAgICAgICAgbGV0IG0gPSB2Lmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgIGYgPSBtICogayxcclxuICAgICAgICAgICAgaSA9IE1hdGguZmxvb3IoZiksXHJcbiAgICAgICAgICAgIGZuID0gSW50ZXJwb2xhdGlvbi5VdGlscy5MaW5lYXI7XHJcblxyXG4gICAgICAgIGlmIChrIDwgMCkgcmV0dXJuIGZuKHZbMF0sIHZbMV0sIGYpO1xyXG4gICAgICAgIGlmIChrID4gMSkgcmV0dXJuIGZuKHZbbV0sIHZbbSAtIDFdLCBtIC0gZik7XHJcblxyXG4gICAgICAgIHJldHVybiBmbih2W2ldLCB2W2kgKyAxID4gbSA/IG0gOiBpICsgMV0sIGYgLSBpKTtcclxuICAgIH0sXHJcblxyXG4gICAgQmV6aWVyKHYsIGspIHtcclxuICAgICAgICBsZXQgYiA9IDAsXHJcbiAgICAgICAgICAgIG4gPSB2Lmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgIHB3ID0gTWF0aC5wb3csXHJcbiAgICAgICAgICAgIGJuID0gSW50ZXJwb2xhdGlvbi5VdGlscy5CZXJuc3RlaW4sXHJcbiAgICAgICAgICAgIGk7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPD0gbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGIgKz0gcHcoMSAtIGssIG4gLSBpKSAqIHB3KGssIGkpICogdltpXSAqIGJuKG4sIGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGI7XHJcbiAgICB9LFxyXG5cclxuICAgIENhdG11bGxSb20odiwgaykge1xyXG4gICAgICAgIGxldCBtID0gdi5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICBmID0gbSAqIGssXHJcbiAgICAgICAgICAgIGkgPSBNYXRoLmZsb29yKGYpLFxyXG4gICAgICAgICAgICBmbiA9IEludGVycG9sYXRpb24uVXRpbHMuQ2F0bXVsbFJvbTtcclxuXHJcbiAgICAgICAgaWYgKHZbMF0gPT09IHZbbV0pIHtcclxuICAgICAgICAgICAgaWYgKGsgPCAwKSBpID0gTWF0aC5mbG9vcigoZiA9IG0gKiAoMSArIGspKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZm4odlsoaSAtIDEgKyBtKSAlIG1dLCB2W2ldLCB2WyhpICsgMSkgJSBtXSwgdlsoaSArIDIpICUgbV0sIGYgLSBpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoayA8IDApIHJldHVybiB2WzBdIC0gKGZuKHZbMF0sIHZbMF0sIHZbMV0sIHZbMV0sIC1mKSAtIHZbMF0pO1xyXG4gICAgICAgICAgICBpZiAoayA+IDEpIHJldHVybiB2W21dIC0gKGZuKHZbbV0sIHZbbV0sIHZbbSAtIDFdLCB2W20gLSAxXSwgZiAtIG0pIC0gdlttXSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZm4odltpID8gaSAtIDEgOiAwXSwgdltpXSwgdlttIDwgaSArIDEgPyBtIDogaSArIDFdLCB2W20gPCBpICsgMiA/IG0gOiBpICsgMl0sIGYgLSBpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFV0aWxzOiB7XHJcbiAgICAgICAgTGluZWFyKHAwLCBwMSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHAxIC0gcDApICogdCArIHAwO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEJlcm5zdGVpbihuLCBpKSB7XHJcbiAgICAgICAgICAgIGxldCBmYyA9IEludGVycG9sYXRpb24uVXRpbHMuRmFjdG9yaWFsO1xyXG4gICAgICAgICAgICByZXR1cm4gZmMobikgLyBmYyhpKSAvIGZjKG4gLSBpKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBGYWN0b3JpYWw6IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBhID0gWzFdO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcyA9IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaTtcclxuICAgICAgICAgICAgICAgIGlmIChhW25dKSByZXR1cm4gYVtuXTtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IG47IGkgPiAxOyBpLS0pIHMgKj0gaTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYVtuXSA9IHMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pKCksXHJcblxyXG4gICAgICAgIENhdG11bGxSb20ocDAsIHAxLCBwMiwgcDMsIHQpIHtcclxuICAgICAgICAgICAgbGV0IHYwID0gKHAyIC0gcDApICogMC41LFxyXG4gICAgICAgICAgICAgICAgdjEgPSAocDMgLSBwMSkgKiAwLjUsXHJcbiAgICAgICAgICAgICAgICB0MiA9IHQgKiB0LFxyXG4gICAgICAgICAgICAgICAgdDMgPSB0ICogdDI7XHJcbiAgICAgICAgICAgIHJldHVybiAoMiAqIHAxIC0gMiAqIHAyICsgdjAgKyB2MSkgKiB0MyArICgtMyAqIHAxICsgMyAqIHAyIC0gMiAqIHYwIC0gdjEpICogdDIgKyB2MCAqIHQgKyBwMTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IEVhc2luZywgSW50ZXJwb2xhdGlvbiB9O1xyXG4iLCJpbXBvcnQgeyBFYXNpbmcsIEludGVycG9sYXRpb24gfSBmcm9tICcuL0Vhc2luZyc7XHJcbmltcG9ydCB7IFR3ZWVuTWFuYWdlciB9IGZyb20gJy4vVHdlZW5NYW5hZ2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUd2VlbiB7XHJcbiAgICBwdWJsaWMgdHdlZW5NYW5hZ2VyOiBUd2Vlbk1hbmFnZXI7XHJcbiAgICBwcm90ZWN0ZWQgX29iamVjdDogdW5rbm93bjsgLy90d2VlbiB0YXJnZXRcclxuICAgIHByb3RlY3RlZCBfdmFsdWVzU3RhcnQ6IG9iamVjdCA9IHt9O1xyXG4gICAgcHJvdGVjdGVkIF92YWx1ZXNFbmQ6IG9iamVjdCA9IHt9O1xyXG4gICAgcHJvdGVjdGVkIF92YWx1ZXNTdGFydFJlcGVhdDogb2JqZWN0ID0ge307XHJcbiAgICBwcm90ZWN0ZWQgX2R1cmF0aW9uOiBudW1iZXIgPSAxMDAwO1xyXG4gICAgcHJvdGVjdGVkIF9yZXBlYXQ6IG51bWJlciA9IDA7XHJcbiAgICBwcm90ZWN0ZWQgX3lveW86IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBfaXNQbGF5aW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgX3JldmVyc2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgX2RlbGF5VGltZTogbnVtYmVyID0gMDtcclxuICAgIHByb3RlY3RlZCBfc3RhcnRUaW1lOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIF9lYXNpbmdGdW5jdGlvbjogKGs6IG51bWJlcikgPT4gbnVtYmVyID0gRWFzaW5nLkxpbmVhci5Ob25lO1xyXG4gICAgcHJvdGVjdGVkIF9pbnRlcnBvbGF0aW9uRnVuY3Rpb246ICh2OiBhbnksIGs6IGFueSkgPT4gYW55ID0gSW50ZXJwb2xhdGlvbi5MaW5lYXI7XHJcbiAgICBwcm90ZWN0ZWQgX2NoYWluZWRUd2VlbnM6IFR3ZWVuW10gPSBbXTtcclxuICAgIHByb3RlY3RlZCBfb25TdGFydENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCBfb25TdGFydENhbGxiYWNrRmlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBfb25VcGRhdGVDYWxsYmFjazogKCkgPT4gdm9pZCA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgX29uQ29tcGxldGVDYWxsYmFjazogKCkgPT4gdm9pZCA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgX29uU3RvcENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvYmplY3Q6IHVua25vd24pIHtcclxuICAgICAgICB0aGlzLl9vYmplY3QgPSBvYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy9yZXR1cm5zIGZhbHNlIGlmIGNvbXBsZXRlZFxyXG4gICAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcHJvcGVydHk7XHJcbiAgICAgICAgaWYgKHRpbWUgPCB0aGlzLl9zdGFydFRpbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX29uU3RhcnRDYWxsYmFjayAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25TdGFydENhbGxiYWNrLmNhbGwodGhpcy5fb2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBlbGFwc2VkID0gKHRpbWUgLSB0aGlzLl9zdGFydFRpbWUpIC8gdGhpcy5fZHVyYXRpb247XHJcbiAgICAgICAgZWxhcHNlZCA9IGVsYXBzZWQgPiAxID8gMSA6IGVsYXBzZWQ7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9lYXNpbmdGdW5jdGlvbihlbGFwc2VkKTtcclxuICAgICAgICBmb3IgKHByb3BlcnR5IGluIHRoaXMuX3ZhbHVlc0VuZCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSB8fCAwO1xyXG4gICAgICAgICAgICBsZXQgZW5kID0gdGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgaWYgKGVuZCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vYmplY3RbcHJvcGVydHldID0gdGhpcy5faW50ZXJwb2xhdGlvbkZ1bmN0aW9uKGVuZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gUGFyc2VzIHJlbGF0aXZlIGVuZCB2YWx1ZXMgd2l0aCBzdGFydCBhcyBiYXNlIChlLmcuOiArMTAsIC0zKVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gc3RhcnQgKyBwYXJzZUZsb2F0KGVuZCk7IC8vLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBwcm90ZWN0IGFnYWluc3Qgbm9uIG51bWVyaWMgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZW5kID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29iamVjdFtwcm9wZXJ0eV0gPSBzdGFydCArIChlbmQgLSBzdGFydCkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fb25VcGRhdGVDYWxsYmFjayAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vblVwZGF0ZUNhbGxiYWNrLmNhbGwodGhpcy5fb2JqZWN0LCB2YWx1ZSwgZWxhcHNlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGFwc2VkID09PSAxKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXBlYXQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNGaW5pdGUodGhpcy5fcmVwZWF0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlcGVhdC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gcmVhc3NpZ24gc3RhcnRpbmcgdmFsdWVzLCByZXN0YXJ0IGJ5IG1ha2luZyBzdGFydFRpbWUgPSBub3dcclxuICAgICAgICAgICAgICAgIGZvciAocHJvcGVydHkgaW4gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSArIHBhcnNlRmxvYXQodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl95b3lvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldID0gdGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSA9IHRtcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldID0gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3lveW8pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXZlcnNlZCA9ICF0aGlzLl9yZXZlcnNlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0VGltZSA9IHRpbWUgKyB0aGlzLl9kZWxheVRpbWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2sgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2suY2FsbCh0aGlzLl9vYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSB0aGlzLl9jaGFpbmVkVHdlZW5zLmxlbmd0aDsgaSA8IG51bUNoYWluZWRUd2VlbnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYWluZWRUd2VlbnNbaV0uc3RhcnQodGltZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvKHByb3BlcnRpZXM6IG9iamVjdCwgZHVyYXRpb246IG51bWJlcik6IFR3ZWVuIHtcclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XHJcbiAgICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzU3RhcnRba2V5XSA9IHBhcnNlRmxvYXQodGhpcy5fb2JqZWN0W2tleV0pO1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNFbmRba2V5XSA9IHBhcnNlRmxvYXQocHJvcGVydGllc1trZXldKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl92YWx1ZXNFbmQgPSBwcm9wZXJ0aWVzO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnJvbShwcm9wZXJ0aWVzOiBvYmplY3QsIGR1cmF0aW9uOiBudW1iZXIpOiBUd2VlbiB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpO1xyXG4gICAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0W2tleV0gPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNba2V5XSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc0VuZFtrZXldID0gcGFyc2VGbG9hdCh0aGlzLl9vYmplY3Rba2V5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZyb21Ubyhmcm9tOiBvYmplY3QsIHRvOiBvYmplY3QsIGR1cmF0aW9uOiBudW1iZXIpOiBUd2VlbiB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGZyb20pO1xyXG4gICAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0W2tleV0gPSBwYXJzZUZsb2F0KGZyb21ba2V5XSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc0VuZFtrZXldID0gcGFyc2VGbG9hdCh0b1trZXldKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNUd2Vlbk9mKHRhcmdldDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gdGhpcy5fb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCh0aW1lPzogbnVtYmVyKTogVHdlZW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnR3ZWVuTWFuYWdlcikgdGhpcy50d2Vlbk1hbmFnZXIuYWRkKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0KHRpbWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0KHRpbWU6IG51bWJlcik6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX29uU3RhcnRDYWxsYmFja0ZpcmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRUaW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gdGltZSA6IHRoaXMudHdlZW5NYW5hZ2VyLnBhc3NlZFRpbWU7IC8vRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLl9zdGFydFRpbWUgKz0gdGhpcy5fZGVsYXlUaW1lO1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5fdmFsdWVzRW5kKSB7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGFuIEFycmF5IHdhcyBwcm92aWRlZCBhcyBwcm9wZXJ0eSB2YWx1ZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGxvY2FsIGNvcHkgb2YgdGhlIEFycmF5IHdpdGggdGhlIHN0YXJ0IHZhbHVlIGF0IHRoZSBmcm9udFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSA9IFt0aGlzLl9vYmplY3RbcHJvcGVydHldXS5jb25jYXQodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldID0gdGhpcy5fb2JqZWN0W3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSBpbnN0YW5jZW9mIEFycmF5ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldICo9IDEuMDsgLy8gRW5zdXJlcyB3ZSdyZSB1c2luZyBudW1iZXJzLCBub3Qgc3RyaW5nc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSB8fCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcCgpOiBUd2VlbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHdlZW5NYW5hZ2VyLnJlbW92ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5fb25TdG9wQ2FsbGJhY2sgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25TdG9wQ2FsbGJhY2suY2FsbCh0aGlzLl9vYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0b3BDaGFpbmVkVHdlZW5zKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BDaGFpbmVkVHdlZW5zKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBudW1DaGFpbmVkVHdlZW5zID0gdGhpcy5fY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fY2hhaW5lZFR3ZWVuc1tpXS5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxheShhbW91bnQ6IG51bWJlcik6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9kZWxheVRpbWUgPSBhbW91bnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlcGVhdCh0aW1lczogbnVtYmVyKTogVHdlZW4ge1xyXG4gICAgICAgIHRoaXMuX3JlcGVhdCA9IHRpbWVzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB5b3lvKHlveW86IGJvb2xlYW4pOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5feW95byA9IHlveW87XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVhc2luZyhlYXNpbmc6IChrOiBudW1iZXIpID0+IG51bWJlcik6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9lYXNpbmdGdW5jdGlvbiA9IGVhc2luZztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJwb2xhdGlvbihpbnRlcnBvbGF0aW9uKTogVHdlZW4ge1xyXG4gICAgICAgIHRoaXMuX2ludGVycG9sYXRpb25GdW5jdGlvbiA9IGludGVycG9sYXRpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYWluKC4uLnR3ZWVuczogVHdlZW5bXSk6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9jaGFpbmVkVHdlZW5zID0gdHdlZW5zO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN0YXJ0KGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogVHdlZW4ge1xyXG4gICAgICAgIHRoaXMuX29uU3RhcnRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblVwZGF0ZShjYWxsYmFjazogKCkgPT4gdm9pZCk6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9vblVwZGF0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ29tcGxldGUoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5fb25Db21wbGV0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU3RvcChjYWxsYmFjazogKCkgPT4gdm9pZCk6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9vblN0b3BDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXN0YXJ0KHBhdXNlX2R1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdGFydFRpbWUgKz0gcGF1c2VfZHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZUR1cmF0aW9uKG5ld19kdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZHVyYXRpb24gPSBuZXdfZHVyYXRpb247XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVVwZGF0ZSwgVXBkYXRlTGlzdCB9IGZyb20gJy4uL3V0aWxzL1VwZGF0ZUxpc3QnO1xyXG5pbXBvcnQgeyBUd2VlbiB9IGZyb20gJy4vVHdlZW4nO1xyXG5leHBvcnQgeyBFYXNpbmcgfSBmcm9tICcuL0Vhc2luZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHdlZW5NYW5hZ2VyIGV4dGVuZHMgVXBkYXRlTGlzdCB7XHJcbiAgICBwdWJsaWMgcGFzc2VkVGltZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5wYXNzZWRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhc3NlZFRpbWUgKz0gZGVsdGE7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICBsZXQgbiA9IHRoaXMudXBkYXRlSXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgaXRlbTogSVVwZGF0ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID4gLTE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMudXBkYXRlSXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0udXBkYXRlKHRoaXMucGFzc2VkVGltZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW1zW3RoaXMucmVtb3ZlSXRlbXMubGVuZ3RoXSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbm93IHJlbW92ZSBpdGVtc1xyXG4gICAgICAgICAgICBuID0gdGhpcy5yZW1vdmVJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChuID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5yZW1vdmVJdGVtc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW1zLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSh0YXJnZXQ6IHVua25vd24pOiBUd2VlbiB7XHJcbiAgICAgICAgY29uc3QgdHcgPSBuZXcgVHdlZW4odGFyZ2V0KTtcclxuICAgICAgICB0dy50d2Vlbk1hbmFnZXIgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0dztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSh0YXJnZXQ6IHVua25vd24sIHR3ZWVuTWFuYWdlcjogVHdlZW5NYW5hZ2VyID0gbnVsbCk6IFR3ZWVuIHtcclxuICAgICAgICBjb25zdCB0dyA9IG5ldyBUd2Vlbih0YXJnZXQpO1xyXG4gICAgICAgIHR3LnR3ZWVuTWFuYWdlciA9IHR3ZWVuTWFuYWdlciB8fCBUd2Vlbk1hbmFnZXIuaW5zdGFuY2U7XHJcbiAgICAgICAgcmV0dXJuIHR3O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBraWxsVHdlZW5zT2YodGFyZ2V0OiB1bmtub3duKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMudXBkYXRlSXRlbXMubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgICAgIHR3ZWVuO1xyXG4gICAgICAgICAgICBmb3IgKDsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIHR3ZWVuID0gdGhpcy51cGRhdGVJdGVtc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmICh0d2Vlbi5pc1R3ZWVuT2YodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMga2lsbFR3ZWVuc09mKHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgVHdlZW5NYW5hZ2VyLmluc3RhbmNlLmtpbGxUd2VlbnNPZih0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2luZ2xldG9uXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFR3ZWVuTWFuYWdlclxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogVHdlZW5NYW5hZ2VyIHtcclxuICAgICAgICBpZiAoIVR3ZWVuTWFuYWdlci5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgVHdlZW5NYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBUd2Vlbk1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFR3ZWVuTWFuYWdlci5faW5zdGFuY2U7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Vhc2luZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVHdlZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL1R3ZWVuTWFuYWdlcic7IiwiaW50ZXJmYWNlIElRdWV1ZUl0ZW0ge1xyXG4gICAgZXZlbnRJZDogc3RyaW5nO1xyXG4gICAgYXJnczogdW5rbm93bltdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRRdWV1ZSBleHRlbmRzIFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyIHtcclxuXHJcbiAgICBwcml2YXRlIF9xdWV1ZTogSVF1ZXVlSXRlbVtdID0gW107XHJcblxyXG4gICAgcHVibGljIGFkZChldmVudElkOiBzdHJpbmcsIC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3F1ZXVlLnB1c2goe1xyXG4gICAgICAgICAgICBldmVudElkLCBhcmdzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKF9kZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuX3F1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbTogSVF1ZXVlSXRlbSA9IHRoaXMuX3F1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChpdGVtLmV2ZW50SWQsIC4uLml0ZW0uYXJncylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU2VxdWVuY2Uge1xyXG4gICAgcHVibGljIGxpc3Q6IHVua25vd25bXSA9IFtdO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc3R1ZmY/OiB1bmtub3duW10sIHJhbmRvbWlzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHN0dWZmKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHN0dWZmLCByYW5kb21pc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKHN0dWZmOiB1bmtub3duLCByYW5kb21pc2U6IGJvb2xlYW4gPSBmYWxzZSk6IFNlcXVlbmNlIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdHVmZikpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSA8dW5rbm93bltdPnN0dWZmO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCguLi5pdGVtcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0W3RoaXMubGlzdC5sZW5ndGhdID0gc3R1ZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyYW5kb21pc2UpIHRoaXMucmFuZG9taXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZShzdHVmZjogdW5rbm93bik6IFNlcXVlbmNlIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdHVmZikpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSA8dW5rbm93bltdPnN0dWZmO1xyXG4gICAgICAgICAgICBjb25zdCBuID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3QuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB0aGlzLmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0LmluZGV4T2Yoc3R1ZmYpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByYW5kb21pc2UoKTogU2VxdWVuY2Uge1xyXG4gICAgICAgIFNlcXVlbmNlLnJhbmRvbWlzZUxpc3QodGhpcy5saXN0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV4dCgpOiB1bmtub3duIHtcclxuICAgICAgICBsZXQgaXRlbSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSB0aGlzLmxpc3Quc2hpZnQoKTtcclxuICAgICAgICAgICAgdGhpcy5saXN0W3RoaXMubGlzdC5sZW5ndGhdID0gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZXZpb3VzKCk6IHVua25vd24ge1xyXG4gICAgICAgIGxldCBpdGVtID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaXRlbSA9IHRoaXMubGlzdC5wb3AoKTtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnVuc2hpZnQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgSE9MREVSID0gW107XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21pc2VMaXN0ID0gKGxpc3Q6IHVua25vd25bXSk6IHVua25vd25bXSA9PiB7XHJcbiAgICAgICAgU2VxdWVuY2UuSE9MREVSLnB1c2goLi4ubGlzdCk7XHJcbiAgICAgICAgbGlzdC5sZW5ndGggPSAwO1xyXG4gICAgICAgIHdoaWxlIChTZXF1ZW5jZS5IT0xERVIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFNlcXVlbmNlLkhPTERFUi5sZW5ndGgpO1xyXG4gICAgICAgICAgICBsaXN0W2xpc3QubGVuZ3RoXSA9IFNlcXVlbmNlLkhPTERFUi5zcGxpY2UoaW5kZXgsIDEpWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSVVwZGF0ZSB9IGZyb20gJy4vVXBkYXRlTGlzdCc7XHJcblxyXG5pbnRlcmZhY2UgSUFjdGlvbiB7XHJcbiAgICBfdGFyZ2V0VGltZTogbnVtYmVyO1xyXG4gICAgX2NhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGltZW91dCBpbXBsZW1lbnRzIElVcGRhdGUge1xyXG4gICAgcHJpdmF0ZSBfcG9vbDogSUFjdGlvbltdO1xyXG4gICAgcHJpdmF0ZSBfYWN0aW9uczogSUFjdGlvbltdID0gW107XHJcbiAgICBwcml2YXRlIF9jYW5jZWxsZWRBY3Rpb25zOiBJQWN0aW9uW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb29sU2l6ZTogbnVtYmVyID0gNTApIHtcclxuICAgICAgICB0aGlzLl9wb29sID0gdGhpcy5fY3JlYXRlUG9vbChwb29sU2l6ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgX2NyZWF0ZVBvb2woc2l6ZTogbnVtYmVyKTogSUFjdGlvbltdIHtcclxuICAgICAgICBjb25zdCBwb29sID0gW107XHJcbiAgICAgICAgd2hpbGUgKHNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIHBvb2wucHVzaCh7IF90YXJnZXRUaW1lOiAtMSwgX2NhbGxiYWNrOiBudWxsIH0pO1xyXG4gICAgICAgICAgICBzaXplLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb29sO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF9uZXh0KCk6IElBY3Rpb24ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9wb29sLnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5fcG9vbFt0aGlzLl9wb29sLmxlbmd0aF0gPSBpdGVtO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxheShjYWxsYmFjazogKCkgPT4gdm9pZCwgbXM6IG51bWJlcik6IElBY3Rpb24ge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuX25leHQoKTtcclxuICAgICAgICBhY3Rpb24uX3RhcmdldFRpbWUgPSBtcyB8fCAtMTtcclxuICAgICAgICBhY3Rpb24uX2NhbGxiYWNrID0gY2FsbGJhY2sgfHwgbnVsbDtcclxuICAgICAgICB0aGlzLl9hY3Rpb25zW3RoaXMuX2FjdGlvbnMubGVuZ3RoXSA9IGFjdGlvbjtcclxuICAgICAgICByZXR1cm4gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZWxhcHNlZFRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLl9hY3Rpb25zLmxlbmd0aDtcclxuICAgICAgICBpZiAobiA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGksIGFjdGlvbjtcclxuICAgICAgICAgICAgZm9yIChpID0gbiAtIDE7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSB0aGlzLl9hY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIG9uZXMgdGhhdCB3ZXJlIGFscmVhZHkgY2FuY2VsbGVkIG9yIGZpcmVkXHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLl90YXJnZXRUaW1lID09PSAtMSB8fCAhYWN0aW9uLl9jYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbGxlZEFjdGlvbnNbdGhpcy5fY2FuY2VsbGVkQWN0aW9ucy5sZW5ndGhdID0gYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24uX3RhcmdldFRpbWUgPiAwICYmIGFjdGlvbi5fY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uX3RhcmdldFRpbWUgLT0gZWxhcHNlZFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5fdGFyZ2V0VGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gYWN0aW9uLl9jYWxsYmFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLl9jYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5fdGFyZ2V0VGltZSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBub3cgcmVtb3ZlIGFueSBjYW5jZWxsZWQgb25lc1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5fY2FuY2VsbGVkQWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSB0aGlzLl9jYW5jZWxsZWRBY3Rpb25zLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgaSA9IHRoaXMuX2FjdGlvbnMuaW5kZXhPZihhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FjdGlvbnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWwoYWN0aW9uOiBJQWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgYWN0aW9uLl90YXJnZXRUaW1lID0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQgIHtcclxuICAgICAgICBjb25zdCBuID0gdGhpcy5fYWN0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG4gPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBpLCBhY3Rpb247XHJcbiAgICAgICAgICAgIGZvciAoaSA9IG4gLSAxOyBpID4gLTE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uID0gdGhpcy5fYWN0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5fY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLl90YXJnZXRUaW1lID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYWN0aW9ucy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQgIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5fcG9vbCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBJVXBkYXRlIHtcclxuICAgIHVwZGF0ZTogKGRlbHRhOiBudW1iZXIpID0+IHZvaWQgfCBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBkYXRlTGlzdCB7XHJcbiAgICBwdWJsaWMgdXBkYXRlSXRlbXM6IElVcGRhdGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlbW92ZUl0ZW1zOiBJVXBkYXRlW10gPSBbXTtcclxuICAgIHB1YmxpYyBpc1BhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSxcclxuICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICBuID0gdGhpcy51cGRhdGVJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IG4gLSAxOyBpID4gLTE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMudXBkYXRlSXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICBpdGVtLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9ub3cgcmVtb3ZlIGl0ZW1zXHJcbiAgICAgICAgICAgIG4gPSB0aGlzLnJlbW92ZUl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKG4gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMucmVtb3ZlSXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXJnZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVJdGVtcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGl0ZW0sXHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIG4gPSB0aGlzLnVwZGF0ZUl0ZW1zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSBuIC0gMTsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtc1tpXSA9IHRoaXMudXBkYXRlSXRlbXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoaXRlbTogSVVwZGF0ZSk6IElVcGRhdGUge1xyXG4gICAgICAgIC8vZG9uJ3QgYWxsb3cgYWRkaW5nIG1vcmUgdGhhbiBvbmNlIVxyXG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZUl0ZW1zLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbXNbdGhpcy51cGRhdGVJdGVtcy5sZW5ndGhdID0gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZShpdGVtOiBJVXBkYXRlKTogSVVwZGF0ZSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVJdGVtc1t0aGlzLnJlbW92ZUl0ZW1zLmxlbmd0aF0gPSBpdGVtO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfcmVtb3ZlKGl0ZW06IElVcGRhdGUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudXBkYXRlSXRlbXMuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkgdGhpcy51cGRhdGVJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlSXRlbXMubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50UXVldWUgfSBmcm9tIFwiLi9FdmVudFF1ZXVlXCI7XHJcbmltcG9ydCB7IFVwZGF0ZUxpc3QgfSBmcm9tIFwiLi9VcGRhdGVMaXN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUxvb3AgZXh0ZW5kcyBVcGRhdGVMaXN0e1xyXG4gICAgcHJpdmF0ZSBhY2N1bXVsYXRvcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY3VycmVudFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGludGVydmFsOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZnBzOiBudW1iZXIgPSA2MDtcclxuICAgIHByaXZhdGUgZ2FtZUxvb3BJZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ldmVudFF1ZXVlOiBFdmVudFF1ZXVlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IDEwMDAgLyB0aGlzLmZwcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKTogVXBkYXRlTG9vcCB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmdhbWVMb29wSWQpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUxvb3BJZCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlLCB0aGlzLmludGVydmFsKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZ2FtZUxvb3BJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShfZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5ld1RpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGNvbnN0IGVsYXBzZWQgPSBuZXdUaW1lIC0gdGhpcy5jdXJyZW50VGltZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gbmV3VGltZTtcclxuICAgICAgICB0aGlzLmFjY3VtdWxhdG9yICs9IGVsYXBzZWQ7XHJcbiAgICAgICAgLy91c2UgYWNjdW11bGF0b3Igc3lzdGVtIGZvciBwcm9jZXNzaW5nIHRpbWUgd2l0aCBmaXhlZCB0aW1lIHN0ZXBcclxuICAgICAgICBjb25zdCBjaHVuayA9IHRoaXMuaW50ZXJ2YWw7XHJcbiAgICAgICAgd2hpbGUodGhpcy5hY2N1bXVsYXRvciA+IGNodW5rKXtcclxuICAgICAgICAgICAgdGhpcy5hY2N1bXVsYXRvciAtPSBjaHVuaztcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlKGNodW5rKTtcclxuICAgICAgICAgICAgLy9ub3cgcHJvY2VzcyB0aGUgZXZlbnQgcXVldWVcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRRdWV1ZS51cGRhdGUoY2h1bmspXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9UaW1lb3V0JztcclxuZXhwb3J0ICogZnJvbSAnLi9VcGRhdGVMaXN0JztcclxuZXhwb3J0ICogZnJvbSAnLi9TZXF1ZW5jZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRXZlbnRRdWV1ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVXBkYXRlTG9vcCc7IiwibW9kdWxlLmV4cG9ydHMgPSBQSVhJOyJdLCJzb3VyY2VSb290IjoiIn0=
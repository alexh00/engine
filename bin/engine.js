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
/*! exports provided: Engine, Loader, Screen, ScreenManager, Settings, version, EngineEvents, Timeout, UpdateList, Sequence, EventQueue, UpdateLoop, Easing, Interpolation, Tween, TweenManager, Sound, SoundChannel, SoundPlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return Engine; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _audio_Sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio/Sound */ "./src/audio/Sound.ts");
/* harmony import */ var _core_EngineEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/EngineEvents */ "./src/core/EngineEvents.ts");
/* harmony import */ var _core_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Loader */ "./src/core/Loader.ts");
/* harmony import */ var _core_ScreenManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/ScreenManager */ "./src/core/ScreenManager.ts");
/* harmony import */ var _core_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/Settings */ "./src/core/Settings.ts");
/* harmony import */ var _core_Unloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/Unloader */ "./src/core/Unloader.ts");
/* harmony import */ var _core_version__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/version */ "./src/core/version.ts");
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tween */ "./src/tween/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core */ "./src/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _core__WEBPACK_IMPORTED_MODULE_10__["Loader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return _core__WEBPACK_IMPORTED_MODULE_10__["Screen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenManager", function() { return _core__WEBPACK_IMPORTED_MODULE_10__["ScreenManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return _core__WEBPACK_IMPORTED_MODULE_10__["Settings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _core__WEBPACK_IMPORTED_MODULE_10__["version"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EngineEvents", function() { return _core__WEBPACK_IMPORTED_MODULE_10__["EngineEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeout", function() { return _utils__WEBPACK_IMPORTED_MODULE_9__["Timeout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateList", function() { return _utils__WEBPACK_IMPORTED_MODULE_9__["UpdateList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sequence", function() { return _utils__WEBPACK_IMPORTED_MODULE_9__["Sequence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventQueue", function() { return _utils__WEBPACK_IMPORTED_MODULE_9__["EventQueue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateLoop", function() { return _utils__WEBPACK_IMPORTED_MODULE_9__["UpdateLoop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Easing", function() { return _tween__WEBPACK_IMPORTED_MODULE_8__["Easing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interpolation", function() { return _tween__WEBPACK_IMPORTED_MODULE_8__["Interpolation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tween", function() { return _tween__WEBPACK_IMPORTED_MODULE_8__["Tween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenManager", function() { return _tween__WEBPACK_IMPORTED_MODULE_8__["TweenManager"]; });

/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./audio */ "./src/audio/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sound", function() { return _audio__WEBPACK_IMPORTED_MODULE_11__["Sound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundChannel", function() { return _audio__WEBPACK_IMPORTED_MODULE_11__["SoundChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundPlay", function() { return _audio__WEBPACK_IMPORTED_MODULE_11__["SoundPlay"]; });











/// <reference path="typings/pixi.js.d.ts" />
var Engine = /** @class */ (function () {
    function Engine() {
        console.log('Engine version', _core_version__WEBPACK_IMPORTED_MODULE_7__["version"].code);
    }
    Engine.prototype.start = function (screenMap) {
        //probably want to use the pixi loader for everything...
        //so create the app straight away
        this.app = this._createPixiApp();
        this.events = this._createEvents(screenMap);
        //load the config
        this.settings = new _core_Settings__WEBPACK_IMPORTED_MODULE_5__["Settings"](this.app.loader, this.events);
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
        this.loader = new _core_Loader__WEBPACK_IMPORTED_MODULE_3__["Loader"](this.app.loader);
        this.unloader = new _core_Unloader__WEBPACK_IMPORTED_MODULE_6__["Unloader"](this.loader);
        //create update loop
        this.updateLoop = this._createUpdateLoop();
        //create tween manager, add to update loop
        this.updateLoop.add(_tween__WEBPACK_IMPORTED_MODULE_8__["TweenManager"].instance);
        //create screen manager
        this.screenManager = this._createScreenManager();
    };
    Engine.prototype._createUpdateLoop = function () {
        var updateLoop = new _utils__WEBPACK_IMPORTED_MODULE_9__["UpdateLoop"](this.events);
        updateLoop.start();
        return updateLoop;
    };
    Engine.prototype._createScreenManager = function () {
        var screenManager = new _core_ScreenManager__WEBPACK_IMPORTED_MODULE_4__["ScreenManager"](this.events, this.settings, this.loader, this.unloader);
        this.app.stage.addChild(screenManager.root);
        this.updateLoop.add(screenManager);
        return screenManager;
    };
    Engine.prototype._createEvents = function (screenMap) {
        var _this = this;
        var events = new _utils__WEBPACK_IMPORTED_MODULE_9__["EventQueue"]();
        events.on(_core_Settings__WEBPACK_IMPORTED_MODULE_5__["Settings"].CONFIG_LOADED, function () {
            //config is loaded - now build the engine
            _this.build();
            //set screenmap
            _this.screenManager.screenMap = screenMap;
            //load global assets
            _this.loader.loadAssets(_this.settings.getManifest())
                .then(function () {
                _audio_Sound__WEBPACK_IMPORTED_MODULE_1__["Sound"].instance.addSounds(_this.loader.fetchSounds());
                //now show first screen
                events.emit(_core_EngineEvents__WEBPACK_IMPORTED_MODULE_2__["EngineEvents"].APP_READY);
            });
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

/***/ "./src/audio/Sound.ts":
/*!****************************!*\
  !*** ./src/audio/Sound.ts ***!
  \****************************/
/*! exports provided: Sound, SoundChannel, SoundPlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sound", function() { return Sound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundChannel", function() { return SoundChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundPlay", function() { return SoundPlay; });
//a manager for playing web audio sounds
var Sound = /** @class */ (function () {
    //TODO - have an internal event dispatcher
    //probably make this a singleton
    function Sound() {
        var _this = this;
        this._enabled = false; //TODO - check for this
        this.add = function (soundData) {
            _this.context.decodeAudioData(soundData.buffer).then(function (decoded) {
                soundData.buffer = decoded;
                // - handle sound sprites correctly
                //need a different sound data for each one
                if (soundData.sprites) {
                    soundData.sprites.forEach(function (info) {
                        var data = _this._cloneData(soundData);
                        data.id = info.id;
                        data.start = info.start;
                        data.duration = info.duration;
                        _this._buffers[info.id] = data;
                    });
                }
                else {
                    _this._buffers[soundData.id] = soundData;
                }
            });
        };
        if (Sound._instance) {
            throw (new Error("Sound singleton already exists"));
        }
        try {
            this.context = new AudioContext();
        }
        catch (error) {
            this._enabled = false;
            return this;
        }
        this._enabled = true;
        //buffer to fix ios bugs
        this._scratchBuffer = this.context.createBuffer(1, 1, 22050);
        //
        this._createRouting();
        this._buffers = {};
    }
    Sound.prototype._createRouting = function () {
        //main output > global mute > context mutes
        this.globalGain = new SoundChannel(this.context, this.context.destination);
        //create sfx, music and env
        this.channels = {
            sfx: new SoundChannel(this.context, this.globalGain.output),
            music: new SoundChannel(this.context, this.globalGain.output),
            env: new SoundChannel(this.context, this.globalGain.output)
        };
    };
    Sound.prototype.play = function (id, volume, loop) {
        if (volume === void 0) { volume = 1; }
        if (loop === void 0) { loop = -1; }
        if (this._enabled) {
            var soundData = this._buffers[id];
            var soundPlay = new SoundPlay(soundData, this.context);
            //choose channel according to data -> ISoundData.group
            var channel = this.getChannel(soundData);
            channel.add(soundPlay);
            //play it
            soundPlay.play();
            //TODO - need to store the sound so it can be stopped if needed
        }
    };
    Sound.prototype.getChannel = function (soundData) {
        switch (soundData.group) {
            case 'music': return this.channels.music;
            case 'env': return this.channels.env;
            default: return this.channels.sfx;
        }
    };
    Sound.prototype.stop = function (id) {
        //TODO
    };
    Sound.prototype.addSounds = function (sounds) {
        sounds.forEach(this.add);
        //TODO - monitor when decoding is completed
    };
    Sound.prototype.remove = function (id) {
        //find the main sound then remove all with that buffer
    };
    Sound.prototype._cloneData = function (soundData) {
        var id = soundData.id, buffer = soundData.buffer, group = soundData.group, extension = soundData.extension, url = soundData.url;
        return { id: id, buffer: buffer, group: group, extension: extension, url: url };
    };
    Object.defineProperty(Sound.prototype, "scratchBuffer", {
        get: function () {
            return this._scratchBuffer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sound, "instance", {
        get: function () {
            if (!Sound._instance) {
                Sound._instance = new Sound();
            }
            return Sound._instance;
        },
        enumerable: false,
        configurable: true
    });
    return Sound;
}());

//like a channel on a mixer - volume control
//just a wrapper for a gain node
var SoundChannel = /** @class */ (function () {
    function SoundChannel(context, target) {
        this.context = context;
        this.output = this.context.createGain();
        this.output.connect(target);
    }
    Object.defineProperty(SoundChannel.prototype, "volume", {
        get: function () {
            return this.output.gain.value;
        },
        set: function (value) {
            this.output.gain.setValueAtTime(value, this.context.currentTime);
        },
        enumerable: false,
        configurable: true
    });
    SoundChannel.prototype.add = function (sound) {
        sound.output.connect(this.output);
    };
    SoundChannel.prototype.connect = function (node) {
        this.output.connect(node);
    };
    SoundChannel.prototype.disconnect = function (node) {
        this.output.disconnect(node);
    };
    return SoundChannel;
}());

//struggling to name this appropriately
var SoundPlay = /** @class */ (function () {
    function SoundPlay(soundData, context) {
        this.soundData = soundData;
        this.context = context;
        this.startTime = 0; //for pause handling
        // - create an audiobuffersource node
        this.source = this.context.createBufferSource();
        this.source.buffer = this.soundData.buffer;
        //volume controller
        this.output = this.context.createGain();
        //TODO - set the volume
        this.source.connect(this.output); //this step is important ;)
    }
    SoundPlay.prototype.play = function () {
        // - loop, start time, duration, etc
        // this.source.start()
        if (this.duration > -1) {
            this.source.start(0, this.start, this.duration);
        }
        else {
            this.source.start(0, this.start);
        }
    };
    Object.defineProperty(SoundPlay.prototype, "start", {
        get: function () {
            return this.soundData.start || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundPlay.prototype, "duration", {
        get: function () {
            if (this.soundData.loop) {
                //TODO
            }
            else {
                return this.soundData.duration || -1;
            }
        },
        enumerable: false,
        configurable: true
    });
    SoundPlay.prototype.stop = function () {
        if (this.source) {
            this.dispose();
        }
    };
    Object.defineProperty(SoundPlay.prototype, "volume", {
        get: function () {
            return this.output.gain.value;
        },
        set: function (value) {
            this.output.gain.setValueAtTime(value, this.context.currentTime);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundPlay.prototype, "time", {
        get: function () {
            if (this.source) {
                this.context.currentTime - this.startTime;
            }
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    SoundPlay.prototype.dispose = function () {
        this.source.stop(0);
        this.source.disconnect(0);
        this.output.disconnect(0);
        //this has to be independently try catched as throws on platforms other than ios
        try {
            this.source.buffer = Sound.instance.scratchBuffer;
        }
        catch (e) {
            //console.log('scratch buffer error! ', e);
        }
        this.source = null;
        this.output = null;
    };
    return SoundPlay;
}());



/***/ }),

/***/ "./src/audio/index.ts":
/*!****************************!*\
  !*** ./src/audio/index.ts ***!
  \****************************/
/*! exports provided: Sound, SoundChannel, SoundPlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sound */ "./src/audio/Sound.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sound", function() { return _Sound__WEBPACK_IMPORTED_MODULE_0__["Sound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundChannel", function() { return _Sound__WEBPACK_IMPORTED_MODULE_0__["SoundChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundPlay", function() { return _Sound__WEBPACK_IMPORTED_MODULE_0__["SoundPlay"]; });




/***/ }),

/***/ "./src/core/EngineEvents.ts":
/*!**********************************!*\
  !*** ./src/core/EngineEvents.ts ***!
  \**********************************/
/*! exports provided: EngineEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineEvents", function() { return EngineEvents; });
var EngineEvents;
(function (EngineEvents) {
    EngineEvents["APP_READY"] = "app-ready";
    EngineEvents["SHOW_SCREEN"] = "screen";
})(EngineEvents || (EngineEvents = {}));


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
    function Loader(_loader) {
        this._loader = _loader;
        this._supportedTypes = ['ogg', 'm4a', 'mp3'];
        this._assetData = {};
        this._setResourceTypes();
    }
    Loader.prototype._setResourceTypes = function () {
        var _this = this;
        //set it to use xhr for sounds
        this._supportedTypes.forEach(function (type) { return _this.setXhr(type); });
        //choose which audio format
        this.audioFormat = this._setAudioFormat();
    };
    Loader.prototype._setAudioFormat = function () {
        var a = document.createElement('audio');
        var ogg = !!(a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
        return ogg ? '.ogg' : '.m4a';
    };
    Loader.prototype.setXhr = function (extension) {
        pixi_js__WEBPACK_IMPORTED_MODULE_0__["LoaderResource"].setExtensionLoadType(extension, pixi_js__WEBPACK_IMPORTED_MODULE_0__["LoaderResource"].LOAD_TYPE.XHR);
        pixi_js__WEBPACK_IMPORTED_MODULE_0__["LoaderResource"].setExtensionXhrType(extension, pixi_js__WEBPACK_IMPORTED_MODULE_0__["LoaderResource"].XHR_RESPONSE_TYPE.BUFFER);
    };
    Loader.prototype.fetchSounds = function () {
        var _this = this;
        var resources = this._loader.resources;
        return Object.keys(resources).filter(function (id) {
            var resource = resources[id];
            return !!resource.xhr && _this._supportedTypes.includes(resource.extension);
        }).map(function (id) {
            var resource = resources[id];
            //also sound group? loop? 
            //TODO - storing by id is going to be problematic - need to change this
            //should use file name or path
            var assetData = _this._assetData[id];
            // - also sound sprites...
            var spriteData = _this.getAudioSpriteData(assetData);
            var sprites = spriteData && spriteData.sprites;
            return {
                id: id,
                buffer: resource.data,
                extension: resource.extension,
                group: assetData.group,
                loop: assetData.loop,
                url: resource.url,
                sprites: sprites
            };
        });
    };
    Loader.prototype.getAudioSpriteData = function (assetData) {
        // - find the resource that is the corresponding json...
        var resources = this._loader.resources;
        var audioSrc = assetData.src;
        var slashIndex = audioSrc.lastIndexOf('/') + 1;
        var fname = audioSrc.substring(slashIndex);
        var path = audioSrc.substring(0, slashIndex);
        var dotIndex = fname.lastIndexOf('.');
        //whats the file name we are looking for?
        var jsonName = dotIndex > -1 ? fname.substring(0, dotIndex) + '.json' : fname + '.json';
        //whats the url we are looking for?
        var jsonURL = path + jsonName;
        var resourceKey = Object.keys(resources).find(function (key) {
            var resource = resources[key];
            //don't check the name - the name is the id so can be different to file name
            return resource.url === jsonURL;
        });
        if (resourceKey) {
            var resource = resources[resourceKey];
            return resource.data;
        }
        return null;
    };
    Loader.prototype.loadAssets = function (assets, load) {
        var _this = this;
        if (load === void 0) { load = true; }
        return new Promise(function (resolve) {
            assets.forEach(function (asset) {
                //TODO - pass through more information eg sound groups?
                //store the data by id for later lookup after loading
                //wait this won't work, what if file and json have the same id...
                _this._assetData[asset.id] = asset;
                var src = asset.audio ? asset.src + _this.audioFormat : asset.src;
                _this._loader.add(asset.id, src);
            });
            if (load) {
                _this._loader.onComplete.once(resolve);
                _this._loader.load();
            }
        });
    };
    Loader.prototype.unload = function (asset) {
        delete this._assetData[asset.id];
        delete this._loader.resources[asset.id];
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
/* harmony import */ var _EngineEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EngineEvents */ "./src/core/EngineEvents.ts");

var ScreenManager = /** @class */ (function () {
    function ScreenManager(_events, _settings, _loader, _unloader) {
        var _this = this;
        this._events = _events;
        this._settings = _settings;
        this._loader = _loader;
        this._unloader = _unloader;
        this.showScreen = function (id) {
            // - validate id
            if (!_this._screenMap.hasOwnProperty(id)) {
                console.error('Screen type not found', id);
            }
            // - Unload first if necessary too
            if (_this.currentScreen) {
                var assetsToUnLoad = _this._settings.assets[_this.currentScreen.id];
                _this._unloader.unload(assetsToUnLoad);
            }
            var ScreenType = _this._screenMap[id];
            // - preload first if necessary
            var assetsToLoad = _this._settings.assets[id];
            if (assetsToLoad) {
                _this._loader.loadAssets(assetsToLoad).then(function () {
                    _this.disposeScreen();
                    _this.currentScreen = _this._createScreen(ScreenType, id);
                });
            }
            else {
                _this.disposeScreen();
                _this.currentScreen = _this._createScreen(ScreenType, id);
            }
        };
        this._size = this._settings.size;
        this.root = new PIXI.Container();
        this.root.position.set(this._size.width / 2, this._size.height / 2);
        this._events.on(_EngineEvents__WEBPACK_IMPORTED_MODULE_0__["EngineEvents"].SHOW_SCREEN, this.showScreen);
    }
    Object.defineProperty(ScreenManager.prototype, "screenMap", {
        set: function (map) {
            this._screenMap = map;
        },
        enumerable: false,
        configurable: true
    });
    ScreenManager.prototype.update = function (delta) {
        if (this.currentScreen) {
            this.currentScreen.update(delta);
        }
    };
    ScreenManager.prototype._createScreen = function (ScreenType, id) {
        var screen = new ScreenType({
            screenWidth: this._size.width,
            screenHeight: this._size.height,
            screenEvents: this._events,
            id: id
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
    Settings.prototype.getManifest = function (key) {
        if (!key) {
            key = 'global';
        }
        return this.assets[key];
    };
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

/***/ "./src/core/Unloader.ts":
/*!******************************!*\
  !*** ./src/core/Unloader.ts ***!
  \******************************/
/*! exports provided: Unloader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unloader", function() { return Unloader; });
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../audio */ "./src/audio/index.ts");

var Unloader = /** @class */ (function () {
    function Unloader(_loader) {
        this._loader = _loader;
    }
    Unloader.prototype.unload = function (assets) {
        var _this = this;
        assets && assets.forEach(function (asset) {
            // - remove from loader
            _this._loader.unload(asset);
            // - remove from texture cache
            delete PIXI.utils.TextureCache[asset.id];
            // - remove from BaseTextureCache
            delete PIXI.utils.BaseTextureCache[asset.id];
            // - remove from sound engine
            _audio__WEBPACK_IMPORTED_MODULE_0__["Sound"].instance.remove(asset.id);
        });
    };
    return Unloader;
}());



/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/*! exports provided: Loader, Screen, ScreenManager, Settings, version, EngineEvents */
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

/* harmony import */ var _EngineEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EngineEvents */ "./src/core/EngineEvents.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EngineEvents", function() { return _EngineEvents__WEBPACK_IMPORTED_MODULE_5__["EngineEvents"]; });









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
var version = { code: '0.1.26' };



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbmdpbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvRW5naW5lLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy9hdWRpby9Tb3VuZC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvYXVkaW8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL2NvcmUvRW5naW5lRXZlbnRzLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy9jb3JlL0xvYWRlci50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9TY3JlZW4udHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL2NvcmUvU2NyZWVuTWFuYWdlci50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9VbmxvYWRlci50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS92ZXJzaW9uLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy90d2Vlbi9FYXNpbmcudHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL3R3ZWVuL1R3ZWVuLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy90d2Vlbi9Ud2Vlbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL3R3ZWVuL2luZGV4LnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy91dGlscy9FdmVudFF1ZXVlLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy91dGlscy9TZXF1ZW5jZS50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvVGltZW91dC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvVXBkYXRlTGlzdC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvVXBkYXRlTG9vcC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZW5naW5lL2V4dGVybmFsIFwiUElYSVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qiw4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Q0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU1RSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoRztJQUNMLENBQUM7SUFFRCxLQUFLLEVBQUU7UUFDSCxNQUFNLFlBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ1osT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFFRCxTQUFTLFlBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVixJQUFJLEVBQUUsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUN2QyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRUQsU0FBUyxFQUFFLENBQUM7WUFDUixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRVosT0FBTyxVQUFVLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxFQUFFO1FBRUosVUFBVSxZQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ3hCLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFDcEIsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFDcEIsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQ1YsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEIsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbEcsQ0FBQztLQUNKO0NBQ0osQ0FBQztBQUUrQjs7Ozs7Ozs7Ozs7OztBQ2xSakM7QUFBQTtBQUFBO0FBQWlEO0FBR2pEO0lBc0JJLGVBQVksTUFBZTtRQW5CakIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4Qix1QkFBa0IsR0FBVyxFQUFFLENBQUM7UUFDaEMsY0FBUyxHQUFXLElBQUksQ0FBQztRQUN6QixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZUFBVSxHQUFXLElBQUksQ0FBQztRQUMxQixvQkFBZSxHQUEwQiw4Q0FBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDNUQsMkJBQXNCLEdBQTRCLHFEQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3ZFLG1CQUFjLEdBQVksRUFBRSxDQUFDO1FBQzdCLHFCQUFnQixHQUFlLElBQUksQ0FBQztRQUNwQywwQkFBcUIsR0FBWSxLQUFLLENBQUM7UUFDdkMsc0JBQWlCLEdBQWUsSUFBSSxDQUFDO1FBQ3JDLHdCQUFtQixHQUFlLElBQUksQ0FBQztRQUN2QyxvQkFBZSxHQUFlLElBQUksQ0FBQztRQUd6QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBRUQsNEJBQTRCO0lBQ3JCLHNCQUFNLEdBQWIsVUFBYyxJQUFZO1FBQ3RCLElBQUksUUFBUSxDQUFDO1FBQ2IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBSSxJQUFJLENBQUMscUJBQXFCLEtBQUssS0FBSyxFQUFFO1lBQ3RDLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLElBQUksRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDNUM7WUFDRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEQsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM5QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLElBQUksR0FBRyxZQUFZLEtBQUssRUFBRTtnQkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3BFO2lCQUFNO2dCQUNILGdFQUFnRTtnQkFDaEUsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7b0JBQ3pCLEdBQUcsR0FBRyxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUTtpQkFDMUM7Z0JBQ0QsMENBQTBDO2dCQUMxQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtvQkFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUMxRDthQUNKO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJLEVBQUU7WUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3RDtRQUNELElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtZQUNmLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNsQjtnQkFDRCw4REFBOEQ7Z0JBQzlELEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtvQkFDdEMsSUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssUUFBUSxFQUFFO3dCQUMvQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7cUJBQ2pIO29CQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTt3QkFDWixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzlDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztxQkFDbkM7b0JBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ25FO2dCQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDWixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztpQkFDcEM7Z0JBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDekMsT0FBTyxJQUFJLENBQUM7YUFDZjtpQkFBTTtnQkFDSCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxJQUFJLEVBQUU7b0JBQ25DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMvQztnQkFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3RGLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QztnQkFDRCxPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLGtCQUFFLEdBQVQsVUFBVSxVQUFrQixFQUFFLFFBQWdCO1FBQTlDLGlCQVlDO1FBWEcsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUNiLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2RCxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBRTdCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxvQkFBSSxHQUFYLFVBQVksVUFBa0IsRUFBRSxRQUFnQjtRQUFoRCxpQkFVQztRQVRHLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7WUFDYixLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyRCxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDN0I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sc0JBQU0sR0FBYixVQUFjLElBQVksRUFBRSxFQUFVLEVBQUUsUUFBZ0I7UUFBeEQsaUJBVUM7UUFURyxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO1lBQ2IsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDN0I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0seUJBQVMsR0FBaEIsVUFBaUIsTUFBVztRQUN4QixPQUFPLE1BQU0sS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ25DLENBQUM7SUFFTSxxQkFBSyxHQUFaLFVBQWEsSUFBYTtRQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU8sc0JBQU0sR0FBZCxVQUFlLElBQVk7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhO1FBQ3pGLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxLQUFLLElBQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEMsbURBQW1EO1lBQ25ELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsWUFBWSxLQUFLLEVBQUU7Z0JBQzVDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUN4QyxTQUFTO2lCQUNaO2dCQUNELHFFQUFxRTtnQkFDckUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQzFGO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxLQUFLLEtBQUssS0FBSyxFQUFFO2dCQUN4RCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLDJDQUEyQzthQUNsRjtZQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4RTtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxvQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLGlDQUFpQixHQUF4QjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLGdCQUFnQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0RixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVNLHFCQUFLLEdBQVosVUFBYSxNQUFjO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxzQkFBTSxHQUFiLFVBQWMsS0FBYTtRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sb0JBQUksR0FBWCxVQUFZLElBQWE7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHNCQUFNLEdBQWIsVUFBYyxNQUE2QjtRQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sNkJBQWEsR0FBcEIsVUFBcUIsYUFBYTtRQUM5QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsYUFBYSxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxxQkFBSyxHQUFaO1FBQWEsZ0JBQWtCO2FBQWxCLFVBQWtCLEVBQWxCLHFCQUFrQixFQUFsQixJQUFrQjtZQUFsQiwyQkFBa0I7O1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSx1QkFBTyxHQUFkLFVBQWUsUUFBb0I7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sd0JBQVEsR0FBZixVQUFnQixRQUFvQjtRQUNoQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwwQkFBVSxHQUFqQixVQUFrQixRQUFvQjtRQUNsQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxzQkFBTSxHQUFiLFVBQWMsUUFBb0I7UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHVCQUFPLEdBQWQsVUFBZSxjQUFzQjtRQUNqQyxJQUFJLENBQUMsVUFBVSxJQUFJLGNBQWMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sOEJBQWMsR0FBckIsVUFBc0IsWUFBb0I7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7SUFDbEMsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JQeUQ7QUFDMUI7QUFDRTtBQUVsQztJQUFrQyw4RUFBVTtJQUd4QztRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQURHLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOztJQUNqQyxDQUFDO0lBRU0sNkJBQU0sR0FBYixVQUFjLEtBQWE7UUFDdkIsSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUM7UUFFekIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDaEMsSUFBSSxJQUFJLFNBQVMsQ0FBQztZQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM3QixJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUNwRDthQUNKO1lBQ0QsbUJBQW1CO1lBQ25CLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1AsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3RCO2dCQUNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUMvQjtTQUNKO0lBQ0wsQ0FBQztJQUVNLDZCQUFNLEdBQWIsVUFBYyxNQUFlO1FBQ3pCLElBQU0sRUFBRSxHQUFHLElBQUksNENBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN2QixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFYSxtQkFBTSxHQUFwQixVQUFxQixNQUFlLEVBQUUsWUFBaUM7UUFBakMsa0RBQWlDO1FBQ25FLElBQU0sRUFBRSxHQUFHLElBQUksNENBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsWUFBWSxHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQ3hELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVNLG1DQUFZLEdBQW5CLFVBQW9CLE1BQWU7UUFDL0IsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUMvQixLQUFLLFVBQUM7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDaEIsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNqQzthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRWEseUJBQVksR0FBMUIsVUFBMkIsTUFBVztRQUNsQyxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBSUQsc0JBQWtCLHdCQUFRO2FBQTFCO1lBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3pCLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQzthQUMvQztZQUNELE9BQU8sWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUNMLG1CQUFDO0FBQUQsQ0FBQyxDQXJFaUMsNERBQVUsR0FxRTNDOzs7Ozs7Ozs7Ozs7OztBQ3pFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUI7QUFDRDtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0cvQjtJQUFnQyw0RUFBdUI7SUFBdkQ7UUFBQSxxRUFnQkM7UUFkVyxZQUFNLEdBQWlCLEVBQUUsQ0FBQzs7SUFjdEMsQ0FBQztJQVpVLHdCQUFHLEdBQVYsVUFBVyxPQUFlO1FBQUUsY0FBa0I7YUFBbEIsVUFBa0IsRUFBbEIscUJBQWtCLEVBQWxCLElBQWtCO1lBQWxCLDZCQUFrQjs7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDYixPQUFPLFdBQUUsSUFBSTtTQUNoQixDQUFDO0lBQ04sQ0FBQztJQUVNLDJCQUFNLEdBQWIsVUFBYyxNQUFjO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQU0sSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLElBQUksT0FBVCxJQUFJLCtEQUFNLElBQUksQ0FBQyxPQUFPLEdBQUssSUFBSSxDQUFDLElBQUksR0FBQztTQUN4QztJQUNMLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQ0FoQitCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQWdCdEQ7Ozs7Ozs7Ozs7Ozs7O0FDckJEO0FBQUE7QUFBQTtJQUdJLGtCQUFtQixLQUFpQixFQUFFLFNBQTBCO1FBQTFCLDZDQUEwQjtRQUZ6RCxTQUFJLEdBQWMsRUFBRSxDQUFDO1FBR3hCLElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRU0sc0JBQUcsR0FBVixVQUFXLEtBQWMsRUFBRSxTQUEwQjs7UUFBMUIsNkNBQTBCO1FBQ2pELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QixJQUFNLEtBQUssR0FBYyxLQUFLLENBQUM7WUFDL0IsVUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLFdBQUksS0FBSyxFQUFFO1NBQzVCO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSx5QkFBTSxHQUFiLFVBQWMsS0FBYztRQUN4QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEIsSUFBTSxLQUFLLEdBQWMsS0FBSyxDQUFDO1lBQy9CLElBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM5QztTQUNKO2FBQU07WUFDSCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDRCQUFTLEdBQWhCO1FBQ0ksUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHVCQUFJLEdBQVg7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwyQkFBUSxHQUFmO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHNCQUFXLDRCQUFNO2FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVjLGVBQU0sR0FBRyxFQUFFLENBQUM7SUFFYixzQkFBYSxHQUFHLFVBQUMsSUFBZTs7UUFDMUMsY0FBUSxDQUFDLE1BQU0sRUFBQyxJQUFJLFdBQUksSUFBSSxFQUFFO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDLENBQUM7SUFDTixlQUFDO0NBQUE7QUExRW9COzs7Ozs7Ozs7Ozs7O0FDT3JCO0FBQUE7QUFBQTtJQUtJLGlCQUFZLFFBQXFCO1FBQXJCLHdDQUFxQjtRQUh6QixhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLHNCQUFpQixHQUFjLEVBQUUsQ0FBQztRQUd0QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVPLDZCQUFXLEdBQW5CLFVBQW9CLElBQVk7UUFDNUIsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE9BQU8sSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDaEQsSUFBSSxFQUFFLENBQUM7U0FDVjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTyx1QkFBSyxHQUFiO1FBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSx1QkFBSyxHQUFaLFVBQWEsUUFBb0IsRUFBRSxFQUFVO1FBQ3pDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUM3QyxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU0sd0JBQU0sR0FBYixVQUFjLFdBQW1CO1FBQzdCLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNQLElBQUksQ0FBQyxXQUFFLE1BQU0sVUFBQztZQUNkLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QixNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsc0RBQXNEO2dCQUN0RCxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO29CQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQztpQkFDbEU7cUJBQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO29CQUNuRCxNQUFNLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQztvQkFDbEMsSUFBSSxNQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTt3QkFDekIsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQzt3QkFDbEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7d0JBQ3hCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLFFBQVEsRUFBRSxDQUFDO3FCQUNkO2lCQUNKO2FBQ0o7WUFDRCxnQ0FBZ0M7WUFDaEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdEMsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDdEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzlCO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFTSx3QkFBTSxHQUFiLFVBQWMsTUFBZTtRQUN6QixNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSx1QkFBSyxHQUFaO1FBQ0ksSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFdBQUUsTUFBTSxVQUFDO1lBQ2QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pCLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDeEIsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMzQjtTQUNKO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSx5QkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3RGRDtBQUFBO0FBQUE7SUFBQTtRQUNXLGdCQUFXLEdBQWMsRUFBRSxDQUFDO1FBQzVCLGdCQUFXLEdBQWMsRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBWSxLQUFLLENBQUM7SUEwRHJDLENBQUM7SUF4RFUsMkJBQU0sR0FBYixVQUFjLEtBQWE7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxJQUFJLFdBQ0osQ0FBQyxXQUNELENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNoQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7WUFDRCxrQkFBa0I7WUFDbEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDUCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDcEIsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3RCO2dCQUNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUMvQjtTQUNKO0lBQ0wsQ0FBQztJQUVNLDBCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSw4QkFBUyxHQUFoQjtRQUNJLElBQUksSUFBSSxFQUNKLENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDaEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUVNLHdCQUFHLEdBQVYsVUFBVyxJQUFhO1FBQ3BCLG9DQUFvQztRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDcEQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sMkJBQU0sR0FBYixVQUFjLElBQWE7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNqRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sNEJBQU8sR0FBZCxVQUFlLElBQWE7UUFDeEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxzQkFBVyw4QkFBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFDTCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRXlDO0FBRzFDO0lBQWdDLDRFQUFVO0lBT3RDLG9CQUFvQixXQUF1QjtRQUEzQyxZQUNJLGlCQUFPLFNBR1Y7UUFKbUIsaUJBQVcsR0FBWCxXQUFXLENBQVk7UUFObkMsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFekIsU0FBRyxHQUFXLEVBQUUsQ0FBQztRQUtwQixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUM7O0lBQ3BDLENBQUM7SUFFTSwwQkFBSyxHQUFaO1FBQ0ksYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0seUJBQUksR0FBWDtRQUNJLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLDJCQUFNLEdBQWIsVUFBYyxNQUFjO1FBQ3hCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFNLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQztRQUM1QixpRUFBaUU7UUFDakUsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1QixPQUFNLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxFQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDO1lBQzFCLGlCQUFNLE1BQU0sWUFBQyxLQUFLLENBQUMsQ0FBQztZQUNwQiw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxDQXRDK0Isc0RBQVUsR0FzQ3pDOzs7Ozs7Ozs7Ozs7OztBQzFDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNHO0FBQ0Y7QUFDRTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKN0Isc0IiLCJmaWxlIjoiZW5naW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvRW5naW5lLnRzXCIpO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcydcclxuaW1wb3J0IHsgU291bmQgfSBmcm9tICcuL2F1ZGlvL1NvdW5kJztcclxuaW1wb3J0IHsgRW5naW5lRXZlbnRzIH0gZnJvbSAnLi9jb3JlL0VuZ2luZUV2ZW50cyc7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4vY29yZS9Mb2FkZXInO1xyXG5pbXBvcnQgeyBJU2NyZWVuTWFwLCBTY3JlZW5NYW5hZ2VyIH0gZnJvbSAnLi9jb3JlL1NjcmVlbk1hbmFnZXInO1xyXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4vY29yZS9TZXR0aW5ncydcclxuaW1wb3J0IHsgVW5sb2FkZXIgfSBmcm9tICcuL2NvcmUvVW5sb2FkZXInO1xyXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi9jb3JlL3ZlcnNpb24nO1xyXG5pbXBvcnQgeyBUd2Vlbk1hbmFnZXIgfSBmcm9tICcuL3R3ZWVuJztcclxuaW1wb3J0IHsgRXZlbnRRdWV1ZSwgVXBkYXRlTG9vcCB9IGZyb20gJy4vdXRpbHMnO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwidHlwaW5ncy9waXhpLmpzLmQudHNcIiAvPlxyXG5leHBvcnQgY2xhc3MgRW5naW5lIHtcclxuXHJcbiAgICBwdWJsaWMgYXBwOiBQSVhJLkFwcGxpY2F0aW9uO1xyXG5cclxuICAgIHB1YmxpYyBzZXR0aW5nczogU2V0dGluZ3M7XHJcblxyXG4gICAgcHVibGljIGV2ZW50czogRXZlbnRRdWV1ZTtcclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlTG9vcDogVXBkYXRlTG9vcDtcclxuXHJcbiAgICBwdWJsaWMgbG9hZGVyOiBMb2FkZXI7XHJcblxyXG4gICAgcHVibGljIHVubG9hZGVyOiBVbmxvYWRlcjtcclxuXHJcbiAgICBwdWJsaWMgc2NyZWVuTWFuYWdlcjogU2NyZWVuTWFuYWdlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0VuZ2luZSB2ZXJzaW9uJywgdmVyc2lvbi5jb2RlKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydChzY3JlZW5NYXA6IElTY3JlZW5NYXApOiBFbmdpbmUge1xyXG4gICAgICAgIC8vcHJvYmFibHkgd2FudCB0byB1c2UgdGhlIHBpeGkgbG9hZGVyIGZvciBldmVyeXRoaW5nLi4uXHJcbiAgICAgICAgLy9zbyBjcmVhdGUgdGhlIGFwcCBzdHJhaWdodCBhd2F5XHJcbiAgICAgICAgdGhpcy5hcHAgPSB0aGlzLl9jcmVhdGVQaXhpQXBwKClcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB0aGlzLl9jcmVhdGVFdmVudHMoc2NyZWVuTWFwKTtcclxuICAgICAgICAvL2xvYWQgdGhlIGNvbmZpZ1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3ModGhpcy5hcHAubG9hZGVyLCB0aGlzLmV2ZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJlc291cmNlKGlkOiBzdHJpbmcpOiB1bmtub3duIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHAubG9hZGVyLnJlc291cmNlc1tpZF0uZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbmZpZyBoYXMgbm93IGxvYWRlZFxyXG4gICAgcHJpdmF0ZSBidWlsZCgpOiB2b2lkIHtcclxuICAgICAgICAvL3VwZGF0ZSB0aGUgYXBwIHdpdGggdGhlIGxvYWRlZCBzZXR0aW5nc1xyXG4gICAgICAgIHRoaXMuYXBwLnJlbmRlcmVyLnJlc2l6ZSh0aGlzLnNldHRpbmdzLnNpemUud2lkdGgsIHRoaXMuc2V0dGluZ3Muc2l6ZS5oZWlnaHQpXHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHRoZSBsb2FkZXJcclxuICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBMb2FkZXIodGhpcy5hcHAubG9hZGVyKVxyXG5cclxuICAgICAgICB0aGlzLnVubG9hZGVyID0gbmV3IFVubG9hZGVyKHRoaXMubG9hZGVyKVxyXG5cclxuICAgICAgICAvL2NyZWF0ZSB1cGRhdGUgbG9vcFxyXG4gICAgICAgIHRoaXMudXBkYXRlTG9vcCA9IHRoaXMuX2NyZWF0ZVVwZGF0ZUxvb3AoKVxyXG5cclxuICAgICAgICAvL2NyZWF0ZSB0d2VlbiBtYW5hZ2VyLCBhZGQgdG8gdXBkYXRlIGxvb3BcclxuICAgICAgICB0aGlzLnVwZGF0ZUxvb3AuYWRkKFR3ZWVuTWFuYWdlci5pbnN0YW5jZSk7XHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHNjcmVlbiBtYW5hZ2VyXHJcbiAgICAgICAgdGhpcy5zY3JlZW5NYW5hZ2VyID0gdGhpcy5fY3JlYXRlU2NyZWVuTWFuYWdlcigpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVVcGRhdGVMb29wKCk6IFVwZGF0ZUxvb3Age1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUxvb3AgPSBuZXcgVXBkYXRlTG9vcCh0aGlzLmV2ZW50cylcclxuICAgICAgICB1cGRhdGVMb29wLnN0YXJ0KCk7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZUxvb3A7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlU2NyZWVuTWFuYWdlcigpOiBTY3JlZW5NYW5hZ2VyIHtcclxuICAgICAgICBjb25zdCBzY3JlZW5NYW5hZ2VyID0gbmV3IFNjcmVlbk1hbmFnZXIodGhpcy5ldmVudHMsIHRoaXMuc2V0dGluZ3MsIHRoaXMubG9hZGVyLCB0aGlzLnVubG9hZGVyKVxyXG4gICAgICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHNjcmVlbk1hbmFnZXIucm9vdClcclxuICAgICAgICB0aGlzLnVwZGF0ZUxvb3AuYWRkKHNjcmVlbk1hbmFnZXIpXHJcbiAgICAgICAgcmV0dXJuIHNjcmVlbk1hbmFnZXI7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlRXZlbnRzKHNjcmVlbk1hcDogSVNjcmVlbk1hcCk6IEV2ZW50UXVldWUge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IG5ldyBFdmVudFF1ZXVlKCk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5vbihTZXR0aW5ncy5DT05GSUdfTE9BREVELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uZmlnIGlzIGxvYWRlZCAtIG5vdyBidWlsZCB0aGUgZW5naW5lXHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGQoKTtcclxuICAgICAgICAgICAgLy9zZXQgc2NyZWVubWFwXHJcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuTWFuYWdlci5zY3JlZW5NYXAgPSBzY3JlZW5NYXA7XHJcbiAgICAgICAgICAgIC8vbG9hZCBnbG9iYWwgYXNzZXRzXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmxvYWRBc3NldHModGhpcy5zZXR0aW5ncy5nZXRNYW5pZmVzdCgpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFNvdW5kLmluc3RhbmNlLmFkZFNvdW5kcyh0aGlzLmxvYWRlci5mZXRjaFNvdW5kcygpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbm93IHNob3cgZmlyc3Qgc2NyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLmVtaXQoRW5naW5lRXZlbnRzLkFQUF9SRUFEWSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVQaXhpQXBwKCk6IFBJWEkuQXBwbGljYXRpb24ge1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUElYSS5BcHBsaWNhdGlvbih7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzY4LCB3aWR0aDogMTAyNCxcclxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHZpZXcsXHJcbiAgICAgICAgICAgIGZvcmNlQ2FudmFzOiBmYWxzZSxcclxuICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgICAgICByZXNvbHV0aW9uOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2NvcmUnXHJcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnXHJcbmV4cG9ydCAqIGZyb20gJy4vdHdlZW4nXHJcbmV4cG9ydCAqIGZyb20gJy4vYXVkaW8nXHJcbiIsIlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU291bmREYXRhIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBidWZmZXI6IEFycmF5QnVmZmVyIHwgQXVkaW9CdWZmZXI7XHJcbiAgICBsb29wPzogbnVtYmVyO1xyXG4gICAgZ3JvdXA/OiBzdHJpbmc7XHJcbiAgICB1cmw/OiBzdHJpbmc7XHJcbiAgICBleHRlbnNpb24/OiBzdHJpbmc7XHJcbiAgICBzcHJpdGVzPzogSVNwcml0ZUluZm9bXTtcclxuICAgIHN0YXJ0PzogbnVtYmVyO1xyXG4gICAgZHVyYXRpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNwcml0ZURhdGEge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHNyYzogc3RyaW5nO1xyXG4gICAgc3ByaXRlczogSVNwcml0ZUluZm9bXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3ByaXRlSW5mbyB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgc3RhcnQ6IG51bWJlcjtcclxuICAgIGR1cmF0aW9uOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJ1ZmZlcnMge1xyXG4gICAgW2lkOiBzdHJpbmddOiBJU291bmREYXRhO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUNoYW5uZWxzIHtcclxuICAgIFtpZDogc3RyaW5nXTogU291bmRDaGFubmVsO1xyXG59XHJcblxyXG4vL2EgbWFuYWdlciBmb3IgcGxheWluZyB3ZWIgYXVkaW8gc291bmRzXHJcbmV4cG9ydCBjbGFzcyBTb3VuZCB7XHJcbiAgICBwcml2YXRlIGNvbnRleHQ6IEF1ZGlvQ29udGV4dDtcclxuXHJcbiAgICBwcml2YXRlIGdsb2JhbEdhaW46IFNvdW5kQ2hhbm5lbDtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBjaGFubmVsczogSUNoYW5uZWxzOy8vc2Z4LCBtdXNpYywgZW52XHJcblxyXG4gICAgcHJpdmF0ZSBfZW5hYmxlZCA9IGZhbHNlOy8vVE9ETyAtIGNoZWNrIGZvciB0aGlzXHJcbiAgICBwcml2YXRlIF9zY3JhdGNoQnVmZmVyOiBBdWRpb0J1ZmZlcjtcclxuXHJcbiAgICBwcml2YXRlIF9idWZmZXJzOiBJQnVmZmVycztcclxuXHJcbiAgICAvL1RPRE8gLSBoYXZlIGFuIGludGVybmFsIGV2ZW50IGRpc3BhdGNoZXJcclxuXHJcbiAgICAvL3Byb2JhYmx5IG1ha2UgdGhpcyBhIHNpbmdsZXRvblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKFNvdW5kLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aHJvdyhuZXcgRXJyb3IoXCJTb3VuZCBzaW5nbGV0b24gYWxyZWFkeSBleGlzdHNcIikpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLl9lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvL2J1ZmZlciB0byBmaXggaW9zIGJ1Z3NcclxuICAgICAgICB0aGlzLl9zY3JhdGNoQnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigxLCAxLCAyMjA1MClcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVJvdXRpbmcoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYnVmZmVycyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVJvdXRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgLy9tYWluIG91dHB1dCA+IGdsb2JhbCBtdXRlID4gY29udGV4dCBtdXRlc1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsR2FpbiA9IG5ldyBTb3VuZENoYW5uZWwodGhpcy5jb250ZXh0LCB0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY3JlYXRlIHNmeCwgbXVzaWMgYW5kIGVudlxyXG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7XHJcbiAgICAgICAgICAgIHNmeDogbmV3IFNvdW5kQ2hhbm5lbCh0aGlzLmNvbnRleHQsIHRoaXMuZ2xvYmFsR2Fpbi5vdXRwdXQpLFxyXG4gICAgICAgICAgICBtdXNpYzogbmV3IFNvdW5kQ2hhbm5lbCh0aGlzLmNvbnRleHQsIHRoaXMuZ2xvYmFsR2Fpbi5vdXRwdXQpLFxyXG4gICAgICAgICAgICBlbnY6IG5ldyBTb3VuZENoYW5uZWwodGhpcy5jb250ZXh0LCB0aGlzLmdsb2JhbEdhaW4ub3V0cHV0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheShpZDogc3RyaW5nLCB2b2x1bWU6IG51bWJlciA9IDEsIGxvb3A6IG51bWJlciA9IC0xKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcclxuICAgICAgICAgICAgY29uc3Qgc291bmREYXRhOiBJU291bmREYXRhID0gdGhpcy5fYnVmZmVyc1tpZF07XHJcbiAgICAgICAgICAgIGNvbnN0IHNvdW5kUGxheSA9IG5ldyBTb3VuZFBsYXkoc291bmREYXRhLCB0aGlzLmNvbnRleHQpXHJcbiAgICAgICAgICAgIC8vY2hvb3NlIGNoYW5uZWwgYWNjb3JkaW5nIHRvIGRhdGEgLT4gSVNvdW5kRGF0YS5ncm91cFxyXG4gICAgICAgICAgICBjb25zdCBjaGFubmVsOiBTb3VuZENoYW5uZWwgPSB0aGlzLmdldENoYW5uZWwoc291bmREYXRhKVxyXG4gICAgICAgICAgICBjaGFubmVsLmFkZChzb3VuZFBsYXkpXHJcbiAgICAgICAgICAgIC8vcGxheSBpdFxyXG4gICAgICAgICAgICBzb3VuZFBsYXkucGxheSgpO1xyXG4gICAgICAgICAgICAvL1RPRE8gLSBuZWVkIHRvIHN0b3JlIHRoZSBzb3VuZCBzbyBpdCBjYW4gYmUgc3RvcHBlZCBpZiBuZWVkZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDaGFubmVsKHNvdW5kRGF0YTogSVNvdW5kRGF0YSk6IFNvdW5kQ2hhbm5lbCB7XHJcbiAgICAgICAgc3dpdGNoIChzb3VuZERhdGEuZ3JvdXApIHtcclxuICAgICAgICAgICAgY2FzZSAnbXVzaWMnOiByZXR1cm4gdGhpcy5jaGFubmVscy5tdXNpYztcclxuICAgICAgICAgICAgY2FzZSAnZW52JzogcmV0dXJuIHRoaXMuY2hhbm5lbHMuZW52O1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gdGhpcy5jaGFubmVscy5zZng7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAvL1RPRE9cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkU291bmRzKHNvdW5kczogSVNvdW5kRGF0YVtdKTogdm9pZCB7XHJcbiAgICAgICAgc291bmRzLmZvckVhY2godGhpcy5hZGQpXHJcbiAgICAgICAgLy9UT0RPIC0gbW9uaXRvciB3aGVuIGRlY29kaW5nIGlzIGNvbXBsZXRlZFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQgPSAoc291bmREYXRhOiBJU291bmREYXRhKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRlY29kZUF1ZGlvRGF0YSg8QXJyYXlCdWZmZXI+c291bmREYXRhLmJ1ZmZlcikudGhlbigoZGVjb2RlZDpBdWRpb0J1ZmZlcikgPT4ge1xyXG4gICAgICAgICAgICBzb3VuZERhdGEuYnVmZmVyID0gZGVjb2RlZDtcclxuICAgICAgICAgICAgLy8gLSBoYW5kbGUgc291bmQgc3ByaXRlcyBjb3JyZWN0bHlcclxuICAgICAgICAgICAgLy9uZWVkIGEgZGlmZmVyZW50IHNvdW5kIGRhdGEgZm9yIGVhY2ggb25lXHJcbiAgICAgICAgICAgIGlmIChzb3VuZERhdGEuc3ByaXRlcykge1xyXG4gICAgICAgICAgICAgICAgc291bmREYXRhLnNwcml0ZXMuZm9yRWFjaCgoaW5mbzogSVNwcml0ZUluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5fY2xvbmVEYXRhKHNvdW5kRGF0YSlcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmlkID0gaW5mby5pZDtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnN0YXJ0ID0gaW5mby5zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmR1cmF0aW9uID0gaW5mby5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJzW2luZm8uaWRdID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJzW3NvdW5kRGF0YS5pZF0gPSBzb3VuZERhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAvL2ZpbmQgdGhlIG1haW4gc291bmQgdGhlbiByZW1vdmUgYWxsIHdpdGggdGhhdCBidWZmZXJcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbG9uZURhdGEoc291bmREYXRhOiBJU291bmREYXRhKTogSVNvdW5kRGF0YSB7XHJcbiAgICAgICAgY29uc3QgeyBpZCwgYnVmZmVyLCBncm91cCwgZXh0ZW5zaW9uLCB1cmwgfSA9IHNvdW5kRGF0YTtcclxuICAgICAgICByZXR1cm4geyBpZCwgYnVmZmVyLCBncm91cCwgZXh0ZW5zaW9uLCB1cmwgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2NyYXRjaEJ1ZmZlcigpOiBBdWRpb0J1ZmZlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjcmF0Y2hCdWZmZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zaW5nbGV0b25cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogU291bmRcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IFNvdW5kIHtcclxuICAgICAgICBpZiAoIVNvdW5kLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBTb3VuZC5faW5zdGFuY2UgPSBuZXcgU291bmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNvdW5kLl9pbnN0YW5jZTtcclxuICAgIH1cclxufVxyXG5cclxuLy9saWtlIGEgY2hhbm5lbCBvbiBhIG1peGVyIC0gdm9sdW1lIGNvbnRyb2xcclxuLy9qdXN0IGEgd3JhcHBlciBmb3IgYSBnYWluIG5vZGVcclxuZXhwb3J0IGNsYXNzIFNvdW5kQ2hhbm5lbCB7XHJcbiAgICBwdWJsaWMgb3V0cHV0OiBHYWluTm9kZTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGV4dDogQXVkaW9Db250ZXh0LCB0YXJnZXQ6IEF1ZGlvTm9kZSkge1xyXG4gICAgICAgIHRoaXMub3V0cHV0ID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKVxyXG4gICAgICAgIHRoaXMub3V0cHV0LmNvbm5lY3QodGFyZ2V0KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdm9sdW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0cHV0LmdhaW4udmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHZvbHVtZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQuZ2Fpbi5zZXRWYWx1ZUF0VGltZSh2YWx1ZSwgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKHNvdW5kOiBTb3VuZFBsYXkpOiB2b2lkIHtcclxuICAgICAgICBzb3VuZC5vdXRwdXQuY29ubmVjdCh0aGlzLm91dHB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbm5lY3Qobm9kZTogQXVkaW9Ob2RlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQuY29ubmVjdChub2RlKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNjb25uZWN0KG5vZGU6IEF1ZGlvTm9kZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3V0cHV0LmRpc2Nvbm5lY3Qobm9kZSlcclxuICAgIH1cclxufVxyXG5cclxuLy9zdHJ1Z2dsaW5nIHRvIG5hbWUgdGhpcyBhcHByb3ByaWF0ZWx5XHJcbmV4cG9ydCBjbGFzcyBTb3VuZFBsYXkge1xyXG5cclxuICAgIHB1YmxpYyBzb3VyY2U6IEF1ZGlvQnVmZmVyU291cmNlTm9kZTtcclxuICAgIHB1YmxpYyBvdXRwdXQ6IEdhaW5Ob2RlO1xyXG5cclxuICAgIHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwOy8vZm9yIHBhdXNlIGhhbmRsaW5nXHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHNvdW5kRGF0YTogSVNvdW5kRGF0YSwgcHJpdmF0ZSBjb250ZXh0OiBBdWRpb0NvbnRleHQpIHtcclxuICAgICAgICAvLyAtIGNyZWF0ZSBhbiBhdWRpb2J1ZmZlcnNvdXJjZSBub2RlXHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UuYnVmZmVyID0gPEF1ZGlvQnVmZmVyPnRoaXMuc291bmREYXRhLmJ1ZmZlcjtcclxuICAgICAgICAvL3ZvbHVtZSBjb250cm9sbGVyXHJcbiAgICAgICAgdGhpcy5vdXRwdXQgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xyXG4gICAgICAgIC8vVE9ETyAtIHNldCB0aGUgdm9sdW1lXHJcbiAgICAgICAgdGhpcy5zb3VyY2UuY29ubmVjdCh0aGlzLm91dHB1dCk7Ly90aGlzIHN0ZXAgaXMgaW1wb3J0YW50IDspXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXkoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gLSBsb29wLCBzdGFydCB0aW1lLCBkdXJhdGlvbiwgZXRjXHJcbiAgICAgICAgLy8gdGhpcy5zb3VyY2Uuc3RhcnQoKVxyXG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2Uuc3RhcnQoMCwgdGhpcy5zdGFydCwgdGhpcy5kdXJhdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2Uuc3RhcnQoMCwgdGhpcy5zdGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc3RhcnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zb3VuZERhdGEuc3RhcnQgfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGR1cmF0aW9uKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuc291bmREYXRhLmxvb3ApIHtcclxuICAgICAgICAgICAgLy9UT0RPXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291bmREYXRhLmR1cmF0aW9uIHx8IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdm9sdW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0cHV0LmdhaW4udmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHZvbHVtZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQuZ2Fpbi5zZXRWYWx1ZUF0VGltZSh2YWx1ZSwgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRpbWUoKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodGhpcy5zb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lIC0gdGhpcy5zdGFydFRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc291cmNlLnN0b3AoMCk7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UuZGlzY29ubmVjdCgwKVxyXG4gICAgICAgIHRoaXMub3V0cHV0LmRpc2Nvbm5lY3QoMClcclxuICAgICAgICAvL3RoaXMgaGFzIHRvIGJlIGluZGVwZW5kZW50bHkgdHJ5IGNhdGNoZWQgYXMgdGhyb3dzIG9uIHBsYXRmb3JtcyBvdGhlciB0aGFuIGlvc1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlLmJ1ZmZlciA9IFNvdW5kLmluc3RhbmNlLnNjcmF0Y2hCdWZmZXI7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzY3JhdGNoIGJ1ZmZlciBlcnJvciEgJywgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc291cmNlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm91dHB1dCA9IG51bGw7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL1NvdW5kJyIsImV4cG9ydCBlbnVtIEVuZ2luZUV2ZW50cyB7XHJcbiAgICBBUFBfUkVBRFkgPSAnYXBwLXJlYWR5JyxcclxuICAgIFNIT1dfU0NSRUVOID0gJ3NjcmVlbidcclxufSIsIlxyXG5cclxuaW1wb3J0IHsgSUFzc2V0LCBJQXNzZXRzLCBTZXR0aW5ncyB9IGZyb20gXCIuL1NldHRpbmdzXCI7XHJcbmltcG9ydCB7IExvYWRlclJlc291cmNlIH0gZnJvbSAncGl4aS5qcydcclxuaW1wb3J0IHsgSVNvdW5kRGF0YSwgSVNwcml0ZURhdGEsIElTcHJpdGVJbmZvIH0gZnJvbSBcIi4uL2F1ZGlvL1NvdW5kXCI7XHJcblxyXG5pbnRlcmZhY2UgSUFzc2V0RGF0YU1hcCB7XHJcbiAgICBbaWQ6IHN0cmluZ106IElBc3NldDtcclxufVxyXG5cclxuLy9hc3NldCBsb2FkZXJcclxuZXhwb3J0IGNsYXNzIExvYWRlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHTE9CQUxfQVNTRVRTX0xPQURFRDogc3RyaW5nID0gJ2dsb2JhbC1hc3NldHMtbG9hZGVkJztcclxuXHJcbiAgICBwcml2YXRlIF9zdXBwb3J0ZWRUeXBlcyA9IFsnb2dnJywgJ200YScsICdtcDMnXVxyXG5cclxuICAgIHB1YmxpYyBhdWRpb0Zvcm1hdDogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgX2Fzc2V0RGF0YTogSUFzc2V0RGF0YU1hcCA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2xvYWRlcjogUElYSS5Mb2FkZXJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX3NldFJlc291cmNlVHlwZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRSZXNvdXJjZVR5cGVzKCk6IHZvaWQge1xyXG4gICAgICAgIC8vc2V0IGl0IHRvIHVzZSB4aHIgZm9yIHNvdW5kc1xyXG4gICAgICAgIHRoaXMuX3N1cHBvcnRlZFR5cGVzLmZvckVhY2godHlwZSA9PiB0aGlzLnNldFhocih0eXBlKSlcclxuICAgICAgICAvL2Nob29zZSB3aGljaCBhdWRpbyBmb3JtYXRcclxuICAgICAgICB0aGlzLmF1ZGlvRm9ybWF0ID0gdGhpcy5fc2V0QXVkaW9Gb3JtYXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRBdWRpb0Zvcm1hdCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgICAgIGNvbnN0IG9nZyA9ICEhKGEuY2FuUGxheVR5cGUgJiYgYS5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL25vLywgJycpKTtcclxuICAgICAgICByZXR1cm4gb2dnID8gJy5vZ2cnIDogJy5tNGEnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0WGhyKGV4dGVuc2lvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgTG9hZGVyUmVzb3VyY2Uuc2V0RXh0ZW5zaW9uTG9hZFR5cGUoZXh0ZW5zaW9uLCBMb2FkZXJSZXNvdXJjZS5MT0FEX1RZUEUuWEhSKVxyXG4gICAgICAgIExvYWRlclJlc291cmNlLnNldEV4dGVuc2lvblhoclR5cGUoZXh0ZW5zaW9uLCBMb2FkZXJSZXNvdXJjZS5YSFJfUkVTUE9OU0VfVFlQRS5CVUZGRVIpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZldGNoU291bmRzKCk6IElTb3VuZERhdGFbXSB7XHJcbiAgICAgICAgY29uc3QgcmVzb3VyY2VzID0gdGhpcy5fbG9hZGVyLnJlc291cmNlcztcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzb3VyY2VzKS5maWx0ZXIoKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSByZXNvdXJjZXNbaWRdO1xyXG4gICAgICAgICAgICByZXR1cm4gISFyZXNvdXJjZS54aHIgJiYgdGhpcy5fc3VwcG9ydGVkVHlwZXMuaW5jbHVkZXMocmVzb3VyY2UuZXh0ZW5zaW9uKVxyXG4gICAgICAgIH0pLm1hcCgoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHJlc291cmNlc1tpZF07XHJcbiAgICAgICAgICAgIC8vYWxzbyBzb3VuZCBncm91cD8gbG9vcD8gXHJcbiAgICAgICAgICAgIC8vVE9ETyAtIHN0b3JpbmcgYnkgaWQgaXMgZ29pbmcgdG8gYmUgcHJvYmxlbWF0aWMgLSBuZWVkIHRvIGNoYW5nZSB0aGlzXHJcbiAgICAgICAgICAgIC8vc2hvdWxkIHVzZSBmaWxlIG5hbWUgb3IgcGF0aFxyXG4gICAgICAgICAgICBjb25zdCBhc3NldERhdGE6IElBc3NldCA9IHRoaXMuX2Fzc2V0RGF0YVtpZF1cclxuICAgICAgICAgICAgLy8gLSBhbHNvIHNvdW5kIHNwcml0ZXMuLi5cclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlRGF0YTogSVNwcml0ZURhdGEgPSB0aGlzLmdldEF1ZGlvU3ByaXRlRGF0YShhc3NldERhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCBzcHJpdGVzOiBJU3ByaXRlSW5mb1tdID0gc3ByaXRlRGF0YSAmJiBzcHJpdGVEYXRhLnNwcml0ZXM7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgIGJ1ZmZlcjogcmVzb3VyY2UuZGF0YSxcclxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogcmVzb3VyY2UuZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXA6IGFzc2V0RGF0YS5ncm91cCxcclxuICAgICAgICAgICAgICAgIGxvb3A6IGFzc2V0RGF0YS5sb29wLFxyXG4gICAgICAgICAgICAgICAgdXJsOiByZXNvdXJjZS51cmwsXHJcbiAgICAgICAgICAgICAgICBzcHJpdGVzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBdWRpb1Nwcml0ZURhdGEoYXNzZXREYXRhOiBJQXNzZXQpOiBJU3ByaXRlRGF0YSB7XHJcbiAgICAgICAgLy8gLSBmaW5kIHRoZSByZXNvdXJjZSB0aGF0IGlzIHRoZSBjb3JyZXNwb25kaW5nIGpzb24uLi5cclxuICAgICAgICBjb25zdCByZXNvdXJjZXMgPSB0aGlzLl9sb2FkZXIucmVzb3VyY2VzO1xyXG5cclxuICAgICAgICBjb25zdCBhdWRpb1NyYyA9IGFzc2V0RGF0YS5zcmM7XHJcbiAgICAgICAgY29uc3Qgc2xhc2hJbmRleCA9IGF1ZGlvU3JjLmxhc3RJbmRleE9mKCcvJykgKyAxO1xyXG4gICAgICAgIGNvbnN0IGZuYW1lID0gYXVkaW9TcmMuc3Vic3RyaW5nKHNsYXNoSW5kZXgpXHJcblxyXG4gICAgICAgIGNvbnN0IHBhdGggPSBhdWRpb1NyYy5zdWJzdHJpbmcoMCwgc2xhc2hJbmRleClcclxuXHJcbiAgICAgICAgY29uc3QgZG90SW5kZXggPSBmbmFtZS5sYXN0SW5kZXhPZignLicpXHJcblxyXG4gICAgICAgIC8vd2hhdHMgdGhlIGZpbGUgbmFtZSB3ZSBhcmUgbG9va2luZyBmb3I/XHJcbiAgICAgICAgY29uc3QganNvbk5hbWUgPSBkb3RJbmRleCA+IC0xPyBmbmFtZS5zdWJzdHJpbmcoMCwgZG90SW5kZXgpICsgJy5qc29uJyA6IGZuYW1lICsgJy5qc29uJ1xyXG5cclxuICAgICAgICAvL3doYXRzIHRoZSB1cmwgd2UgYXJlIGxvb2tpbmcgZm9yP1xyXG4gICAgICAgIGNvbnN0IGpzb25VUkwgPSBwYXRoICsganNvbk5hbWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc291cmNlS2V5ID0gT2JqZWN0LmtleXMocmVzb3VyY2VzKS5maW5kKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlOiBMb2FkZXJSZXNvdXJjZSA9IHJlc291cmNlc1trZXldXHJcbiAgICAgICAgICAgIC8vZG9uJ3QgY2hlY2sgdGhlIG5hbWUgLSB0aGUgbmFtZSBpcyB0aGUgaWQgc28gY2FuIGJlIGRpZmZlcmVudCB0byBmaWxlIG5hbWVcclxuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlLnVybCA9PT0ganNvblVSTDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXNvdXJjZUtleSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZTogTG9hZGVyUmVzb3VyY2UgPSByZXNvdXJjZXNbcmVzb3VyY2VLZXldO1xyXG4gICAgICAgICAgICByZXR1cm4gPElTcHJpdGVEYXRhPnJlc291cmNlLmRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkQXNzZXRzKGFzc2V0czogSUFzc2V0W10sIGxvYWQgPSB0cnVlKTogUHJvbWlzZTx2b2lkPiB7ICAgIFxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBhc3NldHMuZm9yRWFjaChhc3NldCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1RPRE8gLSBwYXNzIHRocm91Z2ggbW9yZSBpbmZvcm1hdGlvbiBlZyBzb3VuZCBncm91cHM/XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vc3RvcmUgdGhlIGRhdGEgYnkgaWQgZm9yIGxhdGVyIGxvb2t1cCBhZnRlciBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAvL3dhaXQgdGhpcyB3b24ndCB3b3JrLCB3aGF0IGlmIGZpbGUgYW5kIGpzb24gaGF2ZSB0aGUgc2FtZSBpZC4uLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYXNzZXREYXRhW2Fzc2V0LmlkXSA9IGFzc2V0O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBhc3NldC5hdWRpbyA/IGFzc2V0LnNyYyArIHRoaXMuYXVkaW9Gb3JtYXQgOiBhc3NldC5zcmM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIuYWRkKGFzc2V0LmlkLCBzcmMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmIChsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIub25Db21wbGV0ZS5vbmNlKHJlc29sdmUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5sb2FkKGFzc2V0OiBJQXNzZXQpOiB2b2lkIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5fYXNzZXREYXRhW2Fzc2V0LmlkXTtcclxuICAgICAgICBkZWxldGUgdGhpcy5fbG9hZGVyLnJlc291cmNlc1thc3NldC5pZF07XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgRXZlbnRRdWV1ZSB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBUaW1lb3V0IH0gZnJvbSBcIi4uL3V0aWxzL1RpbWVvdXRcIjtcclxuaW1wb3J0IHsgVXBkYXRlTGlzdCB9IGZyb20gXCIuLi91dGlscy9VcGRhdGVMaXN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTY3JlZW5Db25maWcge1xyXG4gICAgc2NyZWVuV2lkdGg6IG51bWJlcixcclxuICAgIHNjcmVlbkhlaWdodDogbnVtYmVyLFxyXG4gICAgc2NyZWVuRXZlbnRzOiBFdmVudFF1ZXVlLC8vZm9yIGNoYW5naW5nIHNjcmVlbnNcclxuICAgIGlkPzpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbiBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlTGlzdDogVXBkYXRlTGlzdDtcclxuICAgIHB1YmxpYyB0aW1lb3V0OiBUaW1lb3V0O1xyXG5cclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuICAgIHByb3RlY3RlZCBzY3JlZW5XaWR0aDpudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgc2NyZWVuSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgc2NyZWVuRXZlbnRzOiBFdmVudFF1ZXVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSVNjcmVlbkNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpXHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdCA9IG5ldyBVcGRhdGVMaXN0KCk7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gPFRpbWVvdXQ+dGhpcy51cGRhdGVMaXN0LmFkZChuZXcgVGltZW91dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3QudXBkYXRlKGRlbHRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3QucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpXHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBFbmdpbmVFdmVudHMgfSBmcm9tIFwiLi9FbmdpbmVFdmVudHNcIjtcclxuaW1wb3J0IHsgRXZlbnRRdWV1ZSB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBTY3JlZW4gfSBmcm9tIFwiLi9TY3JlZW5cIjtcclxuaW1wb3J0IHsgSVNpemUsIFNldHRpbmdzIH0gZnJvbSBcIi4vU2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSBcIi4vTG9hZGVyXCI7XHJcbmltcG9ydCB7IFVubG9hZGVyIH0gZnJvbSBcIi4vVW5sb2FkZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNjcmVlbk1hcCB7XHJcbiAgICBbaWQ6IHN0cmluZ106IHR5cGVvZiBTY3JlZW5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW5NYW5hZ2VyIHtcclxuXHJcbiAgICBwdWJsaWMgcm9vdDogUElYSS5Db250YWluZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2l6ZTogSVNpemU7XHJcblxyXG4gICAgcHVibGljIGN1cnJlbnRTY3JlZW46IFNjcmVlbjtcclxuXHJcbiAgICBwcml2YXRlIF9zY3JlZW5NYXA6IElTY3JlZW5NYXBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9ldmVudHM6IEV2ZW50UXVldWUsXHJcbiAgICAgICAgcHJpdmF0ZSBfc2V0dGluZ3M6IFNldHRpbmdzLFxyXG4gICAgICAgIHByaXZhdGUgX2xvYWRlcjogTG9hZGVyLFxyXG4gICAgICAgIHByaXZhdGUgX3VubG9hZGVyOiBVbmxvYWRlclxyXG4gICAgKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fc2l6ZSA9IHRoaXMuX3NldHRpbmdzLnNpemU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yb290ID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucm9vdC5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB0aGlzLl9zaXplLmhlaWdodCAvIDJcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMuX2V2ZW50cy5vbihFbmdpbmVFdmVudHMuU0hPV19TQ1JFRU4sIHRoaXMuc2hvd1NjcmVlbilcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHNjcmVlbk1hcChtYXA6IElTY3JlZW5NYXApIHtcclxuICAgICAgICB0aGlzLl9zY3JlZW5NYXAgPSBtYXA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTY3JlZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NyZWVuLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93U2NyZWVuID0gKGlkOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyAtIHZhbGlkYXRlIGlkXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zY3JlZW5NYXAuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NjcmVlbiB0eXBlIG5vdCBmb3VuZCcsIGlkKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyAtIFVubG9hZCBmaXJzdCBpZiBuZWNlc3NhcnkgdG9vXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNjcmVlbikge1xyXG4gICAgICAgICAgICBjb25zdCBhc3NldHNUb1VuTG9hZCA9IHRoaXMuX3NldHRpbmdzLmFzc2V0c1t0aGlzLmN1cnJlbnRTY3JlZW4uaWRdO1xyXG4gICAgICAgICAgICB0aGlzLl91bmxvYWRlci51bmxvYWQoYXNzZXRzVG9VbkxvYWQpICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgU2NyZWVuVHlwZSA9IHRoaXMuX3NjcmVlbk1hcFtpZF07XHJcbiAgICAgICAgLy8gLSBwcmVsb2FkIGZpcnN0IGlmIG5lY2Vzc2FyeVxyXG4gICAgICAgIGNvbnN0IGFzc2V0c1RvTG9hZCA9IHRoaXMuX3NldHRpbmdzLmFzc2V0c1tpZF07XHJcbiAgICAgICAgaWYgKGFzc2V0c1RvTG9hZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9hZEFzc2V0cyhhc3NldHNUb0xvYWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlU2NyZWVuKCk7ICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW4gPSB0aGlzLl9jcmVhdGVTY3JlZW4oU2NyZWVuVHlwZSwgaWQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwb3NlU2NyZWVuKCk7ICAgXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjcmVlbiA9IHRoaXMuX2NyZWF0ZVNjcmVlbihTY3JlZW5UeXBlLCBpZClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlU2NyZWVuKFNjcmVlblR5cGU6IHR5cGVvZiBTY3JlZW4sIGlkOiBzdHJpbmcpOiBTY3JlZW4ge1xyXG4gICAgICAgIGNvbnN0IHNjcmVlbiA9IDxTY3JlZW4+bmV3IFNjcmVlblR5cGUoe1xyXG4gICAgICAgICAgICBzY3JlZW5XaWR0aDogdGhpcy5fc2l6ZS53aWR0aCxcclxuICAgICAgICAgICAgc2NyZWVuSGVpZ2h0OiB0aGlzLl9zaXplLmhlaWdodCxcclxuICAgICAgICAgICAgc2NyZWVuRXZlbnRzOiB0aGlzLl9ldmVudHMsXHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yb290LmFkZENoaWxkKHNjcmVlbik7XHJcbiAgICAgICAgcmV0dXJuIHNjcmVlbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vVE9ETyAtIGtlZXAgcm9vdCBjZW50ZXJlZD8gT3IgbWF5YmUgbm90IG5lZWRlZC4uLlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlU2NyZWVuKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTY3JlZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NyZWVuLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NyZWVuID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvL2ludGVyZmFjZSBmb3IgdGhlIGNvbmZpZ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXNzZXQge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHNyYzogc3RyaW5nO1xyXG4gICAgYXVkaW8/OiBib29sZWFuOy8vaWYgdHJ1ZSB0aGVuIGl0IHdpbGwgdGFnIG9uIGF1ZGlvIGZvcm1hdCBleHRlbnNpb25cclxuICAgIGxvb3A/OiBudW1iZXI7Ly9mb3Igc291bmRzXHJcbiAgICBncm91cD86IHN0cmluZzsvL2ZvciBzb3VuZHNcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2l6ZSB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFzc2V0cyB7XHJcbiAgICBbaWQ6IHN0cmluZ106IElBc3NldFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb25maWcge1xyXG4gICAgYXNzZXRzOiBJQXNzZXRzO1xyXG4gICAgc2l6ZTogSVNpemU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5ncyBpbXBsZW1lbnRzIElDb25maWcge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQ09ORklHX0xPQURFRDogc3RyaW5nID0gJ2NvbmZpZy1sb2FkZWQnO1xyXG5cclxuICAgIHB1YmxpYyBjb25maWdQYXRoOiBzdHJpbmcgPSAnanNvbi9jb25maWcuanNvbidcclxuXHJcbiAgICBwdWJsaWMgYXNzZXRzOiBJQXNzZXRzO1xyXG4gICAgcHVibGljIHNpemU6IElTaXplID0ge3dpZHRoOiAxMzM0LCBoZWlnaHQ6IDc1MH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9hZGVyOiBQSVhJLkxvYWRlciwgcHJpdmF0ZSBfZXZlbnRzOiBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlcikge1xyXG4gICAgICAgIHRoaXMubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNYW5pZmVzdChrZXk/OiBzdHJpbmcpOiBJQXNzZXRbXSB7XHJcbiAgICAgICAgaWYgKCFrZXkpIHtcclxuICAgICAgICAgICAga2V5ID0gJ2dsb2JhbCdcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXRzW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWQoKTogU2V0dGluZ3Mge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlci5hZGQoJ2NvbmZpZycsIHRoaXMuY29uZmlnUGF0aCk7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyLm9uQ29tcGxldGUub25jZSh0aGlzLl9jb25maWdMb2FkZWQpXHJcbiAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jb25maWdMb2FkZWQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgY29uZmlnOiBJQ29uZmlnID0gPElDb25maWc+dGhpcy5fbG9hZGVyLnJlc291cmNlcy5jb25maWcuZGF0YTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZylcclxuICAgICAgICB0aGlzLl9ldmVudHMuZW1pdChTZXR0aW5ncy5DT05GSUdfTE9BREVEKVxyXG4gICAgfVxyXG5cclxufSIsIlxyXG5pbXBvcnQgeyBTb3VuZCB9IGZyb20gXCIuLi9hdWRpb1wiO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwiLi9Mb2FkZXJcIjtcclxuaW1wb3J0IHsgSUFzc2V0LCBJQXNzZXRzIH0gZnJvbSBcIi4vU2V0dGluZ3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVbmxvYWRlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9hZGVyOiBMb2FkZXIpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVubG9hZChhc3NldHM6IElBc3NldFtdKSB7XHJcblxyXG4gICAgICAgIGFzc2V0cyAmJiBhc3NldHMuZm9yRWFjaCgoYXNzZXQ6IElBc3NldCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAtIHJlbW92ZSBmcm9tIGxvYWRlclxyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIudW5sb2FkKGFzc2V0KVxyXG4gICAgICAgICAgICAvLyAtIHJlbW92ZSBmcm9tIHRleHR1cmUgY2FjaGVcclxuICAgICAgICAgICAgZGVsZXRlIFBJWEkudXRpbHMuVGV4dHVyZUNhY2hlW2Fzc2V0LmlkXVxyXG4gICAgICAgICAgICAvLyAtIHJlbW92ZSBmcm9tIEJhc2VUZXh0dXJlQ2FjaGVcclxuICAgICAgICAgICAgZGVsZXRlIFBJWEkudXRpbHMuQmFzZVRleHR1cmVDYWNoZVthc3NldC5pZF1cclxuICAgICAgICAgICAgLy8gLSByZW1vdmUgZnJvbSBzb3VuZCBlbmdpbmVcclxuICAgICAgICAgICAgU291bmQuaW5zdGFuY2UucmVtb3ZlKGFzc2V0LmlkKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9Mb2FkZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1NjcmVlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2NyZWVuTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2V0dGluZ3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZlcnNpb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL0VuZ2luZUV2ZW50cyc7IiwiY29uc3QgdmVyc2lvbiA9IHsgY29kZTogJzAuMS4yNicgfVxuICAgIGV4cG9ydCB7dmVyc2lvbn0iLCJjb25zdCBFYXNpbmcgPSB7XHJcbiAgICBMaW5lYXI6IHtcclxuICAgICAgICBOb25lKGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIGs7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgUXVhZHJhdGljOiB7XHJcbiAgICAgICAgSW4oaykge1xyXG4gICAgICAgICAgICByZXR1cm4gayAqIGs7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIGsgKiAoMiAtIGspO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEluT3V0KGspIHtcclxuICAgICAgICAgICAgaWYgKChrICo9IDIpIDwgMSkgcmV0dXJuIDAuNSAqIGsgKiBrO1xyXG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqICgtLWsgKiAoayAtIDIpIC0gMSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgQ3ViaWM6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrICogayAqIGs7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0tayAqIGsgKiBrICsgMTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbk91dChrKSB7XHJcbiAgICAgICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHJldHVybiAwLjUgKiBrICogayAqIGs7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogayArIDIpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIFF1YXJ0aWM6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrICogayAqIGsgKiBrO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE91dChrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxIC0gLS1rICogayAqIGsgKiBrO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEluT3V0KGspIHtcclxuICAgICAgICAgICAgaWYgKChrICo9IDIpIDwgMSkgcmV0dXJuIDAuNSAqIGsgKiBrICogayAqIGs7XHJcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogKChrIC09IDIpICogayAqIGsgKiBrIC0gMik7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgUXVpbnRpYzoge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIGsgKiBrICogayAqIGsgKiBrO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE91dChrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtLWsgKiBrICogayAqIGsgKiBrICsgMTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbk91dChrKSB7XHJcbiAgICAgICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHJldHVybiAwLjUgKiBrICogayAqIGsgKiBrICogaztcclxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICogayAqIGsgKyAyKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBTaW51c29pZGFsOiB7XHJcbiAgICAgICAgSW4oaykge1xyXG4gICAgICAgICAgICByZXR1cm4gMSAtIE1hdGguY29zKChrICogTWF0aC5QSSkgLyAyKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zaW4oKGsgKiBNYXRoLlBJKSAvIDIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEluT3V0KGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGspKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBFeHBvbmVudGlhbDoge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIGsgPT09IDAgPyAwIDogTWF0aC5wb3coMTAyNCwgayAtIDEpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE91dChrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdygyLCAtMTAgKiBrKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbk91dChrKSB7XHJcbiAgICAgICAgICAgIGlmIChrID09PSAwKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgaWYgKGsgPT09IDEpIHJldHVybiAxO1xyXG4gICAgICAgICAgICBpZiAoKGsgKj0gMikgPCAxKSByZXR1cm4gMC41ICogTWF0aC5wb3coMTAyNCwgayAtIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gMC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAoayAtIDEpKSArIDIpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIENpcmN1bGFyOiB7XHJcbiAgICAgICAgSW4oaykge1xyXG4gICAgICAgICAgICByZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gayAqIGspO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE91dChrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIC0tayAqIGspO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEluT3V0KGspIHtcclxuICAgICAgICAgICAgaWYgKChrICo9IDIpIDwgMSkgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSBrICogaykgLSAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtIChrIC09IDIpICogaykgKyAxKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBFbGFzdGljOiB7XHJcbiAgICAgICAgSW4oaykge1xyXG4gICAgICAgICAgICBsZXQgcyxcclxuICAgICAgICAgICAgICAgIGEgPSAwLjEsXHJcbiAgICAgICAgICAgICAgICBwID0gMC40O1xyXG4gICAgICAgICAgICBpZiAoayA9PT0gMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIGlmIChrID09PSAxKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgaWYgKCFhIHx8IGEgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBhID0gMTtcclxuICAgICAgICAgICAgICAgIHMgPSBwIC8gNDtcclxuICAgICAgICAgICAgfSBlbHNlIHMgPSAocCAqIE1hdGguYXNpbigxIC8gYSkpIC8gKDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgcmV0dXJuIC0oYSAqIE1hdGgucG93KDIsIDEwICogKGsgLT0gMSkpICogTWF0aC5zaW4oKChrIC0gcykgKiAoMiAqIE1hdGguUEkpKSAvIHApKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICBsZXQgcyxcclxuICAgICAgICAgICAgICAgIGEgPSAwLjEsXHJcbiAgICAgICAgICAgICAgICBwID0gMC40O1xyXG4gICAgICAgICAgICBpZiAoayA9PT0gMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIGlmIChrID09PSAxKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgaWYgKCFhIHx8IGEgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBhID0gMTtcclxuICAgICAgICAgICAgICAgIHMgPSBwIC8gNDtcclxuICAgICAgICAgICAgfSBlbHNlIHMgPSAocCAqIE1hdGguYXNpbigxIC8gYSkpIC8gKDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgcmV0dXJuIGEgKiBNYXRoLnBvdygyLCAtMTAgKiBrKSAqIE1hdGguc2luKCgoayAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKSArIDE7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBsZXQgcyxcclxuICAgICAgICAgICAgICAgIGEgPSAwLjEsXHJcbiAgICAgICAgICAgICAgICBwID0gMC40O1xyXG4gICAgICAgICAgICBpZiAoayA9PT0gMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIGlmIChrID09PSAxKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgaWYgKCFhIHx8IGEgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBhID0gMTtcclxuICAgICAgICAgICAgICAgIHMgPSBwIC8gNDtcclxuICAgICAgICAgICAgfSBlbHNlIHMgPSAocCAqIE1hdGguYXNpbigxIC8gYSkpIC8gKDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgaWYgKChrICo9IDIpIDwgMSkgcmV0dXJuIC0wLjUgKiAoYSAqIE1hdGgucG93KDIsIDEwICogKGsgLT0gMSkpICogTWF0aC5zaW4oKChrIC0gcykgKiAoMiAqIE1hdGguUEkpKSAvIHApKTtcclxuICAgICAgICAgICAgcmV0dXJuIGEgKiBNYXRoLnBvdygyLCAtMTAgKiAoayAtPSAxKSkgKiBNYXRoLnNpbigoKGsgLSBzKSAqICgyICogTWF0aC5QSSkpIC8gcCkgKiAwLjUgKyAxO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIEJhY2s6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIGxldCBzID0gMS43MDE1ODtcclxuICAgICAgICAgICAgcmV0dXJuIGsgKiBrICogKChzICsgMSkgKiBrIC0gcyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgbGV0IHMgPSAxLjcwMTU4O1xyXG4gICAgICAgICAgICByZXR1cm4gLS1rICogayAqICgocyArIDEpICogayArIHMpICsgMTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbk91dChrKSB7XHJcbiAgICAgICAgICAgIGxldCBzID0gMS43MDE1OCAqIDEuNTI1O1xyXG4gICAgICAgICAgICBpZiAoKGsgKj0gMikgPCAxKSByZXR1cm4gMC41ICogKGsgKiBrICogKChzICsgMSkgKiBrIC0gcykpO1xyXG4gICAgICAgICAgICByZXR1cm4gMC41ICogKChrIC09IDIpICogayAqICgocyArIDEpICogayArIHMpICsgMik7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgQm91bmNlOiB7XHJcbiAgICAgICAgSW4oaykge1xyXG4gICAgICAgICAgICByZXR1cm4gMSAtIEVhc2luZy5Cb3VuY2UuT3V0KDEgLSBrKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICBpZiAoayA8IDEgLyAyLjc1KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNy41NjI1ICogayAqIGs7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoayA8IDIgLyAyLjc1KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKGsgLT0gMS41IC8gMi43NSkgKiBrICsgMC43NTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrIDwgMi41IC8gMi43NSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIChrIC09IDIuMjUgLyAyLjc1KSAqIGsgKyAwLjkzNzU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKGsgLT0gMi42MjUgLyAyLjc1KSAqIGsgKyAwLjk4NDM3NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEluT3V0KGspIHtcclxuICAgICAgICAgICAgaWYgKGsgPCAwLjUpIHJldHVybiBFYXNpbmcuQm91bmNlLkluKGsgKiAyKSAqIDAuNTtcclxuICAgICAgICAgICAgcmV0dXJuIEVhc2luZy5Cb3VuY2UuT3V0KGsgKiAyIC0gMSkgKiAwLjUgKyAwLjU7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBJbnRlcnBvbGF0aW9uID0ge1xyXG4gICAgTGluZWFyKHYsIGspIHtcclxuICAgICAgICBsZXQgbSA9IHYubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgZiA9IG0gKiBrLFxyXG4gICAgICAgICAgICBpID0gTWF0aC5mbG9vcihmKSxcclxuICAgICAgICAgICAgZm4gPSBJbnRlcnBvbGF0aW9uLlV0aWxzLkxpbmVhcjtcclxuXHJcbiAgICAgICAgaWYgKGsgPCAwKSByZXR1cm4gZm4odlswXSwgdlsxXSwgZik7XHJcbiAgICAgICAgaWYgKGsgPiAxKSByZXR1cm4gZm4odlttXSwgdlttIC0gMV0sIG0gLSBmKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZuKHZbaV0sIHZbaSArIDEgPiBtID8gbSA6IGkgKyAxXSwgZiAtIGkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBCZXppZXIodiwgaykge1xyXG4gICAgICAgIGxldCBiID0gMCxcclxuICAgICAgICAgICAgbiA9IHYubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgcHcgPSBNYXRoLnBvdyxcclxuICAgICAgICAgICAgYm4gPSBJbnRlcnBvbGF0aW9uLlV0aWxzLkJlcm5zdGVpbixcclxuICAgICAgICAgICAgaTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8PSBuOyBpKyspIHtcclxuICAgICAgICAgICAgYiArPSBwdygxIC0gaywgbiAtIGkpICogcHcoaywgaSkgKiB2W2ldICogYm4obiwgaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYjtcclxuICAgIH0sXHJcblxyXG4gICAgQ2F0bXVsbFJvbSh2LCBrKSB7XHJcbiAgICAgICAgbGV0IG0gPSB2Lmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgIGYgPSBtICogayxcclxuICAgICAgICAgICAgaSA9IE1hdGguZmxvb3IoZiksXHJcbiAgICAgICAgICAgIGZuID0gSW50ZXJwb2xhdGlvbi5VdGlscy5DYXRtdWxsUm9tO1xyXG5cclxuICAgICAgICBpZiAodlswXSA9PT0gdlttXSkge1xyXG4gICAgICAgICAgICBpZiAoayA8IDApIGkgPSBNYXRoLmZsb29yKChmID0gbSAqICgxICsgaykpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmbih2WyhpIC0gMSArIG0pICUgbV0sIHZbaV0sIHZbKGkgKyAxKSAlIG1dLCB2WyhpICsgMikgJSBtXSwgZiAtIGkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChrIDwgMCkgcmV0dXJuIHZbMF0gLSAoZm4odlswXSwgdlswXSwgdlsxXSwgdlsxXSwgLWYpIC0gdlswXSk7XHJcbiAgICAgICAgICAgIGlmIChrID4gMSkgcmV0dXJuIHZbbV0gLSAoZm4odlttXSwgdlttXSwgdlttIC0gMV0sIHZbbSAtIDFdLCBmIC0gbSkgLSB2W21dKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmbih2W2kgPyBpIC0gMSA6IDBdLCB2W2ldLCB2W20gPCBpICsgMSA/IG0gOiBpICsgMV0sIHZbbSA8IGkgKyAyID8gbSA6IGkgKyAyXSwgZiAtIGkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgVXRpbHM6IHtcclxuICAgICAgICBMaW5lYXIocDAsIHAxLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAocDEgLSBwMCkgKiB0ICsgcDA7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgQmVybnN0ZWluKG4sIGkpIHtcclxuICAgICAgICAgICAgbGV0IGZjID0gSW50ZXJwb2xhdGlvbi5VdGlscy5GYWN0b3JpYWw7XHJcbiAgICAgICAgICAgIHJldHVybiBmYyhuKSAvIGZjKGkpIC8gZmMobiAtIGkpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEZhY3RvcmlhbDogKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGEgPSBbMV07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgICAgICAgIGxldCBzID0gMSxcclxuICAgICAgICAgICAgICAgICAgICBpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFbbl0pIHJldHVybiBhW25dO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gbjsgaSA+IDE7IGktLSkgcyAqPSBpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChhW25dID0gcyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSkoKSxcclxuXHJcbiAgICAgICAgQ2F0bXVsbFJvbShwMCwgcDEsIHAyLCBwMywgdCkge1xyXG4gICAgICAgICAgICBsZXQgdjAgPSAocDIgLSBwMCkgKiAwLjUsXHJcbiAgICAgICAgICAgICAgICB2MSA9IChwMyAtIHAxKSAqIDAuNSxcclxuICAgICAgICAgICAgICAgIHQyID0gdCAqIHQsXHJcbiAgICAgICAgICAgICAgICB0MyA9IHQgKiB0MjtcclxuICAgICAgICAgICAgcmV0dXJuICgyICogcDEgLSAyICogcDIgKyB2MCArIHYxKSAqIHQzICsgKC0zICogcDEgKyAzICogcDIgLSAyICogdjAgLSB2MSkgKiB0MiArIHYwICogdCArIHAxO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgRWFzaW5nLCBJbnRlcnBvbGF0aW9uIH07XHJcbiIsImltcG9ydCB7IEVhc2luZywgSW50ZXJwb2xhdGlvbiB9IGZyb20gJy4vRWFzaW5nJztcclxuaW1wb3J0IHsgVHdlZW5NYW5hZ2VyIH0gZnJvbSAnLi9Ud2Vlbk1hbmFnZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFR3ZWVuIHtcclxuICAgIHB1YmxpYyB0d2Vlbk1hbmFnZXI6IFR3ZWVuTWFuYWdlcjtcclxuICAgIHByb3RlY3RlZCBfb2JqZWN0OiB1bmtub3duOyAvL3R3ZWVuIHRhcmdldFxyXG4gICAgcHJvdGVjdGVkIF92YWx1ZXNTdGFydDogb2JqZWN0ID0ge307XHJcbiAgICBwcm90ZWN0ZWQgX3ZhbHVlc0VuZDogb2JqZWN0ID0ge307XHJcbiAgICBwcm90ZWN0ZWQgX3ZhbHVlc1N0YXJ0UmVwZWF0OiBvYmplY3QgPSB7fTtcclxuICAgIHByb3RlY3RlZCBfZHVyYXRpb246IG51bWJlciA9IDEwMDA7XHJcbiAgICBwcm90ZWN0ZWQgX3JlcGVhdDogbnVtYmVyID0gMDtcclxuICAgIHByb3RlY3RlZCBfeW95bzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIF9pc1BsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBfcmV2ZXJzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBfZGVsYXlUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIF9zdGFydFRpbWU6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgX2Vhc2luZ0Z1bmN0aW9uOiAoazogbnVtYmVyKSA9PiBudW1iZXIgPSBFYXNpbmcuTGluZWFyLk5vbmU7XHJcbiAgICBwcm90ZWN0ZWQgX2ludGVycG9sYXRpb25GdW5jdGlvbjogKHY6IGFueSwgazogYW55KSA9PiBhbnkgPSBJbnRlcnBvbGF0aW9uLkxpbmVhcjtcclxuICAgIHByb3RlY3RlZCBfY2hhaW5lZFR3ZWVuczogVHdlZW5bXSA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIF9vblN0YXJ0Q2FsbGJhY2s6ICgpID0+IHZvaWQgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIF9vblN0YXJ0Q2FsbGJhY2tGaXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIF9vblVwZGF0ZUNhbGxiYWNrOiAoKSA9PiB2b2lkID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCBfb25Db21wbGV0ZUNhbGxiYWNrOiAoKSA9PiB2b2lkID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCBfb25TdG9wQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9iamVjdDogdW5rbm93bikge1xyXG4gICAgICAgIHRoaXMuX29iamVjdCA9IG9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvL3JldHVybnMgZmFsc2UgaWYgY29tcGxldGVkXHJcbiAgICBwdWJsaWMgdXBkYXRlKHRpbWU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBwcm9wZXJ0eTtcclxuICAgICAgICBpZiAodGltZSA8IHRoaXMuX3N0YXJ0VGltZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX29uU3RhcnRDYWxsYmFja0ZpcmVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fb25TdGFydENhbGxiYWNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vblN0YXJ0Q2FsbGJhY2suY2FsbCh0aGlzLl9vYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX29uU3RhcnRDYWxsYmFja0ZpcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVsYXBzZWQgPSAodGltZSAtIHRoaXMuX3N0YXJ0VGltZSkgLyB0aGlzLl9kdXJhdGlvbjtcclxuICAgICAgICBlbGFwc2VkID0gZWxhcHNlZCA+IDEgPyAxIDogZWxhcHNlZDtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2Vhc2luZ0Z1bmN0aW9uKGVsYXBzZWQpO1xyXG4gICAgICAgIGZvciAocHJvcGVydHkgaW4gdGhpcy5fdmFsdWVzRW5kKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldIHx8IDA7XHJcbiAgICAgICAgICAgIGxldCBlbmQgPSB0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldO1xyXG4gICAgICAgICAgICBpZiAoZW5kIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29iamVjdFtwcm9wZXJ0eV0gPSB0aGlzLl9pbnRlcnBvbGF0aW9uRnVuY3Rpb24oZW5kLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBQYXJzZXMgcmVsYXRpdmUgZW5kIHZhbHVlcyB3aXRoIHN0YXJ0IGFzIGJhc2UgKGUuZy46ICsxMCwgLTMpXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmQgPSBzdGFydCArIHBhcnNlRmxvYXQoZW5kKTsgLy8sIDEwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHByb3RlY3QgYWdhaW5zdCBub24gbnVtZXJpYyBwcm9wZXJ0aWVzLlxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2JqZWN0W3Byb3BlcnR5XSA9IHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9vblVwZGF0ZUNhbGxiYWNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uVXBkYXRlQ2FsbGJhY2suY2FsbCh0aGlzLl9vYmplY3QsIHZhbHVlLCBlbGFwc2VkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsYXBzZWQgPT09IDEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JlcGVhdCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0Zpbml0ZSh0aGlzLl9yZXBlYXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVwZWF0LS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyByZWFzc2lnbiBzdGFydGluZyB2YWx1ZXMsIHJlc3RhcnQgYnkgbWFraW5nIHN0YXJ0VGltZSA9IG5vd1xyXG4gICAgICAgICAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldID0gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldICsgcGFyc2VGbG9hdCh0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3lveW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG1wID0gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldID0gdG1wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5feW95bykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JldmVyc2VkID0gIXRoaXMuX3JldmVyc2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRUaW1lID0gdGltZSArIHRoaXMuX2RlbGF5VGltZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29uQ29tcGxldGVDYWxsYmFjayAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uQ29tcGxldGVDYWxsYmFjay5jYWxsKHRoaXMuX29iamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbnVtQ2hhaW5lZFR3ZWVucyA9IHRoaXMuX2NoYWluZWRUd2VlbnMubGVuZ3RoOyBpIDwgbnVtQ2hhaW5lZFR3ZWVuczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhaW5lZFR3ZWVuc1tpXS5zdGFydCh0aW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG8ocHJvcGVydGllczogb2JqZWN0LCBkdXJhdGlvbjogbnVtYmVyKTogVHdlZW4ge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKTtcclxuICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNTdGFydFtrZXldID0gcGFyc2VGbG9hdCh0aGlzLl9vYmplY3Rba2V5XSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc0VuZFtrZXldID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzW2tleV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3ZhbHVlc0VuZCA9IHByb3BlcnRpZXM7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmcm9tKHByb3BlcnRpZXM6IG9iamVjdCwgZHVyYXRpb246IG51bWJlcik6IFR3ZWVuIHtcclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XHJcbiAgICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzU3RhcnRba2V5XSA9IHBhcnNlRmxvYXQocHJvcGVydGllc1trZXldKTtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzRW5kW2tleV0gPSBwYXJzZUZsb2F0KHRoaXMuX29iamVjdFtrZXldKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnJvbVRvKGZyb206IG9iamVjdCwgdG86IG9iamVjdCwgZHVyYXRpb246IG51bWJlcik6IFR3ZWVuIHtcclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZnJvbSk7XHJcbiAgICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzU3RhcnRba2V5XSA9IHBhcnNlRmxvYXQoZnJvbVtrZXldKTtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzRW5kW2tleV0gPSBwYXJzZUZsb2F0KHRvW2tleV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1R3ZWVuT2YodGFyZ2V0OiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0ID09PSB0aGlzLl9vYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KHRpbWU/OiBudW1iZXIpOiBUd2VlbiB7XHJcbiAgICAgICAgaWYgKHRoaXMudHdlZW5NYW5hZ2VyKSB0aGlzLnR3ZWVuTWFuYWdlci5hZGQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fc3RhcnQodGltZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhcnQodGltZTogbnVtYmVyKTogVHdlZW4ge1xyXG4gICAgICAgIHRoaXMuX2lzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9zdGFydFRpbWUgPSB0aW1lICE9PSB1bmRlZmluZWQgPyB0aW1lIDogdGhpcy50d2Vlbk1hbmFnZXIucGFzc2VkVGltZTsgLy9EYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0VGltZSArPSB0aGlzLl9kZWxheVRpbWU7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0aGlzLl92YWx1ZXNFbmQpIHtcclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgYW4gQXJyYXkgd2FzIHByb3ZpZGVkIGFzIHByb3BlcnR5IHZhbHVlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgbG9jYWwgY29weSBvZiB0aGUgQXJyYXkgd2l0aCB0aGUgc3RhcnQgdmFsdWUgYXQgdGhlIGZyb250XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldID0gW3RoaXMuX29iamVjdFtwcm9wZXJ0eV1dLmNvbmNhdCh0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPSB0aGlzLl9vYmplY3RbcHJvcGVydHldO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldIGluc3RhbmNlb2YgQXJyYXkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gKj0gMS4wOyAvLyBFbnN1cmVzIHdlJ3JlIHVzaW5nIG51bWJlcnMsIG5vdCBzdHJpbmdzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldID0gdGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldIHx8IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wKCk6IFR3ZWVuIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzUGxheWluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50d2Vlbk1hbmFnZXIucmVtb3ZlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2lzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLl9vblN0b3BDYWxsYmFjayAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vblN0b3BDYWxsYmFjay5jYWxsKHRoaXMuX29iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RvcENoYWluZWRUd2VlbnMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcENoYWluZWRUd2VlbnMoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSB0aGlzLl9jaGFpbmVkVHdlZW5zLmxlbmd0aDsgaSA8IG51bUNoYWluZWRUd2VlbnM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9jaGFpbmVkVHdlZW5zW2ldLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGF5KGFtb3VudDogbnVtYmVyKTogVHdlZW4ge1xyXG4gICAgICAgIHRoaXMuX2RlbGF5VGltZSA9IGFtb3VudDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVwZWF0KHRpbWVzOiBudW1iZXIpOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5fcmVwZWF0ID0gdGltZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHlveW8oeW95bzogYm9vbGVhbik6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl95b3lvID0geW95bztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZWFzaW5nKGVhc2luZzogKGs6IG51bWJlcikgPT4gbnVtYmVyKTogVHdlZW4ge1xyXG4gICAgICAgIHRoaXMuX2Vhc2luZ0Z1bmN0aW9uID0gZWFzaW5nO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcnBvbGF0aW9uKGludGVycG9sYXRpb24pOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5faW50ZXJwb2xhdGlvbkZ1bmN0aW9uID0gaW50ZXJwb2xhdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhaW4oLi4udHdlZW5zOiBUd2VlbltdKTogVHdlZW4ge1xyXG4gICAgICAgIHRoaXMuX2NoYWluZWRUd2VlbnMgPSB0d2VlbnM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU3RhcnQoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5fb25TdGFydENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVXBkYXRlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogVHdlZW4ge1xyXG4gICAgICAgIHRoaXMuX29uVXBkYXRlQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Db21wbGV0ZShjYWxsYmFjazogKCkgPT4gdm9pZCk6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TdG9wKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogVHdlZW4ge1xyXG4gICAgICAgIHRoaXMuX29uU3RvcENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc3RhcnQocGF1c2VfZHVyYXRpb246IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0VGltZSArPSBwYXVzZV9kdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlRHVyYXRpb24obmV3X2R1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9kdXJhdGlvbiA9IG5ld19kdXJhdGlvbjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJVXBkYXRlLCBVcGRhdGVMaXN0IH0gZnJvbSAnLi4vdXRpbHMvVXBkYXRlTGlzdCc7XHJcbmltcG9ydCB7IFR3ZWVuIH0gZnJvbSAnLi9Ud2Vlbic7XHJcbmV4cG9ydCB7IEVhc2luZyB9IGZyb20gJy4vRWFzaW5nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUd2Vlbk1hbmFnZXIgZXh0ZW5kcyBVcGRhdGVMaXN0IHtcclxuICAgIHB1YmxpYyBwYXNzZWRUaW1lOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnBhc3NlZFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFzc2VkVGltZSArPSBkZWx0YTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgIGxldCBuID0gdGhpcy51cGRhdGVJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBpdGVtOiBJVXBkYXRlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbiAtIDE7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy51cGRhdGVJdGVtc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmICghaXRlbS51cGRhdGUodGhpcy5wYXNzZWRUaW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbXNbdGhpcy5yZW1vdmVJdGVtcy5sZW5ndGhdID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBub3cgcmVtb3ZlIGl0ZW1zXHJcbiAgICAgICAgICAgIG4gPSB0aGlzLnJlbW92ZUl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKG4gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLnJlbW92ZUl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbXMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKHRhcmdldDogdW5rbm93bik6IFR3ZWVuIHtcclxuICAgICAgICBjb25zdCB0dyA9IG5ldyBUd2Vlbih0YXJnZXQpO1xyXG4gICAgICAgIHR3LnR3ZWVuTWFuYWdlciA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHR3O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKHRhcmdldDogdW5rbm93biwgdHdlZW5NYW5hZ2VyOiBUd2Vlbk1hbmFnZXIgPSBudWxsKTogVHdlZW4ge1xyXG4gICAgICAgIGNvbnN0IHR3ID0gbmV3IFR3ZWVuKHRhcmdldCk7XHJcbiAgICAgICAgdHcudHdlZW5NYW5hZ2VyID0gdHdlZW5NYW5hZ2VyIHx8IFR3ZWVuTWFuYWdlci5pbnN0YW5jZTtcclxuICAgICAgICByZXR1cm4gdHc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGtpbGxUd2VlbnNPZih0YXJnZXQ6IHVua25vd24pIHtcclxuICAgICAgICBpZiAodGhpcy51cGRhdGVJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy51cGRhdGVJdGVtcy5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICAgICAgdHdlZW47XHJcbiAgICAgICAgICAgIGZvciAoOyBpID4gLTE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgdHdlZW4gPSB0aGlzLnVwZGF0ZUl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR3ZWVuLmlzVHdlZW5PZih0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVtcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBraWxsVHdlZW5zT2YodGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICBUd2Vlbk1hbmFnZXIuaW5zdGFuY2Uua2lsbFR3ZWVuc09mKHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zaW5nbGV0b25cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVHdlZW5NYW5hZ2VyXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBUd2Vlbk1hbmFnZXIge1xyXG4gICAgICAgIGlmICghVHdlZW5NYW5hZ2VyLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBUd2Vlbk1hbmFnZXIuX2luc3RhbmNlID0gbmV3IFR3ZWVuTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVHdlZW5NYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vRWFzaW5nJztcclxuZXhwb3J0ICogZnJvbSAnLi9Ud2Vlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vVHdlZW5NYW5hZ2VyJzsiLCJpbnRlcmZhY2UgSVF1ZXVlSXRlbSB7XHJcbiAgICBldmVudElkOiBzdHJpbmc7XHJcbiAgICBhcmdzOiB1bmtub3duW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudFF1ZXVlIGV4dGVuZHMgUElYSS51dGlscy5FdmVudEVtaXR0ZXIge1xyXG5cclxuICAgIHByaXZhdGUgX3F1ZXVlOiBJUXVldWVJdGVtW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgYWRkKGV2ZW50SWQ6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcXVldWUucHVzaCh7XHJcbiAgICAgICAgICAgIGV2ZW50SWQsIGFyZ3NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoX2RlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5fcXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtOiBJUXVldWVJdGVtID0gdGhpcy5fcXVldWUuc2hpZnQoKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KGl0ZW0uZXZlbnRJZCwgLi4uaXRlbS5hcmdzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTZXF1ZW5jZSB7XHJcbiAgICBwdWJsaWMgbGlzdDogdW5rbm93bltdID0gW107XHJcbiAgICBcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzdHVmZj86IHVua25vd25bXSwgcmFuZG9taXNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAoc3R1ZmYpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGQoc3R1ZmYsIHJhbmRvbWlzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoc3R1ZmY6IHVua25vd24sIHJhbmRvbWlzZTogYm9vbGVhbiA9IGZhbHNlKTogU2VxdWVuY2Uge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0dWZmKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IDx1bmtub3duW10+c3R1ZmY7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKC4uLml0ZW1zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RbdGhpcy5saXN0Lmxlbmd0aF0gPSBzdHVmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJhbmRvbWlzZSkgdGhpcy5yYW5kb21pc2UoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlKHN0dWZmOiB1bmtub3duKTogU2VxdWVuY2Uge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0dWZmKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IDx1bmtub3duW10+c3R1ZmY7XHJcbiAgICAgICAgICAgIGNvbnN0IG4gPSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdC5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHRoaXMubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3QuaW5kZXhPZihzdHVmZik7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB0aGlzLmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJhbmRvbWlzZSgpOiBTZXF1ZW5jZSB7XHJcbiAgICAgICAgU2VxdWVuY2UucmFuZG9taXNlTGlzdCh0aGlzLmxpc3QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXh0KCk6IHVua25vd24ge1xyXG4gICAgICAgIGxldCBpdGVtID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaXRlbSA9IHRoaXMubGlzdC5zaGlmdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RbdGhpcy5saXN0Lmxlbmd0aF0gPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJldmlvdXMoKTogdW5rbm93biB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpdGVtID0gdGhpcy5saXN0LnBvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QudW5zaGlmdChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBIT0xERVIgPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbWlzZUxpc3QgPSAobGlzdDogdW5rbm93bltdKTogdW5rbm93bltdID0+IHtcclxuICAgICAgICBTZXF1ZW5jZS5IT0xERVIucHVzaCguLi5saXN0KTtcclxuICAgICAgICBsaXN0Lmxlbmd0aCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKFNlcXVlbmNlLkhPTERFUi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogU2VxdWVuY2UuSE9MREVSLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxpc3RbbGlzdC5sZW5ndGhdID0gU2VxdWVuY2UuSE9MREVSLnNwbGljZShpbmRleCwgMSlbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBJVXBkYXRlIH0gZnJvbSAnLi9VcGRhdGVMaXN0JztcclxuXHJcbmludGVyZmFjZSBJQWN0aW9uIHtcclxuICAgIF90YXJnZXRUaW1lOiBudW1iZXI7XHJcbiAgICBfY2FsbGJhY2s6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lb3V0IGltcGxlbWVudHMgSVVwZGF0ZSB7XHJcbiAgICBwcml2YXRlIF9wb29sOiBJQWN0aW9uW107XHJcbiAgICBwcml2YXRlIF9hY3Rpb25zOiBJQWN0aW9uW10gPSBbXTtcclxuICAgIHByaXZhdGUgX2NhbmNlbGxlZEFjdGlvbnM6IElBY3Rpb25bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvb2xTaXplOiBudW1iZXIgPSA1MCkge1xyXG4gICAgICAgIHRoaXMuX3Bvb2wgPSB0aGlzLl9jcmVhdGVQb29sKHBvb2xTaXplKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlUG9vbChzaXplOiBudW1iZXIpOiBJQWN0aW9uW10ge1xyXG4gICAgICAgIGNvbnN0IHBvb2wgPSBbXTtcclxuICAgICAgICB3aGlsZSAoc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgcG9vbC5wdXNoKHsgX3RhcmdldFRpbWU6IC0xLCBfY2FsbGJhY2s6IG51bGwgfSk7XHJcbiAgICAgICAgICAgIHNpemUtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvb2w7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgX25leHQoKTogSUFjdGlvbiB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX3Bvb2wuc2hpZnQoKTtcclxuICAgICAgICB0aGlzLl9wb29sW3RoaXMuX3Bvb2wubGVuZ3RoXSA9IGl0ZW07XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGF5KGNhbGxiYWNrOiAoKSA9PiB2b2lkLCBtczogbnVtYmVyKTogSUFjdGlvbiB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5fbmV4dCgpO1xyXG4gICAgICAgIGFjdGlvbi5fdGFyZ2V0VGltZSA9IG1zIHx8IC0xO1xyXG4gICAgICAgIGFjdGlvbi5fY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBudWxsO1xyXG4gICAgICAgIHRoaXMuX2FjdGlvbnNbdGhpcy5fYWN0aW9ucy5sZW5ndGhdID0gYWN0aW9uO1xyXG4gICAgICAgIHJldHVybiBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShlbGFwc2VkVGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbiA9IHRoaXMuX2FjdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChuID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgaSwgYWN0aW9uO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSBuIC0gMTsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiA9IHRoaXMuX2FjdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3Igb25lcyB0aGF0IHdlcmUgYWxyZWFkeSBjYW5jZWxsZWQgb3IgZmlyZWRcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24uX3RhcmdldFRpbWUgPT09IC0xIHx8ICFhY3Rpb24uX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsbGVkQWN0aW9uc1t0aGlzLl9jYW5jZWxsZWRBY3Rpb25zLmxlbmd0aF0gPSBhY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbi5fdGFyZ2V0VGltZSA+IDAgJiYgYWN0aW9uLl9jYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5fdGFyZ2V0VGltZSAtPSBlbGFwc2VkVGltZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLl90YXJnZXRUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBhY3Rpb24uX2NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uX2NhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLl90YXJnZXRUaW1lID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIG5vdyByZW1vdmUgYW55IGNhbmNlbGxlZCBvbmVzXHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9jYW5jZWxsZWRBY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiA9IHRoaXMuX2NhbmNlbGxlZEFjdGlvbnMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBpID0gdGhpcy5fYWN0aW9ucy5pbmRleE9mKGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWN0aW9ucy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbmNlbChhY3Rpb246IElBY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBhY3Rpb24uX3RhcmdldFRpbWUgPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCAge1xyXG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLl9hY3Rpb25zLmxlbmd0aDtcclxuICAgICAgICBpZiAobiA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGksIGFjdGlvbjtcclxuICAgICAgICAgICAgZm9yIChpID0gbiAtIDE7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSB0aGlzLl9hY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLl9jYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24uX3RhcmdldFRpbWUgPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hY3Rpb25zLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCAge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLl9wb29sID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIElVcGRhdGUge1xyXG4gICAgdXBkYXRlOiAoZGVsdGE6IG51bWJlcikgPT4gdm9pZCB8IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVMaXN0IHtcclxuICAgIHB1YmxpYyB1cGRhdGVJdGVtczogSVVwZGF0ZVtdID0gW107XHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbXM6IElVcGRhdGVbXSA9IFtdO1xyXG4gICAgcHVibGljIGlzUGF1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtLFxyXG4gICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgIG4gPSB0aGlzLnVwZGF0ZUl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChpID0gbiAtIDE7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy51cGRhdGVJdGVtc1tpXTtcclxuICAgICAgICAgICAgICAgIGl0ZW0udXBkYXRlKGRlbHRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL25vdyByZW1vdmUgaXRlbXNcclxuICAgICAgICAgICAgbiA9IHRoaXMucmVtb3ZlSXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAobiA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5yZW1vdmVJdGVtc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW1zLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1cmdlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbXMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnJlbW92ZUl0ZW1zLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUFsbCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgaXRlbSxcclxuICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgbiA9IHRoaXMudXBkYXRlSXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IG4gLSAxOyBpID4gLTE7IGktLSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW1zW2ldID0gdGhpcy51cGRhdGVJdGVtc1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChpdGVtOiBJVXBkYXRlKTogSVVwZGF0ZSB7XHJcbiAgICAgICAgLy9kb24ndCBhbGxvdyBhZGRpbmcgbW9yZSB0aGFuIG9uY2UhXHJcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlSXRlbXMuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVtc1t0aGlzLnVwZGF0ZUl0ZW1zLmxlbmd0aF0gPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlKGl0ZW06IElVcGRhdGUpOiBJVXBkYXRlIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUl0ZW1zW3RoaXMucmVtb3ZlSXRlbXMubGVuZ3RoXSA9IGl0ZW07XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9yZW1vdmUoaXRlbTogSVVwZGF0ZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy51cGRhdGVJdGVtcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB0aGlzLnVwZGF0ZUl0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVJdGVtcy5sZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnRRdWV1ZSB9IGZyb20gXCIuL0V2ZW50UXVldWVcIjtcclxuaW1wb3J0IHsgVXBkYXRlTGlzdCB9IGZyb20gXCIuL1VwZGF0ZUxpc3RcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVXBkYXRlTG9vcCBleHRlbmRzIFVwZGF0ZUxpc3R7XHJcbiAgICBwcml2YXRlIGFjY3VtdWxhdG9yOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgaW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIHB1YmxpYyBmcHM6IG51bWJlciA9IDYwO1xyXG4gICAgcHJpdmF0ZSBnYW1lTG9vcElkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2V2ZW50UXVldWU6IEV2ZW50UXVldWUpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmludGVydmFsID0gMTAwMCAvIHRoaXMuZnBzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCgpOiBVcGRhdGVMb29wIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZ2FtZUxvb3BJZCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lTG9vcElkID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGUsIHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5nYW1lTG9vcElkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKF9kZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbmV3VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgY29uc3QgZWxhcHNlZCA9IG5ld1RpbWUgLSB0aGlzLmN1cnJlbnRUaW1lO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBuZXdUaW1lO1xyXG4gICAgICAgIHRoaXMuYWNjdW11bGF0b3IgKz0gZWxhcHNlZDtcclxuICAgICAgICAvL3VzZSBhY2N1bXVsYXRvciBzeXN0ZW0gZm9yIHByb2Nlc3NpbmcgdGltZSB3aXRoIGZpeGVkIHRpbWUgc3RlcFxyXG4gICAgICAgIGNvbnN0IGNodW5rID0gdGhpcy5pbnRlcnZhbDtcclxuICAgICAgICB3aGlsZSh0aGlzLmFjY3VtdWxhdG9yID4gY2h1bmspe1xyXG4gICAgICAgICAgICB0aGlzLmFjY3VtdWxhdG9yIC09IGNodW5rO1xyXG4gICAgICAgICAgICBzdXBlci51cGRhdGUoY2h1bmspO1xyXG4gICAgICAgICAgICAvL25vdyBwcm9jZXNzIHRoZSBldmVudCBxdWV1ZVxyXG4gICAgICAgICAgICB0aGlzLl9ldmVudFF1ZXVlLnVwZGF0ZShjaHVuaylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL1RpbWVvdXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1VwZGF0ZUxpc3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL1NlcXVlbmNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9FdmVudFF1ZXVlJztcclxuZXhwb3J0ICogZnJvbSAnLi9VcGRhdGVMb29wJzsiLCJtb2R1bGUuZXhwb3J0cyA9IFBJWEk7Il0sInNvdXJjZVJvb3QiOiIifQ==
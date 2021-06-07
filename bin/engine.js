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
    //unload sound
    Sound.prototype.remove = function (id) {
        var _this = this;
        //find the main sound then remove all that reference that buffer
        var mainData = this._buffers[id];
        if (!mainData) {
            console.error('Sound.remove - no sound found with id', id);
        }
        else {
            var buffer_1 = mainData.buffer;
            Object.keys(this._buffers).forEach(function (key) {
                var soundData = _this._buffers[key];
                if (soundData.buffer === buffer_1) {
                    delete _this._buffers[key];
                }
            });
        }
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
            delete PIXI.utils.TextureCache[asset.src];
            // - remove from BaseTextureCache
            delete PIXI.utils.BaseTextureCache[asset.id];
            delete PIXI.utils.BaseTextureCache[asset.src];
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
var version = { code: '0.1.27' };



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbmdpbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvRW5naW5lLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy9hdWRpby9Tb3VuZC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvYXVkaW8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL2NvcmUvRW5naW5lRXZlbnRzLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy9jb3JlL0xvYWRlci50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9TY3JlZW4udHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL2NvcmUvU2NyZWVuTWFuYWdlci50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9VbmxvYWRlci50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS92ZXJzaW9uLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy90d2Vlbi9FYXNpbmcudHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL3R3ZWVuL1R3ZWVuLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy90d2Vlbi9Ud2Vlbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL3R3ZWVuL2luZGV4LnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy91dGlscy9FdmVudFF1ZXVlLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy91dGlscy9TZXF1ZW5jZS50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvVGltZW91dC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvVXBkYXRlTGlzdC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvVXBkYXRlTG9vcC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZW5naW5lL2V4dGVybmFsIFwiUElYSVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qiw4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Q0FBQyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFN0MsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUU7YUFBTTtZQUNILElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFNUUsT0FBTyxFQUFFLENBQUMsQ0FB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SyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUIsT0FBTSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssRUFBQztZQUMzQixJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQztZQUMxQixpQkFBTSxNQUFNLFlBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNqQztJQUNMLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQ0F0QytCLHNEQUFVLEdBc0N6Qzs7Ozs7Ozs7Ozs7Ozs7QUMxQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDRztBQUNGO0FBQ0U7QUFDQTs7Ozs7Ozs7Ozs7O0FDSjdCLHNCIiwiZmlsZSI6ImVuZ2luZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0VuZ2luZS50c1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnXHJcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSAnLi9hdWRpby9Tb3VuZCc7XHJcbmltcG9ydCB7IEVuZ2luZUV2ZW50cyB9IGZyb20gJy4vY29yZS9FbmdpbmVFdmVudHMnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuL2NvcmUvTG9hZGVyJztcclxuaW1wb3J0IHsgSVNjcmVlbk1hcCwgU2NyZWVuTWFuYWdlciB9IGZyb20gJy4vY29yZS9TY3JlZW5NYW5hZ2VyJztcclxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL2NvcmUvU2V0dGluZ3MnXHJcbmltcG9ydCB7IFVubG9hZGVyIH0gZnJvbSAnLi9jb3JlL1VubG9hZGVyJztcclxuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4vY29yZS92ZXJzaW9uJztcclxuaW1wb3J0IHsgVHdlZW5NYW5hZ2VyIH0gZnJvbSAnLi90d2Vlbic7XHJcbmltcG9ydCB7IEV2ZW50UXVldWUsIFVwZGF0ZUxvb3AgfSBmcm9tICcuL3V0aWxzJztcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvcGl4aS5qcy5kLnRzXCIgLz5cclxuZXhwb3J0IGNsYXNzIEVuZ2luZSB7XHJcblxyXG4gICAgcHVibGljIGFwcDogUElYSS5BcHBsaWNhdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgc2V0dGluZ3M6IFNldHRpbmdzO1xyXG5cclxuICAgIHB1YmxpYyBldmVudHM6IEV2ZW50UXVldWU7XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUxvb3A6IFVwZGF0ZUxvb3A7XHJcblxyXG4gICAgcHVibGljIGxvYWRlcjogTG9hZGVyO1xyXG5cclxuICAgIHB1YmxpYyB1bmxvYWRlcjogVW5sb2FkZXI7XHJcblxyXG4gICAgcHVibGljIHNjcmVlbk1hbmFnZXI6IFNjcmVlbk1hbmFnZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFbmdpbmUgdmVyc2lvbicsIHZlcnNpb24uY29kZSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoc2NyZWVuTWFwOiBJU2NyZWVuTWFwKTogRW5naW5lIHtcclxuICAgICAgICAvL3Byb2JhYmx5IHdhbnQgdG8gdXNlIHRoZSBwaXhpIGxvYWRlciBmb3IgZXZlcnl0aGluZy4uLlxyXG4gICAgICAgIC8vc28gY3JlYXRlIHRoZSBhcHAgc3RyYWlnaHQgYXdheVxyXG4gICAgICAgIHRoaXMuYXBwID0gdGhpcy5fY3JlYXRlUGl4aUFwcCgpXHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gdGhpcy5fY3JlYXRlRXZlbnRzKHNjcmVlbk1hcCk7XHJcbiAgICAgICAgLy9sb2FkIHRoZSBjb25maWdcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKHRoaXMuYXBwLmxvYWRlciwgdGhpcy5ldmVudHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZXNvdXJjZShpZDogc3RyaW5nKTogdW5rbm93biB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwLmxvYWRlci5yZXNvdXJjZXNbaWRdLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jb25maWcgaGFzIG5vdyBsb2FkZWRcclxuICAgIHByaXZhdGUgYnVpbGQoKTogdm9pZCB7XHJcbiAgICAgICAgLy91cGRhdGUgdGhlIGFwcCB3aXRoIHRoZSBsb2FkZWQgc2V0dGluZ3NcclxuICAgICAgICB0aGlzLmFwcC5yZW5kZXJlci5yZXNpemUodGhpcy5zZXR0aW5ncy5zaXplLndpZHRoLCB0aGlzLnNldHRpbmdzLnNpemUuaGVpZ2h0KVxyXG5cclxuICAgICAgICAvL2NyZWF0ZSB0aGUgbG9hZGVyXHJcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBuZXcgTG9hZGVyKHRoaXMuYXBwLmxvYWRlcilcclxuXHJcbiAgICAgICAgdGhpcy51bmxvYWRlciA9IG5ldyBVbmxvYWRlcih0aGlzLmxvYWRlcilcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgdXBkYXRlIGxvb3BcclxuICAgICAgICB0aGlzLnVwZGF0ZUxvb3AgPSB0aGlzLl9jcmVhdGVVcGRhdGVMb29wKClcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgdHdlZW4gbWFuYWdlciwgYWRkIHRvIHVwZGF0ZSBsb29wXHJcbiAgICAgICAgdGhpcy51cGRhdGVMb29wLmFkZChUd2Vlbk1hbmFnZXIuaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAvL2NyZWF0ZSBzY3JlZW4gbWFuYWdlclxyXG4gICAgICAgIHRoaXMuc2NyZWVuTWFuYWdlciA9IHRoaXMuX2NyZWF0ZVNjcmVlbk1hbmFnZXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlVXBkYXRlTG9vcCgpOiBVcGRhdGVMb29wIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVMb29wID0gbmV3IFVwZGF0ZUxvb3AodGhpcy5ldmVudHMpXHJcbiAgICAgICAgdXBkYXRlTG9vcC5zdGFydCgpO1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVMb29wO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVNjcmVlbk1hbmFnZXIoKTogU2NyZWVuTWFuYWdlciB7XHJcbiAgICAgICAgY29uc3Qgc2NyZWVuTWFuYWdlciA9IG5ldyBTY3JlZW5NYW5hZ2VyKHRoaXMuZXZlbnRzLCB0aGlzLnNldHRpbmdzLCB0aGlzLmxvYWRlciwgdGhpcy51bmxvYWRlcilcclxuICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZChzY3JlZW5NYW5hZ2VyLnJvb3QpXHJcbiAgICAgICAgdGhpcy51cGRhdGVMb29wLmFkZChzY3JlZW5NYW5hZ2VyKVxyXG4gICAgICAgIHJldHVybiBzY3JlZW5NYW5hZ2VyO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZUV2ZW50cyhzY3JlZW5NYXA6IElTY3JlZW5NYXApOiBFdmVudFF1ZXVlIHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSBuZXcgRXZlbnRRdWV1ZSgpO1xyXG5cclxuICAgICAgICBldmVudHMub24oU2V0dGluZ3MuQ09ORklHX0xPQURFRCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbmZpZyBpcyBsb2FkZWQgLSBub3cgYnVpbGQgdGhlIGVuZ2luZVxyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkKCk7XHJcbiAgICAgICAgICAgIC8vc2V0IHNjcmVlbm1hcFxyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbk1hbmFnZXIuc2NyZWVuTWFwID0gc2NyZWVuTWFwO1xyXG4gICAgICAgICAgICAvL2xvYWQgZ2xvYmFsIGFzc2V0c1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlci5sb2FkQXNzZXRzKHRoaXMuc2V0dGluZ3MuZ2V0TWFuaWZlc3QoKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBTb3VuZC5pbnN0YW5jZS5hZGRTb3VuZHModGhpcy5sb2FkZXIuZmV0Y2hTb3VuZHMoKSlcclxuICAgICAgICAgICAgICAgICAgICAvL25vdyBzaG93IGZpcnN0IHNjcmVlblxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5lbWl0KEVuZ2luZUV2ZW50cy5BUFBfUkVBRFkpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlUGl4aUFwcCgpOiBQSVhJLkFwcGxpY2F0aW9uIHtcclxuICAgICAgICBjb25zdCB2aWV3ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuICAgICAgICByZXR1cm4gbmV3IFBJWEkuQXBwbGljYXRpb24oe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDc2OCwgd2lkdGg6IDEwMjQsXHJcbiAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICB2aWV3LFxyXG4gICAgICAgICAgICBmb3JjZUNhbnZhczogZmFsc2UsXHJcbiAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgICAgICAgcmVzb2x1dGlvbjogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9jb3JlJ1xyXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJ1xyXG5leHBvcnQgKiBmcm9tICcuL3R3ZWVuJ1xyXG5leHBvcnQgKiBmcm9tICcuL2F1ZGlvJ1xyXG4iLCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNvdW5kRGF0YSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgYnVmZmVyOiBBcnJheUJ1ZmZlciB8IEF1ZGlvQnVmZmVyO1xyXG4gICAgbG9vcD86IG51bWJlcjtcclxuICAgIGdyb3VwPzogc3RyaW5nO1xyXG4gICAgdXJsPzogc3RyaW5nO1xyXG4gICAgZXh0ZW5zaW9uPzogc3RyaW5nO1xyXG4gICAgc3ByaXRlcz86IElTcHJpdGVJbmZvW107XHJcbiAgICBzdGFydD86IG51bWJlcjtcclxuICAgIGR1cmF0aW9uPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTcHJpdGVEYXRhIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBzcmM6IHN0cmluZztcclxuICAgIHNwcml0ZXM6IElTcHJpdGVJbmZvW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNwcml0ZUluZm8ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHN0YXJ0OiBudW1iZXI7XHJcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElCdWZmZXJzIHtcclxuICAgIFtpZDogc3RyaW5nXTogSVNvdW5kRGF0YTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElDaGFubmVscyB7XHJcbiAgICBbaWQ6IHN0cmluZ106IFNvdW5kQ2hhbm5lbDtcclxufVxyXG5cclxuLy9hIG1hbmFnZXIgZm9yIHBsYXlpbmcgd2ViIGF1ZGlvIHNvdW5kc1xyXG5leHBvcnQgY2xhc3MgU291bmQge1xyXG4gICAgcHJpdmF0ZSBjb250ZXh0OiBBdWRpb0NvbnRleHQ7XHJcblxyXG4gICAgcHJpdmF0ZSBnbG9iYWxHYWluOiBTb3VuZENoYW5uZWw7XHJcbiAgICBcclxuICAgIHByaXZhdGUgY2hhbm5lbHM6IElDaGFubmVsczsvL3NmeCwgbXVzaWMsIGVudlxyXG5cclxuICAgIHByaXZhdGUgX2VuYWJsZWQgPSBmYWxzZTsvL1RPRE8gLSBjaGVjayBmb3IgdGhpc1xyXG4gICAgcHJpdmF0ZSBfc2NyYXRjaEJ1ZmZlcjogQXVkaW9CdWZmZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfYnVmZmVyczogSUJ1ZmZlcnM7XHJcblxyXG4gICAgLy9UT0RPIC0gaGF2ZSBhbiBpbnRlcm5hbCBldmVudCBkaXNwYXRjaGVyXHJcblxyXG4gICAgLy9wcm9iYWJseSBtYWtlIHRoaXMgYSBzaW5nbGV0b25cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmIChTb3VuZC5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhyb3cobmV3IEVycm9yKFwiU291bmQgc2luZ2xldG9uIGFscmVhZHkgZXhpc3RzXCIpKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5fZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy9idWZmZXIgdG8gZml4IGlvcyBidWdzXHJcbiAgICAgICAgdGhpcy5fc2NyYXRjaEJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoMSwgMSwgMjIwNTApXHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLl9jcmVhdGVSb3V0aW5nKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2J1ZmZlcnMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVSb3V0aW5nKCk6IHZvaWQge1xyXG4gICAgICAgIC8vbWFpbiBvdXRwdXQgPiBnbG9iYWwgbXV0ZSA+IGNvbnRleHQgbXV0ZXNcclxuICAgICAgICB0aGlzLmdsb2JhbEdhaW4gPSBuZXcgU291bmRDaGFubmVsKHRoaXMuY29udGV4dCwgdGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICAvL2NyZWF0ZSBzZngsIG11c2ljIGFuZCBlbnZcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge1xyXG4gICAgICAgICAgICBzZng6IG5ldyBTb3VuZENoYW5uZWwodGhpcy5jb250ZXh0LCB0aGlzLmdsb2JhbEdhaW4ub3V0cHV0KSxcclxuICAgICAgICAgICAgbXVzaWM6IG5ldyBTb3VuZENoYW5uZWwodGhpcy5jb250ZXh0LCB0aGlzLmdsb2JhbEdhaW4ub3V0cHV0KSxcclxuICAgICAgICAgICAgZW52OiBuZXcgU291bmRDaGFubmVsKHRoaXMuY29udGV4dCwgdGhpcy5nbG9iYWxHYWluLm91dHB1dClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXkoaWQ6IHN0cmluZywgdm9sdW1lOiBudW1iZXIgPSAxLCBsb29wOiBudW1iZXIgPSAtMSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvdW5kRGF0YTogSVNvdW5kRGF0YSA9IHRoaXMuX2J1ZmZlcnNbaWRdO1xyXG4gICAgICAgICAgICBjb25zdCBzb3VuZFBsYXkgPSBuZXcgU291bmRQbGF5KHNvdW5kRGF0YSwgdGhpcy5jb250ZXh0KVxyXG4gICAgICAgICAgICAvL2Nob29zZSBjaGFubmVsIGFjY29yZGluZyB0byBkYXRhIC0+IElTb3VuZERhdGEuZ3JvdXBcclxuICAgICAgICAgICAgY29uc3QgY2hhbm5lbDogU291bmRDaGFubmVsID0gdGhpcy5nZXRDaGFubmVsKHNvdW5kRGF0YSlcclxuICAgICAgICAgICAgY2hhbm5lbC5hZGQoc291bmRQbGF5KVxyXG4gICAgICAgICAgICAvL3BsYXkgaXRcclxuICAgICAgICAgICAgc291bmRQbGF5LnBsYXkoKTtcclxuICAgICAgICAgICAgLy9UT0RPIC0gbmVlZCB0byBzdG9yZSB0aGUgc291bmQgc28gaXQgY2FuIGJlIHN0b3BwZWQgaWYgbmVlZGVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2hhbm5lbChzb3VuZERhdGE6IElTb3VuZERhdGEpOiBTb3VuZENoYW5uZWwge1xyXG4gICAgICAgIHN3aXRjaCAoc291bmREYXRhLmdyb3VwKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ211c2ljJzogcmV0dXJuIHRoaXMuY2hhbm5lbHMubXVzaWM7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Vudic6IHJldHVybiB0aGlzLmNoYW5uZWxzLmVudjtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHRoaXMuY2hhbm5lbHMuc2Z4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcChpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgLy9UT0RPXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFNvdW5kcyhzb3VuZHM6IElTb3VuZERhdGFbXSk6IHZvaWQge1xyXG4gICAgICAgIHNvdW5kcy5mb3JFYWNoKHRoaXMuYWRkKVxyXG4gICAgICAgIC8vVE9ETyAtIG1vbml0b3Igd2hlbiBkZWNvZGluZyBpcyBjb21wbGV0ZWRcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkID0gKHNvdW5kRGF0YTogSVNvdW5kRGF0YSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kZWNvZGVBdWRpb0RhdGEoPEFycmF5QnVmZmVyPnNvdW5kRGF0YS5idWZmZXIpLnRoZW4oKGRlY29kZWQ6QXVkaW9CdWZmZXIpID0+IHtcclxuICAgICAgICAgICAgc291bmREYXRhLmJ1ZmZlciA9IGRlY29kZWQ7XHJcbiAgICAgICAgICAgIC8vIC0gaGFuZGxlIHNvdW5kIHNwcml0ZXMgY29ycmVjdGx5XHJcbiAgICAgICAgICAgIC8vbmVlZCBhIGRpZmZlcmVudCBzb3VuZCBkYXRhIGZvciBlYWNoIG9uZVxyXG4gICAgICAgICAgICBpZiAoc291bmREYXRhLnNwcml0ZXMpIHtcclxuICAgICAgICAgICAgICAgIHNvdW5kRGF0YS5zcHJpdGVzLmZvckVhY2goKGluZm86IElTcHJpdGVJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuX2Nsb25lRGF0YShzb3VuZERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pZCA9IGluZm8uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zdGFydCA9IGluZm8uc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5kdXJhdGlvbiA9IGluZm8uZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyc1tpbmZvLmlkXSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyc1tzb3VuZERhdGEuaWRdID0gc291bmREYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy91bmxvYWQgc291bmRcclxuICAgIHB1YmxpYyByZW1vdmUoaWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIC8vZmluZCB0aGUgbWFpbiBzb3VuZCB0aGVuIHJlbW92ZSBhbGwgdGhhdCByZWZlcmVuY2UgdGhhdCBidWZmZXJcclxuICAgICAgICBjb25zdCBtYWluRGF0YSA9IHRoaXMuX2J1ZmZlcnNbaWRdO1xyXG4gICAgICAgIGlmICghbWFpbkRhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignU291bmQucmVtb3ZlIC0gbm8gc291bmQgZm91bmQgd2l0aCBpZCcsIGlkKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IG1haW5EYXRhLmJ1ZmZlcjtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5fYnVmZmVycykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc291bmREYXRhID0gdGhpcy5fYnVmZmVyc1trZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNvdW5kRGF0YS5idWZmZXIgPT09IGJ1ZmZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9idWZmZXJzW2tleV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xvbmVEYXRhKHNvdW5kRGF0YTogSVNvdW5kRGF0YSk6IElTb3VuZERhdGEge1xyXG4gICAgICAgIGNvbnN0IHsgaWQsIGJ1ZmZlciwgZ3JvdXAsIGV4dGVuc2lvbiwgdXJsIH0gPSBzb3VuZERhdGE7XHJcbiAgICAgICAgcmV0dXJuIHsgaWQsIGJ1ZmZlciwgZ3JvdXAsIGV4dGVuc2lvbiwgdXJsIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNjcmF0Y2hCdWZmZXIoKTogQXVkaW9CdWZmZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JhdGNoQnVmZmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2luZ2xldG9uXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFNvdW5kXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBTb3VuZCB7XHJcbiAgICAgICAgaWYgKCFTb3VuZC5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgU291bmQuX2luc3RhbmNlID0gbmV3IFNvdW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTb3VuZC5faW5zdGFuY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vbGlrZSBhIGNoYW5uZWwgb24gYSBtaXhlciAtIHZvbHVtZSBjb250cm9sXHJcbi8vanVzdCBhIHdyYXBwZXIgZm9yIGEgZ2FpbiBub2RlXHJcbmV4cG9ydCBjbGFzcyBTb3VuZENoYW5uZWwge1xyXG4gICAgcHVibGljIG91dHB1dDogR2Fpbk5vZGU7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRleHQ6IEF1ZGlvQ29udGV4dCwgdGFyZ2V0OiBBdWRpb05vZGUpIHtcclxuICAgICAgICB0aGlzLm91dHB1dCA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKClcclxuICAgICAgICB0aGlzLm91dHB1dC5jb25uZWN0KHRhcmdldClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHZvbHVtZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm91dHB1dC5nYWluLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB2b2x1bWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMub3V0cHV0LmdhaW4uc2V0VmFsdWVBdFRpbWUodmFsdWUsIHRoaXMuY29udGV4dC5jdXJyZW50VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChzb3VuZDogU291bmRQbGF5KTogdm9pZCB7XHJcbiAgICAgICAgc291bmQub3V0cHV0LmNvbm5lY3QodGhpcy5vdXRwdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25uZWN0KG5vZGU6IEF1ZGlvTm9kZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3V0cHV0LmNvbm5lY3Qobm9kZSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzY29ubmVjdChub2RlOiBBdWRpb05vZGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm91dHB1dC5kaXNjb25uZWN0KG5vZGUpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vc3RydWdnbGluZyB0byBuYW1lIHRoaXMgYXBwcm9wcmlhdGVseVxyXG5leHBvcnQgY2xhc3MgU291bmRQbGF5IHtcclxuXHJcbiAgICBwdWJsaWMgc291cmNlOiBBdWRpb0J1ZmZlclNvdXJjZU5vZGU7XHJcbiAgICBwdWJsaWMgb3V0cHV0OiBHYWluTm9kZTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDsvL2ZvciBwYXVzZSBoYW5kbGluZ1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzb3VuZERhdGE6IElTb3VuZERhdGEsIHByaXZhdGUgY29udGV4dDogQXVkaW9Db250ZXh0KSB7XHJcbiAgICAgICAgLy8gLSBjcmVhdGUgYW4gYXVkaW9idWZmZXJzb3VyY2Ugbm9kZVxyXG4gICAgICAgIHRoaXMuc291cmNlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xyXG4gICAgICAgIHRoaXMuc291cmNlLmJ1ZmZlciA9IDxBdWRpb0J1ZmZlcj50aGlzLnNvdW5kRGF0YS5idWZmZXI7XHJcbiAgICAgICAgLy92b2x1bWUgY29udHJvbGxlclxyXG4gICAgICAgIHRoaXMub3V0cHV0ID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcclxuICAgICAgICAvL1RPRE8gLSBzZXQgdGhlIHZvbHVtZVxyXG4gICAgICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5vdXRwdXQpOy8vdGhpcyBzdGVwIGlzIGltcG9ydGFudCA7KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIC0gbG9vcCwgc3RhcnQgdGltZSwgZHVyYXRpb24sIGV0Y1xyXG4gICAgICAgIC8vIHRoaXMuc291cmNlLnN0YXJ0KClcclxuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlLnN0YXJ0KDAsIHRoaXMuc3RhcnQsIHRoaXMuZHVyYXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlLnN0YXJ0KDAsIHRoaXMuc3RhcnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHN0YXJ0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291bmREYXRhLnN0YXJ0IHx8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBkdXJhdGlvbigpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0aGlzLnNvdW5kRGF0YS5sb29wKSB7XHJcbiAgICAgICAgICAgIC8vVE9ET1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdW5kRGF0YS5kdXJhdGlvbiB8fCAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHZvbHVtZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm91dHB1dC5nYWluLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB2b2x1bWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMub3V0cHV0LmdhaW4uc2V0VmFsdWVBdFRpbWUodmFsdWUsIHRoaXMuY29udGV4dC5jdXJyZW50VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0aW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuc291cmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5jdXJyZW50VGltZSAtIHRoaXMuc3RhcnRUaW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNvdXJjZS5zdG9wKDApO1xyXG4gICAgICAgIHRoaXMuc291cmNlLmRpc2Nvbm5lY3QoMClcclxuICAgICAgICB0aGlzLm91dHB1dC5kaXNjb25uZWN0KDApXHJcbiAgICAgICAgLy90aGlzIGhhcyB0byBiZSBpbmRlcGVuZGVudGx5IHRyeSBjYXRjaGVkIGFzIHRocm93cyBvbiBwbGF0Zm9ybXMgb3RoZXIgdGhhbiBpb3NcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5idWZmZXIgPSBTb3VuZC5pbnN0YW5jZS5zY3JhdGNoQnVmZmVyO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc2NyYXRjaCBidWZmZXIgZXJyb3IhICcsIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvdXJjZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9Tb3VuZCciLCJleHBvcnQgZW51bSBFbmdpbmVFdmVudHMge1xyXG4gICAgQVBQX1JFQURZID0gJ2FwcC1yZWFkeScsXHJcbiAgICBTSE9XX1NDUkVFTiA9ICdzY3JlZW4nXHJcbn0iLCJcclxuXHJcbmltcG9ydCB7IElBc3NldCwgSUFzc2V0cywgU2V0dGluZ3MgfSBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBMb2FkZXJSZXNvdXJjZSB9IGZyb20gJ3BpeGkuanMnXHJcbmltcG9ydCB7IElTb3VuZERhdGEsIElTcHJpdGVEYXRhLCBJU3ByaXRlSW5mbyB9IGZyb20gXCIuLi9hdWRpby9Tb3VuZFwiO1xyXG5cclxuaW50ZXJmYWNlIElBc3NldERhdGFNYXAge1xyXG4gICAgW2lkOiBzdHJpbmddOiBJQXNzZXQ7XHJcbn1cclxuXHJcbi8vYXNzZXQgbG9hZGVyXHJcbmV4cG9ydCBjbGFzcyBMb2FkZXIge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR0xPQkFMX0FTU0VUU19MT0FERUQ6IHN0cmluZyA9ICdnbG9iYWwtYXNzZXRzLWxvYWRlZCc7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3VwcG9ydGVkVHlwZXMgPSBbJ29nZycsICdtNGEnLCAnbXAzJ11cclxuXHJcbiAgICBwdWJsaWMgYXVkaW9Gb3JtYXQ6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIF9hc3NldERhdGE6IElBc3NldERhdGFNYXAgPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9sb2FkZXI6IFBJWEkuTG9hZGVyXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9zZXRSZXNvdXJjZVR5cGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0UmVzb3VyY2VUeXBlcygpOiB2b2lkIHtcclxuICAgICAgICAvL3NldCBpdCB0byB1c2UgeGhyIGZvciBzb3VuZHNcclxuICAgICAgICB0aGlzLl9zdXBwb3J0ZWRUeXBlcy5mb3JFYWNoKHR5cGUgPT4gdGhpcy5zZXRYaHIodHlwZSkpXHJcbiAgICAgICAgLy9jaG9vc2Ugd2hpY2ggYXVkaW8gZm9ybWF0XHJcbiAgICAgICAgdGhpcy5hdWRpb0Zvcm1hdCA9IHRoaXMuX3NldEF1ZGlvRm9ybWF0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0QXVkaW9Gb3JtYXQoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcclxuICAgICAgICBjb25zdCBvZ2cgPSAhIShhLmNhblBsYXlUeXBlICYmIGEuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9uby8sICcnKSk7XHJcbiAgICAgICAgcmV0dXJuIG9nZyA/ICcub2dnJyA6ICcubTRhJztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFhocihleHRlbnNpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIExvYWRlclJlc291cmNlLnNldEV4dGVuc2lvbkxvYWRUeXBlKGV4dGVuc2lvbiwgTG9hZGVyUmVzb3VyY2UuTE9BRF9UWVBFLlhIUilcclxuICAgICAgICBMb2FkZXJSZXNvdXJjZS5zZXRFeHRlbnNpb25YaHJUeXBlKGV4dGVuc2lvbiwgTG9hZGVyUmVzb3VyY2UuWEhSX1JFU1BPTlNFX1RZUEUuQlVGRkVSKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmZXRjaFNvdW5kcygpOiBJU291bmREYXRhW10ge1xyXG4gICAgICAgIGNvbnN0IHJlc291cmNlcyA9IHRoaXMuX2xvYWRlci5yZXNvdXJjZXM7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHJlc291cmNlcykuZmlsdGVyKChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gcmVzb3VyY2VzW2lkXTtcclxuICAgICAgICAgICAgcmV0dXJuICEhcmVzb3VyY2UueGhyICYmIHRoaXMuX3N1cHBvcnRlZFR5cGVzLmluY2x1ZGVzKHJlc291cmNlLmV4dGVuc2lvbilcclxuICAgICAgICB9KS5tYXAoKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSByZXNvdXJjZXNbaWRdO1xyXG4gICAgICAgICAgICAvL2Fsc28gc291bmQgZ3JvdXA/IGxvb3A/IFxyXG4gICAgICAgICAgICAvL1RPRE8gLSBzdG9yaW5nIGJ5IGlkIGlzIGdvaW5nIHRvIGJlIHByb2JsZW1hdGljIC0gbmVlZCB0byBjaGFuZ2UgdGhpc1xyXG4gICAgICAgICAgICAvL3Nob3VsZCB1c2UgZmlsZSBuYW1lIG9yIHBhdGhcclxuICAgICAgICAgICAgY29uc3QgYXNzZXREYXRhOiBJQXNzZXQgPSB0aGlzLl9hc3NldERhdGFbaWRdXHJcbiAgICAgICAgICAgIC8vIC0gYWxzbyBzb3VuZCBzcHJpdGVzLi4uXHJcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZURhdGE6IElTcHJpdGVEYXRhID0gdGhpcy5nZXRBdWRpb1Nwcml0ZURhdGEoYXNzZXREYXRhKTtcclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlczogSVNwcml0ZUluZm9bXSA9IHNwcml0ZURhdGEgJiYgc3ByaXRlRGF0YS5zcHJpdGVzO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBidWZmZXI6IHJlc291cmNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBleHRlbnNpb246IHJlc291cmNlLmV4dGVuc2lvbixcclxuICAgICAgICAgICAgICAgIGdyb3VwOiBhc3NldERhdGEuZ3JvdXAsXHJcbiAgICAgICAgICAgICAgICBsb29wOiBhc3NldERhdGEubG9vcCxcclxuICAgICAgICAgICAgICAgIHVybDogcmVzb3VyY2UudXJsLFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXVkaW9TcHJpdGVEYXRhKGFzc2V0RGF0YTogSUFzc2V0KTogSVNwcml0ZURhdGEge1xyXG4gICAgICAgIC8vIC0gZmluZCB0aGUgcmVzb3VyY2UgdGhhdCBpcyB0aGUgY29ycmVzcG9uZGluZyBqc29uLi4uXHJcbiAgICAgICAgY29uc3QgcmVzb3VyY2VzID0gdGhpcy5fbG9hZGVyLnJlc291cmNlcztcclxuXHJcbiAgICAgICAgY29uc3QgYXVkaW9TcmMgPSBhc3NldERhdGEuc3JjO1xyXG4gICAgICAgIGNvbnN0IHNsYXNoSW5kZXggPSBhdWRpb1NyYy5sYXN0SW5kZXhPZignLycpICsgMTtcclxuICAgICAgICBjb25zdCBmbmFtZSA9IGF1ZGlvU3JjLnN1YnN0cmluZyhzbGFzaEluZGV4KVxyXG5cclxuICAgICAgICBjb25zdCBwYXRoID0gYXVkaW9TcmMuc3Vic3RyaW5nKDAsIHNsYXNoSW5kZXgpXHJcblxyXG4gICAgICAgIGNvbnN0IGRvdEluZGV4ID0gZm5hbWUubGFzdEluZGV4T2YoJy4nKVxyXG5cclxuICAgICAgICAvL3doYXRzIHRoZSBmaWxlIG5hbWUgd2UgYXJlIGxvb2tpbmcgZm9yP1xyXG4gICAgICAgIGNvbnN0IGpzb25OYW1lID0gZG90SW5kZXggPiAtMT8gZm5hbWUuc3Vic3RyaW5nKDAsIGRvdEluZGV4KSArICcuanNvbicgOiBmbmFtZSArICcuanNvbidcclxuXHJcbiAgICAgICAgLy93aGF0cyB0aGUgdXJsIHdlIGFyZSBsb29raW5nIGZvcj9cclxuICAgICAgICBjb25zdCBqc29uVVJMID0gcGF0aCArIGpzb25OYW1lO1xyXG5cclxuICAgICAgICBjb25zdCByZXNvdXJjZUtleSA9IE9iamVjdC5rZXlzKHJlc291cmNlcykuZmluZChrZXkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZTogTG9hZGVyUmVzb3VyY2UgPSByZXNvdXJjZXNba2V5XVxyXG4gICAgICAgICAgICAvL2Rvbid0IGNoZWNrIHRoZSBuYW1lIC0gdGhlIG5hbWUgaXMgdGhlIGlkIHNvIGNhbiBiZSBkaWZmZXJlbnQgdG8gZmlsZSBuYW1lXHJcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZS51cmwgPT09IGpzb25VUkw7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAocmVzb3VyY2VLZXkpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2U6IExvYWRlclJlc291cmNlID0gcmVzb3VyY2VzW3Jlc291cmNlS2V5XTtcclxuICAgICAgICAgICAgcmV0dXJuIDxJU3ByaXRlRGF0YT5yZXNvdXJjZS5kYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEFzc2V0cyhhc3NldHM6IElBc3NldFtdLCBsb2FkID0gdHJ1ZSk6IFByb21pc2U8dm9pZD4geyAgICBcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgYXNzZXRzLmZvckVhY2goYXNzZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9UT0RPIC0gcGFzcyB0aHJvdWdoIG1vcmUgaW5mb3JtYXRpb24gZWcgc291bmQgZ3JvdXBzP1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvL3N0b3JlIHRoZSBkYXRhIGJ5IGlkIGZvciBsYXRlciBsb29rdXAgYWZ0ZXIgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgLy93YWl0IHRoaXMgd29uJ3Qgd29yaywgd2hhdCBpZiBmaWxlIGFuZCBqc29uIGhhdmUgdGhlIHNhbWUgaWQuLi5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2Fzc2V0RGF0YVthc3NldC5pZF0gPSBhc3NldDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gYXNzZXQuYXVkaW8gPyBhc3NldC5zcmMgKyB0aGlzLmF1ZGlvRm9ybWF0IDogYXNzZXQuc3JjO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmFkZChhc3NldC5pZCwgc3JjKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiAobG9hZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLm9uQ29tcGxldGUub25jZShyZXNvbHZlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVubG9hZChhc3NldDogSUFzc2V0KTogdm9pZCB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2Fzc2V0RGF0YVthc3NldC5pZF07XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2xvYWRlci5yZXNvdXJjZXNbYXNzZXQuaWRdO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IEV2ZW50UXVldWUgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgVGltZW91dCB9IGZyb20gXCIuLi91dGlscy9UaW1lb3V0XCI7XHJcbmltcG9ydCB7IFVwZGF0ZUxpc3QgfSBmcm9tIFwiLi4vdXRpbHMvVXBkYXRlTGlzdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2NyZWVuQ29uZmlnIHtcclxuICAgIHNjcmVlbldpZHRoOiBudW1iZXIsXHJcbiAgICBzY3JlZW5IZWlnaHQ6IG51bWJlcixcclxuICAgIHNjcmVlbkV2ZW50czogRXZlbnRRdWV1ZSwvL2ZvciBjaGFuZ2luZyBzY3JlZW5zXHJcbiAgICBpZD86c3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW4gZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUxpc3Q6IFVwZGF0ZUxpc3Q7XHJcbiAgICBwdWJsaWMgdGltZW91dDogVGltZW91dDtcclxuXHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuXHJcbiAgICBwcm90ZWN0ZWQgc2NyZWVuV2lkdGg6bnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHNjcmVlbkhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHNjcmVlbkV2ZW50czogRXZlbnRRdWV1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElTY3JlZW5Db25maWcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3QgPSBuZXcgVXBkYXRlTGlzdCgpO1xyXG4gICAgICAgIHRoaXMudGltZW91dCA9IDxUaW1lb3V0PnRoaXMudXBkYXRlTGlzdC5hZGQobmV3IFRpbWVvdXQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0LnVwZGF0ZShkZWx0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0LnJlbW92ZUFsbCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKVxyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgRW5naW5lRXZlbnRzIH0gZnJvbSBcIi4vRW5naW5lRXZlbnRzXCI7XHJcbmltcG9ydCB7IEV2ZW50UXVldWUgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSBcIi4vU2NyZWVuXCI7XHJcbmltcG9ydCB7IElTaXplLCBTZXR0aW5ncyB9IGZyb20gXCIuL1NldHRpbmdzXCI7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCIuL0xvYWRlclwiO1xyXG5pbXBvcnQgeyBVbmxvYWRlciB9IGZyb20gXCIuL1VubG9hZGVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTY3JlZW5NYXAge1xyXG4gICAgW2lkOiBzdHJpbmddOiB0eXBlb2YgU2NyZWVuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2NyZWVuTWFuYWdlciB7XHJcblxyXG4gICAgcHVibGljIHJvb3Q6IFBJWEkuQ29udGFpbmVyO1xyXG5cclxuICAgIHByaXZhdGUgX3NpemU6IElTaXplO1xyXG5cclxuICAgIHB1YmxpYyBjdXJyZW50U2NyZWVuOiBTY3JlZW47XHJcblxyXG4gICAgcHJpdmF0ZSBfc2NyZWVuTWFwOiBJU2NyZWVuTWFwXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfZXZlbnRzOiBFdmVudFF1ZXVlLFxyXG4gICAgICAgIHByaXZhdGUgX3NldHRpbmdzOiBTZXR0aW5ncyxcclxuICAgICAgICBwcml2YXRlIF9sb2FkZXI6IExvYWRlcixcclxuICAgICAgICBwcml2YXRlIF91bmxvYWRlcjogVW5sb2FkZXJcclxuICAgICkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX3NpemUgPSB0aGlzLl9zZXR0aW5ncy5zaXplO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG5cclxuICAgICAgICB0aGlzLnJvb3QucG9zaXRpb24uc2V0KFxyXG4gICAgICAgICAgICB0aGlzLl9zaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZS5oZWlnaHQgLyAyXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICB0aGlzLl9ldmVudHMub24oRW5naW5lRXZlbnRzLlNIT1dfU0NSRUVOLCB0aGlzLnNob3dTY3JlZW4pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBzY3JlZW5NYXAobWFwOiBJU2NyZWVuTWFwKSB7XHJcbiAgICAgICAgdGhpcy5fc2NyZWVuTWFwID0gbWFwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NyZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjcmVlbi51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1NjcmVlbiA9IChpZDogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gLSB2YWxpZGF0ZSBpZFxyXG4gICAgICAgIGlmICghdGhpcy5fc2NyZWVuTWFwLmhhc093blByb3BlcnR5KGlkKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTY3JlZW4gdHlwZSBub3QgZm91bmQnLCBpZClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gLSBVbmxvYWQgZmlyc3QgaWYgbmVjZXNzYXJ5IHRvb1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTY3JlZW4pIHtcclxuICAgICAgICAgICAgY29uc3QgYXNzZXRzVG9VbkxvYWQgPSB0aGlzLl9zZXR0aW5ncy5hc3NldHNbdGhpcy5jdXJyZW50U2NyZWVuLmlkXTtcclxuICAgICAgICAgICAgdGhpcy5fdW5sb2FkZXIudW5sb2FkKGFzc2V0c1RvVW5Mb2FkKSAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IFNjcmVlblR5cGUgPSB0aGlzLl9zY3JlZW5NYXBbaWRdO1xyXG4gICAgICAgIC8vIC0gcHJlbG9hZCBmaXJzdCBpZiBuZWNlc3NhcnlcclxuICAgICAgICBjb25zdCBhc3NldHNUb0xvYWQgPSB0aGlzLl9zZXR0aW5ncy5hc3NldHNbaWRdO1xyXG4gICAgICAgIGlmIChhc3NldHNUb0xvYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRBc3NldHMoYXNzZXRzVG9Mb2FkKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZVNjcmVlbigpOyAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NyZWVuID0gdGhpcy5fY3JlYXRlU2NyZWVuKFNjcmVlblR5cGUsIGlkKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcG9zZVNjcmVlbigpOyAgIFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW4gPSB0aGlzLl9jcmVhdGVTY3JlZW4oU2NyZWVuVHlwZSwgaWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVNjcmVlbihTY3JlZW5UeXBlOiB0eXBlb2YgU2NyZWVuLCBpZDogc3RyaW5nKTogU2NyZWVuIHtcclxuICAgICAgICBjb25zdCBzY3JlZW4gPSA8U2NyZWVuPm5ldyBTY3JlZW5UeXBlKHtcclxuICAgICAgICAgICAgc2NyZWVuV2lkdGg6IHRoaXMuX3NpemUud2lkdGgsXHJcbiAgICAgICAgICAgIHNjcmVlbkhlaWdodDogdGhpcy5fc2l6ZS5oZWlnaHQsXHJcbiAgICAgICAgICAgIHNjcmVlbkV2ZW50czogdGhpcy5fZXZlbnRzLFxyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucm9vdC5hZGRDaGlsZChzY3JlZW4pO1xyXG4gICAgICAgIHJldHVybiBzY3JlZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvL1RPRE8gLSBrZWVwIHJvb3QgY2VudGVyZWQ/IE9yIG1heWJlIG5vdCBuZWVkZWQuLi5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZVNjcmVlbigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NyZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjcmVlbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjcmVlbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy9pbnRlcmZhY2UgZm9yIHRoZSBjb25maWdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFzc2V0IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBzcmM6IHN0cmluZztcclxuICAgIGF1ZGlvPzogYm9vbGVhbjsvL2lmIHRydWUgdGhlbiBpdCB3aWxsIHRhZyBvbiBhdWRpbyBmb3JtYXQgZXh0ZW5zaW9uXHJcbiAgICBsb29wPzogbnVtYmVyOy8vZm9yIHNvdW5kc1xyXG4gICAgZ3JvdXA/OiBzdHJpbmc7Ly9mb3Igc291bmRzXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpemUge1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBc3NldHMge1xyXG4gICAgW2lkOiBzdHJpbmddOiBJQXNzZXRbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlnIHtcclxuICAgIGFzc2V0czogSUFzc2V0cztcclxuICAgIHNpemU6IElTaXplO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3MgaW1wbGVtZW50cyBJQ29uZmlnIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENPTkZJR19MT0FERUQ6IHN0cmluZyA9ICdjb25maWctbG9hZGVkJztcclxuXHJcbiAgICBwdWJsaWMgY29uZmlnUGF0aDogc3RyaW5nID0gJ2pzb24vY29uZmlnLmpzb24nXHJcblxyXG4gICAgcHVibGljIGFzc2V0czogSUFzc2V0cztcclxuICAgIHB1YmxpYyBzaXplOiBJU2l6ZSA9IHt3aWR0aDogMTMzNCwgaGVpZ2h0OiA3NTB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvYWRlcjogUElYSS5Mb2FkZXIsIHByaXZhdGUgX2V2ZW50czogUElYSS51dGlscy5FdmVudEVtaXR0ZXIpIHtcclxuICAgICAgICB0aGlzLmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWFuaWZlc3Qoa2V5Pzogc3RyaW5nKTogSUFzc2V0W10ge1xyXG4gICAgICAgIGlmICgha2V5KSB7XHJcbiAgICAgICAgICAgIGtleSA9ICdnbG9iYWwnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmFzc2V0c1trZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkKCk6IFNldHRpbmdzIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIuYWRkKCdjb25maWcnLCB0aGlzLmNvbmZpZ1BhdGgpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlci5vbkNvbXBsZXRlLm9uY2UodGhpcy5fY29uZmlnTG9hZGVkKVxyXG4gICAgICAgIHRoaXMuX2xvYWRlci5sb2FkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY29uZmlnTG9hZGVkID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZzogSUNvbmZpZyA9IDxJQ29uZmlnPnRoaXMuX2xvYWRlci5yZXNvdXJjZXMuY29uZmlnLmRhdGE7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpXHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLmVtaXQoU2V0dGluZ3MuQ09ORklHX0xPQURFRClcclxuICAgIH1cclxuXHJcbn0iLCJcclxuaW1wb3J0IHsgU291bmQgfSBmcm9tIFwiLi4vYXVkaW9cIjtcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSBcIi4vTG9hZGVyXCI7XHJcbmltcG9ydCB7IElBc3NldCwgSUFzc2V0cyB9IGZyb20gXCIuL1NldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVW5sb2FkZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvYWRlcjogTG9hZGVyKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bmxvYWQoYXNzZXRzOiBJQXNzZXRbXSkge1xyXG5cclxuICAgICAgICBhc3NldHMgJiYgYXNzZXRzLmZvckVhY2goKGFzc2V0OiBJQXNzZXQpID0+IHtcclxuICAgICAgICAgICAgLy8gLSByZW1vdmUgZnJvbSBsb2FkZXJcclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLnVubG9hZChhc3NldClcclxuICAgICAgICAgICAgLy8gLSByZW1vdmUgZnJvbSB0ZXh0dXJlIGNhY2hlXHJcbiAgICAgICAgICAgIGRlbGV0ZSBQSVhJLnV0aWxzLlRleHR1cmVDYWNoZVthc3NldC5pZF1cclxuICAgICAgICAgICAgZGVsZXRlIFBJWEkudXRpbHMuVGV4dHVyZUNhY2hlW2Fzc2V0LnNyY11cclxuICAgICAgICAgICAgLy8gLSByZW1vdmUgZnJvbSBCYXNlVGV4dHVyZUNhY2hlXHJcbiAgICAgICAgICAgIGRlbGV0ZSBQSVhJLnV0aWxzLkJhc2VUZXh0dXJlQ2FjaGVbYXNzZXQuaWRdXHJcbiAgICAgICAgICAgIGRlbGV0ZSBQSVhJLnV0aWxzLkJhc2VUZXh0dXJlQ2FjaGVbYXNzZXQuc3JjXVxyXG4gICAgICAgICAgICAvLyAtIHJlbW92ZSBmcm9tIHNvdW5kIGVuZ2luZVxyXG4gICAgICAgICAgICBTb3VuZC5pbnN0YW5jZS5yZW1vdmUoYXNzZXQuaWQpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0xvYWRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2NyZWVuJztcclxuZXhwb3J0ICogZnJvbSAnLi9TY3JlZW5NYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9TZXR0aW5ncyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdmVyc2lvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vRW5naW5lRXZlbnRzJzsiLCJjb25zdCB2ZXJzaW9uID0geyBjb2RlOiAnMC4xLjI3JyB9XG4gICAgZXhwb3J0IHt2ZXJzaW9ufSIsImNvbnN0IEVhc2luZyA9IHtcclxuICAgIExpbmVhcjoge1xyXG4gICAgICAgIE5vbmUoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gaztcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBRdWFkcmF0aWM6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrICogaztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gayAqICgyIC0gayk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBpZiAoKGsgKj0gMikgPCAxKSByZXR1cm4gMC41ICogayAqIGs7XHJcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogKC0tayAqIChrIC0gMikgLSAxKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBDdWJpYzoge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIGsgKiBrICogaztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gLS1rICogayAqIGsgKyAxO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEluT3V0KGspIHtcclxuICAgICAgICAgICAgaWYgKChrICo9IDIpIDwgMSkgcmV0dXJuIDAuNSAqIGsgKiBrICogaztcclxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICsgMik7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgUXVhcnRpYzoge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIGsgKiBrICogayAqIGs7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEgLSAtLWsgKiBrICogayAqIGs7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBpZiAoKGsgKj0gMikgPCAxKSByZXR1cm4gMC41ICogayAqIGsgKiBrICogaztcclxuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiAoKGsgLT0gMikgKiBrICogayAqIGsgLSAyKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBRdWludGljOiB7XHJcbiAgICAgICAgSW4oaykge1xyXG4gICAgICAgICAgICByZXR1cm4gayAqIGsgKiBrICogayAqIGs7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0tayAqIGsgKiBrICogayAqIGsgKyAxO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEluT3V0KGspIHtcclxuICAgICAgICAgICAgaWYgKChrICo9IDIpIDwgMSkgcmV0dXJuIDAuNSAqIGsgKiBrICogayAqIGsgKiBrO1xyXG4gICAgICAgICAgICByZXR1cm4gMC41ICogKChrIC09IDIpICogayAqIGsgKiBrICogayArIDIpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIFNpbnVzb2lkYWw6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5jb3MoKGsgKiBNYXRoLlBJKSAvIDIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE91dChrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNpbigoayAqIE1hdGguUEkpIC8gMik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIEV4cG9uZW50aWFsOiB7XHJcbiAgICAgICAgSW4oaykge1xyXG4gICAgICAgICAgICByZXR1cm4gayA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCBrIC0gMSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIGsgPT09IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIGspO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEluT3V0KGspIHtcclxuICAgICAgICAgICAgaWYgKGsgPT09IDApIHJldHVybiAwO1xyXG4gICAgICAgICAgICBpZiAoayA9PT0gMSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHJldHVybiAwLjUgKiBNYXRoLnBvdygxMDI0LCBrIC0gMSk7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqIChrIC0gMSkpICsgMik7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgQ2lyY3VsYXI6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSBrICogayk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCgxIC0gLS1rICogayk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBpZiAoKGsgKj0gMikgPCAxKSByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIGsgKiBrKSAtIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKGsgLT0gMikgKiBrKSArIDEpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIEVsYXN0aWM6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIGxldCBzLFxyXG4gICAgICAgICAgICAgICAgYSA9IDAuMSxcclxuICAgICAgICAgICAgICAgIHAgPSAwLjQ7XHJcbiAgICAgICAgICAgIGlmIChrID09PSAwKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgaWYgKGsgPT09IDEpIHJldHVybiAxO1xyXG4gICAgICAgICAgICBpZiAoIWEgfHwgYSA8IDEpIHtcclxuICAgICAgICAgICAgICAgIGEgPSAxO1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyA0O1xyXG4gICAgICAgICAgICB9IGVsc2UgcyA9IChwICogTWF0aC5hc2luKDEgLyBhKSkgLyAoMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICByZXR1cm4gLShhICogTWF0aC5wb3coMiwgMTAgKiAoayAtPSAxKSkgKiBNYXRoLnNpbigoKGsgLSBzKSAqICgyICogTWF0aC5QSSkpIC8gcCkpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE91dChrKSB7XHJcbiAgICAgICAgICAgIGxldCBzLFxyXG4gICAgICAgICAgICAgICAgYSA9IDAuMSxcclxuICAgICAgICAgICAgICAgIHAgPSAwLjQ7XHJcbiAgICAgICAgICAgIGlmIChrID09PSAwKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgaWYgKGsgPT09IDEpIHJldHVybiAxO1xyXG4gICAgICAgICAgICBpZiAoIWEgfHwgYSA8IDEpIHtcclxuICAgICAgICAgICAgICAgIGEgPSAxO1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyA0O1xyXG4gICAgICAgICAgICB9IGVsc2UgcyA9IChwICogTWF0aC5hc2luKDEgLyBhKSkgLyAoMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqIGspICogTWF0aC5zaW4oKChrIC0gcykgKiAoMiAqIE1hdGguUEkpKSAvIHApICsgMTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbk91dChrKSB7XHJcbiAgICAgICAgICAgIGxldCBzLFxyXG4gICAgICAgICAgICAgICAgYSA9IDAuMSxcclxuICAgICAgICAgICAgICAgIHAgPSAwLjQ7XHJcbiAgICAgICAgICAgIGlmIChrID09PSAwKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgaWYgKGsgPT09IDEpIHJldHVybiAxO1xyXG4gICAgICAgICAgICBpZiAoIWEgfHwgYSA8IDEpIHtcclxuICAgICAgICAgICAgICAgIGEgPSAxO1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyA0O1xyXG4gICAgICAgICAgICB9IGVsc2UgcyA9IChwICogTWF0aC5hc2luKDEgLyBhKSkgLyAoMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICBpZiAoKGsgKj0gMikgPCAxKSByZXR1cm4gLTAuNSAqIChhICogTWF0aC5wb3coMiwgMTAgKiAoayAtPSAxKSkgKiBNYXRoLnNpbigoKGsgLSBzKSAqICgyICogTWF0aC5QSSkpIC8gcCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqIChrIC09IDEpKSAqIE1hdGguc2luKCgoayAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKSAqIDAuNSArIDE7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgQmFjazoge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgbGV0IHMgPSAxLjcwMTU4O1xyXG4gICAgICAgICAgICByZXR1cm4gayAqIGsgKiAoKHMgKyAxKSAqIGsgLSBzKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICBsZXQgcyA9IDEuNzAxNTg7XHJcbiAgICAgICAgICAgIHJldHVybiAtLWsgKiBrICogKChzICsgMSkgKiBrICsgcykgKyAxO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEluT3V0KGspIHtcclxuICAgICAgICAgICAgbGV0IHMgPSAxLjcwMTU4ICogMS41MjU7XHJcbiAgICAgICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHJldHVybiAwLjUgKiAoayAqIGsgKiAoKHMgKyAxKSAqIGsgLSBzKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogKChzICsgMSkgKiBrICsgcykgKyAyKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBCb3VuY2U6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxIC0gRWFzaW5nLkJvdW5jZS5PdXQoMSAtIGspO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE91dChrKSB7XHJcbiAgICAgICAgICAgIGlmIChrIDwgMSAvIDIuNzUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiBrICogaztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrIDwgMiAvIDIuNzUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAoayAtPSAxLjUgLyAyLjc1KSAqIGsgKyAwLjc1O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGsgPCAyLjUgLyAyLjc1KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKGsgLT0gMi4yNSAvIDIuNzUpICogayArIDAuOTM3NTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAoayAtPSAyLjYyNSAvIDIuNzUpICogayArIDAuOTg0Mzc1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBpZiAoayA8IDAuNSkgcmV0dXJuIEVhc2luZy5Cb3VuY2UuSW4oayAqIDIpICogMC41O1xyXG4gICAgICAgICAgICByZXR1cm4gRWFzaW5nLkJvdW5jZS5PdXQoayAqIDIgLSAxKSAqIDAuNSArIDAuNTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IEludGVycG9sYXRpb24gPSB7XHJcbiAgICBMaW5lYXIodiwgaykge1xyXG4gICAgICAgIGxldCBtID0gdi5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICBmID0gbSAqIGssXHJcbiAgICAgICAgICAgIGkgPSBNYXRoLmZsb29yKGYpLFxyXG4gICAgICAgICAgICBmbiA9IEludGVycG9sYXRpb24uVXRpbHMuTGluZWFyO1xyXG5cclxuICAgICAgICBpZiAoayA8IDApIHJldHVybiBmbih2WzBdLCB2WzFdLCBmKTtcclxuICAgICAgICBpZiAoayA+IDEpIHJldHVybiBmbih2W21dLCB2W20gLSAxXSwgbSAtIGYpO1xyXG5cclxuICAgICAgICByZXR1cm4gZm4odltpXSwgdltpICsgMSA+IG0gPyBtIDogaSArIDFdLCBmIC0gaSk7XHJcbiAgICB9LFxyXG5cclxuICAgIEJlemllcih2LCBrKSB7XHJcbiAgICAgICAgbGV0IGIgPSAwLFxyXG4gICAgICAgICAgICBuID0gdi5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICBwdyA9IE1hdGgucG93LFxyXG4gICAgICAgICAgICBibiA9IEludGVycG9sYXRpb24uVXRpbHMuQmVybnN0ZWluLFxyXG4gICAgICAgICAgICBpO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDw9IG47IGkrKykge1xyXG4gICAgICAgICAgICBiICs9IHB3KDEgLSBrLCBuIC0gaSkgKiBwdyhrLCBpKSAqIHZbaV0gKiBibihuLCBpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBiO1xyXG4gICAgfSxcclxuXHJcbiAgICBDYXRtdWxsUm9tKHYsIGspIHtcclxuICAgICAgICBsZXQgbSA9IHYubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgZiA9IG0gKiBrLFxyXG4gICAgICAgICAgICBpID0gTWF0aC5mbG9vcihmKSxcclxuICAgICAgICAgICAgZm4gPSBJbnRlcnBvbGF0aW9uLlV0aWxzLkNhdG11bGxSb207XHJcblxyXG4gICAgICAgIGlmICh2WzBdID09PSB2W21dKSB7XHJcbiAgICAgICAgICAgIGlmIChrIDwgMCkgaSA9IE1hdGguZmxvb3IoKGYgPSBtICogKDEgKyBrKSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZuKHZbKGkgLSAxICsgbSkgJSBtXSwgdltpXSwgdlsoaSArIDEpICUgbV0sIHZbKGkgKyAyKSAlIG1dLCBmIC0gaSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGsgPCAwKSByZXR1cm4gdlswXSAtIChmbih2WzBdLCB2WzBdLCB2WzFdLCB2WzFdLCAtZikgLSB2WzBdKTtcclxuICAgICAgICAgICAgaWYgKGsgPiAxKSByZXR1cm4gdlttXSAtIChmbih2W21dLCB2W21dLCB2W20gLSAxXSwgdlttIC0gMV0sIGYgLSBtKSAtIHZbbV0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZuKHZbaSA/IGkgLSAxIDogMF0sIHZbaV0sIHZbbSA8IGkgKyAxID8gbSA6IGkgKyAxXSwgdlttIDwgaSArIDIgPyBtIDogaSArIDJdLCBmIC0gaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBVdGlsczoge1xyXG4gICAgICAgIExpbmVhcihwMCwgcDEsIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChwMSAtIHAwKSAqIHQgKyBwMDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBCZXJuc3RlaW4obiwgaSkge1xyXG4gICAgICAgICAgICBsZXQgZmMgPSBJbnRlcnBvbGF0aW9uLlV0aWxzLkZhY3RvcmlhbDtcclxuICAgICAgICAgICAgcmV0dXJuIGZjKG4pIC8gZmMoaSkgLyBmYyhuIC0gaSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgRmFjdG9yaWFsOiAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgYSA9IFsxXTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYVtuXSkgcmV0dXJuIGFbbl07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBuOyBpID4gMTsgaS0tKSBzICo9IGk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGFbbl0gPSBzKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KSgpLFxyXG5cclxuICAgICAgICBDYXRtdWxsUm9tKHAwLCBwMSwgcDIsIHAzLCB0KSB7XHJcbiAgICAgICAgICAgIGxldCB2MCA9IChwMiAtIHAwKSAqIDAuNSxcclxuICAgICAgICAgICAgICAgIHYxID0gKHAzIC0gcDEpICogMC41LFxyXG4gICAgICAgICAgICAgICAgdDIgPSB0ICogdCxcclxuICAgICAgICAgICAgICAgIHQzID0gdCAqIHQyO1xyXG4gICAgICAgICAgICByZXR1cm4gKDIgKiBwMSAtIDIgKiBwMiArIHYwICsgdjEpICogdDMgKyAoLTMgKiBwMSArIDMgKiBwMiAtIDIgKiB2MCAtIHYxKSAqIHQyICsgdjAgKiB0ICsgcDE7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBFYXNpbmcsIEludGVycG9sYXRpb24gfTtcclxuIiwiaW1wb3J0IHsgRWFzaW5nLCBJbnRlcnBvbGF0aW9uIH0gZnJvbSAnLi9FYXNpbmcnO1xyXG5pbXBvcnQgeyBUd2Vlbk1hbmFnZXIgfSBmcm9tICcuL1R3ZWVuTWFuYWdlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgVHdlZW4ge1xyXG4gICAgcHVibGljIHR3ZWVuTWFuYWdlcjogVHdlZW5NYW5hZ2VyO1xyXG4gICAgcHJvdGVjdGVkIF9vYmplY3Q6IHVua25vd247IC8vdHdlZW4gdGFyZ2V0XHJcbiAgICBwcm90ZWN0ZWQgX3ZhbHVlc1N0YXJ0OiBvYmplY3QgPSB7fTtcclxuICAgIHByb3RlY3RlZCBfdmFsdWVzRW5kOiBvYmplY3QgPSB7fTtcclxuICAgIHByb3RlY3RlZCBfdmFsdWVzU3RhcnRSZXBlYXQ6IG9iamVjdCA9IHt9O1xyXG4gICAgcHJvdGVjdGVkIF9kdXJhdGlvbjogbnVtYmVyID0gMTAwMDtcclxuICAgIHByb3RlY3RlZCBfcmVwZWF0OiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIF95b3lvOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgX2lzUGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIF9yZXZlcnNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIF9kZWxheVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcm90ZWN0ZWQgX3N0YXJ0VGltZTogbnVtYmVyID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCBfZWFzaW5nRnVuY3Rpb246IChrOiBudW1iZXIpID0+IG51bWJlciA9IEVhc2luZy5MaW5lYXIuTm9uZTtcclxuICAgIHByb3RlY3RlZCBfaW50ZXJwb2xhdGlvbkZ1bmN0aW9uOiAodjogYW55LCBrOiBhbnkpID0+IGFueSA9IEludGVycG9sYXRpb24uTGluZWFyO1xyXG4gICAgcHJvdGVjdGVkIF9jaGFpbmVkVHdlZW5zOiBUd2VlbltdID0gW107XHJcbiAgICBwcm90ZWN0ZWQgX29uU3RhcnRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgX29uU3RhcnRDYWxsYmFja0ZpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgX29uVXBkYXRlQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIF9vbkNvbXBsZXRlQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIF9vblN0b3BDYWxsYmFjazogKCkgPT4gdm9pZCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0OiB1bmtub3duKSB7XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0ID0gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vcmV0dXJucyBmYWxzZSBpZiBjb21wbGV0ZWRcclxuICAgIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHByb3BlcnR5O1xyXG4gICAgICAgIGlmICh0aW1lIDwgdGhpcy5fc3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vblN0YXJ0Q2FsbGJhY2sgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29uU3RhcnRDYWxsYmFjay5jYWxsKHRoaXMuX29iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZWxhcHNlZCA9ICh0aW1lIC0gdGhpcy5fc3RhcnRUaW1lKSAvIHRoaXMuX2R1cmF0aW9uO1xyXG4gICAgICAgIGVsYXBzZWQgPSBlbGFwc2VkID4gMSA/IDEgOiBlbGFwc2VkO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZWFzaW5nRnVuY3Rpb24oZWxhcHNlZCk7XHJcbiAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiB0aGlzLl92YWx1ZXNFbmQpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gfHwgMDtcclxuICAgICAgICAgICAgbGV0IGVuZCA9IHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgIGlmIChlbmQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb2JqZWN0W3Byb3BlcnR5XSA9IHRoaXMuX2ludGVycG9sYXRpb25GdW5jdGlvbihlbmQsIHZhbHVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFBhcnNlcyByZWxhdGl2ZSBlbmQgdmFsdWVzIHdpdGggc3RhcnQgYXMgYmFzZSAoZS5nLjogKzEwLCAtMylcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgcGFyc2VGbG9hdChlbmQpOyAvLywgMTApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gcHJvdGVjdCBhZ2FpbnN0IG5vbiBudW1lcmljIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVuZCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vYmplY3RbcHJvcGVydHldID0gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX29uVXBkYXRlQ2FsbGJhY2sgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25VcGRhdGVDYWxsYmFjay5jYWxsKHRoaXMuX29iamVjdCwgdmFsdWUsIGVsYXBzZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxhcHNlZCA9PT0gMSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVwZWF0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRmluaXRlKHRoaXMuX3JlcGVhdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXBlYXQtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHJlYXNzaWduIHN0YXJ0aW5nIHZhbHVlcywgcmVzdGFydCBieSBtYWtpbmcgc3RhcnRUaW1lID0gbm93XHJcbiAgICAgICAgICAgICAgICBmb3IgKHByb3BlcnR5IGluIHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gKyBwYXJzZUZsb2F0KHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5feW95bykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gPSB0bXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl95b3lvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmV2ZXJzZWQgPSAhdGhpcy5fcmV2ZXJzZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydFRpbWUgPSB0aW1lICsgdGhpcy5fZGVsYXlUaW1lO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fb25Db21wbGV0ZUNhbGxiYWNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25Db21wbGV0ZUNhbGxiYWNrLmNhbGwodGhpcy5fb2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBudW1DaGFpbmVkVHdlZW5zID0gdGhpcy5fY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFpbmVkVHdlZW5zW2ldLnN0YXJ0KHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0byhwcm9wZXJ0aWVzOiBvYmplY3QsIGR1cmF0aW9uOiBudW1iZXIpOiBUd2VlbiB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpO1xyXG4gICAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0W2tleV0gPSBwYXJzZUZsb2F0KHRoaXMuX29iamVjdFtrZXldKTtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzRW5kW2tleV0gPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNba2V5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdmFsdWVzRW5kID0gcHJvcGVydGllcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZyb20ocHJvcGVydGllczogb2JqZWN0LCBkdXJhdGlvbjogbnVtYmVyKTogVHdlZW4ge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKTtcclxuICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNTdGFydFtrZXldID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzW2tleV0pO1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNFbmRba2V5XSA9IHBhcnNlRmxvYXQodGhpcy5fb2JqZWN0W2tleV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmcm9tVG8oZnJvbTogb2JqZWN0LCB0bzogb2JqZWN0LCBkdXJhdGlvbjogbnVtYmVyKTogVHdlZW4ge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhmcm9tKTtcclxuICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNTdGFydFtrZXldID0gcGFyc2VGbG9hdChmcm9tW2tleV0pO1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNFbmRba2V5XSA9IHBhcnNlRmxvYXQodG9ba2V5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVHdlZW5PZih0YXJnZXQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQgPT09IHRoaXMuX29iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQodGltZT86IG51bWJlcik6IFR3ZWVuIHtcclxuICAgICAgICBpZiAodGhpcy50d2Vlbk1hbmFnZXIpIHRoaXMudHdlZW5NYW5hZ2VyLmFkZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9zdGFydCh0aW1lKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zdGFydCh0aW1lOiBudW1iZXIpOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0VGltZSA9IHRpbWUgIT09IHVuZGVmaW5lZCA/IHRpbWUgOiB0aGlzLnR3ZWVuTWFuYWdlci5wYXNzZWRUaW1lOyAvL0RhdGUubm93KCk7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRUaW1lICs9IHRoaXMuX2RlbGF5VGltZTtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHRoaXMuX3ZhbHVlc0VuZCkge1xyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBhbiBBcnJheSB3YXMgcHJvdmlkZWQgYXMgcHJvcGVydHkgdmFsdWVcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBsb2NhbCBjb3B5IG9mIHRoZSBBcnJheSB3aXRoIHRoZSBzdGFydCB2YWx1ZSBhdCB0aGUgZnJvbnRcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gPSBbdGhpcy5fb2JqZWN0W3Byb3BlcnR5XV0uY29uY2F0KHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9IHRoaXMuX29iamVjdFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBBcnJheSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSAqPSAxLjA7IC8vIEVuc3VyZXMgd2UncmUgdXNpbmcgbnVtYmVycywgbm90IHN0cmluZ3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gfHwgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3AoKTogVHdlZW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnR3ZWVuTWFuYWdlci5yZW1vdmUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5faXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uU3RvcENhbGxiYWNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uU3RvcENhbGxiYWNrLmNhbGwodGhpcy5fb2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdG9wQ2hhaW5lZFR3ZWVucygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wQ2hhaW5lZFR3ZWVucygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbnVtQ2hhaW5lZFR3ZWVucyA9IHRoaXMuX2NoYWluZWRUd2VlbnMubGVuZ3RoOyBpIDwgbnVtQ2hhaW5lZFR3ZWVuczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoYWluZWRUd2VlbnNbaV0uc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsYXkoYW1vdW50OiBudW1iZXIpOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5fZGVsYXlUaW1lID0gYW1vdW50O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXBlYXQodGltZXM6IG51bWJlcik6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9yZXBlYXQgPSB0aW1lcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgeW95byh5b3lvOiBib29sZWFuKTogVHdlZW4ge1xyXG4gICAgICAgIHRoaXMuX3lveW8gPSB5b3lvO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlYXNpbmcoZWFzaW5nOiAoazogbnVtYmVyKSA9PiBudW1iZXIpOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5fZWFzaW5nRnVuY3Rpb24gPSBlYXNpbmc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVycG9sYXRpb24oaW50ZXJwb2xhdGlvbik6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9pbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBpbnRlcnBvbGF0aW9uO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFpbiguLi50d2VlbnM6IFR3ZWVuW10pOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5fY2hhaW5lZFR3ZWVucyA9IHR3ZWVucztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TdGFydChjYWxsYmFjazogKCkgPT4gdm9pZCk6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9vblN0YXJ0Q2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25VcGRhdGUoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5fb25VcGRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNvbXBsZXRlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogVHdlZW4ge1xyXG4gICAgICAgIHRoaXMuX29uQ29tcGxldGVDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN0b3AoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5fb25TdG9wQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzdGFydChwYXVzZV9kdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRUaW1lICs9IHBhdXNlX2R1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VEdXJhdGlvbihuZXdfZHVyYXRpb246IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2R1cmF0aW9uID0gbmV3X2R1cmF0aW9uO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IElVcGRhdGUsIFVwZGF0ZUxpc3QgfSBmcm9tICcuLi91dGlscy9VcGRhdGVMaXN0JztcclxuaW1wb3J0IHsgVHdlZW4gfSBmcm9tICcuL1R3ZWVuJztcclxuZXhwb3J0IHsgRWFzaW5nIH0gZnJvbSAnLi9FYXNpbmcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFR3ZWVuTWFuYWdlciBleHRlbmRzIFVwZGF0ZUxpc3Qge1xyXG4gICAgcHVibGljIHBhc3NlZFRpbWU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucGFzc2VkVGltZSA9IERhdGUubm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXNzZWRUaW1lICs9IGRlbHRhO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNQYXVzZWQpIHtcclxuICAgICAgICAgICAgbGV0IG4gPSB0aGlzLnVwZGF0ZUl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IGl0ZW06IElVcGRhdGU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBuIC0gMTsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLnVwZGF0ZUl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtLnVwZGF0ZSh0aGlzLnBhc3NlZFRpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtc1t0aGlzLnJlbW92ZUl0ZW1zLmxlbmd0aF0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIG5vdyByZW1vdmUgaXRlbXNcclxuICAgICAgICAgICAgbiA9IHRoaXMucmVtb3ZlSXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAobiA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMucmVtb3ZlSXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUodGFyZ2V0OiB1bmtub3duKTogVHdlZW4ge1xyXG4gICAgICAgIGNvbnN0IHR3ID0gbmV3IFR3ZWVuKHRhcmdldCk7XHJcbiAgICAgICAgdHcudHdlZW5NYW5hZ2VyID0gdGhpcztcclxuICAgICAgICByZXR1cm4gdHc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUodGFyZ2V0OiB1bmtub3duLCB0d2Vlbk1hbmFnZXI6IFR3ZWVuTWFuYWdlciA9IG51bGwpOiBUd2VlbiB7XHJcbiAgICAgICAgY29uc3QgdHcgPSBuZXcgVHdlZW4odGFyZ2V0KTtcclxuICAgICAgICB0dy50d2Vlbk1hbmFnZXIgPSB0d2Vlbk1hbmFnZXIgfHwgVHdlZW5NYW5hZ2VyLmluc3RhbmNlO1xyXG4gICAgICAgIHJldHVybiB0dztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMga2lsbFR3ZWVuc09mKHRhcmdldDogdW5rbm93bikge1xyXG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZUl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLnVwZGF0ZUl0ZW1zLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgICAgICB0d2VlbjtcclxuICAgICAgICAgICAgZm9yICg7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICB0d2VlbiA9IHRoaXMudXBkYXRlSXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAodHdlZW4uaXNUd2Vlbk9mKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGtpbGxUd2VlbnNPZih0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgIFR3ZWVuTWFuYWdlci5pbnN0YW5jZS5raWxsVHdlZW5zT2YodGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NpbmdsZXRvblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBUd2Vlbk1hbmFnZXJcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IFR3ZWVuTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKCFUd2Vlbk1hbmFnZXIuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFR3ZWVuTWFuYWdlci5faW5zdGFuY2UgPSBuZXcgVHdlZW5NYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUd2Vlbk1hbmFnZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9FYXNpbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL1R3ZWVuJztcclxuZXhwb3J0ICogZnJvbSAnLi9Ud2Vlbk1hbmFnZXInOyIsImludGVyZmFjZSBJUXVldWVJdGVtIHtcclxuICAgIGV2ZW50SWQ6IHN0cmluZztcclxuICAgIGFyZ3M6IHVua25vd25bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50UXVldWUgZXh0ZW5kcyBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBfcXVldWU6IElRdWV1ZUl0ZW1bXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBhZGQoZXZlbnRJZDogc3RyaW5nLCAuLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKHtcclxuICAgICAgICAgICAgZXZlbnRJZCwgYXJnc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShfZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLl9xdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW06IElRdWV1ZUl0ZW0gPSB0aGlzLl9xdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoaXRlbS5ldmVudElkLCAuLi5pdGVtLmFyZ3MpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNlcXVlbmNlIHtcclxuICAgIHB1YmxpYyBsaXN0OiB1bmtub3duW10gPSBbXTtcclxuICAgIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHN0dWZmPzogdW5rbm93bltdLCByYW5kb21pc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChzdHVmZikge1xyXG4gICAgICAgICAgICB0aGlzLmFkZChzdHVmZiwgcmFuZG9taXNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChzdHVmZjogdW5rbm93biwgcmFuZG9taXNlOiBib29sZWFuID0gZmFsc2UpOiBTZXF1ZW5jZSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3R1ZmYpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gPHVua25vd25bXT5zdHVmZjtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goLi4uaXRlbXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFt0aGlzLmxpc3QubGVuZ3RoXSA9IHN0dWZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmFuZG9taXNlKSB0aGlzLnJhbmRvbWlzZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUoc3R1ZmY6IHVua25vd24pOiBTZXF1ZW5jZSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3R1ZmYpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gPHVua25vd25bXT5zdHVmZjtcclxuICAgICAgICAgICAgY29uc3QgbiA9IGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0LmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdC5pbmRleE9mKHN0dWZmKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHRoaXMubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmFuZG9taXNlKCk6IFNlcXVlbmNlIHtcclxuICAgICAgICBTZXF1ZW5jZS5yYW5kb21pc2VMaXN0KHRoaXMubGlzdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5leHQoKTogdW5rbm93biB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpdGVtID0gdGhpcy5saXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFt0aGlzLmxpc3QubGVuZ3RoXSA9IGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmV2aW91cygpOiB1bmtub3duIHtcclxuICAgICAgICBsZXQgaXRlbSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSB0aGlzLmxpc3QucG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC51bnNoaWZ0KGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIEhPTERFUiA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9taXNlTGlzdCA9IChsaXN0OiB1bmtub3duW10pOiB1bmtub3duW10gPT4ge1xyXG4gICAgICAgIFNlcXVlbmNlLkhPTERFUi5wdXNoKC4uLmxpc3QpO1xyXG4gICAgICAgIGxpc3QubGVuZ3RoID0gMDtcclxuICAgICAgICB3aGlsZSAoU2VxdWVuY2UuSE9MREVSLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBTZXF1ZW5jZS5IT0xERVIubGVuZ3RoKTtcclxuICAgICAgICAgICAgbGlzdFtsaXN0Lmxlbmd0aF0gPSBTZXF1ZW5jZS5IT0xERVIuc3BsaWNlKGluZGV4LCAxKVswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IElVcGRhdGUgfSBmcm9tICcuL1VwZGF0ZUxpc3QnO1xyXG5cclxuaW50ZXJmYWNlIElBY3Rpb24ge1xyXG4gICAgX3RhcmdldFRpbWU6IG51bWJlcjtcclxuICAgIF9jYWxsYmFjazogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVvdXQgaW1wbGVtZW50cyBJVXBkYXRlIHtcclxuICAgIHByaXZhdGUgX3Bvb2w6IElBY3Rpb25bXTtcclxuICAgIHByaXZhdGUgX2FjdGlvbnM6IElBY3Rpb25bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY2FuY2VsbGVkQWN0aW9uczogSUFjdGlvbltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9vbFNpemU6IG51bWJlciA9IDUwKSB7XHJcbiAgICAgICAgdGhpcy5fcG9vbCA9IHRoaXMuX2NyZWF0ZVBvb2wocG9vbFNpemUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF9jcmVhdGVQb29sKHNpemU6IG51bWJlcik6IElBY3Rpb25bXSB7XHJcbiAgICAgICAgY29uc3QgcG9vbCA9IFtdO1xyXG4gICAgICAgIHdoaWxlIChzaXplID4gMCkge1xyXG4gICAgICAgICAgICBwb29sLnB1c2goeyBfdGFyZ2V0VGltZTogLTEsIF9jYWxsYmFjazogbnVsbCB9KTtcclxuICAgICAgICAgICAgc2l6ZS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9vbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfbmV4dCgpOiBJQWN0aW9uIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5fcG9vbC5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuX3Bvb2xbdGhpcy5fcG9vbC5sZW5ndGhdID0gaXRlbTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsYXkoY2FsbGJhY2s6ICgpID0+IHZvaWQsIG1zOiBudW1iZXIpOiBJQWN0aW9uIHtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLl9uZXh0KCk7XHJcbiAgICAgICAgYWN0aW9uLl90YXJnZXRUaW1lID0gbXMgfHwgLTE7XHJcbiAgICAgICAgYWN0aW9uLl9jYWxsYmFjayA9IGNhbGxiYWNrIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9uc1t0aGlzLl9hY3Rpb25zLmxlbmd0aF0gPSBhY3Rpb247XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGVsYXBzZWRUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBuID0gdGhpcy5fYWN0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG4gPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBpLCBhY3Rpb247XHJcbiAgICAgICAgICAgIGZvciAoaSA9IG4gLSAxOyBpID4gLTE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uID0gdGhpcy5fYWN0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBvbmVzIHRoYXQgd2VyZSBhbHJlYWR5IGNhbmNlbGxlZCBvciBmaXJlZFxyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5fdGFyZ2V0VGltZSA9PT0gLTEgfHwgIWFjdGlvbi5fY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWxsZWRBY3Rpb25zW3RoaXMuX2NhbmNlbGxlZEFjdGlvbnMubGVuZ3RoXSA9IGFjdGlvbjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLl90YXJnZXRUaW1lID4gMCAmJiBhY3Rpb24uX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLl90YXJnZXRUaW1lIC09IGVsYXBzZWRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24uX3RhcmdldFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGFjdGlvbi5fY2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5fY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uX3RhcmdldFRpbWUgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbm93IHJlbW92ZSBhbnkgY2FuY2VsbGVkIG9uZXNcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuX2NhbmNlbGxlZEFjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uID0gdGhpcy5fY2FuY2VsbGVkQWN0aW9ucy5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGkgPSB0aGlzLl9hY3Rpb25zLmluZGV4T2YoYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY3Rpb25zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsKGFjdGlvbjogSUFjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGFjdGlvbi5fdGFyZ2V0VGltZSA9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkICB7XHJcbiAgICAgICAgY29uc3QgbiA9IHRoaXMuX2FjdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChuID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgaSwgYWN0aW9uO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSBuIC0gMTsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiA9IHRoaXMuX2FjdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24uX2NhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5fdGFyZ2V0VGltZSA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2FjdGlvbnMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkICB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuX3Bvb2wgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgSVVwZGF0ZSB7XHJcbiAgICB1cGRhdGU6IChkZWx0YTogbnVtYmVyKSA9PiB2b2lkIHwgYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUxpc3Qge1xyXG4gICAgcHVibGljIHVwZGF0ZUl0ZW1zOiBJVXBkYXRlW10gPSBbXTtcclxuICAgIHB1YmxpYyByZW1vdmVJdGVtczogSVVwZGF0ZVtdID0gW107XHJcbiAgICBwdWJsaWMgaXNQYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNQYXVzZWQpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0sXHJcbiAgICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgICAgbiA9IHRoaXMudXBkYXRlSXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSBuIC0gMTsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLnVwZGF0ZUl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgaXRlbS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vbm93IHJlbW92ZSBpdGVtc1xyXG4gICAgICAgICAgICBuID0gdGhpcy5yZW1vdmVJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChuID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLnJlbW92ZUl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbXMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHVyZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlSXRlbXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlQWxsKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBpdGVtLFxyXG4gICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICBuID0gdGhpcy51cGRhdGVJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gbiAtIDE7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbXNbaV0gPSB0aGlzLnVwZGF0ZUl0ZW1zW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKGl0ZW06IElVcGRhdGUpOiBJVXBkYXRlIHtcclxuICAgICAgICAvL2Rvbid0IGFsbG93IGFkZGluZyBtb3JlIHRoYW4gb25jZSFcclxuICAgICAgICBpZiAodGhpcy51cGRhdGVJdGVtcy5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zW3RoaXMudXBkYXRlSXRlbXMubGVuZ3RoXSA9IGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUoaXRlbTogSVVwZGF0ZSk6IElVcGRhdGUge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlSXRlbXNbdGhpcy5yZW1vdmVJdGVtcy5sZW5ndGhdID0gaXRlbTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX3JlbW92ZShpdGVtOiBJVXBkYXRlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnVwZGF0ZUl0ZW1zLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHRoaXMudXBkYXRlSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUl0ZW1zLmxlbmd0aDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudFF1ZXVlIH0gZnJvbSBcIi4vRXZlbnRRdWV1ZVwiO1xyXG5pbXBvcnQgeyBVcGRhdGVMaXN0IH0gZnJvbSBcIi4vVXBkYXRlTGlzdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVMb29wIGV4dGVuZHMgVXBkYXRlTGlzdHtcclxuICAgIHByaXZhdGUgYWNjdW11bGF0b3I6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBpbnRlcnZhbDogbnVtYmVyO1xyXG4gICAgcHVibGljIGZwczogbnVtYmVyID0gNjA7XHJcbiAgICBwcml2YXRlIGdhbWVMb29wSWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXZlbnRRdWV1ZTogRXZlbnRRdWV1ZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSAxMDAwIC8gdGhpcy5mcHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCk6IFVwZGF0ZUxvb3Age1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5nYW1lTG9vcElkKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLmdhbWVMb29wSWQgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZSwgdGhpcy5pbnRlcnZhbCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmdhbWVMb29wSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoX2RlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBuZXdUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBjb25zdCBlbGFwc2VkID0gbmV3VGltZSAtIHRoaXMuY3VycmVudFRpbWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IG5ld1RpbWU7XHJcbiAgICAgICAgdGhpcy5hY2N1bXVsYXRvciArPSBlbGFwc2VkO1xyXG4gICAgICAgIC8vdXNlIGFjY3VtdWxhdG9yIHN5c3RlbSBmb3IgcHJvY2Vzc2luZyB0aW1lIHdpdGggZml4ZWQgdGltZSBzdGVwXHJcbiAgICAgICAgY29uc3QgY2h1bmsgPSB0aGlzLmludGVydmFsO1xyXG4gICAgICAgIHdoaWxlKHRoaXMuYWNjdW11bGF0b3IgPiBjaHVuayl7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjdW11bGF0b3IgLT0gY2h1bms7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZShjaHVuayk7XHJcbiAgICAgICAgICAgIC8vbm93IHByb2Nlc3MgdGhlIGV2ZW50IHF1ZXVlXHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50UXVldWUudXBkYXRlKGNodW5rKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vVGltZW91dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVXBkYXRlTGlzdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2VxdWVuY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL0V2ZW50UXVldWUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1VwZGF0ZUxvb3AnOyIsIm1vZHVsZS5leHBvcnRzID0gUElYSTsiXSwic291cmNlUm9vdCI6IiJ9
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
            var tx = PIXI.utils.TextureCache[asset.id];
            if (tx) {
                tx.destroy();
            }
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
var version = { code: '0.1.29' };



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbmdpbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvRW5naW5lLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy9hdWRpby9Tb3VuZC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvYXVkaW8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL2NvcmUvRW5naW5lRXZlbnRzLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy9jb3JlL0xvYWRlci50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9TY3JlZW4udHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL2NvcmUvU2NyZWVuTWFuYWdlci50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9VbmxvYWRlci50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS92ZXJzaW9uLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy90d2Vlbi9FYXNpbmcudHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL3R3ZWVuL1R3ZWVuLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy90d2Vlbi9Ud2Vlbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL3R3ZWVuL2luZGV4LnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy91dGlscy9FdmVudFF1ZXVlLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy91dGlscy9TZXF1ZW5jZS50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvVGltZW91dC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvVXBkYXRlTGlzdC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvVXBkYXRlTG9vcC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZW5naW5lL2V4dGVybmFsIFwiUElYSVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qiw4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QUMsQ0FBQyxDQUFDO1lBRTdDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzlFO2FBQU07WUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTVFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxD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QUssQ0FBQyxDQUFDO1lBQ3BCLDZCQUE2QjtZQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLENBdEMrQixzREFBVSxHQXNDekM7Ozs7Ozs7Ozs7Ozs7O0FDMUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ0c7QUFDRjtBQUNFO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0o3QixzQiIsImZpbGUiOiJlbmdpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9FbmdpbmUudHNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJ1xyXG5pbXBvcnQgeyBTb3VuZCB9IGZyb20gJy4vYXVkaW8vU291bmQnO1xyXG5pbXBvcnQgeyBFbmdpbmVFdmVudHMgfSBmcm9tICcuL2NvcmUvRW5naW5lRXZlbnRzJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi9jb3JlL0xvYWRlcic7XHJcbmltcG9ydCB7IElTY3JlZW5NYXAsIFNjcmVlbk1hbmFnZXIgfSBmcm9tICcuL2NvcmUvU2NyZWVuTWFuYWdlcic7XHJcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi9jb3JlL1NldHRpbmdzJ1xyXG5pbXBvcnQgeyBVbmxvYWRlciB9IGZyb20gJy4vY29yZS9VbmxvYWRlcic7XHJcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuL2NvcmUvdmVyc2lvbic7XHJcbmltcG9ydCB7IFR3ZWVuTWFuYWdlciB9IGZyb20gJy4vdHdlZW4nO1xyXG5pbXBvcnQgeyBFdmVudFF1ZXVlLCBVcGRhdGVMb29wIH0gZnJvbSAnLi91dGlscyc7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL3BpeGkuanMuZC50c1wiIC8+XHJcbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xyXG5cclxuICAgIHB1YmxpYyBhcHA6IFBJWEkuQXBwbGljYXRpb247XHJcblxyXG4gICAgcHVibGljIHNldHRpbmdzOiBTZXR0aW5ncztcclxuXHJcbiAgICBwdWJsaWMgZXZlbnRzOiBFdmVudFF1ZXVlO1xyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVMb29wOiBVcGRhdGVMb29wO1xyXG5cclxuICAgIHB1YmxpYyBsb2FkZXI6IExvYWRlcjtcclxuXHJcbiAgICBwdWJsaWMgdW5sb2FkZXI6IFVubG9hZGVyO1xyXG5cclxuICAgIHB1YmxpYyBzY3JlZW5NYW5hZ2VyOiBTY3JlZW5NYW5hZ2VyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRW5naW5lIHZlcnNpb24nLCB2ZXJzaW9uLmNvZGUpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KHNjcmVlbk1hcDogSVNjcmVlbk1hcCk6IEVuZ2luZSB7XHJcbiAgICAgICAgLy9wcm9iYWJseSB3YW50IHRvIHVzZSB0aGUgcGl4aSBsb2FkZXIgZm9yIGV2ZXJ5dGhpbmcuLi5cclxuICAgICAgICAvL3NvIGNyZWF0ZSB0aGUgYXBwIHN0cmFpZ2h0IGF3YXlcclxuICAgICAgICB0aGlzLmFwcCA9IHRoaXMuX2NyZWF0ZVBpeGlBcHAoKVxyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHRoaXMuX2NyZWF0ZUV2ZW50cyhzY3JlZW5NYXApO1xyXG4gICAgICAgIC8vbG9hZCB0aGUgY29uZmlnXHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5ldyBTZXR0aW5ncyh0aGlzLmFwcC5sb2FkZXIsIHRoaXMuZXZlbnRzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVzb3VyY2UoaWQ6IHN0cmluZyk6IHVua25vd24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcC5sb2FkZXIucmVzb3VyY2VzW2lkXS5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY29uZmlnIGhhcyBub3cgbG9hZGVkXHJcbiAgICBwcml2YXRlIGJ1aWxkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vdXBkYXRlIHRoZSBhcHAgd2l0aCB0aGUgbG9hZGVkIHNldHRpbmdzXHJcbiAgICAgICAgdGhpcy5hcHAucmVuZGVyZXIucmVzaXplKHRoaXMuc2V0dGluZ3Muc2l6ZS53aWR0aCwgdGhpcy5zZXR0aW5ncy5zaXplLmhlaWdodClcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgdGhlIGxvYWRlclxyXG4gICAgICAgIHRoaXMubG9hZGVyID0gbmV3IExvYWRlcih0aGlzLmFwcC5sb2FkZXIpXHJcblxyXG4gICAgICAgIHRoaXMudW5sb2FkZXIgPSBuZXcgVW5sb2FkZXIodGhpcy5sb2FkZXIpXHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHVwZGF0ZSBsb29wXHJcbiAgICAgICAgdGhpcy51cGRhdGVMb29wID0gdGhpcy5fY3JlYXRlVXBkYXRlTG9vcCgpXHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHR3ZWVuIG1hbmFnZXIsIGFkZCB0byB1cGRhdGUgbG9vcFxyXG4gICAgICAgIHRoaXMudXBkYXRlTG9vcC5hZGQoVHdlZW5NYW5hZ2VyLmluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgc2NyZWVuIG1hbmFnZXJcclxuICAgICAgICB0aGlzLnNjcmVlbk1hbmFnZXIgPSB0aGlzLl9jcmVhdGVTY3JlZW5NYW5hZ2VyKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVVwZGF0ZUxvb3AoKTogVXBkYXRlTG9vcCB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlTG9vcCA9IG5ldyBVcGRhdGVMb29wKHRoaXMuZXZlbnRzKVxyXG4gICAgICAgIHVwZGF0ZUxvb3Auc3RhcnQoKTtcclxuICAgICAgICByZXR1cm4gdXBkYXRlTG9vcDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVTY3JlZW5NYW5hZ2VyKCk6IFNjcmVlbk1hbmFnZXIge1xyXG4gICAgICAgIGNvbnN0IHNjcmVlbk1hbmFnZXIgPSBuZXcgU2NyZWVuTWFuYWdlcih0aGlzLmV2ZW50cywgdGhpcy5zZXR0aW5ncywgdGhpcy5sb2FkZXIsIHRoaXMudW5sb2FkZXIpXHJcbiAgICAgICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQoc2NyZWVuTWFuYWdlci5yb290KVxyXG4gICAgICAgIHRoaXMudXBkYXRlTG9vcC5hZGQoc2NyZWVuTWFuYWdlcilcclxuICAgICAgICByZXR1cm4gc2NyZWVuTWFuYWdlcjtcclxuICAgIH0gICBcclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVFdmVudHMoc2NyZWVuTWFwOiBJU2NyZWVuTWFwKTogRXZlbnRRdWV1ZSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gbmV3IEV2ZW50UXVldWUoKTtcclxuXHJcbiAgICAgICAgZXZlbnRzLm9uKFNldHRpbmdzLkNPTkZJR19MT0FERUQsICgpID0+IHtcclxuICAgICAgICAgICAgLy9jb25maWcgaXMgbG9hZGVkIC0gbm93IGJ1aWxkIHRoZSBlbmdpbmVcclxuICAgICAgICAgICAgdGhpcy5idWlsZCgpO1xyXG4gICAgICAgICAgICAvL3NldCBzY3JlZW5tYXBcclxuICAgICAgICAgICAgdGhpcy5zY3JlZW5NYW5hZ2VyLnNjcmVlbk1hcCA9IHNjcmVlbk1hcDtcclxuICAgICAgICAgICAgLy9sb2FkIGdsb2JhbCBhc3NldHNcclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIubG9hZEFzc2V0cyh0aGlzLnNldHRpbmdzLmdldE1hbmlmZXN0KCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgU291bmQuaW5zdGFuY2UuYWRkU291bmRzKHRoaXMubG9hZGVyLmZldGNoU291bmRzKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9ub3cgc2hvdyBmaXJzdCBzY3JlZW5cclxuICAgICAgICAgICAgICAgICAgICBldmVudHMuZW1pdChFbmdpbmVFdmVudHMuQVBQX1JFQURZKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gZXZlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVBpeGlBcHAoKTogUElYSS5BcHBsaWNhdGlvbiB7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQSVhJLkFwcGxpY2F0aW9uKHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3NjgsIHdpZHRoOiAxMDI0LFxyXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgdmlldyxcclxuICAgICAgICAgICAgZm9yY2VDYW52YXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc29sdXRpb246IDFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vY29yZSdcclxuZXhwb3J0ICogZnJvbSAnLi91dGlscydcclxuZXhwb3J0ICogZnJvbSAnLi90d2VlbidcclxuZXhwb3J0ICogZnJvbSAnLi9hdWRpbydcclxuIiwiXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTb3VuZERhdGEge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGJ1ZmZlcjogQXJyYXlCdWZmZXIgfCBBdWRpb0J1ZmZlcjtcclxuICAgIGxvb3A/OiBudW1iZXI7XHJcbiAgICBncm91cD86IHN0cmluZztcclxuICAgIHVybD86IHN0cmluZztcclxuICAgIGV4dGVuc2lvbj86IHN0cmluZztcclxuICAgIHNwcml0ZXM/OiBJU3ByaXRlSW5mb1tdO1xyXG4gICAgc3RhcnQ/OiBudW1iZXI7XHJcbiAgICBkdXJhdGlvbj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3ByaXRlRGF0YSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgc3JjOiBzdHJpbmc7XHJcbiAgICBzcHJpdGVzOiBJU3ByaXRlSW5mb1tdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTcHJpdGVJbmZvIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBzdGFydDogbnVtYmVyO1xyXG4gICAgZHVyYXRpb246IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQnVmZmVycyB7XHJcbiAgICBbaWQ6IHN0cmluZ106IElTb3VuZERhdGE7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJQ2hhbm5lbHMge1xyXG4gICAgW2lkOiBzdHJpbmddOiBTb3VuZENoYW5uZWw7XHJcbn1cclxuXHJcbi8vYSBtYW5hZ2VyIGZvciBwbGF5aW5nIHdlYiBhdWRpbyBzb3VuZHNcclxuZXhwb3J0IGNsYXNzIFNvdW5kIHtcclxuICAgIHByaXZhdGUgY29udGV4dDogQXVkaW9Db250ZXh0O1xyXG5cclxuICAgIHByaXZhdGUgZ2xvYmFsR2FpbjogU291bmRDaGFubmVsO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGNoYW5uZWxzOiBJQ2hhbm5lbHM7Ly9zZngsIG11c2ljLCBlbnZcclxuXHJcbiAgICBwcml2YXRlIF9lbmFibGVkID0gZmFsc2U7Ly9UT0RPIC0gY2hlY2sgZm9yIHRoaXNcclxuICAgIHByaXZhdGUgX3NjcmF0Y2hCdWZmZXI6IEF1ZGlvQnVmZmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2J1ZmZlcnM6IElCdWZmZXJzO1xyXG5cclxuICAgIC8vVE9ETyAtIGhhdmUgYW4gaW50ZXJuYWwgZXZlbnQgZGlzcGF0Y2hlclxyXG5cclxuICAgIC8vcHJvYmFibHkgbWFrZSB0aGlzIGEgc2luZ2xldG9uXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoU291bmQuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRocm93KG5ldyBFcnJvcihcIlNvdW5kIHNpbmdsZXRvbiBhbHJlYWR5IGV4aXN0c1wiKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vYnVmZmVyIHRvIGZpeCBpb3MgYnVnc1xyXG4gICAgICAgIHRoaXMuX3NjcmF0Y2hCdWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKDEsIDEsIDIyMDUwKVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlUm91dGluZygpO1xyXG5cclxuICAgICAgICB0aGlzLl9idWZmZXJzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlUm91dGluZygpOiB2b2lkIHtcclxuICAgICAgICAvL21haW4gb3V0cHV0ID4gZ2xvYmFsIG11dGUgPiBjb250ZXh0IG11dGVzXHJcbiAgICAgICAgdGhpcy5nbG9iYWxHYWluID0gbmV3IFNvdW5kQ2hhbm5lbCh0aGlzLmNvbnRleHQsIHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jcmVhdGUgc2Z4LCBtdXNpYyBhbmQgZW52XHJcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IHtcclxuICAgICAgICAgICAgc2Z4OiBuZXcgU291bmRDaGFubmVsKHRoaXMuY29udGV4dCwgdGhpcy5nbG9iYWxHYWluLm91dHB1dCksXHJcbiAgICAgICAgICAgIG11c2ljOiBuZXcgU291bmRDaGFubmVsKHRoaXMuY29udGV4dCwgdGhpcy5nbG9iYWxHYWluLm91dHB1dCksXHJcbiAgICAgICAgICAgIGVudjogbmV3IFNvdW5kQ2hhbm5lbCh0aGlzLmNvbnRleHQsIHRoaXMuZ2xvYmFsR2Fpbi5vdXRwdXQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5KGlkOiBzdHJpbmcsIHZvbHVtZTogbnVtYmVyID0gMSwgbG9vcDogbnVtYmVyID0gLTEpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBzb3VuZERhdGE6IElTb3VuZERhdGEgPSB0aGlzLl9idWZmZXJzW2lkXTtcclxuICAgICAgICAgICAgY29uc3Qgc291bmRQbGF5ID0gbmV3IFNvdW5kUGxheShzb3VuZERhdGEsIHRoaXMuY29udGV4dClcclxuICAgICAgICAgICAgLy9jaG9vc2UgY2hhbm5lbCBhY2NvcmRpbmcgdG8gZGF0YSAtPiBJU291bmREYXRhLmdyb3VwXHJcbiAgICAgICAgICAgIGNvbnN0IGNoYW5uZWw6IFNvdW5kQ2hhbm5lbCA9IHRoaXMuZ2V0Q2hhbm5lbChzb3VuZERhdGEpXHJcbiAgICAgICAgICAgIGNoYW5uZWwuYWRkKHNvdW5kUGxheSlcclxuICAgICAgICAgICAgLy9wbGF5IGl0XHJcbiAgICAgICAgICAgIHNvdW5kUGxheS5wbGF5KCk7XHJcbiAgICAgICAgICAgIC8vVE9ETyAtIG5lZWQgdG8gc3RvcmUgdGhlIHNvdW5kIHNvIGl0IGNhbiBiZSBzdG9wcGVkIGlmIG5lZWRlZFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYW5uZWwoc291bmREYXRhOiBJU291bmREYXRhKTogU291bmRDaGFubmVsIHtcclxuICAgICAgICBzd2l0Y2ggKHNvdW5kRGF0YS5ncm91cCkge1xyXG4gICAgICAgICAgICBjYXNlICdtdXNpYyc6IHJldHVybiB0aGlzLmNoYW5uZWxzLm11c2ljO1xyXG4gICAgICAgICAgICBjYXNlICdlbnYnOiByZXR1cm4gdGhpcy5jaGFubmVscy5lbnY7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiB0aGlzLmNoYW5uZWxzLnNmeDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3AoaWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIC8vVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRTb3VuZHMoc291bmRzOiBJU291bmREYXRhW10pOiB2b2lkIHtcclxuICAgICAgICBzb3VuZHMuZm9yRWFjaCh0aGlzLmFkZClcclxuICAgICAgICAvL1RPRE8gLSBtb25pdG9yIHdoZW4gZGVjb2RpbmcgaXMgY29tcGxldGVkXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZCA9IChzb3VuZERhdGE6IElTb3VuZERhdGEpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKDxBcnJheUJ1ZmZlcj5zb3VuZERhdGEuYnVmZmVyKS50aGVuKChkZWNvZGVkOkF1ZGlvQnVmZmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHNvdW5kRGF0YS5idWZmZXIgPSBkZWNvZGVkO1xyXG4gICAgICAgICAgICAvLyAtIGhhbmRsZSBzb3VuZCBzcHJpdGVzIGNvcnJlY3RseVxyXG4gICAgICAgICAgICAvL25lZWQgYSBkaWZmZXJlbnQgc291bmQgZGF0YSBmb3IgZWFjaCBvbmVcclxuICAgICAgICAgICAgaWYgKHNvdW5kRGF0YS5zcHJpdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VuZERhdGEuc3ByaXRlcy5mb3JFYWNoKChpbmZvOiBJU3ByaXRlSW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9jbG9uZURhdGEoc291bmREYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaWQgPSBpbmZvLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3RhcnQgPSBpbmZvLnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZHVyYXRpb24gPSBpbmZvLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlcnNbaW5mby5pZF0gPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlcnNbc291bmREYXRhLmlkXSA9IHNvdW5kRGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vdW5sb2FkIHNvdW5kXHJcbiAgICBwdWJsaWMgcmVtb3ZlKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAvL2ZpbmQgdGhlIG1haW4gc291bmQgdGhlbiByZW1vdmUgYWxsIHRoYXQgcmVmZXJlbmNlIHRoYXQgYnVmZmVyXHJcbiAgICAgICAgY29uc3QgbWFpbkRhdGEgPSB0aGlzLl9idWZmZXJzW2lkXTtcclxuICAgICAgICBpZiAoIW1haW5EYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NvdW5kLnJlbW92ZSAtIG5vIHNvdW5kIGZvdW5kIHdpdGggaWQnLCBpZClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBtYWluRGF0YS5idWZmZXI7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX2J1ZmZlcnMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdW5kRGF0YSA9IHRoaXMuX2J1ZmZlcnNba2V5XTtcclxuICAgICAgICAgICAgICAgIGlmIChzb3VuZERhdGEuYnVmZmVyID09PSBidWZmZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fYnVmZmVyc1trZXldXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2Nsb25lRGF0YShzb3VuZERhdGE6IElTb3VuZERhdGEpOiBJU291bmREYXRhIHtcclxuICAgICAgICBjb25zdCB7IGlkLCBidWZmZXIsIGdyb3VwLCBleHRlbnNpb24sIHVybCB9ID0gc291bmREYXRhO1xyXG4gICAgICAgIHJldHVybiB7IGlkLCBidWZmZXIsIGdyb3VwLCBleHRlbnNpb24sIHVybCB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzY3JhdGNoQnVmZmVyKCk6IEF1ZGlvQnVmZmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NyYXRjaEJ1ZmZlcjtcclxuICAgIH1cclxuXHJcbiAgICAvL3NpbmdsZXRvblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTb3VuZFxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogU291bmQge1xyXG4gICAgICAgIGlmICghU291bmQuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFNvdW5kLl9pbnN0YW5jZSA9IG5ldyBTb3VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU291bmQuX2luc3RhbmNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL2xpa2UgYSBjaGFubmVsIG9uIGEgbWl4ZXIgLSB2b2x1bWUgY29udHJvbFxyXG4vL2p1c3QgYSB3cmFwcGVyIGZvciBhIGdhaW4gbm9kZVxyXG5leHBvcnQgY2xhc3MgU291bmRDaGFubmVsIHtcclxuICAgIHB1YmxpYyBvdXRwdXQ6IEdhaW5Ob2RlO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZXh0OiBBdWRpb0NvbnRleHQsIHRhcmdldDogQXVkaW9Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpXHJcbiAgICAgICAgdGhpcy5vdXRwdXQuY29ubmVjdCh0YXJnZXQpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB2b2x1bWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vdXRwdXQuZ2Fpbi52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgdm9sdW1lKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm91dHB1dC5nYWluLnNldFZhbHVlQXRUaW1lKHZhbHVlLCB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoc291bmQ6IFNvdW5kUGxheSk6IHZvaWQge1xyXG4gICAgICAgIHNvdW5kLm91dHB1dC5jb25uZWN0KHRoaXMub3V0cHV0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29ubmVjdChub2RlOiBBdWRpb05vZGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm91dHB1dC5jb25uZWN0KG5vZGUpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc2Nvbm5lY3Qobm9kZTogQXVkaW9Ob2RlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQuZGlzY29ubmVjdChub2RlKVxyXG4gICAgfVxyXG59XHJcblxyXG4vL3N0cnVnZ2xpbmcgdG8gbmFtZSB0aGlzIGFwcHJvcHJpYXRlbHlcclxuZXhwb3J0IGNsYXNzIFNvdW5kUGxheSB7XHJcblxyXG4gICAgcHVibGljIHNvdXJjZTogQXVkaW9CdWZmZXJTb3VyY2VOb2RlO1xyXG4gICAgcHVibGljIG91dHB1dDogR2Fpbk5vZGU7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDA7Ly9mb3IgcGF1c2UgaGFuZGxpbmdcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc291bmREYXRhOiBJU291bmREYXRhLCBwcml2YXRlIGNvbnRleHQ6IEF1ZGlvQ29udGV4dCkge1xyXG4gICAgICAgIC8vIC0gY3JlYXRlIGFuIGF1ZGlvYnVmZmVyc291cmNlIG5vZGVcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcclxuICAgICAgICB0aGlzLnNvdXJjZS5idWZmZXIgPSA8QXVkaW9CdWZmZXI+dGhpcy5zb3VuZERhdGEuYnVmZmVyO1xyXG4gICAgICAgIC8vdm9sdW1lIGNvbnRyb2xsZXJcclxuICAgICAgICB0aGlzLm91dHB1dCA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XHJcbiAgICAgICAgLy9UT0RPIC0gc2V0IHRoZSB2b2x1bWVcclxuICAgICAgICB0aGlzLnNvdXJjZS5jb25uZWN0KHRoaXMub3V0cHV0KTsvL3RoaXMgc3RlcCBpcyBpbXBvcnRhbnQgOylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheSgpOiB2b2lkIHtcclxuICAgICAgICAvLyAtIGxvb3AsIHN0YXJ0IHRpbWUsIGR1cmF0aW9uLCBldGNcclxuICAgICAgICAvLyB0aGlzLnNvdXJjZS5zdGFydCgpXHJcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5zdGFydCgwLCB0aGlzLnN0YXJ0LCB0aGlzLmR1cmF0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5zdGFydCgwLCB0aGlzLnN0YXJ0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzdGFydCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdW5kRGF0YS5zdGFydCB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZHVyYXRpb24oKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodGhpcy5zb3VuZERhdGEubG9vcCkge1xyXG4gICAgICAgICAgICAvL1RPRE9cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3VuZERhdGEuZHVyYXRpb24gfHwgLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNvdXJjZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB2b2x1bWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vdXRwdXQuZ2Fpbi52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgdm9sdW1lKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm91dHB1dC5nYWluLnNldFZhbHVlQXRUaW1lKHZhbHVlLCB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdGltZSgpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0aGlzLnNvdXJjZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUgLSB0aGlzLnN0YXJ0VGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2Uuc3RvcCgwKTtcclxuICAgICAgICB0aGlzLnNvdXJjZS5kaXNjb25uZWN0KDApXHJcbiAgICAgICAgdGhpcy5vdXRwdXQuZGlzY29ubmVjdCgwKVxyXG4gICAgICAgIC8vdGhpcyBoYXMgdG8gYmUgaW5kZXBlbmRlbnRseSB0cnkgY2F0Y2hlZCBhcyB0aHJvd3Mgb24gcGxhdGZvcm1zIG90aGVyIHRoYW4gaW9zXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2UuYnVmZmVyID0gU291bmQuaW5zdGFuY2Uuc2NyYXRjaEJ1ZmZlcjtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NjcmF0Y2ggYnVmZmVyIGVycm9yISAnLCBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3V0cHV0ID0gbnVsbDtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vU291bmQnIiwiZXhwb3J0IGVudW0gRW5naW5lRXZlbnRzIHtcclxuICAgIEFQUF9SRUFEWSA9ICdhcHAtcmVhZHknLFxyXG4gICAgU0hPV19TQ1JFRU4gPSAnc2NyZWVuJ1xyXG59IiwiXHJcblxyXG5pbXBvcnQgeyBJQXNzZXQsIElBc3NldHMsIFNldHRpbmdzIH0gZnJvbSBcIi4vU2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgTG9hZGVyUmVzb3VyY2UgfSBmcm9tICdwaXhpLmpzJ1xyXG5pbXBvcnQgeyBJU291bmREYXRhLCBJU3ByaXRlRGF0YSwgSVNwcml0ZUluZm8gfSBmcm9tIFwiLi4vYXVkaW8vU291bmRcIjtcclxuXHJcbmludGVyZmFjZSBJQXNzZXREYXRhTWFwIHtcclxuICAgIFtpZDogc3RyaW5nXTogSUFzc2V0O1xyXG59XHJcblxyXG4vL2Fzc2V0IGxvYWRlclxyXG5leHBvcnQgY2xhc3MgTG9hZGVyIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdMT0JBTF9BU1NFVFNfTE9BREVEOiBzdHJpbmcgPSAnZ2xvYmFsLWFzc2V0cy1sb2FkZWQnO1xyXG5cclxuICAgIHByaXZhdGUgX3N1cHBvcnRlZFR5cGVzID0gWydvZ2cnLCAnbTRhJywgJ21wMyddXHJcblxyXG4gICAgcHVibGljIGF1ZGlvRm9ybWF0OiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBfYXNzZXREYXRhOiBJQXNzZXREYXRhTWFwID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfbG9hZGVyOiBQSVhJLkxvYWRlclxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0UmVzb3VyY2VUeXBlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldFJlc291cmNlVHlwZXMoKTogdm9pZCB7XHJcbiAgICAgICAgLy9zZXQgaXQgdG8gdXNlIHhociBmb3Igc291bmRzXHJcbiAgICAgICAgdGhpcy5fc3VwcG9ydGVkVHlwZXMuZm9yRWFjaCh0eXBlID0+IHRoaXMuc2V0WGhyKHR5cGUpKVxyXG4gICAgICAgIC8vY2hvb3NlIHdoaWNoIGF1ZGlvIGZvcm1hdFxyXG4gICAgICAgIHRoaXMuYXVkaW9Gb3JtYXQgPSB0aGlzLl9zZXRBdWRpb0Zvcm1hdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldEF1ZGlvRm9ybWF0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XHJcbiAgICAgICAgY29uc3Qgb2dnID0gISEoYS5jYW5QbGF5VHlwZSAmJiBhLmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJykucmVwbGFjZSgvbm8vLCAnJykpO1xyXG4gICAgICAgIHJldHVybiBvZ2cgPyAnLm9nZycgOiAnLm00YSc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRYaHIoZXh0ZW5zaW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBMb2FkZXJSZXNvdXJjZS5zZXRFeHRlbnNpb25Mb2FkVHlwZShleHRlbnNpb24sIExvYWRlclJlc291cmNlLkxPQURfVFlQRS5YSFIpXHJcbiAgICAgICAgTG9hZGVyUmVzb3VyY2Uuc2V0RXh0ZW5zaW9uWGhyVHlwZShleHRlbnNpb24sIExvYWRlclJlc291cmNlLlhIUl9SRVNQT05TRV9UWVBFLkJVRkZFUilcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmV0Y2hTb3VuZHMoKTogSVNvdW5kRGF0YVtdIHtcclxuICAgICAgICBjb25zdCByZXNvdXJjZXMgPSB0aGlzLl9sb2FkZXIucmVzb3VyY2VzO1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhyZXNvdXJjZXMpLmZpbHRlcigoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHJlc291cmNlc1tpZF07XHJcbiAgICAgICAgICAgIHJldHVybiAhIXJlc291cmNlLnhociAmJiB0aGlzLl9zdXBwb3J0ZWRUeXBlcy5pbmNsdWRlcyhyZXNvdXJjZS5leHRlbnNpb24pXHJcbiAgICAgICAgfSkubWFwKChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gcmVzb3VyY2VzW2lkXTtcclxuICAgICAgICAgICAgLy9hbHNvIHNvdW5kIGdyb3VwPyBsb29wPyBcclxuICAgICAgICAgICAgLy9UT0RPIC0gc3RvcmluZyBieSBpZCBpcyBnb2luZyB0byBiZSBwcm9ibGVtYXRpYyAtIG5lZWQgdG8gY2hhbmdlIHRoaXNcclxuICAgICAgICAgICAgLy9zaG91bGQgdXNlIGZpbGUgbmFtZSBvciBwYXRoXHJcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0RGF0YTogSUFzc2V0ID0gdGhpcy5fYXNzZXREYXRhW2lkXVxyXG4gICAgICAgICAgICAvLyAtIGFsc28gc291bmQgc3ByaXRlcy4uLlxyXG4gICAgICAgICAgICBjb25zdCBzcHJpdGVEYXRhOiBJU3ByaXRlRGF0YSA9IHRoaXMuZ2V0QXVkaW9TcHJpdGVEYXRhKGFzc2V0RGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZXM6IElTcHJpdGVJbmZvW10gPSBzcHJpdGVEYXRhICYmIHNwcml0ZURhdGEuc3ByaXRlcztcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgYnVmZmVyOiByZXNvdXJjZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiByZXNvdXJjZS5leHRlbnNpb24sXHJcbiAgICAgICAgICAgICAgICBncm91cDogYXNzZXREYXRhLmdyb3VwLFxyXG4gICAgICAgICAgICAgICAgbG9vcDogYXNzZXREYXRhLmxvb3AsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHJlc291cmNlLnVybCxcclxuICAgICAgICAgICAgICAgIHNwcml0ZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF1ZGlvU3ByaXRlRGF0YShhc3NldERhdGE6IElBc3NldCk6IElTcHJpdGVEYXRhIHtcclxuICAgICAgICAvLyAtIGZpbmQgdGhlIHJlc291cmNlIHRoYXQgaXMgdGhlIGNvcnJlc3BvbmRpbmcganNvbi4uLlxyXG4gICAgICAgIGNvbnN0IHJlc291cmNlcyA9IHRoaXMuX2xvYWRlci5yZXNvdXJjZXM7XHJcblxyXG4gICAgICAgIGNvbnN0IGF1ZGlvU3JjID0gYXNzZXREYXRhLnNyYztcclxuICAgICAgICBjb25zdCBzbGFzaEluZGV4ID0gYXVkaW9TcmMubGFzdEluZGV4T2YoJy8nKSArIDE7XHJcbiAgICAgICAgY29uc3QgZm5hbWUgPSBhdWRpb1NyYy5zdWJzdHJpbmcoc2xhc2hJbmRleClcclxuXHJcbiAgICAgICAgY29uc3QgcGF0aCA9IGF1ZGlvU3JjLnN1YnN0cmluZygwLCBzbGFzaEluZGV4KVxyXG5cclxuICAgICAgICBjb25zdCBkb3RJbmRleCA9IGZuYW1lLmxhc3RJbmRleE9mKCcuJylcclxuXHJcbiAgICAgICAgLy93aGF0cyB0aGUgZmlsZSBuYW1lIHdlIGFyZSBsb29raW5nIGZvcj9cclxuICAgICAgICBjb25zdCBqc29uTmFtZSA9IGRvdEluZGV4ID4gLTE/IGZuYW1lLnN1YnN0cmluZygwLCBkb3RJbmRleCkgKyAnLmpzb24nIDogZm5hbWUgKyAnLmpzb24nXHJcblxyXG4gICAgICAgIC8vd2hhdHMgdGhlIHVybCB3ZSBhcmUgbG9va2luZyBmb3I/XHJcbiAgICAgICAgY29uc3QganNvblVSTCA9IHBhdGggKyBqc29uTmFtZTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzb3VyY2VLZXkgPSBPYmplY3Qua2V5cyhyZXNvdXJjZXMpLmZpbmQoa2V5ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2U6IExvYWRlclJlc291cmNlID0gcmVzb3VyY2VzW2tleV1cclxuICAgICAgICAgICAgLy9kb24ndCBjaGVjayB0aGUgbmFtZSAtIHRoZSBuYW1lIGlzIHRoZSBpZCBzbyBjYW4gYmUgZGlmZmVyZW50IHRvIGZpbGUgbmFtZVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2UudXJsID09PSBqc29uVVJMO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHJlc291cmNlS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlOiBMb2FkZXJSZXNvdXJjZSA9IHJlc291cmNlc1tyZXNvdXJjZUtleV07XHJcbiAgICAgICAgICAgIHJldHVybiA8SVNwcml0ZURhdGE+cmVzb3VyY2UuZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRBc3NldHMoYXNzZXRzOiBJQXNzZXRbXSwgbG9hZCA9IHRydWUpOiBQcm9taXNlPHZvaWQ+IHsgICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGFzc2V0cy5mb3JFYWNoKGFzc2V0ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vVE9ETyAtIHBhc3MgdGhyb3VnaCBtb3JlIGluZm9ybWF0aW9uIGVnIHNvdW5kIGdyb3Vwcz9cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy9zdG9yZSB0aGUgZGF0YSBieSBpZCBmb3IgbGF0ZXIgbG9va3VwIGFmdGVyIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgIC8vd2FpdCB0aGlzIHdvbid0IHdvcmssIHdoYXQgaWYgZmlsZSBhbmQganNvbiBoYXZlIHRoZSBzYW1lIGlkLi4uXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hc3NldERhdGFbYXNzZXQuaWRdID0gYXNzZXQ7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IGFzc2V0LmF1ZGlvID8gYXNzZXQuc3JjICsgdGhpcy5hdWRpb0Zvcm1hdCA6IGFzc2V0LnNyYztcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5hZGQoYXNzZXQuaWQsIHNyYylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYgKGxvYWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5vbkNvbXBsZXRlLm9uY2UocmVzb2x2ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bmxvYWQoYXNzZXQ6IElBc3NldCk6IHZvaWQge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9hc3NldERhdGFbYXNzZXQuaWRdO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9sb2FkZXIucmVzb3VyY2VzW2Fzc2V0LmlkXTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBFdmVudFF1ZXVlIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IFRpbWVvdXQgfSBmcm9tIFwiLi4vdXRpbHMvVGltZW91dFwiO1xyXG5pbXBvcnQgeyBVcGRhdGVMaXN0IH0gZnJvbSBcIi4uL3V0aWxzL1VwZGF0ZUxpc3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNjcmVlbkNvbmZpZyB7XHJcbiAgICBzY3JlZW5XaWR0aDogbnVtYmVyLFxyXG4gICAgc2NyZWVuSGVpZ2h0OiBudW1iZXIsXHJcbiAgICBzY3JlZW5FdmVudHM6IEV2ZW50UXVldWUsLy9mb3IgY2hhbmdpbmcgc2NyZWVuc1xyXG4gICAgaWQ/OnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2NyZWVuIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVMaXN0OiBVcGRhdGVMaXN0O1xyXG4gICAgcHVibGljIHRpbWVvdXQ6IFRpbWVvdXQ7XHJcblxyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgcHJvdGVjdGVkIHNjcmVlbldpZHRoOm51bWJlcjtcclxuICAgIHByb3RlY3RlZCBzY3JlZW5IZWlnaHQ6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBzY3JlZW5FdmVudHM6IEV2ZW50UXVldWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJU2NyZWVuQ29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZylcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0ID0gbmV3IFVwZGF0ZUxpc3QoKTtcclxuICAgICAgICB0aGlzLnRpbWVvdXQgPSA8VGltZW91dD50aGlzLnVwZGF0ZUxpc3QuYWRkKG5ldyBUaW1lb3V0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdC51cGRhdGUoZGVsdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdC5yZW1vdmVBbGwoKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcylcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IEVuZ2luZUV2ZW50cyB9IGZyb20gXCIuL0VuZ2luZUV2ZW50c1wiO1xyXG5pbXBvcnQgeyBFdmVudFF1ZXVlIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IFNjcmVlbiB9IGZyb20gXCIuL1NjcmVlblwiO1xyXG5pbXBvcnQgeyBJU2l6ZSwgU2V0dGluZ3MgfSBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwiLi9Mb2FkZXJcIjtcclxuaW1wb3J0IHsgVW5sb2FkZXIgfSBmcm9tIFwiLi9VbmxvYWRlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2NyZWVuTWFwIHtcclxuICAgIFtpZDogc3RyaW5nXTogdHlwZW9mIFNjcmVlblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbk1hbmFnZXIge1xyXG5cclxuICAgIHB1YmxpYyByb290OiBQSVhJLkNvbnRhaW5lcjtcclxuXHJcbiAgICBwcml2YXRlIF9zaXplOiBJU2l6ZTtcclxuXHJcbiAgICBwdWJsaWMgY3VycmVudFNjcmVlbjogU2NyZWVuO1xyXG5cclxuICAgIHByaXZhdGUgX3NjcmVlbk1hcDogSVNjcmVlbk1hcFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2V2ZW50czogRXZlbnRRdWV1ZSxcclxuICAgICAgICBwcml2YXRlIF9zZXR0aW5nczogU2V0dGluZ3MsXHJcbiAgICAgICAgcHJpdmF0ZSBfbG9hZGVyOiBMb2FkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfdW5sb2FkZXI6IFVubG9hZGVyXHJcbiAgICApIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9zaXplID0gdGhpcy5fc2V0dGluZ3Muc2l6ZTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJvb3QgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb290LnBvc2l0aW9uLnNldChcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUuaGVpZ2h0IC8gMlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLm9uKEVuZ2luZUV2ZW50cy5TSE9XX1NDUkVFTiwgdGhpcy5zaG93U2NyZWVuKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgc2NyZWVuTWFwKG1hcDogSVNjcmVlbk1hcCkge1xyXG4gICAgICAgIHRoaXMuX3NjcmVlbk1hcCA9IG1hcDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNjcmVlbikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW4udXBkYXRlKGRlbHRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dTY3JlZW4gPSAoaWQ6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIC0gdmFsaWRhdGUgaWRcclxuICAgICAgICBpZiAoIXRoaXMuX3NjcmVlbk1hcC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignU2NyZWVuIHR5cGUgbm90IGZvdW5kJywgaWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIC0gVW5sb2FkIGZpcnN0IGlmIG5lY2Vzc2FyeSB0b29cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NyZWVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0c1RvVW5Mb2FkID0gdGhpcy5fc2V0dGluZ3MuYXNzZXRzW3RoaXMuY3VycmVudFNjcmVlbi5pZF07XHJcbiAgICAgICAgICAgIHRoaXMuX3VubG9hZGVyLnVubG9hZChhc3NldHNUb1VuTG9hZCkgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBTY3JlZW5UeXBlID0gdGhpcy5fc2NyZWVuTWFwW2lkXTtcclxuICAgICAgICAvLyAtIHByZWxvYWQgZmlyc3QgaWYgbmVjZXNzYXJ5XHJcbiAgICAgICAgY29uc3QgYXNzZXRzVG9Mb2FkID0gdGhpcy5fc2V0dGluZ3MuYXNzZXRzW2lkXTtcclxuICAgICAgICBpZiAoYXNzZXRzVG9Mb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkQXNzZXRzKGFzc2V0c1RvTG9hZCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2VTY3JlZW4oKTsgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNjcmVlbiA9IHRoaXMuX2NyZWF0ZVNjcmVlbihTY3JlZW5UeXBlLCBpZClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3Bvc2VTY3JlZW4oKTsgICBcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NyZWVuID0gdGhpcy5fY3JlYXRlU2NyZWVuKFNjcmVlblR5cGUsIGlkKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVTY3JlZW4oU2NyZWVuVHlwZTogdHlwZW9mIFNjcmVlbiwgaWQ6IHN0cmluZyk6IFNjcmVlbiB7XHJcbiAgICAgICAgY29uc3Qgc2NyZWVuID0gPFNjcmVlbj5uZXcgU2NyZWVuVHlwZSh7XHJcbiAgICAgICAgICAgIHNjcmVlbldpZHRoOiB0aGlzLl9zaXplLndpZHRoLFxyXG4gICAgICAgICAgICBzY3JlZW5IZWlnaHQ6IHRoaXMuX3NpemUuaGVpZ2h0LFxyXG4gICAgICAgICAgICBzY3JlZW5FdmVudHM6IHRoaXMuX2V2ZW50cyxcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJvb3QuYWRkQ2hpbGQoc2NyZWVuKTtcclxuICAgICAgICByZXR1cm4gc2NyZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy9UT0RPIC0ga2VlcCByb290IGNlbnRlcmVkPyBPciBtYXliZSBub3QgbmVlZGVkLi4uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2VTY3JlZW4oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNjcmVlbikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW4uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW4gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vaW50ZXJmYWNlIGZvciB0aGUgY29uZmlnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBc3NldCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgc3JjOiBzdHJpbmc7XHJcbiAgICBhdWRpbz86IGJvb2xlYW47Ly9pZiB0cnVlIHRoZW4gaXQgd2lsbCB0YWcgb24gYXVkaW8gZm9ybWF0IGV4dGVuc2lvblxyXG4gICAgbG9vcD86IG51bWJlcjsvL2ZvciBzb3VuZHNcclxuICAgIGdyb3VwPzogc3RyaW5nOy8vZm9yIHNvdW5kc1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTaXplIHtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXNzZXRzIHtcclxuICAgIFtpZDogc3RyaW5nXTogSUFzc2V0W107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpZyB7XHJcbiAgICBhc3NldHM6IElBc3NldHM7XHJcbiAgICBzaXplOiBJU2l6ZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzIGltcGxlbWVudHMgSUNvbmZpZyB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDT05GSUdfTE9BREVEOiBzdHJpbmcgPSAnY29uZmlnLWxvYWRlZCc7XHJcblxyXG4gICAgcHVibGljIGNvbmZpZ1BhdGg6IHN0cmluZyA9ICdqc29uL2NvbmZpZy5qc29uJ1xyXG5cclxuICAgIHB1YmxpYyBhc3NldHM6IElBc3NldHM7XHJcbiAgICBwdWJsaWMgc2l6ZTogSVNpemUgPSB7d2lkdGg6IDEzMzQsIGhlaWdodDogNzUwfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2FkZXI6IFBJWEkuTG9hZGVyLCBwcml2YXRlIF9ldmVudHM6IFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1hbmlmZXN0KGtleT86IHN0cmluZyk6IElBc3NldFtdIHtcclxuICAgICAgICBpZiAoIWtleSkge1xyXG4gICAgICAgICAgICBrZXkgPSAnZ2xvYmFsJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hc3NldHNba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZCgpOiBTZXR0aW5ncyB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyLmFkZCgnY29uZmlnJywgdGhpcy5jb25maWdQYXRoKTtcclxuICAgICAgICB0aGlzLl9sb2FkZXIub25Db21wbGV0ZS5vbmNlKHRoaXMuX2NvbmZpZ0xvYWRlZClcclxuICAgICAgICB0aGlzLl9sb2FkZXIubG9hZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NvbmZpZ0xvYWRlZCA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBjb25maWc6IElDb25maWcgPSA8SUNvbmZpZz50aGlzLl9sb2FkZXIucmVzb3VyY2VzLmNvbmZpZy5kYXRhO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKVxyXG4gICAgICAgIHRoaXMuX2V2ZW50cy5lbWl0KFNldHRpbmdzLkNPTkZJR19MT0FERUQpXHJcbiAgICB9XHJcblxyXG59IiwiXHJcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSBcIi4uL2F1ZGlvXCI7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCIuL0xvYWRlclwiO1xyXG5pbXBvcnQgeyBJQXNzZXQsIElBc3NldHMgfSBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVubG9hZGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2FkZXI6IExvYWRlcikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5sb2FkKGFzc2V0czogSUFzc2V0W10pIHtcclxuXHJcbiAgICAgICAgYXNzZXRzICYmIGFzc2V0cy5mb3JFYWNoKChhc3NldDogSUFzc2V0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIC0gcmVtb3ZlIGZyb20gbG9hZGVyXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci51bmxvYWQoYXNzZXQpXHJcblxyXG4gICAgICAgICAgICAvLyAtIHJlbW92ZSBmcm9tIHRleHR1cmUgY2FjaGVcclxuICAgICAgICAgICAgY29uc3QgdHggPSBQSVhJLnV0aWxzLlRleHR1cmVDYWNoZVthc3NldC5pZF07XHJcbiAgICAgICAgICAgIGlmICh0eCkge1xyXG4gICAgICAgICAgICAgICAgdHguZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAtIHJlbW92ZSBmcm9tIHNvdW5kIGVuZ2luZVxyXG4gICAgICAgICAgICBTb3VuZC5pbnN0YW5jZS5yZW1vdmUoYXNzZXQuaWQpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0xvYWRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2NyZWVuJztcclxuZXhwb3J0ICogZnJvbSAnLi9TY3JlZW5NYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9TZXR0aW5ncyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdmVyc2lvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vRW5naW5lRXZlbnRzJzsiLCJjb25zdCB2ZXJzaW9uID0geyBjb2RlOiAnMC4xLjI5JyB9XG4gICAgZXhwb3J0IHt2ZXJzaW9ufSIsImNvbnN0IEVhc2luZyA9IHtcclxuICAgIExpbmVhcjoge1xyXG4gICAgICAgIE5vbmUoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gaztcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBRdWFkcmF0aWM6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrICogaztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gayAqICgyIC0gayk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBpZiAoKGsgKj0gMikgPCAxKSByZXR1cm4gMC41ICogayAqIGs7XHJcbiAgICAgICAgICAgIHJldHVybiAtMC41ICogKC0tayAqIChrIC0gMikgLSAxKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBDdWJpYzoge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIGsgKiBrICogaztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gLS1rICogayAqIGsgKyAxO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEluT3V0KGspIHtcclxuICAgICAgICAgICAgaWYgKChrICo9IDIpIDwgMSkgcmV0dXJuIDAuNSAqIGsgKiBrICogaztcclxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICsgMik7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgUXVhcnRpYzoge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIGsgKiBrICogayAqIGs7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEgLSAtLWsgKiBrICogayAqIGs7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBpZiAoKGsgKj0gMikgPCAxKSByZXR1cm4gMC41ICogayAqIGsgKiBrICogaztcclxuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiAoKGsgLT0gMikgKiBrICogayAqIGsgLSAyKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBRdWludGljOiB7XHJcbiAgICAgICAgSW4oaykge1xyXG4gICAgICAgICAgICByZXR1cm4gayAqIGsgKiBrICogayAqIGs7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0tayAqIGsgKiBrICogayAqIGsgKyAxO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEluT3V0KGspIHtcclxuICAgICAgICAgICAgaWYgKChrICo9IDIpIDwgMSkgcmV0dXJuIDAuNSAqIGsgKiBrICogayAqIGsgKiBrO1xyXG4gICAgICAgICAgICByZXR1cm4gMC41ICogKChrIC09IDIpICogayAqIGsgKiBrICogayArIDIpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIFNpbnVzb2lkYWw6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5jb3MoKGsgKiBNYXRoLlBJKSAvIDIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE91dChrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNpbigoayAqIE1hdGguUEkpIC8gMik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIEV4cG9uZW50aWFsOiB7XHJcbiAgICAgICAgSW4oaykge1xyXG4gICAgICAgICAgICByZXR1cm4gayA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCBrIC0gMSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIGsgPT09IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIGspO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEluT3V0KGspIHtcclxuICAgICAgICAgICAgaWYgKGsgPT09IDApIHJldHVybiAwO1xyXG4gICAgICAgICAgICBpZiAoayA9PT0gMSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHJldHVybiAwLjUgKiBNYXRoLnBvdygxMDI0LCBrIC0gMSk7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqIChrIC0gMSkpICsgMik7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgQ2lyY3VsYXI6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSBrICogayk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCgxIC0gLS1rICogayk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBpZiAoKGsgKj0gMikgPCAxKSByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIGsgKiBrKSAtIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKGsgLT0gMikgKiBrKSArIDEpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIEVsYXN0aWM6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIGxldCBzLFxyXG4gICAgICAgICAgICAgICAgYSA9IDAuMSxcclxuICAgICAgICAgICAgICAgIHAgPSAwLjQ7XHJcbiAgICAgICAgICAgIGlmIChrID09PSAwKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgaWYgKGsgPT09IDEpIHJldHVybiAxO1xyXG4gICAgICAgICAgICBpZiAoIWEgfHwgYSA8IDEpIHtcclxuICAgICAgICAgICAgICAgIGEgPSAxO1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyA0O1xyXG4gICAgICAgICAgICB9IGVsc2UgcyA9IChwICogTWF0aC5hc2luKDEgLyBhKSkgLyAoMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICByZXR1cm4gLShhICogTWF0aC5wb3coMiwgMTAgKiAoayAtPSAxKSkgKiBNYXRoLnNpbigoKGsgLSBzKSAqICgyICogTWF0aC5QSSkpIC8gcCkpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE91dChrKSB7XHJcbiAgICAgICAgICAgIGxldCBzLFxyXG4gICAgICAgICAgICAgICAgYSA9IDAuMSxcclxuICAgICAgICAgICAgICAgIHAgPSAwLjQ7XHJcbiAgICAgICAgICAgIGlmIChrID09PSAwKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgaWYgKGsgPT09IDEpIHJldHVybiAxO1xyXG4gICAgICAgICAgICBpZiAoIWEgfHwgYSA8IDEpIHtcclxuICAgICAgICAgICAgICAgIGEgPSAxO1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyA0O1xyXG4gICAgICAgICAgICB9IGVsc2UgcyA9IChwICogTWF0aC5hc2luKDEgLyBhKSkgLyAoMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqIGspICogTWF0aC5zaW4oKChrIC0gcykgKiAoMiAqIE1hdGguUEkpKSAvIHApICsgMTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbk91dChrKSB7XHJcbiAgICAgICAgICAgIGxldCBzLFxyXG4gICAgICAgICAgICAgICAgYSA9IDAuMSxcclxuICAgICAgICAgICAgICAgIHAgPSAwLjQ7XHJcbiAgICAgICAgICAgIGlmIChrID09PSAwKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgaWYgKGsgPT09IDEpIHJldHVybiAxO1xyXG4gICAgICAgICAgICBpZiAoIWEgfHwgYSA8IDEpIHtcclxuICAgICAgICAgICAgICAgIGEgPSAxO1xyXG4gICAgICAgICAgICAgICAgcyA9IHAgLyA0O1xyXG4gICAgICAgICAgICB9IGVsc2UgcyA9IChwICogTWF0aC5hc2luKDEgLyBhKSkgLyAoMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICBpZiAoKGsgKj0gMikgPCAxKSByZXR1cm4gLTAuNSAqIChhICogTWF0aC5wb3coMiwgMTAgKiAoayAtPSAxKSkgKiBNYXRoLnNpbigoKGsgLSBzKSAqICgyICogTWF0aC5QSSkpIC8gcCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqIChrIC09IDEpKSAqIE1hdGguc2luKCgoayAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKSAqIDAuNSArIDE7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgQmFjazoge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgbGV0IHMgPSAxLjcwMTU4O1xyXG4gICAgICAgICAgICByZXR1cm4gayAqIGsgKiAoKHMgKyAxKSAqIGsgLSBzKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICBsZXQgcyA9IDEuNzAxNTg7XHJcbiAgICAgICAgICAgIHJldHVybiAtLWsgKiBrICogKChzICsgMSkgKiBrICsgcykgKyAxO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEluT3V0KGspIHtcclxuICAgICAgICAgICAgbGV0IHMgPSAxLjcwMTU4ICogMS41MjU7XHJcbiAgICAgICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHJldHVybiAwLjUgKiAoayAqIGsgKiAoKHMgKyAxKSAqIGsgLSBzKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogKChzICsgMSkgKiBrICsgcykgKyAyKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBCb3VuY2U6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxIC0gRWFzaW5nLkJvdW5jZS5PdXQoMSAtIGspO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE91dChrKSB7XHJcbiAgICAgICAgICAgIGlmIChrIDwgMSAvIDIuNzUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiBrICogaztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrIDwgMiAvIDIuNzUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAoayAtPSAxLjUgLyAyLjc1KSAqIGsgKyAwLjc1O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGsgPCAyLjUgLyAyLjc1KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKGsgLT0gMi4yNSAvIDIuNzUpICogayArIDAuOTM3NTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAoayAtPSAyLjYyNSAvIDIuNzUpICogayArIDAuOTg0Mzc1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBpZiAoayA8IDAuNSkgcmV0dXJuIEVhc2luZy5Cb3VuY2UuSW4oayAqIDIpICogMC41O1xyXG4gICAgICAgICAgICByZXR1cm4gRWFzaW5nLkJvdW5jZS5PdXQoayAqIDIgLSAxKSAqIDAuNSArIDAuNTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IEludGVycG9sYXRpb24gPSB7XHJcbiAgICBMaW5lYXIodiwgaykge1xyXG4gICAgICAgIGxldCBtID0gdi5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICBmID0gbSAqIGssXHJcbiAgICAgICAgICAgIGkgPSBNYXRoLmZsb29yKGYpLFxyXG4gICAgICAgICAgICBmbiA9IEludGVycG9sYXRpb24uVXRpbHMuTGluZWFyO1xyXG5cclxuICAgICAgICBpZiAoayA8IDApIHJldHVybiBmbih2WzBdLCB2WzFdLCBmKTtcclxuICAgICAgICBpZiAoayA+IDEpIHJldHVybiBmbih2W21dLCB2W20gLSAxXSwgbSAtIGYpO1xyXG5cclxuICAgICAgICByZXR1cm4gZm4odltpXSwgdltpICsgMSA+IG0gPyBtIDogaSArIDFdLCBmIC0gaSk7XHJcbiAgICB9LFxyXG5cclxuICAgIEJlemllcih2LCBrKSB7XHJcbiAgICAgICAgbGV0IGIgPSAwLFxyXG4gICAgICAgICAgICBuID0gdi5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICBwdyA9IE1hdGgucG93LFxyXG4gICAgICAgICAgICBibiA9IEludGVycG9sYXRpb24uVXRpbHMuQmVybnN0ZWluLFxyXG4gICAgICAgICAgICBpO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDw9IG47IGkrKykge1xyXG4gICAgICAgICAgICBiICs9IHB3KDEgLSBrLCBuIC0gaSkgKiBwdyhrLCBpKSAqIHZbaV0gKiBibihuLCBpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBiO1xyXG4gICAgfSxcclxuXHJcbiAgICBDYXRtdWxsUm9tKHYsIGspIHtcclxuICAgICAgICBsZXQgbSA9IHYubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgZiA9IG0gKiBrLFxyXG4gICAgICAgICAgICBpID0gTWF0aC5mbG9vcihmKSxcclxuICAgICAgICAgICAgZm4gPSBJbnRlcnBvbGF0aW9uLlV0aWxzLkNhdG11bGxSb207XHJcblxyXG4gICAgICAgIGlmICh2WzBdID09PSB2W21dKSB7XHJcbiAgICAgICAgICAgIGlmIChrIDwgMCkgaSA9IE1hdGguZmxvb3IoKGYgPSBtICogKDEgKyBrKSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZuKHZbKGkgLSAxICsgbSkgJSBtXSwgdltpXSwgdlsoaSArIDEpICUgbV0sIHZbKGkgKyAyKSAlIG1dLCBmIC0gaSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGsgPCAwKSByZXR1cm4gdlswXSAtIChmbih2WzBdLCB2WzBdLCB2WzFdLCB2WzFdLCAtZikgLSB2WzBdKTtcclxuICAgICAgICAgICAgaWYgKGsgPiAxKSByZXR1cm4gdlttXSAtIChmbih2W21dLCB2W21dLCB2W20gLSAxXSwgdlttIC0gMV0sIGYgLSBtKSAtIHZbbV0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZuKHZbaSA/IGkgLSAxIDogMF0sIHZbaV0sIHZbbSA8IGkgKyAxID8gbSA6IGkgKyAxXSwgdlttIDwgaSArIDIgPyBtIDogaSArIDJdLCBmIC0gaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBVdGlsczoge1xyXG4gICAgICAgIExpbmVhcihwMCwgcDEsIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChwMSAtIHAwKSAqIHQgKyBwMDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBCZXJuc3RlaW4obiwgaSkge1xyXG4gICAgICAgICAgICBsZXQgZmMgPSBJbnRlcnBvbGF0aW9uLlV0aWxzLkZhY3RvcmlhbDtcclxuICAgICAgICAgICAgcmV0dXJuIGZjKG4pIC8gZmMoaSkgLyBmYyhuIC0gaSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgRmFjdG9yaWFsOiAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgYSA9IFsxXTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYVtuXSkgcmV0dXJuIGFbbl07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBuOyBpID4gMTsgaS0tKSBzICo9IGk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGFbbl0gPSBzKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KSgpLFxyXG5cclxuICAgICAgICBDYXRtdWxsUm9tKHAwLCBwMSwgcDIsIHAzLCB0KSB7XHJcbiAgICAgICAgICAgIGxldCB2MCA9IChwMiAtIHAwKSAqIDAuNSxcclxuICAgICAgICAgICAgICAgIHYxID0gKHAzIC0gcDEpICogMC41LFxyXG4gICAgICAgICAgICAgICAgdDIgPSB0ICogdCxcclxuICAgICAgICAgICAgICAgIHQzID0gdCAqIHQyO1xyXG4gICAgICAgICAgICByZXR1cm4gKDIgKiBwMSAtIDIgKiBwMiArIHYwICsgdjEpICogdDMgKyAoLTMgKiBwMSArIDMgKiBwMiAtIDIgKiB2MCAtIHYxKSAqIHQyICsgdjAgKiB0ICsgcDE7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBFYXNpbmcsIEludGVycG9sYXRpb24gfTtcclxuIiwiaW1wb3J0IHsgRWFzaW5nLCBJbnRlcnBvbGF0aW9uIH0gZnJvbSAnLi9FYXNpbmcnO1xyXG5pbXBvcnQgeyBUd2Vlbk1hbmFnZXIgfSBmcm9tICcuL1R3ZWVuTWFuYWdlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgVHdlZW4ge1xyXG4gICAgcHVibGljIHR3ZWVuTWFuYWdlcjogVHdlZW5NYW5hZ2VyO1xyXG4gICAgcHJvdGVjdGVkIF9vYmplY3Q6IHVua25vd247IC8vdHdlZW4gdGFyZ2V0XHJcbiAgICBwcm90ZWN0ZWQgX3ZhbHVlc1N0YXJ0OiBvYmplY3QgPSB7fTtcclxuICAgIHByb3RlY3RlZCBfdmFsdWVzRW5kOiBvYmplY3QgPSB7fTtcclxuICAgIHByb3RlY3RlZCBfdmFsdWVzU3RhcnRSZXBlYXQ6IG9iamVjdCA9IHt9O1xyXG4gICAgcHJvdGVjdGVkIF9kdXJhdGlvbjogbnVtYmVyID0gMTAwMDtcclxuICAgIHByb3RlY3RlZCBfcmVwZWF0OiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIF95b3lvOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgX2lzUGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIF9yZXZlcnNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIF9kZWxheVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcm90ZWN0ZWQgX3N0YXJ0VGltZTogbnVtYmVyID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCBfZWFzaW5nRnVuY3Rpb246IChrOiBudW1iZXIpID0+IG51bWJlciA9IEVhc2luZy5MaW5lYXIuTm9uZTtcclxuICAgIHByb3RlY3RlZCBfaW50ZXJwb2xhdGlvbkZ1bmN0aW9uOiAodjogYW55LCBrOiBhbnkpID0+IGFueSA9IEludGVycG9sYXRpb24uTGluZWFyO1xyXG4gICAgcHJvdGVjdGVkIF9jaGFpbmVkVHdlZW5zOiBUd2VlbltdID0gW107XHJcbiAgICBwcm90ZWN0ZWQgX29uU3RhcnRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgX29uU3RhcnRDYWxsYmFja0ZpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgX29uVXBkYXRlQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIF9vbkNvbXBsZXRlQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIF9vblN0b3BDYWxsYmFjazogKCkgPT4gdm9pZCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0OiB1bmtub3duKSB7XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0ID0gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vcmV0dXJucyBmYWxzZSBpZiBjb21wbGV0ZWRcclxuICAgIHB1YmxpYyB1cGRhdGUodGltZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHByb3BlcnR5O1xyXG4gICAgICAgIGlmICh0aW1lIDwgdGhpcy5fc3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vblN0YXJ0Q2FsbGJhY2sgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29uU3RhcnRDYWxsYmFjay5jYWxsKHRoaXMuX29iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZWxhcHNlZCA9ICh0aW1lIC0gdGhpcy5fc3RhcnRUaW1lKSAvIHRoaXMuX2R1cmF0aW9uO1xyXG4gICAgICAgIGVsYXBzZWQgPSBlbGFwc2VkID4gMSA/IDEgOiBlbGFwc2VkO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZWFzaW5nRnVuY3Rpb24oZWxhcHNlZCk7XHJcbiAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiB0aGlzLl92YWx1ZXNFbmQpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gfHwgMDtcclxuICAgICAgICAgICAgbGV0IGVuZCA9IHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgIGlmIChlbmQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb2JqZWN0W3Byb3BlcnR5XSA9IHRoaXMuX2ludGVycG9sYXRpb25GdW5jdGlvbihlbmQsIHZhbHVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFBhcnNlcyByZWxhdGl2ZSBlbmQgdmFsdWVzIHdpdGggc3RhcnQgYXMgYmFzZSAoZS5nLjogKzEwLCAtMylcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgcGFyc2VGbG9hdChlbmQpOyAvLywgMTApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gcHJvdGVjdCBhZ2FpbnN0IG5vbiBudW1lcmljIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVuZCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vYmplY3RbcHJvcGVydHldID0gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX29uVXBkYXRlQ2FsbGJhY2sgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25VcGRhdGVDYWxsYmFjay5jYWxsKHRoaXMuX29iamVjdCwgdmFsdWUsIGVsYXBzZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxhcHNlZCA9PT0gMSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVwZWF0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRmluaXRlKHRoaXMuX3JlcGVhdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXBlYXQtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHJlYXNzaWduIHN0YXJ0aW5nIHZhbHVlcywgcmVzdGFydCBieSBtYWtpbmcgc3RhcnRUaW1lID0gbm93XHJcbiAgICAgICAgICAgICAgICBmb3IgKHByb3BlcnR5IGluIHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gKyBwYXJzZUZsb2F0KHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5feW95bykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gPSB0bXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl95b3lvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmV2ZXJzZWQgPSAhdGhpcy5fcmV2ZXJzZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydFRpbWUgPSB0aW1lICsgdGhpcy5fZGVsYXlUaW1lO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fb25Db21wbGV0ZUNhbGxiYWNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25Db21wbGV0ZUNhbGxiYWNrLmNhbGwodGhpcy5fb2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBudW1DaGFpbmVkVHdlZW5zID0gdGhpcy5fY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFpbmVkVHdlZW5zW2ldLnN0YXJ0KHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0byhwcm9wZXJ0aWVzOiBvYmplY3QsIGR1cmF0aW9uOiBudW1iZXIpOiBUd2VlbiB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpO1xyXG4gICAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0W2tleV0gPSBwYXJzZUZsb2F0KHRoaXMuX29iamVjdFtrZXldKTtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzRW5kW2tleV0gPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNba2V5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdmFsdWVzRW5kID0gcHJvcGVydGllcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZyb20ocHJvcGVydGllczogb2JqZWN0LCBkdXJhdGlvbjogbnVtYmVyKTogVHdlZW4ge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKTtcclxuICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNTdGFydFtrZXldID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzW2tleV0pO1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNFbmRba2V5XSA9IHBhcnNlRmxvYXQodGhpcy5fb2JqZWN0W2tleV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmcm9tVG8oZnJvbTogb2JqZWN0LCB0bzogb2JqZWN0LCBkdXJhdGlvbjogbnVtYmVyKTogVHdlZW4ge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhmcm9tKTtcclxuICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNTdGFydFtrZXldID0gcGFyc2VGbG9hdChmcm9tW2tleV0pO1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNFbmRba2V5XSA9IHBhcnNlRmxvYXQodG9ba2V5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVHdlZW5PZih0YXJnZXQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQgPT09IHRoaXMuX29iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQodGltZT86IG51bWJlcik6IFR3ZWVuIHtcclxuICAgICAgICBpZiAodGhpcy50d2Vlbk1hbmFnZXIpIHRoaXMudHdlZW5NYW5hZ2VyLmFkZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9zdGFydCh0aW1lKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zdGFydCh0aW1lOiBudW1iZXIpOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5faXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0VGltZSA9IHRpbWUgIT09IHVuZGVmaW5lZCA/IHRpbWUgOiB0aGlzLnR3ZWVuTWFuYWdlci5wYXNzZWRUaW1lOyAvL0RhdGUubm93KCk7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRUaW1lICs9IHRoaXMuX2RlbGF5VGltZTtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHRoaXMuX3ZhbHVlc0VuZCkge1xyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBhbiBBcnJheSB3YXMgcHJvdmlkZWQgYXMgcHJvcGVydHkgdmFsdWVcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBsb2NhbCBjb3B5IG9mIHRoZSBBcnJheSB3aXRoIHRoZSBzdGFydCB2YWx1ZSBhdCB0aGUgZnJvbnRcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gPSBbdGhpcy5fb2JqZWN0W3Byb3BlcnR5XV0uY29uY2F0KHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9IHRoaXMuX29iamVjdFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBBcnJheSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSAqPSAxLjA7IC8vIEVuc3VyZXMgd2UncmUgdXNpbmcgbnVtYmVycywgbm90IHN0cmluZ3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gfHwgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3AoKTogVHdlZW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnR3ZWVuTWFuYWdlci5yZW1vdmUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5faXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uU3RvcENhbGxiYWNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uU3RvcENhbGxiYWNrLmNhbGwodGhpcy5fb2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdG9wQ2hhaW5lZFR3ZWVucygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wQ2hhaW5lZFR3ZWVucygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbnVtQ2hhaW5lZFR3ZWVucyA9IHRoaXMuX2NoYWluZWRUd2VlbnMubGVuZ3RoOyBpIDwgbnVtQ2hhaW5lZFR3ZWVuczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoYWluZWRUd2VlbnNbaV0uc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsYXkoYW1vdW50OiBudW1iZXIpOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5fZGVsYXlUaW1lID0gYW1vdW50O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXBlYXQodGltZXM6IG51bWJlcik6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9yZXBlYXQgPSB0aW1lcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgeW95byh5b3lvOiBib29sZWFuKTogVHdlZW4ge1xyXG4gICAgICAgIHRoaXMuX3lveW8gPSB5b3lvO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlYXNpbmcoZWFzaW5nOiAoazogbnVtYmVyKSA9PiBudW1iZXIpOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5fZWFzaW5nRnVuY3Rpb24gPSBlYXNpbmc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGludGVycG9sYXRpb24oaW50ZXJwb2xhdGlvbik6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9pbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBpbnRlcnBvbGF0aW9uO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFpbiguLi50d2VlbnM6IFR3ZWVuW10pOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5fY2hhaW5lZFR3ZWVucyA9IHR3ZWVucztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TdGFydChjYWxsYmFjazogKCkgPT4gdm9pZCk6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9vblN0YXJ0Q2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25VcGRhdGUoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5fb25VcGRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNvbXBsZXRlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogVHdlZW4ge1xyXG4gICAgICAgIHRoaXMuX29uQ29tcGxldGVDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN0b3AoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5fb25TdG9wQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzdGFydChwYXVzZV9kdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRUaW1lICs9IHBhdXNlX2R1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VEdXJhdGlvbihuZXdfZHVyYXRpb246IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2R1cmF0aW9uID0gbmV3X2R1cmF0aW9uO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IElVcGRhdGUsIFVwZGF0ZUxpc3QgfSBmcm9tICcuLi91dGlscy9VcGRhdGVMaXN0JztcclxuaW1wb3J0IHsgVHdlZW4gfSBmcm9tICcuL1R3ZWVuJztcclxuZXhwb3J0IHsgRWFzaW5nIH0gZnJvbSAnLi9FYXNpbmcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFR3ZWVuTWFuYWdlciBleHRlbmRzIFVwZGF0ZUxpc3Qge1xyXG4gICAgcHVibGljIHBhc3NlZFRpbWU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucGFzc2VkVGltZSA9IERhdGUubm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXNzZWRUaW1lICs9IGRlbHRhO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNQYXVzZWQpIHtcclxuICAgICAgICAgICAgbGV0IG4gPSB0aGlzLnVwZGF0ZUl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IGl0ZW06IElVcGRhdGU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBuIC0gMTsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLnVwZGF0ZUl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtLnVwZGF0ZSh0aGlzLnBhc3NlZFRpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtc1t0aGlzLnJlbW92ZUl0ZW1zLmxlbmd0aF0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIG5vdyByZW1vdmUgaXRlbXNcclxuICAgICAgICAgICAgbiA9IHRoaXMucmVtb3ZlSXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAobiA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMucmVtb3ZlSXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUodGFyZ2V0OiB1bmtub3duKTogVHdlZW4ge1xyXG4gICAgICAgIGNvbnN0IHR3ID0gbmV3IFR3ZWVuKHRhcmdldCk7XHJcbiAgICAgICAgdHcudHdlZW5NYW5hZ2VyID0gdGhpcztcclxuICAgICAgICByZXR1cm4gdHc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUodGFyZ2V0OiB1bmtub3duLCB0d2Vlbk1hbmFnZXI6IFR3ZWVuTWFuYWdlciA9IG51bGwpOiBUd2VlbiB7XHJcbiAgICAgICAgY29uc3QgdHcgPSBuZXcgVHdlZW4odGFyZ2V0KTtcclxuICAgICAgICB0dy50d2Vlbk1hbmFnZXIgPSB0d2Vlbk1hbmFnZXIgfHwgVHdlZW5NYW5hZ2VyLmluc3RhbmNlO1xyXG4gICAgICAgIHJldHVybiB0dztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMga2lsbFR3ZWVuc09mKHRhcmdldDogdW5rbm93bikge1xyXG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZUl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLnVwZGF0ZUl0ZW1zLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgICAgICB0d2VlbjtcclxuICAgICAgICAgICAgZm9yICg7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICB0d2VlbiA9IHRoaXMudXBkYXRlSXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAodHdlZW4uaXNUd2Vlbk9mKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGtpbGxUd2VlbnNPZih0YXJnZXQ6IGFueSkge1xyXG4gICAgICAgIFR3ZWVuTWFuYWdlci5pbnN0YW5jZS5raWxsVHdlZW5zT2YodGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NpbmdsZXRvblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBUd2Vlbk1hbmFnZXJcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IFR3ZWVuTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKCFUd2Vlbk1hbmFnZXIuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFR3ZWVuTWFuYWdlci5faW5zdGFuY2UgPSBuZXcgVHdlZW5NYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUd2Vlbk1hbmFnZXIuX2luc3RhbmNlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9FYXNpbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL1R3ZWVuJztcclxuZXhwb3J0ICogZnJvbSAnLi9Ud2Vlbk1hbmFnZXInOyIsImludGVyZmFjZSBJUXVldWVJdGVtIHtcclxuICAgIGV2ZW50SWQ6IHN0cmluZztcclxuICAgIGFyZ3M6IHVua25vd25bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50UXVldWUgZXh0ZW5kcyBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBfcXVldWU6IElRdWV1ZUl0ZW1bXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBhZGQoZXZlbnRJZDogc3RyaW5nLCAuLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKHtcclxuICAgICAgICAgICAgZXZlbnRJZCwgYXJnc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShfZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLl9xdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW06IElRdWV1ZUl0ZW0gPSB0aGlzLl9xdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoaXRlbS5ldmVudElkLCAuLi5pdGVtLmFyZ3MpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNlcXVlbmNlIHtcclxuICAgIHB1YmxpYyBsaXN0OiB1bmtub3duW10gPSBbXTtcclxuICAgIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHN0dWZmPzogdW5rbm93bltdLCByYW5kb21pc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChzdHVmZikge1xyXG4gICAgICAgICAgICB0aGlzLmFkZChzdHVmZiwgcmFuZG9taXNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChzdHVmZjogdW5rbm93biwgcmFuZG9taXNlOiBib29sZWFuID0gZmFsc2UpOiBTZXF1ZW5jZSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3R1ZmYpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gPHVua25vd25bXT5zdHVmZjtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goLi4uaXRlbXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFt0aGlzLmxpc3QubGVuZ3RoXSA9IHN0dWZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmFuZG9taXNlKSB0aGlzLnJhbmRvbWlzZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUoc3R1ZmY6IHVua25vd24pOiBTZXF1ZW5jZSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3R1ZmYpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gPHVua25vd25bXT5zdHVmZjtcclxuICAgICAgICAgICAgY29uc3QgbiA9IGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0LmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdC5pbmRleE9mKHN0dWZmKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHRoaXMubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmFuZG9taXNlKCk6IFNlcXVlbmNlIHtcclxuICAgICAgICBTZXF1ZW5jZS5yYW5kb21pc2VMaXN0KHRoaXMubGlzdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5leHQoKTogdW5rbm93biB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpdGVtID0gdGhpcy5saXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFt0aGlzLmxpc3QubGVuZ3RoXSA9IGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmV2aW91cygpOiB1bmtub3duIHtcclxuICAgICAgICBsZXQgaXRlbSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSB0aGlzLmxpc3QucG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC51bnNoaWZ0KGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIEhPTERFUiA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9taXNlTGlzdCA9IChsaXN0OiB1bmtub3duW10pOiB1bmtub3duW10gPT4ge1xyXG4gICAgICAgIFNlcXVlbmNlLkhPTERFUi5wdXNoKC4uLmxpc3QpO1xyXG4gICAgICAgIGxpc3QubGVuZ3RoID0gMDtcclxuICAgICAgICB3aGlsZSAoU2VxdWVuY2UuSE9MREVSLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBTZXF1ZW5jZS5IT0xERVIubGVuZ3RoKTtcclxuICAgICAgICAgICAgbGlzdFtsaXN0Lmxlbmd0aF0gPSBTZXF1ZW5jZS5IT0xERVIuc3BsaWNlKGluZGV4LCAxKVswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IElVcGRhdGUgfSBmcm9tICcuL1VwZGF0ZUxpc3QnO1xyXG5cclxuaW50ZXJmYWNlIElBY3Rpb24ge1xyXG4gICAgX3RhcmdldFRpbWU6IG51bWJlcjtcclxuICAgIF9jYWxsYmFjazogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVvdXQgaW1wbGVtZW50cyBJVXBkYXRlIHtcclxuICAgIHByaXZhdGUgX3Bvb2w6IElBY3Rpb25bXTtcclxuICAgIHByaXZhdGUgX2FjdGlvbnM6IElBY3Rpb25bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY2FuY2VsbGVkQWN0aW9uczogSUFjdGlvbltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9vbFNpemU6IG51bWJlciA9IDUwKSB7XHJcbiAgICAgICAgdGhpcy5fcG9vbCA9IHRoaXMuX2NyZWF0ZVBvb2wocG9vbFNpemUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF9jcmVhdGVQb29sKHNpemU6IG51bWJlcik6IElBY3Rpb25bXSB7XHJcbiAgICAgICAgY29uc3QgcG9vbCA9IFtdO1xyXG4gICAgICAgIHdoaWxlIChzaXplID4gMCkge1xyXG4gICAgICAgICAgICBwb29sLnB1c2goeyBfdGFyZ2V0VGltZTogLTEsIF9jYWxsYmFjazogbnVsbCB9KTtcclxuICAgICAgICAgICAgc2l6ZS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9vbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfbmV4dCgpOiBJQWN0aW9uIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5fcG9vbC5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuX3Bvb2xbdGhpcy5fcG9vbC5sZW5ndGhdID0gaXRlbTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsYXkoY2FsbGJhY2s6ICgpID0+IHZvaWQsIG1zOiBudW1iZXIpOiBJQWN0aW9uIHtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLl9uZXh0KCk7XHJcbiAgICAgICAgYWN0aW9uLl90YXJnZXRUaW1lID0gbXMgfHwgLTE7XHJcbiAgICAgICAgYWN0aW9uLl9jYWxsYmFjayA9IGNhbGxiYWNrIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9uc1t0aGlzLl9hY3Rpb25zLmxlbmd0aF0gPSBhY3Rpb247XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGVsYXBzZWRUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBuID0gdGhpcy5fYWN0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG4gPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBpLCBhY3Rpb247XHJcbiAgICAgICAgICAgIGZvciAoaSA9IG4gLSAxOyBpID4gLTE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uID0gdGhpcy5fYWN0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBvbmVzIHRoYXQgd2VyZSBhbHJlYWR5IGNhbmNlbGxlZCBvciBmaXJlZFxyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5fdGFyZ2V0VGltZSA9PT0gLTEgfHwgIWFjdGlvbi5fY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWxsZWRBY3Rpb25zW3RoaXMuX2NhbmNlbGxlZEFjdGlvbnMubGVuZ3RoXSA9IGFjdGlvbjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLl90YXJnZXRUaW1lID4gMCAmJiBhY3Rpb24uX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLl90YXJnZXRUaW1lIC09IGVsYXBzZWRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24uX3RhcmdldFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGFjdGlvbi5fY2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5fY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uX3RhcmdldFRpbWUgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbm93IHJlbW92ZSBhbnkgY2FuY2VsbGVkIG9uZXNcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuX2NhbmNlbGxlZEFjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uID0gdGhpcy5fY2FuY2VsbGVkQWN0aW9ucy5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGkgPSB0aGlzLl9hY3Rpb25zLmluZGV4T2YoYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY3Rpb25zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsKGFjdGlvbjogSUFjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGFjdGlvbi5fdGFyZ2V0VGltZSA9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkICB7XHJcbiAgICAgICAgY29uc3QgbiA9IHRoaXMuX2FjdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChuID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgaSwgYWN0aW9uO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSBuIC0gMTsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiA9IHRoaXMuX2FjdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24uX2NhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5fdGFyZ2V0VGltZSA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2FjdGlvbnMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkICB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuX3Bvb2wgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgSVVwZGF0ZSB7XHJcbiAgICB1cGRhdGU6IChkZWx0YTogbnVtYmVyKSA9PiB2b2lkIHwgYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUxpc3Qge1xyXG4gICAgcHVibGljIHVwZGF0ZUl0ZW1zOiBJVXBkYXRlW10gPSBbXTtcclxuICAgIHB1YmxpYyByZW1vdmVJdGVtczogSVVwZGF0ZVtdID0gW107XHJcbiAgICBwdWJsaWMgaXNQYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNQYXVzZWQpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0sXHJcbiAgICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgICAgbiA9IHRoaXMudXBkYXRlSXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSBuIC0gMTsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLnVwZGF0ZUl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgaXRlbS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vbm93IHJlbW92ZSBpdGVtc1xyXG4gICAgICAgICAgICBuID0gdGhpcy5yZW1vdmVJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChuID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLnJlbW92ZUl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbXMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHVyZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlSXRlbXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlQWxsKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBpdGVtLFxyXG4gICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICBuID0gdGhpcy51cGRhdGVJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChpID0gbiAtIDE7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbXNbaV0gPSB0aGlzLnVwZGF0ZUl0ZW1zW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKGl0ZW06IElVcGRhdGUpOiBJVXBkYXRlIHtcclxuICAgICAgICAvL2Rvbid0IGFsbG93IGFkZGluZyBtb3JlIHRoYW4gb25jZSFcclxuICAgICAgICBpZiAodGhpcy51cGRhdGVJdGVtcy5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zW3RoaXMudXBkYXRlSXRlbXMubGVuZ3RoXSA9IGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUoaXRlbTogSVVwZGF0ZSk6IElVcGRhdGUge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlSXRlbXNbdGhpcy5yZW1vdmVJdGVtcy5sZW5ndGhdID0gaXRlbTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX3JlbW92ZShpdGVtOiBJVXBkYXRlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnVwZGF0ZUl0ZW1zLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHRoaXMudXBkYXRlSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUl0ZW1zLmxlbmd0aDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudFF1ZXVlIH0gZnJvbSBcIi4vRXZlbnRRdWV1ZVwiO1xyXG5pbXBvcnQgeyBVcGRhdGVMaXN0IH0gZnJvbSBcIi4vVXBkYXRlTGlzdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVMb29wIGV4dGVuZHMgVXBkYXRlTGlzdHtcclxuICAgIHByaXZhdGUgYWNjdW11bGF0b3I6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBpbnRlcnZhbDogbnVtYmVyO1xyXG4gICAgcHVibGljIGZwczogbnVtYmVyID0gNjA7XHJcbiAgICBwcml2YXRlIGdhbWVMb29wSWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXZlbnRRdWV1ZTogRXZlbnRRdWV1ZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSAxMDAwIC8gdGhpcy5mcHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCk6IFVwZGF0ZUxvb3Age1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5nYW1lTG9vcElkKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLmdhbWVMb29wSWQgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZSwgdGhpcy5pbnRlcnZhbCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmdhbWVMb29wSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoX2RlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBuZXdUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBjb25zdCBlbGFwc2VkID0gbmV3VGltZSAtIHRoaXMuY3VycmVudFRpbWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IG5ld1RpbWU7XHJcbiAgICAgICAgdGhpcy5hY2N1bXVsYXRvciArPSBlbGFwc2VkO1xyXG4gICAgICAgIC8vdXNlIGFjY3VtdWxhdG9yIHN5c3RlbSBmb3IgcHJvY2Vzc2luZyB0aW1lIHdpdGggZml4ZWQgdGltZSBzdGVwXHJcbiAgICAgICAgY29uc3QgY2h1bmsgPSB0aGlzLmludGVydmFsO1xyXG4gICAgICAgIHdoaWxlKHRoaXMuYWNjdW11bGF0b3IgPiBjaHVuayl7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjdW11bGF0b3IgLT0gY2h1bms7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZShjaHVuayk7XHJcbiAgICAgICAgICAgIC8vbm93IHByb2Nlc3MgdGhlIGV2ZW50IHF1ZXVlXHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50UXVldWUudXBkYXRlKGNodW5rKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vVGltZW91dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVXBkYXRlTGlzdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2VxdWVuY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL0V2ZW50UXVldWUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1VwZGF0ZUxvb3AnOyIsIm1vZHVsZS5leHBvcnRzID0gUElYSTsiXSwic291cmNlUm9vdCI6IiJ9
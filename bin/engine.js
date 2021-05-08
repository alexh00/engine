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
            var sounds = _this.loader.fetchSounds();
            console.log(sounds);
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
        this.setXhr('ogg');
        this.setXhr('m4a');
        this.setXhr('mp3');
    };
    Loader.prototype.setXhr = function (extension) {
        pixi_js__WEBPACK_IMPORTED_MODULE_0__["LoaderResource"].setExtensionLoadType(extension, pixi_js__WEBPACK_IMPORTED_MODULE_0__["LoaderResource"].LOAD_TYPE.XHR);
        pixi_js__WEBPACK_IMPORTED_MODULE_0__["LoaderResource"].setExtensionXhrType(extension, pixi_js__WEBPACK_IMPORTED_MODULE_0__["LoaderResource"].XHR_RESPONSE_TYPE.BUFFER);
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
    Loader.prototype.fetchSounds = function () {
        var resources = this._loader.resources;
        return Object.keys(resources).filter(function (id) {
            var resource = resources[id];
            return !!resource.xhr;
        }).map(function (id) {
            var resource = resources[id];
            return {
                id: id,
                buffer: resource.data, extension: resource.extension, url: resource.url
            };
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
var version = { code: '0.1.7' };



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbmdpbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvRW5naW5lLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy9jb3JlL0xvYWRlci50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9TY3JlZW4udHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL2NvcmUvU2NyZWVuTWFuYWdlci50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS92ZXJzaW9uLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy90d2Vlbi9FYXNpbmcudHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL3R3ZWVuL1R3ZWVuLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy90d2Vlbi9Ud2Vlbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL3R3ZWVuL2luZGV4LnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy91dGlscy9FdmVudFF1ZXVlLnRzIiwid2VicGFjazovL2VuZ2luZS8uL3NyYy91dGlscy9TZXF1ZW5jZS50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvVGltZW91dC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvVXBkYXRlTGlzdC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvVXBkYXRlTG9vcC50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZW5naW5lL2V4dGVybmFsIFwiUElYSVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7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QUFDO2dCQUNOLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2I7O2dCQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQy9GLENBQUM7S0FDSjtJQUVELElBQUksRUFBRTtRQUNGLEVBQUUsWUFBQyxDQUFDO1lBQ0EsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRUQsR0FBRyxZQUFDLENBQUM7WUFDRCxJQUFJLENB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R0FBRyxDQUFDO2dCQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFN0MsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUU7YUFBTTtZQUNILElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFNUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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NUIsT0FBTSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssRUFBQztZQUMzQixJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQztZQUMxQixpQkFBTSxNQUFNLFlBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNqQztJQUNMLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQ0F0QytCLHNEQUFVLEdBc0N6Qzs7Ozs7Ozs7Ozs7Ozs7QUMxQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDRztBQUNGO0FBQ0U7QUFDQTs7Ozs7Ozs7Ozs7O0FDSjdCLHNCIiwiZmlsZSI6ImVuZ2luZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0VuZ2luZS50c1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnXHJcbmltcG9ydCB7IElTb3VuZERhdGEsIExvYWRlciB9IGZyb20gJy4vY29yZS9Mb2FkZXInO1xyXG5pbXBvcnQgeyBTY3JlZW5NYW5hZ2VyIH0gZnJvbSAnLi9jb3JlL1NjcmVlbk1hbmFnZXInO1xyXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4vY29yZS9TZXR0aW5ncydcclxuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4vY29yZS92ZXJzaW9uJztcclxuaW1wb3J0IHsgVHdlZW5NYW5hZ2VyIH0gZnJvbSAnLi90d2Vlbic7XHJcbmltcG9ydCB7IEV2ZW50UXVldWUsIFVwZGF0ZUxvb3AgfSBmcm9tICcuL3V0aWxzJztcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvcGl4aS5qcy5kLnRzXCIgLz5cclxuZXhwb3J0IGNsYXNzIEVuZ2luZSB7XHJcblxyXG4gICAgcHVibGljIGFwcDogUElYSS5BcHBsaWNhdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgc2V0dGluZ3M6IFNldHRpbmdzO1xyXG5cclxuICAgIHB1YmxpYyBldmVudHM6IEV2ZW50UXVldWU7XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUxvb3A6IFVwZGF0ZUxvb3A7XHJcblxyXG4gICAgcHVibGljIGxvYWRlcjogTG9hZGVyO1xyXG5cclxuICAgIHB1YmxpYyBzY3JlZW5NYW5hZ2VyOiBTY3JlZW5NYW5hZ2VyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRW5naW5lIHZlcnNpb24nLCB2ZXJzaW9uLmNvZGUpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCk6IEVuZ2luZSB7XHJcbiAgICAgICAgLy9wcm9iYWJseSB3YW50IHRvIHVzZSB0aGUgcGl4aSBsb2FkZXIgZm9yIGV2ZXJ5dGhpbmcuLi5cclxuICAgICAgICAvL3NvIGNyZWF0ZSB0aGUgYXBwIHN0cmFpZ2h0IGF3YXlcclxuICAgICAgICB0aGlzLmFwcCA9IHRoaXMuX2NyZWF0ZVBpeGlBcHAoKVxyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHRoaXMuX2NyZWF0ZUV2ZW50cygpO1xyXG4gICAgICAgIC8vbG9hZCB0aGUgY29uZmlnXHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5ldyBTZXR0aW5ncyh0aGlzLmFwcC5sb2FkZXIsIHRoaXMuZXZlbnRzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVzb3VyY2UoaWQ6IHN0cmluZyk6IHVua25vd24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcC5sb2FkZXIucmVzb3VyY2VzW2lkXS5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY29uZmlnIGhhcyBub3cgbG9hZGVkXHJcbiAgICBwcml2YXRlIGJ1aWxkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vdXBkYXRlIHRoZSBhcHAgd2l0aCB0aGUgbG9hZGVkIHNldHRpbmdzXHJcbiAgICAgICAgdGhpcy5hcHAucmVuZGVyZXIucmVzaXplKHRoaXMuc2V0dGluZ3Muc2l6ZS53aWR0aCwgdGhpcy5zZXR0aW5ncy5zaXplLmhlaWdodClcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgdGhlIGxvYWRlclxyXG4gICAgICAgIHRoaXMubG9hZGVyID0gbmV3IExvYWRlcih0aGlzLmFwcC5sb2FkZXIsIHRoaXMuZXZlbnRzLCB0aGlzLnNldHRpbmdzKVxyXG5cclxuICAgICAgICAvL2NyZWF0ZSB1cGRhdGUgbG9vcFxyXG4gICAgICAgIHRoaXMudXBkYXRlTG9vcCA9IHRoaXMuX2NyZWF0ZVVwZGF0ZUxvb3AoKVxyXG5cclxuICAgICAgICAvL2NyZWF0ZSB0d2VlbiBtYW5hZ2VyLCBhZGQgdG8gdXBkYXRlIGxvb3BcclxuICAgICAgICB0aGlzLnVwZGF0ZUxvb3AuYWRkKFR3ZWVuTWFuYWdlci5pbnN0YW5jZSk7XHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHNjcmVlbiBtYW5hZ2VyXHJcbiAgICAgICAgdGhpcy5zY3JlZW5NYW5hZ2VyID0gdGhpcy5fY3JlYXRlU2NyZWVuTWFuYWdlcigpO1xyXG5cclxuICAgICAgICAvL2NyZWF0ZSBzb3VuZCBtYW5hZ2VyIChyZXdyaXRlIGl0KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVVwZGF0ZUxvb3AoKTogVXBkYXRlTG9vcCB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlTG9vcCA9IG5ldyBVcGRhdGVMb29wKHRoaXMuZXZlbnRzKVxyXG4gICAgICAgIHVwZGF0ZUxvb3Auc3RhcnQoKTtcclxuICAgICAgICByZXR1cm4gdXBkYXRlTG9vcDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVTY3JlZW5NYW5hZ2VyKCk6IFNjcmVlbk1hbmFnZXIge1xyXG4gICAgICAgIGNvbnN0IHNjcmVlbk1hbmFnZXIgPSBuZXcgU2NyZWVuTWFuYWdlcih0aGlzLmV2ZW50cywgdGhpcy5zZXR0aW5ncy5zaXplKVxyXG4gICAgICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHNjcmVlbk1hbmFnZXIucm9vdClcclxuICAgICAgICB0aGlzLnVwZGF0ZUxvb3AuYWRkKHNjcmVlbk1hbmFnZXIpXHJcbiAgICAgICAgcmV0dXJuIHNjcmVlbk1hbmFnZXI7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlRXZlbnRzKCk6IEV2ZW50UXVldWUge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IG5ldyBFdmVudFF1ZXVlKCk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5vbihTZXR0aW5ncy5DT05GSUdfTE9BREVELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uZmlnIGlzIGxvYWRlZCAtIG5vdyBidWlsZCB0aGUgZW5naW5lXHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGQoKTtcclxuICAgICAgICAgICAgLy9sb2FkIGdsb2JhbCBhc3NldHNcclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIubG9hZEdsb2JhbCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGV2ZW50cy5vbihMb2FkZXIuR0xPQkFMX0FTU0VUU19MT0FERUQsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc291bmRzOiBJU291bmREYXRhW10gPSB0aGlzLmxvYWRlci5mZXRjaFNvdW5kcygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzb3VuZHMpXHJcbiAgICAgICAgICAgIC8vbm93IHNob3cgZmlyc3Qgc2NyZWVuXHJcbiAgICAgICAgICAgIGV2ZW50cy5lbWl0KCdhcHAtcmVhZHknKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVQaXhpQXBwKCk6IFBJWEkuQXBwbGljYXRpb24ge1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUElYSS5BcHBsaWNhdGlvbih7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzY4LCB3aWR0aDogMTAyNCxcclxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHZpZXcsXHJcbiAgICAgICAgICAgIGZvcmNlQ2FudmFzOiBmYWxzZSxcclxuICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgICAgICByZXNvbHV0aW9uOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2NvcmUnXHJcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnXHJcbmV4cG9ydCAqIGZyb20gJy4vdHdlZW4nXHJcbiIsIlxyXG5cclxuaW1wb3J0IHsgSUFzc2V0LCBJQXNzZXRzLCBTZXR0aW5ncyB9IGZyb20gXCIuL1NldHRpbmdzXCI7XHJcbmltcG9ydCB7IExvYWRlclJlc291cmNlIH0gZnJvbSAncGl4aS5qcydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNvdW5kRGF0YSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgYnVmZmVyOiBBcnJheUJ1ZmZlcjtcclxuICAgIHVybD86IHN0cmluZztcclxuICAgIGV4dGVuc2lvbj86IHN0cmluZztcclxufVxyXG5cclxuLy9hc3NldCBsb2FkZXJcclxuZXhwb3J0IGNsYXNzIExvYWRlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHTE9CQUxfQVNTRVRTX0xPQURFRDogc3RyaW5nID0gJ2dsb2JhbC1hc3NldHMtbG9hZGVkJztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfbG9hZGVyOiBQSVhJLkxvYWRlcixcclxuICAgICAgICBwcml2YXRlIF9ldmVudHM6IFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyLFxyXG4gICAgICAgIHByaXZhdGUgX3NldHRpbmdzOiBTZXR0aW5nc1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0UmVzb3VyY2VUeXBlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldFJlc291cmNlVHlwZXMoKTogdm9pZCB7XHJcbiAgICAgICAgLy9zZXQgaXQgdG8gdXNlIHhociBmb3Igc291bmRzXHJcbiAgICAgICAgdGhpcy5zZXRYaHIoJ29nZycpXHJcbiAgICAgICAgdGhpcy5zZXRYaHIoJ200YScpXHJcbiAgICAgICAgdGhpcy5zZXRYaHIoJ21wMycpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRYaHIoZXh0ZW5zaW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBMb2FkZXJSZXNvdXJjZS5zZXRFeHRlbnNpb25Mb2FkVHlwZShleHRlbnNpb24sIExvYWRlclJlc291cmNlLkxPQURfVFlQRS5YSFIpXHJcbiAgICAgICAgTG9hZGVyUmVzb3VyY2Uuc2V0RXh0ZW5zaW9uWGhyVHlwZShleHRlbnNpb24sIExvYWRlclJlc291cmNlLlhIUl9SRVNQT05TRV9UWVBFLkJVRkZFUilcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEdsb2JhbCgpOiB2b2lkIHtcclxuICAgICAgICAvL2xvYWQgaXRlbXMgZnJvbSB0aGUgZ2xvYmFsIGxpc3RcclxuICAgICAgICB0aGlzLmxvYWRBc3NldHModGhpcy5fc2V0dGluZ3MuYXNzZXRzLmdsb2JhbClcclxuICAgICAgICB0aGlzLl9sb2FkZXIub25Db21wbGV0ZS5vbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbCBhc3NldHMgbG9hZGVkJylcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmVtaXQoTG9hZGVyLkdMT0JBTF9BU1NFVFNfTE9BREVEKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZldGNoU291bmRzKCk6IElTb3VuZERhdGFbXSB7XHJcbiAgICAgICAgY29uc3QgcmVzb3VyY2VzID0gdGhpcy5fbG9hZGVyLnJlc291cmNlcztcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzb3VyY2VzKS5maWx0ZXIoKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSByZXNvdXJjZXNbaWRdO1xyXG4gICAgICAgICAgICByZXR1cm4gISFyZXNvdXJjZS54aHJcclxuICAgICAgICB9KS5tYXAoKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSByZXNvdXJjZXNbaWRdO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWQsIGJ1ZmZlcjogcmVzb3VyY2UuZGF0YSwgZXh0ZW5zaW9uOiByZXNvdXJjZS5leHRlbnNpb24sIHVybDogcmVzb3VyY2UudXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkQXNzZXRzKGFzc2V0czogSUFzc2V0W10sIGxvYWQgPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgLy9UT0RPIC0gaGFuZGxlIHNldHRpbmcgYXVkaW8gdHlwZSBoZXJlXHJcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYXNzZXQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuYWRkKGFzc2V0LmlkLCBhc3NldC5zcmMpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAobG9hZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFNjcmVlbihzY3JlZW5JZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgLy9UT0RPXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUaW1lb3V0IH0gZnJvbSBcIi4uL3V0aWxzL1RpbWVvdXRcIjtcclxuaW1wb3J0IHsgVXBkYXRlTGlzdCB9IGZyb20gXCIuLi91dGlscy9VcGRhdGVMaXN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTY3JlZW5Db25maWcge1xyXG4gICAgc2NyZWVuV2lkdGg6IG51bWJlcixcclxuICAgIHNjcmVlbkhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW4gZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUxpc3Q6IFVwZGF0ZUxpc3Q7XHJcbiAgICBwdWJsaWMgdGltZW91dDogVGltZW91dDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc2NyZWVuV2lkdGg6bnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHNjcmVlbkhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSVNjcmVlbkNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpXHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdCA9IG5ldyBVcGRhdGVMaXN0KCk7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gPFRpbWVvdXQ+dGhpcy51cGRhdGVMaXN0LmFkZChuZXcgVGltZW91dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3QudXBkYXRlKGRlbHRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3QucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpXHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tIFwiLi9TY3JlZW5cIjtcclxuaW1wb3J0IHsgSVNpemUgfSBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbk1hbmFnZXIge1xyXG5cclxuICAgIHB1YmxpYyByb290OiBQSVhJLkNvbnRhaW5lcjtcclxuXHJcbiAgICBwdWJsaWMgY3VycmVudFNjcmVlbjogU2NyZWVuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2V2ZW50czogUElYSS51dGlscy5FdmVudEVtaXR0ZXIsIHByaXZhdGUgX3NpemU6IElTaXplKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucm9vdC5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB0aGlzLl9zaXplLmhlaWdodCAvIDJcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIC8vVE9ETyAtIG1ha2UgdGhpcyB3b3JrIHZpYSBxdWV1ZWQgZXZlbnRzIGFjdHVhbGx5XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLm9uKCdzY3JlZW4nLCB0aGlzLnNob3dTY3JlZW4pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNjcmVlbikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW4udXBkYXRlKGRlbHRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dTY3JlZW4gPSAoU2NyZWVuVHlwZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlzcG9zZVNjcmVlbigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3VycmVudFNjcmVlbiA9IHRoaXMuX2NyZWF0ZVNjcmVlbihTY3JlZW5UeXBlKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVNjcmVlbihTY3JlZW5UeXBlKTogU2NyZWVuIHtcclxuICAgICAgICBjb25zdCBzY3JlZW4gPSA8U2NyZWVuPm5ldyBTY3JlZW5UeXBlKHtcclxuICAgICAgICAgICAgc2NyZWVuV2lkdGg6IHRoaXMuX3NpemUud2lkdGgsXHJcbiAgICAgICAgICAgIHNjcmVlbkhlaWdodDogdGhpcy5fc2l6ZS5oZWlnaHRcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJvb3QuYWRkQ2hpbGQoc2NyZWVuKTtcclxuICAgICAgICByZXR1cm4gc2NyZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy9UT0RPIC0ga2VlcCByb290IGNlbnRlcmVkPyBPciBtYXliZSBub3QgbmVlZGVkLi4uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2VTY3JlZW4oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNjcmVlbikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW4uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW4gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vaW50ZXJmYWNlIGZvciB0aGUgY29uZmlnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBc3NldCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgc3JjOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpemUge1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBc3NldHMge1xyXG4gICAgZ2xvYmFsOiBJQXNzZXRbXTtcclxuICAgIHNjZW5lOiB7XHJcbiAgICAgICAgW3NjZW5lSWQ6IHN0cmluZ106IElBc3NldFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb25maWcge1xyXG4gICAgYXNzZXRzOiBJQXNzZXRzO1xyXG4gICAgc2l6ZTogSVNpemU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5ncyBpbXBsZW1lbnRzIElDb25maWcge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQ09ORklHX0xPQURFRDogc3RyaW5nID0gJ2NvbmZpZy1sb2FkZWQnO1xyXG5cclxuICAgIHB1YmxpYyBjb25maWdQYXRoOiBzdHJpbmcgPSAnanNvbi9jb25maWcuanNvbidcclxuXHJcbiAgICBwdWJsaWMgYXNzZXRzOiBJQXNzZXRzO1xyXG4gICAgcHVibGljIHNpemU6IElTaXplID0ge3dpZHRoOiAxMzM0LCBoZWlnaHQ6IDc1MH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9hZGVyOiBQSVhJLkxvYWRlciwgcHJpdmF0ZSBfZXZlbnRzOiBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlcikge1xyXG4gICAgICAgIHRoaXMubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkKCk6IFNldHRpbmdzIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIuYWRkKCdjb25maWcnLCB0aGlzLmNvbmZpZ1BhdGgpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlci5vbkNvbXBsZXRlLm9uY2UodGhpcy5fY29uZmlnTG9hZGVkKVxyXG4gICAgICAgIHRoaXMuX2xvYWRlci5sb2FkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY29uZmlnTG9hZGVkID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZzogSUNvbmZpZyA9IDxJQ29uZmlnPnRoaXMuX2xvYWRlci5yZXNvdXJjZXMuY29uZmlnLmRhdGE7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpXHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLmVtaXQoU2V0dGluZ3MuQ09ORklHX0xPQURFRClcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vTG9hZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9TY3JlZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL1NjcmVlbk1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1NldHRpbmdzJztcclxuZXhwb3J0ICogZnJvbSAnLi92ZXJzaW9uJzsiLCJjb25zdCB2ZXJzaW9uID0geyBjb2RlOiAnMC4xLjcnIH1cbiAgICBleHBvcnQge3ZlcnNpb259IiwiY29uc3QgRWFzaW5nID0ge1xyXG4gICAgTGluZWFyOiB7XHJcbiAgICAgICAgTm9uZShrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIFF1YWRyYXRpYzoge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIGsgKiBrO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE91dChrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrICogKDIgLSBrKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbk91dChrKSB7XHJcbiAgICAgICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHJldHVybiAwLjUgKiBrICogaztcclxuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiAoLS1rICogKGsgLSAyKSAtIDEpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIEN1YmljOiB7XHJcbiAgICAgICAgSW4oaykge1xyXG4gICAgICAgICAgICByZXR1cm4gayAqIGsgKiBrO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE91dChrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtLWsgKiBrICogayArIDE7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBpZiAoKGsgKj0gMikgPCAxKSByZXR1cm4gMC41ICogayAqIGsgKiBrO1xyXG4gICAgICAgICAgICByZXR1cm4gMC41ICogKChrIC09IDIpICogayAqIGsgKyAyKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBRdWFydGljOiB7XHJcbiAgICAgICAgSW4oaykge1xyXG4gICAgICAgICAgICByZXR1cm4gayAqIGsgKiBrICogaztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gMSAtIC0tayAqIGsgKiBrICogaztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbk91dChrKSB7XHJcbiAgICAgICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHJldHVybiAwLjUgKiBrICogayAqIGsgKiBrO1xyXG4gICAgICAgICAgICByZXR1cm4gLTAuNSAqICgoayAtPSAyKSAqIGsgKiBrICogayAtIDIpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIFF1aW50aWM6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrICogayAqIGsgKiBrICogaztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gLS1rICogayAqIGsgKiBrICogayArIDE7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBpZiAoKGsgKj0gMikgPCAxKSByZXR1cm4gMC41ICogayAqIGsgKiBrICogayAqIGs7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogayAqIGsgKiBrICsgMik7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgU2ludXNvaWRhbDoge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLmNvcygoayAqIE1hdGguUEkpIC8gMik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc2luKChrICogTWF0aC5QSSkgLyAyKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbk91dChrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBrKSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgRXhwb25lbnRpYWw6IHtcclxuICAgICAgICBJbihrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrID09PSAwID8gMCA6IE1hdGgucG93KDEwMjQsIGsgLSAxKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gayA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLTEwICogayk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBpZiAoayA9PT0gMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIGlmIChrID09PSAxKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgaWYgKChrICo9IDIpIDwgMSkgcmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIGsgLSAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogKGsgLSAxKSkgKyAyKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBDaXJjdWxhcjoge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIGsgKiBrKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBPdXQoaykge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSAtLWsgKiBrKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbk91dChrKSB7XHJcbiAgICAgICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gayAqIGspIC0gMSk7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAoayAtPSAyKSAqIGspICsgMSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgRWxhc3RpYzoge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgbGV0IHMsXHJcbiAgICAgICAgICAgICAgICBhID0gMC4xLFxyXG4gICAgICAgICAgICAgICAgcCA9IDAuNDtcclxuICAgICAgICAgICAgaWYgKGsgPT09IDApIHJldHVybiAwO1xyXG4gICAgICAgICAgICBpZiAoayA9PT0gMSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGlmICghYSB8fCBhIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgYSA9IDE7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBzID0gKHAgKiBNYXRoLmFzaW4oMSAvIGEpKSAvICgyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIHJldHVybiAtKGEgKiBNYXRoLnBvdygyLCAxMCAqIChrIC09IDEpKSAqIE1hdGguc2luKCgoayAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgbGV0IHMsXHJcbiAgICAgICAgICAgICAgICBhID0gMC4xLFxyXG4gICAgICAgICAgICAgICAgcCA9IDAuNDtcclxuICAgICAgICAgICAgaWYgKGsgPT09IDApIHJldHVybiAwO1xyXG4gICAgICAgICAgICBpZiAoayA9PT0gMSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGlmICghYSB8fCBhIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgYSA9IDE7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBzID0gKHAgKiBNYXRoLmFzaW4oMSAvIGEpKSAvICgyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhICogTWF0aC5wb3coMiwgLTEwICogaykgKiBNYXRoLnNpbigoKGsgLSBzKSAqICgyICogTWF0aC5QSSkpIC8gcCkgKyAxO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEluT3V0KGspIHtcclxuICAgICAgICAgICAgbGV0IHMsXHJcbiAgICAgICAgICAgICAgICBhID0gMC4xLFxyXG4gICAgICAgICAgICAgICAgcCA9IDAuNDtcclxuICAgICAgICAgICAgaWYgKGsgPT09IDApIHJldHVybiAwO1xyXG4gICAgICAgICAgICBpZiAoayA9PT0gMSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGlmICghYSB8fCBhIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgYSA9IDE7XHJcbiAgICAgICAgICAgICAgICBzID0gcCAvIDQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBzID0gKHAgKiBNYXRoLmFzaW4oMSAvIGEpKSAvICgyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHJldHVybiAtMC41ICogKGEgKiBNYXRoLnBvdygyLCAxMCAqIChrIC09IDEpKSAqIE1hdGguc2luKCgoayAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhICogTWF0aC5wb3coMiwgLTEwICogKGsgLT0gMSkpICogTWF0aC5zaW4oKChrIC0gcykgKiAoMiAqIE1hdGguUEkpKSAvIHApICogMC41ICsgMTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBCYWNrOiB7XHJcbiAgICAgICAgSW4oaykge1xyXG4gICAgICAgICAgICBsZXQgcyA9IDEuNzAxNTg7XHJcbiAgICAgICAgICAgIHJldHVybiBrICogayAqICgocyArIDEpICogayAtIHMpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIE91dChrKSB7XHJcbiAgICAgICAgICAgIGxldCBzID0gMS43MDE1ODtcclxuICAgICAgICAgICAgcmV0dXJuIC0tayAqIGsgKiAoKHMgKyAxKSAqIGsgKyBzKSArIDE7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSW5PdXQoaykge1xyXG4gICAgICAgICAgICBsZXQgcyA9IDEuNzAxNTggKiAxLjUyNTtcclxuICAgICAgICAgICAgaWYgKChrICo9IDIpIDwgMSkgcmV0dXJuIDAuNSAqIChrICogayAqICgocyArIDEpICogayAtIHMpKTtcclxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiAoKHMgKyAxKSAqIGsgKyBzKSArIDIpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIEJvdW5jZToge1xyXG4gICAgICAgIEluKGspIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEgLSBFYXNpbmcuQm91bmNlLk91dCgxIC0gayk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgT3V0KGspIHtcclxuICAgICAgICAgICAgaWYgKGsgPCAxIC8gMi43NSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIGsgKiBrO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGsgPCAyIC8gMi43NSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIChrIC09IDEuNSAvIDIuNzUpICogayArIDAuNzU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoayA8IDIuNSAvIDIuNzUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiAoayAtPSAyLjI1IC8gMi43NSkgKiBrICsgMC45Mzc1O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIChrIC09IDIuNjI1IC8gMi43NSkgKiBrICsgMC45ODQzNzU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBJbk91dChrKSB7XHJcbiAgICAgICAgICAgIGlmIChrIDwgMC41KSByZXR1cm4gRWFzaW5nLkJvdW5jZS5JbihrICogMikgKiAwLjU7XHJcbiAgICAgICAgICAgIHJldHVybiBFYXNpbmcuQm91bmNlLk91dChrICogMiAtIDEpICogMC41ICsgMC41O1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgSW50ZXJwb2xhdGlvbiA9IHtcclxuICAgIExpbmVhcih2LCBrKSB7XHJcbiAgICAgICAgbGV0IG0gPSB2Lmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgIGYgPSBtICogayxcclxuICAgICAgICAgICAgaSA9IE1hdGguZmxvb3IoZiksXHJcbiAgICAgICAgICAgIGZuID0gSW50ZXJwb2xhdGlvbi5VdGlscy5MaW5lYXI7XHJcblxyXG4gICAgICAgIGlmIChrIDwgMCkgcmV0dXJuIGZuKHZbMF0sIHZbMV0sIGYpO1xyXG4gICAgICAgIGlmIChrID4gMSkgcmV0dXJuIGZuKHZbbV0sIHZbbSAtIDFdLCBtIC0gZik7XHJcblxyXG4gICAgICAgIHJldHVybiBmbih2W2ldLCB2W2kgKyAxID4gbSA/IG0gOiBpICsgMV0sIGYgLSBpKTtcclxuICAgIH0sXHJcblxyXG4gICAgQmV6aWVyKHYsIGspIHtcclxuICAgICAgICBsZXQgYiA9IDAsXHJcbiAgICAgICAgICAgIG4gPSB2Lmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgIHB3ID0gTWF0aC5wb3csXHJcbiAgICAgICAgICAgIGJuID0gSW50ZXJwb2xhdGlvbi5VdGlscy5CZXJuc3RlaW4sXHJcbiAgICAgICAgICAgIGk7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPD0gbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGIgKz0gcHcoMSAtIGssIG4gLSBpKSAqIHB3KGssIGkpICogdltpXSAqIGJuKG4sIGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGI7XHJcbiAgICB9LFxyXG5cclxuICAgIENhdG11bGxSb20odiwgaykge1xyXG4gICAgICAgIGxldCBtID0gdi5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICBmID0gbSAqIGssXHJcbiAgICAgICAgICAgIGkgPSBNYXRoLmZsb29yKGYpLFxyXG4gICAgICAgICAgICBmbiA9IEludGVycG9sYXRpb24uVXRpbHMuQ2F0bXVsbFJvbTtcclxuXHJcbiAgICAgICAgaWYgKHZbMF0gPT09IHZbbV0pIHtcclxuICAgICAgICAgICAgaWYgKGsgPCAwKSBpID0gTWF0aC5mbG9vcigoZiA9IG0gKiAoMSArIGspKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZm4odlsoaSAtIDEgKyBtKSAlIG1dLCB2W2ldLCB2WyhpICsgMSkgJSBtXSwgdlsoaSArIDIpICUgbV0sIGYgLSBpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoayA8IDApIHJldHVybiB2WzBdIC0gKGZuKHZbMF0sIHZbMF0sIHZbMV0sIHZbMV0sIC1mKSAtIHZbMF0pO1xyXG4gICAgICAgICAgICBpZiAoayA+IDEpIHJldHVybiB2W21dIC0gKGZuKHZbbV0sIHZbbV0sIHZbbSAtIDFdLCB2W20gLSAxXSwgZiAtIG0pIC0gdlttXSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZm4odltpID8gaSAtIDEgOiAwXSwgdltpXSwgdlttIDwgaSArIDEgPyBtIDogaSArIDFdLCB2W20gPCBpICsgMiA/IG0gOiBpICsgMl0sIGYgLSBpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFV0aWxzOiB7XHJcbiAgICAgICAgTGluZWFyKHAwLCBwMSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHAxIC0gcDApICogdCArIHAwO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEJlcm5zdGVpbihuLCBpKSB7XHJcbiAgICAgICAgICAgIGxldCBmYyA9IEludGVycG9sYXRpb24uVXRpbHMuRmFjdG9yaWFsO1xyXG4gICAgICAgICAgICByZXR1cm4gZmMobikgLyBmYyhpKSAvIGZjKG4gLSBpKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBGYWN0b3JpYWw6IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBhID0gWzFdO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcyA9IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaTtcclxuICAgICAgICAgICAgICAgIGlmIChhW25dKSByZXR1cm4gYVtuXTtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IG47IGkgPiAxOyBpLS0pIHMgKj0gaTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYVtuXSA9IHMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pKCksXHJcblxyXG4gICAgICAgIENhdG11bGxSb20ocDAsIHAxLCBwMiwgcDMsIHQpIHtcclxuICAgICAgICAgICAgbGV0IHYwID0gKHAyIC0gcDApICogMC41LFxyXG4gICAgICAgICAgICAgICAgdjEgPSAocDMgLSBwMSkgKiAwLjUsXHJcbiAgICAgICAgICAgICAgICB0MiA9IHQgKiB0LFxyXG4gICAgICAgICAgICAgICAgdDMgPSB0ICogdDI7XHJcbiAgICAgICAgICAgIHJldHVybiAoMiAqIHAxIC0gMiAqIHAyICsgdjAgKyB2MSkgKiB0MyArICgtMyAqIHAxICsgMyAqIHAyIC0gMiAqIHYwIC0gdjEpICogdDIgKyB2MCAqIHQgKyBwMTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IEVhc2luZywgSW50ZXJwb2xhdGlvbiB9O1xyXG4iLCJpbXBvcnQgeyBFYXNpbmcsIEludGVycG9sYXRpb24gfSBmcm9tICcuL0Vhc2luZyc7XHJcbmltcG9ydCB7IFR3ZWVuTWFuYWdlciB9IGZyb20gJy4vVHdlZW5NYW5hZ2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUd2VlbiB7XHJcbiAgICBwdWJsaWMgdHdlZW5NYW5hZ2VyOiBUd2Vlbk1hbmFnZXI7XHJcbiAgICBwcm90ZWN0ZWQgX29iamVjdDogdW5rbm93bjsgLy90d2VlbiB0YXJnZXRcclxuICAgIHByb3RlY3RlZCBfdmFsdWVzU3RhcnQ6IG9iamVjdCA9IHt9O1xyXG4gICAgcHJvdGVjdGVkIF92YWx1ZXNFbmQ6IG9iamVjdCA9IHt9O1xyXG4gICAgcHJvdGVjdGVkIF92YWx1ZXNTdGFydFJlcGVhdDogb2JqZWN0ID0ge307XHJcbiAgICBwcm90ZWN0ZWQgX2R1cmF0aW9uOiBudW1iZXIgPSAxMDAwO1xyXG4gICAgcHJvdGVjdGVkIF9yZXBlYXQ6IG51bWJlciA9IDA7XHJcbiAgICBwcm90ZWN0ZWQgX3lveW86IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBfaXNQbGF5aW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgX3JldmVyc2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgX2RlbGF5VGltZTogbnVtYmVyID0gMDtcclxuICAgIHByb3RlY3RlZCBfc3RhcnRUaW1lOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIF9lYXNpbmdGdW5jdGlvbjogKGs6IG51bWJlcikgPT4gbnVtYmVyID0gRWFzaW5nLkxpbmVhci5Ob25lO1xyXG4gICAgcHJvdGVjdGVkIF9pbnRlcnBvbGF0aW9uRnVuY3Rpb246ICh2OiBhbnksIGs6IGFueSkgPT4gYW55ID0gSW50ZXJwb2xhdGlvbi5MaW5lYXI7XHJcbiAgICBwcm90ZWN0ZWQgX2NoYWluZWRUd2VlbnM6IFR3ZWVuW10gPSBbXTtcclxuICAgIHByb3RlY3RlZCBfb25TdGFydENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCBfb25TdGFydENhbGxiYWNrRmlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBfb25VcGRhdGVDYWxsYmFjazogKCkgPT4gdm9pZCA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgX29uQ29tcGxldGVDYWxsYmFjazogKCkgPT4gdm9pZCA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgX29uU3RvcENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvYmplY3Q6IHVua25vd24pIHtcclxuICAgICAgICB0aGlzLl9vYmplY3QgPSBvYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy9yZXR1cm5zIGZhbHNlIGlmIGNvbXBsZXRlZFxyXG4gICAgcHVibGljIHVwZGF0ZSh0aW1lOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcHJvcGVydHk7XHJcbiAgICAgICAgaWYgKHRpbWUgPCB0aGlzLl9zdGFydFRpbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX29uU3RhcnRDYWxsYmFjayAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25TdGFydENhbGxiYWNrLmNhbGwodGhpcy5fb2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBlbGFwc2VkID0gKHRpbWUgLSB0aGlzLl9zdGFydFRpbWUpIC8gdGhpcy5fZHVyYXRpb247XHJcbiAgICAgICAgZWxhcHNlZCA9IGVsYXBzZWQgPiAxID8gMSA6IGVsYXBzZWQ7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9lYXNpbmdGdW5jdGlvbihlbGFwc2VkKTtcclxuICAgICAgICBmb3IgKHByb3BlcnR5IGluIHRoaXMuX3ZhbHVlc0VuZCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSB8fCAwO1xyXG4gICAgICAgICAgICBsZXQgZW5kID0gdGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgaWYgKGVuZCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vYmplY3RbcHJvcGVydHldID0gdGhpcy5faW50ZXJwb2xhdGlvbkZ1bmN0aW9uKGVuZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gUGFyc2VzIHJlbGF0aXZlIGVuZCB2YWx1ZXMgd2l0aCBzdGFydCBhcyBiYXNlIChlLmcuOiArMTAsIC0zKVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gc3RhcnQgKyBwYXJzZUZsb2F0KGVuZCk7IC8vLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBwcm90ZWN0IGFnYWluc3Qgbm9uIG51bWVyaWMgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZW5kID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29iamVjdFtwcm9wZXJ0eV0gPSBzdGFydCArIChlbmQgLSBzdGFydCkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fb25VcGRhdGVDYWxsYmFjayAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vblVwZGF0ZUNhbGxiYWNrLmNhbGwodGhpcy5fb2JqZWN0LCB2YWx1ZSwgZWxhcHNlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGFwc2VkID09PSAxKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXBlYXQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNGaW5pdGUodGhpcy5fcmVwZWF0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlcGVhdC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gcmVhc3NpZ24gc3RhcnRpbmcgdmFsdWVzLCByZXN0YXJ0IGJ5IG1ha2luZyBzdGFydFRpbWUgPSBub3dcclxuICAgICAgICAgICAgICAgIGZvciAocHJvcGVydHkgaW4gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSArIHBhcnNlRmxvYXQodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl95b3lvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldID0gdGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSA9IHRtcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldID0gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3lveW8pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXZlcnNlZCA9ICF0aGlzLl9yZXZlcnNlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0VGltZSA9IHRpbWUgKyB0aGlzLl9kZWxheVRpbWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2sgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2suY2FsbCh0aGlzLl9vYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSB0aGlzLl9jaGFpbmVkVHdlZW5zLmxlbmd0aDsgaSA8IG51bUNoYWluZWRUd2VlbnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYWluZWRUd2VlbnNbaV0uc3RhcnQodGltZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvKHByb3BlcnRpZXM6IG9iamVjdCwgZHVyYXRpb246IG51bWJlcik6IFR3ZWVuIHtcclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XHJcbiAgICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzU3RhcnRba2V5XSA9IHBhcnNlRmxvYXQodGhpcy5fb2JqZWN0W2tleV0pO1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNFbmRba2V5XSA9IHBhcnNlRmxvYXQocHJvcGVydGllc1trZXldKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl92YWx1ZXNFbmQgPSBwcm9wZXJ0aWVzO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnJvbShwcm9wZXJ0aWVzOiBvYmplY3QsIGR1cmF0aW9uOiBudW1iZXIpOiBUd2VlbiB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpO1xyXG4gICAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0W2tleV0gPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNba2V5XSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc0VuZFtrZXldID0gcGFyc2VGbG9hdCh0aGlzLl9vYmplY3Rba2V5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZyb21Ubyhmcm9tOiBvYmplY3QsIHRvOiBvYmplY3QsIGR1cmF0aW9uOiBudW1iZXIpOiBUd2VlbiB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGZyb20pO1xyXG4gICAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0W2tleV0gPSBwYXJzZUZsb2F0KGZyb21ba2V5XSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc0VuZFtrZXldID0gcGFyc2VGbG9hdCh0b1trZXldKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNUd2Vlbk9mKHRhcmdldDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldCA9PT0gdGhpcy5fb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCh0aW1lPzogbnVtYmVyKTogVHdlZW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnR3ZWVuTWFuYWdlcikgdGhpcy50d2Vlbk1hbmFnZXIuYWRkKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0KHRpbWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0KHRpbWU6IG51bWJlcik6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX29uU3RhcnRDYWxsYmFja0ZpcmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRUaW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gdGltZSA6IHRoaXMudHdlZW5NYW5hZ2VyLnBhc3NlZFRpbWU7IC8vRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLl9zdGFydFRpbWUgKz0gdGhpcy5fZGVsYXlUaW1lO1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5fdmFsdWVzRW5kKSB7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGFuIEFycmF5IHdhcyBwcm92aWRlZCBhcyBwcm9wZXJ0eSB2YWx1ZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGxvY2FsIGNvcHkgb2YgdGhlIEFycmF5IHdpdGggdGhlIHN0YXJ0IHZhbHVlIGF0IHRoZSBmcm9udFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSA9IFt0aGlzLl9vYmplY3RbcHJvcGVydHldXS5jb25jYXQodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldID0gdGhpcy5fb2JqZWN0W3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSBpbnN0YW5jZW9mIEFycmF5ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldICo9IDEuMDsgLy8gRW5zdXJlcyB3ZSdyZSB1c2luZyBudW1iZXJzLCBub3Qgc3RyaW5nc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSB8fCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcCgpOiBUd2VlbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHdlZW5NYW5hZ2VyLnJlbW92ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5fb25TdG9wQ2FsbGJhY2sgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25TdG9wQ2FsbGJhY2suY2FsbCh0aGlzLl9vYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0b3BDaGFpbmVkVHdlZW5zKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BDaGFpbmVkVHdlZW5zKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBudW1DaGFpbmVkVHdlZW5zID0gdGhpcy5fY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fY2hhaW5lZFR3ZWVuc1tpXS5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxheShhbW91bnQ6IG51bWJlcik6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9kZWxheVRpbWUgPSBhbW91bnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlcGVhdCh0aW1lczogbnVtYmVyKTogVHdlZW4ge1xyXG4gICAgICAgIHRoaXMuX3JlcGVhdCA9IHRpbWVzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB5b3lvKHlveW86IGJvb2xlYW4pOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5feW95byA9IHlveW87XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVhc2luZyhlYXNpbmc6IChrOiBudW1iZXIpID0+IG51bWJlcik6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9lYXNpbmdGdW5jdGlvbiA9IGVhc2luZztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJwb2xhdGlvbihpbnRlcnBvbGF0aW9uKTogVHdlZW4ge1xyXG4gICAgICAgIHRoaXMuX2ludGVycG9sYXRpb25GdW5jdGlvbiA9IGludGVycG9sYXRpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYWluKC4uLnR3ZWVuczogVHdlZW5bXSk6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9jaGFpbmVkVHdlZW5zID0gdHdlZW5zO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN0YXJ0KGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogVHdlZW4ge1xyXG4gICAgICAgIHRoaXMuX29uU3RhcnRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblVwZGF0ZShjYWxsYmFjazogKCkgPT4gdm9pZCk6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9vblVwZGF0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ29tcGxldGUoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiBUd2VlbiB7XHJcbiAgICAgICAgdGhpcy5fb25Db21wbGV0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU3RvcChjYWxsYmFjazogKCkgPT4gdm9pZCk6IFR3ZWVuIHtcclxuICAgICAgICB0aGlzLl9vblN0b3BDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXN0YXJ0KHBhdXNlX2R1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdGFydFRpbWUgKz0gcGF1c2VfZHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZUR1cmF0aW9uKG5ld19kdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZHVyYXRpb24gPSBuZXdfZHVyYXRpb247XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVVwZGF0ZSwgVXBkYXRlTGlzdCB9IGZyb20gJy4uL3V0aWxzL1VwZGF0ZUxpc3QnO1xyXG5pbXBvcnQgeyBUd2VlbiB9IGZyb20gJy4vVHdlZW4nO1xyXG5leHBvcnQgeyBFYXNpbmcgfSBmcm9tICcuL0Vhc2luZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHdlZW5NYW5hZ2VyIGV4dGVuZHMgVXBkYXRlTGlzdCB7XHJcbiAgICBwdWJsaWMgcGFzc2VkVGltZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5wYXNzZWRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhc3NlZFRpbWUgKz0gZGVsdGE7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICBsZXQgbiA9IHRoaXMudXBkYXRlSXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgaXRlbTogSVVwZGF0ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID4gLTE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMudXBkYXRlSXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0udXBkYXRlKHRoaXMucGFzc2VkVGltZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW1zW3RoaXMucmVtb3ZlSXRlbXMubGVuZ3RoXSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbm93IHJlbW92ZSBpdGVtc1xyXG4gICAgICAgICAgICBuID0gdGhpcy5yZW1vdmVJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChuID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5yZW1vdmVJdGVtc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW1zLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSh0YXJnZXQ6IHVua25vd24pOiBUd2VlbiB7XHJcbiAgICAgICAgY29uc3QgdHcgPSBuZXcgVHdlZW4odGFyZ2V0KTtcclxuICAgICAgICB0dy50d2Vlbk1hbmFnZXIgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0dztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSh0YXJnZXQ6IHVua25vd24sIHR3ZWVuTWFuYWdlcjogVHdlZW5NYW5hZ2VyID0gbnVsbCk6IFR3ZWVuIHtcclxuICAgICAgICBjb25zdCB0dyA9IG5ldyBUd2Vlbih0YXJnZXQpO1xyXG4gICAgICAgIHR3LnR3ZWVuTWFuYWdlciA9IHR3ZWVuTWFuYWdlciB8fCBUd2Vlbk1hbmFnZXIuaW5zdGFuY2U7XHJcbiAgICAgICAgcmV0dXJuIHR3O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBraWxsVHdlZW5zT2YodGFyZ2V0OiB1bmtub3duKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgaSA9IHRoaXMudXBkYXRlSXRlbXMubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgICAgIHR3ZWVuO1xyXG4gICAgICAgICAgICBmb3IgKDsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIHR3ZWVuID0gdGhpcy51cGRhdGVJdGVtc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmICh0d2Vlbi5pc1R3ZWVuT2YodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMga2lsbFR3ZWVuc09mKHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgVHdlZW5NYW5hZ2VyLmluc3RhbmNlLmtpbGxUd2VlbnNPZih0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2luZ2xldG9uXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFR3ZWVuTWFuYWdlclxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogVHdlZW5NYW5hZ2VyIHtcclxuICAgICAgICBpZiAoIVR3ZWVuTWFuYWdlci5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgVHdlZW5NYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBUd2Vlbk1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFR3ZWVuTWFuYWdlci5faW5zdGFuY2U7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Vhc2luZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVHdlZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL1R3ZWVuTWFuYWdlcic7IiwiaW50ZXJmYWNlIElRdWV1ZUl0ZW0ge1xyXG4gICAgZXZlbnRJZDogc3RyaW5nO1xyXG4gICAgYXJnczogdW5rbm93bltdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRRdWV1ZSBleHRlbmRzIFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyIHtcclxuXHJcbiAgICBwcml2YXRlIF9xdWV1ZTogSVF1ZXVlSXRlbVtdID0gW107XHJcblxyXG4gICAgcHVibGljIGFkZChldmVudElkOiBzdHJpbmcsIC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3F1ZXVlLnB1c2goe1xyXG4gICAgICAgICAgICBldmVudElkLCBhcmdzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKF9kZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuX3F1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbTogSVF1ZXVlSXRlbSA9IHRoaXMuX3F1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChpdGVtLmV2ZW50SWQsIC4uLml0ZW0uYXJncylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU2VxdWVuY2Uge1xyXG4gICAgcHVibGljIGxpc3Q6IHVua25vd25bXSA9IFtdO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc3R1ZmY/OiB1bmtub3duW10sIHJhbmRvbWlzZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHN0dWZmKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHN0dWZmLCByYW5kb21pc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKHN0dWZmOiB1bmtub3duLCByYW5kb21pc2U6IGJvb2xlYW4gPSBmYWxzZSk6IFNlcXVlbmNlIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdHVmZikpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSA8dW5rbm93bltdPnN0dWZmO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCguLi5pdGVtcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0W3RoaXMubGlzdC5sZW5ndGhdID0gc3R1ZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyYW5kb21pc2UpIHRoaXMucmFuZG9taXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZShzdHVmZjogdW5rbm93bik6IFNlcXVlbmNlIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdHVmZikpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSA8dW5rbm93bltdPnN0dWZmO1xyXG4gICAgICAgICAgICBjb25zdCBuID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3QuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB0aGlzLmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0LmluZGV4T2Yoc3R1ZmYpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByYW5kb21pc2UoKTogU2VxdWVuY2Uge1xyXG4gICAgICAgIFNlcXVlbmNlLnJhbmRvbWlzZUxpc3QodGhpcy5saXN0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV4dCgpOiB1bmtub3duIHtcclxuICAgICAgICBsZXQgaXRlbSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSB0aGlzLmxpc3Quc2hpZnQoKTtcclxuICAgICAgICAgICAgdGhpcy5saXN0W3RoaXMubGlzdC5sZW5ndGhdID0gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZXZpb3VzKCk6IHVua25vd24ge1xyXG4gICAgICAgIGxldCBpdGVtID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaXRlbSA9IHRoaXMubGlzdC5wb3AoKTtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnVuc2hpZnQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgSE9MREVSID0gW107XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21pc2VMaXN0ID0gKGxpc3Q6IHVua25vd25bXSk6IHVua25vd25bXSA9PiB7XHJcbiAgICAgICAgU2VxdWVuY2UuSE9MREVSLnB1c2goLi4ubGlzdCk7XHJcbiAgICAgICAgbGlzdC5sZW5ndGggPSAwO1xyXG4gICAgICAgIHdoaWxlIChTZXF1ZW5jZS5IT0xERVIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFNlcXVlbmNlLkhPTERFUi5sZW5ndGgpO1xyXG4gICAgICAgICAgICBsaXN0W2xpc3QubGVuZ3RoXSA9IFNlcXVlbmNlLkhPTERFUi5zcGxpY2UoaW5kZXgsIDEpWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSVVwZGF0ZSB9IGZyb20gJy4vVXBkYXRlTGlzdCc7XHJcblxyXG5pbnRlcmZhY2UgSUFjdGlvbiB7XHJcbiAgICBfdGFyZ2V0VGltZTogbnVtYmVyO1xyXG4gICAgX2NhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGltZW91dCBpbXBsZW1lbnRzIElVcGRhdGUge1xyXG4gICAgcHJpdmF0ZSBfcG9vbDogSUFjdGlvbltdO1xyXG4gICAgcHJpdmF0ZSBfYWN0aW9uczogSUFjdGlvbltdID0gW107XHJcbiAgICBwcml2YXRlIF9jYW5jZWxsZWRBY3Rpb25zOiBJQWN0aW9uW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb29sU2l6ZTogbnVtYmVyID0gNTApIHtcclxuICAgICAgICB0aGlzLl9wb29sID0gdGhpcy5fY3JlYXRlUG9vbChwb29sU2l6ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgX2NyZWF0ZVBvb2woc2l6ZTogbnVtYmVyKTogSUFjdGlvbltdIHtcclxuICAgICAgICBjb25zdCBwb29sID0gW107XHJcbiAgICAgICAgd2hpbGUgKHNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIHBvb2wucHVzaCh7IF90YXJnZXRUaW1lOiAtMSwgX2NhbGxiYWNrOiBudWxsIH0pO1xyXG4gICAgICAgICAgICBzaXplLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb29sO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF9uZXh0KCk6IElBY3Rpb24ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9wb29sLnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5fcG9vbFt0aGlzLl9wb29sLmxlbmd0aF0gPSBpdGVtO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxheShjYWxsYmFjazogKCkgPT4gdm9pZCwgbXM6IG51bWJlcik6IElBY3Rpb24ge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuX25leHQoKTtcclxuICAgICAgICBhY3Rpb24uX3RhcmdldFRpbWUgPSBtcyB8fCAtMTtcclxuICAgICAgICBhY3Rpb24uX2NhbGxiYWNrID0gY2FsbGJhY2sgfHwgbnVsbDtcclxuICAgICAgICB0aGlzLl9hY3Rpb25zW3RoaXMuX2FjdGlvbnMubGVuZ3RoXSA9IGFjdGlvbjtcclxuICAgICAgICByZXR1cm4gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZWxhcHNlZFRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLl9hY3Rpb25zLmxlbmd0aDtcclxuICAgICAgICBpZiAobiA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGksIGFjdGlvbjtcclxuICAgICAgICAgICAgZm9yIChpID0gbiAtIDE7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSB0aGlzLl9hY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIG9uZXMgdGhhdCB3ZXJlIGFscmVhZHkgY2FuY2VsbGVkIG9yIGZpcmVkXHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLl90YXJnZXRUaW1lID09PSAtMSB8fCAhYWN0aW9uLl9jYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbGxlZEFjdGlvbnNbdGhpcy5fY2FuY2VsbGVkQWN0aW9ucy5sZW5ndGhdID0gYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24uX3RhcmdldFRpbWUgPiAwICYmIGFjdGlvbi5fY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uX3RhcmdldFRpbWUgLT0gZWxhcHNlZFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5fdGFyZ2V0VGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gYWN0aW9uLl9jYWxsYmFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLl9jYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5fdGFyZ2V0VGltZSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBub3cgcmVtb3ZlIGFueSBjYW5jZWxsZWQgb25lc1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5fY2FuY2VsbGVkQWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSB0aGlzLl9jYW5jZWxsZWRBY3Rpb25zLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgaSA9IHRoaXMuX2FjdGlvbnMuaW5kZXhPZihhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FjdGlvbnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWwoYWN0aW9uOiBJQWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgYWN0aW9uLl90YXJnZXRUaW1lID0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQgIHtcclxuICAgICAgICBjb25zdCBuID0gdGhpcy5fYWN0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG4gPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBpLCBhY3Rpb247XHJcbiAgICAgICAgICAgIGZvciAoaSA9IG4gLSAxOyBpID4gLTE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uID0gdGhpcy5fYWN0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5fY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLl90YXJnZXRUaW1lID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYWN0aW9ucy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQgIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5fcG9vbCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBJVXBkYXRlIHtcclxuICAgIHVwZGF0ZTogKGRlbHRhOiBudW1iZXIpID0+IHZvaWQgfCBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBkYXRlTGlzdCB7XHJcbiAgICBwdWJsaWMgdXBkYXRlSXRlbXM6IElVcGRhdGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlbW92ZUl0ZW1zOiBJVXBkYXRlW10gPSBbXTtcclxuICAgIHB1YmxpYyBpc1BhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSxcclxuICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICBuID0gdGhpcy51cGRhdGVJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IG4gLSAxOyBpID4gLTE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMudXBkYXRlSXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICBpdGVtLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9ub3cgcmVtb3ZlIGl0ZW1zXHJcbiAgICAgICAgICAgIG4gPSB0aGlzLnJlbW92ZUl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKG4gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMucmVtb3ZlSXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXJnZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVJdGVtcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGl0ZW0sXHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIG4gPSB0aGlzLnVwZGF0ZUl0ZW1zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSBuIC0gMTsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtc1tpXSA9IHRoaXMudXBkYXRlSXRlbXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoaXRlbTogSVVwZGF0ZSk6IElVcGRhdGUge1xyXG4gICAgICAgIC8vZG9uJ3QgYWxsb3cgYWRkaW5nIG1vcmUgdGhhbiBvbmNlIVxyXG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZUl0ZW1zLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbXNbdGhpcy51cGRhdGVJdGVtcy5sZW5ndGhdID0gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZShpdGVtOiBJVXBkYXRlKTogSVVwZGF0ZSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVJdGVtc1t0aGlzLnJlbW92ZUl0ZW1zLmxlbmd0aF0gPSBpdGVtO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfcmVtb3ZlKGl0ZW06IElVcGRhdGUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudXBkYXRlSXRlbXMuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkgdGhpcy51cGRhdGVJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlSXRlbXMubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50UXVldWUgfSBmcm9tIFwiLi9FdmVudFF1ZXVlXCI7XHJcbmltcG9ydCB7IFVwZGF0ZUxpc3QgfSBmcm9tIFwiLi9VcGRhdGVMaXN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUxvb3AgZXh0ZW5kcyBVcGRhdGVMaXN0e1xyXG4gICAgcHJpdmF0ZSBhY2N1bXVsYXRvcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY3VycmVudFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGludGVydmFsOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZnBzOiBudW1iZXIgPSA2MDtcclxuICAgIHByaXZhdGUgZ2FtZUxvb3BJZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ldmVudFF1ZXVlOiBFdmVudFF1ZXVlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IDEwMDAgLyB0aGlzLmZwcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKTogVXBkYXRlTG9vcCB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmdhbWVMb29wSWQpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUxvb3BJZCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlLCB0aGlzLmludGVydmFsKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZ2FtZUxvb3BJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShfZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5ld1RpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGNvbnN0IGVsYXBzZWQgPSBuZXdUaW1lIC0gdGhpcy5jdXJyZW50VGltZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gbmV3VGltZTtcclxuICAgICAgICB0aGlzLmFjY3VtdWxhdG9yICs9IGVsYXBzZWQ7XHJcbiAgICAgICAgLy91c2UgYWNjdW11bGF0b3Igc3lzdGVtIGZvciBwcm9jZXNzaW5nIHRpbWUgd2l0aCBmaXhlZCB0aW1lIHN0ZXBcclxuICAgICAgICBjb25zdCBjaHVuayA9IHRoaXMuaW50ZXJ2YWw7XHJcbiAgICAgICAgd2hpbGUodGhpcy5hY2N1bXVsYXRvciA+IGNodW5rKXtcclxuICAgICAgICAgICAgdGhpcy5hY2N1bXVsYXRvciAtPSBjaHVuaztcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlKGNodW5rKTtcclxuICAgICAgICAgICAgLy9ub3cgcHJvY2VzcyB0aGUgZXZlbnQgcXVldWVcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRRdWV1ZS51cGRhdGUoY2h1bmspXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9UaW1lb3V0JztcclxuZXhwb3J0ICogZnJvbSAnLi9VcGRhdGVMaXN0JztcclxuZXhwb3J0ICogZnJvbSAnLi9TZXF1ZW5jZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRXZlbnRRdWV1ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVXBkYXRlTG9vcCc7IiwibW9kdWxlLmV4cG9ydHMgPSBQSVhJOyJdLCJzb3VyY2VSb290IjoiIn0=
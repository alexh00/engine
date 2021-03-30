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
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
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

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

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

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/Engine.ts":
/*!***********************!*\
  !*** ./src/Engine.ts ***!
  \***********************/
/*! exports provided: Engine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return Engine; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Loader */ "./src/core/Loader.ts");
/* harmony import */ var _core_ScreenManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/ScreenManager */ "./src/core/ScreenManager.ts");
/* harmony import */ var _core_Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Settings */ "./src/core/Settings.ts");




/// <reference path="typings/pixi.js.d.ts" />
var Engine = /** @class */ (function () {
    function Engine() {
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
        //create screen manager
        this.screenManager = this._createScreenManager();
        //create tween manager
        //create sound manager (rewrite it)
    };
    Engine.prototype._createScreenManager = function () {
        var screenManager = new _core_ScreenManager__WEBPACK_IMPORTED_MODULE_2__["ScreenManager"](this.events, this.settings.size);
        this.app.stage.addChild(screenManager.root);
        return screenManager;
    };
    Engine.prototype._createEvents = function () {
        var _this = this;
        var events = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["utils"].EventEmitter();
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

//this hack is horrid - need to find out how to do this properly
window['engine'] = Engine;
//kick start
// document.addEventListener('DOMContentLoaded', (event) => {
//     window['engine'] = new Engine().start();
// });


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
//asset loader
var Loader = /** @class */ (function () {
    function Loader(_loader, _events, _settings) {
        this._loader = _loader;
        this._events = _events;
        this._settings = _settings;
    }
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
    function Screen() {
        var _this = _super.call(this) || this;
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
/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Screen */ "./src/core/Screen.ts");

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
        this._events.on('screen', this.showScreen);
    }
    ScreenManager.prototype.test = function () {
        this.showScreen(_Screen__WEBPACK_IMPORTED_MODULE_0__["Screen"]);
        //test by adding a sprite
        var sprite = new PIXI.Sprite(PIXI.utils.TextureCache['snoopy']);
        sprite.anchor.set(0.5);
        sprite.width = this._size.width;
        sprite.height = this._size.height;
        this.currentScreen.addChild(sprite);
    };
    ScreenManager.prototype._createScreen = function (ScreenType) {
        var screen = new ScreenType();
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

/***/ "pixi.js":
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRW5naW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0xvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9TY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvU2NyZWVuTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVGltZW91dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvVXBkYXRlTGlzdC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJQSVhJXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xG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aWxlIjoiZW5naW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvRW5naW5lLnRzXCIpO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY3JlYXRlQmluZGluZyhvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJ1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuL2NvcmUvTG9hZGVyJztcclxuaW1wb3J0IHsgU2NyZWVuTWFuYWdlciB9IGZyb20gJy4vY29yZS9TY3JlZW5NYW5hZ2VyJztcclxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL2NvcmUvU2V0dGluZ3MnXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL3BpeGkuanMuZC50c1wiIC8+XHJcbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xyXG5cclxuICAgIHB1YmxpYyBhcHA6IFBJWEkuQXBwbGljYXRpb247XHJcblxyXG4gICAgcHVibGljIHNldHRpbmdzOiBTZXR0aW5ncztcclxuXHJcbiAgICBwdWJsaWMgZXZlbnRzOiBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlcjtcclxuXHJcbiAgICBwdWJsaWMgbG9hZGVyOiBMb2FkZXI7XHJcblxyXG4gICAgcHVibGljIHNjcmVlbk1hbmFnZXI6IFNjcmVlbk1hbmFnZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCgpOiBFbmdpbmUge1xyXG4gICAgICAgIC8vcHJvYmFibHkgd2FudCB0byB1c2UgdGhlIHBpeGkgbG9hZGVyIGZvciBldmVyeXRoaW5nLi4uXHJcbiAgICAgICAgLy9zbyBjcmVhdGUgdGhlIGFwcCBzdHJhaWdodCBhd2F5XHJcbiAgICAgICAgdGhpcy5hcHAgPSB0aGlzLl9jcmVhdGVQaXhpQXBwKClcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB0aGlzLl9jcmVhdGVFdmVudHMoKTtcclxuICAgICAgICAvL2xvYWQgdGhlIGNvbmZpZ1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3ModGhpcy5hcHAubG9hZGVyLCB0aGlzLmV2ZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJlc291cmNlKGlkOiBzdHJpbmcpOiB1bmtub3duIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHAubG9hZGVyLnJlc291cmNlc1tpZF0uZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbmZpZyBoYXMgbm93IGxvYWRlZFxyXG4gICAgcHJpdmF0ZSBidWlsZCgpOiB2b2lkIHtcclxuICAgICAgICAvL3VwZGF0ZSB0aGUgYXBwIHdpdGggdGhlIGxvYWRlZCBzZXR0aW5nc1xyXG4gICAgICAgIHRoaXMuYXBwLnJlbmRlcmVyLnJlc2l6ZSh0aGlzLnNldHRpbmdzLnNpemUud2lkdGgsIHRoaXMuc2V0dGluZ3Muc2l6ZS5oZWlnaHQpXHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHRoZSBsb2FkZXJcclxuICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBMb2FkZXIodGhpcy5hcHAubG9hZGVyLCB0aGlzLmV2ZW50cywgdGhpcy5zZXR0aW5ncylcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgdXBkYXRlIGxvb3BcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgc2NyZWVuIG1hbmFnZXJcclxuICAgICAgICB0aGlzLnNjcmVlbk1hbmFnZXIgPSB0aGlzLl9jcmVhdGVTY3JlZW5NYW5hZ2VyKCk7XHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHR3ZWVuIG1hbmFnZXJcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgc291bmQgbWFuYWdlciAocmV3cml0ZSBpdClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVTY3JlZW5NYW5hZ2VyKCk6IFNjcmVlbk1hbmFnZXIge1xyXG4gICAgICAgIGNvbnN0IHNjcmVlbk1hbmFnZXIgPSBuZXcgU2NyZWVuTWFuYWdlcih0aGlzLmV2ZW50cywgdGhpcy5zZXR0aW5ncy5zaXplKVxyXG4gICAgICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHNjcmVlbk1hbmFnZXIucm9vdClcclxuICAgICAgICByZXR1cm4gc2NyZWVuTWFuYWdlcjtcclxuICAgIH0gICBcclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVFdmVudHMoKTogUElYSS51dGlscy5FdmVudEVtaXR0ZXIge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IG5ldyBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgICAgICBldmVudHMub24oU2V0dGluZ3MuQ09ORklHX0xPQURFRCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbmZpZyBpcyBsb2FkZWQgLSBub3cgYnVpbGQgdGhlIGVuZ2luZVxyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkKCk7XHJcbiAgICAgICAgICAgIC8vbG9hZCBnbG9iYWwgYXNzZXRzXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmxvYWRHbG9iYWwoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBldmVudHMub24oTG9hZGVyLkdMT0JBTF9BU1NFVFNfTE9BREVELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vbm93IHNob3cgZmlyc3Qgc2NyZWVuXHJcbiAgICAgICAgICAgIGV2ZW50cy5lbWl0KCdhcHAtcmVhZHknKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVQaXhpQXBwKCk6IFBJWEkuQXBwbGljYXRpb24ge1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUElYSS5BcHBsaWNhdGlvbih7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzY4LCB3aWR0aDogMTAyNCxcclxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHZpZXcsXHJcbiAgICAgICAgICAgIGZvcmNlQ2FudmFzOiBmYWxzZSxcclxuICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgICAgICByZXNvbHV0aW9uOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL3RoaXMgaGFjayBpcyBob3JyaWQgLSBuZWVkIHRvIGZpbmQgb3V0IGhvdyB0byBkbyB0aGlzIHByb3Blcmx5XHJcbndpbmRvd1snZW5naW5lJ10gPSBFbmdpbmU7XHJcblxyXG4vL2tpY2sgc3RhcnRcclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xyXG4vLyAgICAgd2luZG93WydlbmdpbmUnXSA9IG5ldyBFbmdpbmUoKS5zdGFydCgpO1xyXG4vLyB9KTsiLCJcclxuXHJcbmltcG9ydCB7IElBc3NldCwgSUFzc2V0cywgU2V0dGluZ3MgfSBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG4vL2Fzc2V0IGxvYWRlclxyXG5leHBvcnQgY2xhc3MgTG9hZGVyIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdMT0JBTF9BU1NFVFNfTE9BREVEOiBzdHJpbmcgPSAnZ2xvYmFsLWFzc2V0cy1sb2FkZWQnO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9sb2FkZXI6IFBJWEkuTG9hZGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2V2ZW50czogUElYSS51dGlscy5FdmVudEVtaXR0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfc2V0dGluZ3M6IFNldHRpbmdzXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRHbG9iYWwoKTogdm9pZCB7XHJcbiAgICAgICAgLy9sb2FkIGl0ZW1zIGZyb20gdGhlIGdsb2JhbCBsaXN0XHJcbiAgICAgICAgdGhpcy5sb2FkQXNzZXRzKHRoaXMuX3NldHRpbmdzLmFzc2V0cy5nbG9iYWwpXHJcbiAgICAgICAgdGhpcy5fbG9hZGVyLm9uQ29tcGxldGUub25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWwgYXNzZXRzIGxvYWRlZCcpXHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5lbWl0KExvYWRlci5HTE9CQUxfQVNTRVRTX0xPQURFRClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkQXNzZXRzKGFzc2V0czogSUFzc2V0W10sIGxvYWQgPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYXNzZXQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuYWRkKGFzc2V0LmlkLCBhc3NldC5zcmMpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAobG9hZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFNjcmVlbihzY3JlZW5JZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgLy9UT0RPXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUaW1lb3V0IH0gZnJvbSBcIi4uL3V0aWxzL1RpbWVvdXRcIjtcclxuaW1wb3J0IHsgVXBkYXRlTGlzdCB9IGZyb20gXCIuLi91dGlscy9VcGRhdGVMaXN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NyZWVuIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVMaXN0OiBVcGRhdGVMaXN0O1xyXG4gICAgcHVibGljIHRpbWVvdXQ6IFRpbWVvdXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0ID0gbmV3IFVwZGF0ZUxpc3QoKTtcclxuICAgICAgICB0aGlzLnRpbWVvdXQgPSA8VGltZW91dD50aGlzLnVwZGF0ZUxpc3QuYWRkKG5ldyBUaW1lb3V0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdC51cGRhdGUoZGVsdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdC5yZW1vdmVBbGwoKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcylcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFNjcmVlbiB9IGZyb20gXCIuL1NjcmVlblwiO1xyXG5pbXBvcnQgeyBJU2l6ZSB9IGZyb20gXCIuL1NldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NyZWVuTWFuYWdlciB7XHJcblxyXG4gICAgcHVibGljIHJvb3Q6IFBJWEkuQ29udGFpbmVyO1xyXG5cclxuICAgIHB1YmxpYyBjdXJyZW50U2NyZWVuOiBTY3JlZW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXZlbnRzOiBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlciwgcHJpdmF0ZSBfc2l6ZTogSVNpemUpIHtcclxuICAgICAgICB0aGlzLnJvb3QgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb290LnBvc2l0aW9uLnNldChcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUuaGVpZ2h0IC8gMlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLm9uKCdzY3JlZW4nLCB0aGlzLnNob3dTY3JlZW4pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRlc3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaG93U2NyZWVuKFNjcmVlbik7XHJcbiAgICAgICAgLy90ZXN0IGJ5IGFkZGluZyBhIHNwcml0ZVxyXG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZShQSVhJLnV0aWxzLlRleHR1cmVDYWNoZVsnc25vb3B5J10pXHJcbiAgICAgICAgc3ByaXRlLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICBzcHJpdGUud2lkdGggPSB0aGlzLl9zaXplLndpZHRoO1xyXG4gICAgICAgIHNwcml0ZS5oZWlnaHQgPSB0aGlzLl9zaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW4uYWRkQ2hpbGQoc3ByaXRlKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93U2NyZWVuID0gKFNjcmVlblR5cGUpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmRpc3Bvc2VTY3JlZW4oKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW4gPSB0aGlzLl9jcmVhdGVTY3JlZW4oU2NyZWVuVHlwZSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVTY3JlZW4oU2NyZWVuVHlwZSk6IFNjcmVlbiB7XHJcbiAgICAgICAgY29uc3Qgc2NyZWVuID0gPFNjcmVlbj5uZXcgU2NyZWVuVHlwZSgpO1xyXG4gICAgICAgIHRoaXMucm9vdC5hZGRDaGlsZChzY3JlZW4pO1xyXG4gICAgICAgIHJldHVybiBzY3JlZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvL1RPRE8gLSBrZWVwIHJvb3QgY2VudGVyZWQ/IE9yIG1heWJlIG5vdCBuZWVkZWQuLi5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZVNjcmVlbigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NyZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjcmVlbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjcmVlbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy9pbnRlcmZhY2UgZm9yIHRoZSBjb25maWdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFzc2V0IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBzcmM6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2l6ZSB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFzc2V0cyB7XHJcbiAgICBnbG9iYWw6IElBc3NldFtdO1xyXG4gICAgc2NlbmU6IHtcclxuICAgICAgICBbc2NlbmVJZDogc3RyaW5nXTogSUFzc2V0W107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpZyB7XHJcbiAgICBhc3NldHM6IElBc3NldHM7XHJcbiAgICBzaXplOiBJU2l6ZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzIGltcGxlbWVudHMgSUNvbmZpZyB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDT05GSUdfTE9BREVEOiBzdHJpbmcgPSAnY29uZmlnLWxvYWRlZCc7XHJcblxyXG4gICAgcHVibGljIGNvbmZpZ1BhdGg6IHN0cmluZyA9ICdqc29uL2NvbmZpZy5qc29uJ1xyXG5cclxuICAgIHB1YmxpYyBhc3NldHM6IElBc3NldHM7XHJcbiAgICBwdWJsaWMgc2l6ZTogSVNpemUgPSB7d2lkdGg6IDEzMzQsIGhlaWdodDogNzUwfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2FkZXI6IFBJWEkuTG9hZGVyLCBwcml2YXRlIF9ldmVudHM6IFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWQoKTogU2V0dGluZ3Mge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlci5hZGQoJ2NvbmZpZycsIHRoaXMuY29uZmlnUGF0aCk7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyLm9uQ29tcGxldGUub25jZSh0aGlzLl9jb25maWdMb2FkZWQpXHJcbiAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jb25maWdMb2FkZWQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgY29uZmlnOiBJQ29uZmlnID0gPElDb25maWc+dGhpcy5fbG9hZGVyLnJlc291cmNlcy5jb25maWcuZGF0YTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZylcclxuICAgICAgICB0aGlzLl9ldmVudHMuZW1pdChTZXR0aW5ncy5DT05GSUdfTE9BREVEKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSVVwZGF0ZSB9IGZyb20gJy4vVXBkYXRlTGlzdCc7XHJcblxyXG5pbnRlcmZhY2UgSUFjdGlvbiB7XHJcbiAgICBfdGFyZ2V0VGltZTogbnVtYmVyO1xyXG4gICAgX2NhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGltZW91dCBpbXBsZW1lbnRzIElVcGRhdGUge1xyXG4gICAgcHJpdmF0ZSBfcG9vbDogSUFjdGlvbltdO1xyXG4gICAgcHJpdmF0ZSBfYWN0aW9uczogSUFjdGlvbltdID0gW107XHJcbiAgICBwcml2YXRlIF9jYW5jZWxsZWRBY3Rpb25zOiBJQWN0aW9uW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb29sU2l6ZTogbnVtYmVyID0gNTApIHtcclxuICAgICAgICB0aGlzLl9wb29sID0gdGhpcy5fY3JlYXRlUG9vbChwb29sU2l6ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgX2NyZWF0ZVBvb2woc2l6ZTogbnVtYmVyKTogSUFjdGlvbltdIHtcclxuICAgICAgICBjb25zdCBwb29sID0gW107XHJcbiAgICAgICAgd2hpbGUgKHNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIHBvb2wucHVzaCh7IF90YXJnZXRUaW1lOiAtMSwgX2NhbGxiYWNrOiBudWxsIH0pO1xyXG4gICAgICAgICAgICBzaXplLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb29sO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF9uZXh0KCk6IElBY3Rpb24ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9wb29sLnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5fcG9vbFt0aGlzLl9wb29sLmxlbmd0aF0gPSBpdGVtO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxheShjYWxsYmFjazogKCkgPT4gdm9pZCwgbXM6IG51bWJlcik6IElBY3Rpb24ge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuX25leHQoKTtcclxuICAgICAgICBhY3Rpb24uX3RhcmdldFRpbWUgPSBtcyB8fCAtMTtcclxuICAgICAgICBhY3Rpb24uX2NhbGxiYWNrID0gY2FsbGJhY2sgfHwgbnVsbDtcclxuICAgICAgICB0aGlzLl9hY3Rpb25zW3RoaXMuX2FjdGlvbnMubGVuZ3RoXSA9IGFjdGlvbjtcclxuICAgICAgICByZXR1cm4gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZWxhcHNlZFRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLl9hY3Rpb25zLmxlbmd0aDtcclxuICAgICAgICBpZiAobiA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGksIGFjdGlvbjtcclxuICAgICAgICAgICAgZm9yIChpID0gbiAtIDE7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSB0aGlzLl9hY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIG9uZXMgdGhhdCB3ZXJlIGFscmVhZHkgY2FuY2VsbGVkIG9yIGZpcmVkXHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLl90YXJnZXRUaW1lID09PSAtMSB8fCAhYWN0aW9uLl9jYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbGxlZEFjdGlvbnNbdGhpcy5fY2FuY2VsbGVkQWN0aW9ucy5sZW5ndGhdID0gYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24uX3RhcmdldFRpbWUgPiAwICYmIGFjdGlvbi5fY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uX3RhcmdldFRpbWUgLT0gZWxhcHNlZFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5fdGFyZ2V0VGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gYWN0aW9uLl9jYWxsYmFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLl9jYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5fdGFyZ2V0VGltZSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBub3cgcmVtb3ZlIGFueSBjYW5jZWxsZWQgb25lc1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5fY2FuY2VsbGVkQWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSB0aGlzLl9jYW5jZWxsZWRBY3Rpb25zLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgaSA9IHRoaXMuX2FjdGlvbnMuaW5kZXhPZihhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FjdGlvbnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWwoYWN0aW9uOiBJQWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgYWN0aW9uLl90YXJnZXRUaW1lID0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQgIHtcclxuICAgICAgICBjb25zdCBuID0gdGhpcy5fYWN0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG4gPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBpLCBhY3Rpb247XHJcbiAgICAgICAgICAgIGZvciAoaSA9IG4gLSAxOyBpID4gLTE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uID0gdGhpcy5fYWN0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5fY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLl90YXJnZXRUaW1lID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYWN0aW9ucy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQgIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5fcG9vbCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBJVXBkYXRlIHtcclxuICAgIHVwZGF0ZTogKGRlbHRhOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgICAvLyBbeDogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBkYXRlTGlzdCB7XHJcbiAgICBwdWJsaWMgdXBkYXRlSXRlbXM6IElVcGRhdGVbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlbW92ZUl0ZW1zOiBJVXBkYXRlW10gPSBbXTtcclxuICAgIHB1YmxpYyBpc1BhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSxcclxuICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICBuID0gdGhpcy51cGRhdGVJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IG4gLSAxOyBpID4gLTE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMudXBkYXRlSXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICBpdGVtLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9ub3cgcmVtb3ZlIGl0ZW1zXHJcbiAgICAgICAgICAgIG4gPSB0aGlzLnJlbW92ZUl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKG4gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMucmVtb3ZlSXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXJnZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVJdGVtcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGl0ZW0sXHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIG4gPSB0aGlzLnVwZGF0ZUl0ZW1zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSBuIC0gMTsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtc1tpXSA9IHRoaXMudXBkYXRlSXRlbXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoaXRlbTogSVVwZGF0ZSk6IElVcGRhdGUge1xyXG4gICAgICAgIC8vZG9uJ3QgYWxsb3cgYWRkaW5nIG1vcmUgdGhhbiBvbmNlIVxyXG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZUl0ZW1zLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbXNbdGhpcy51cGRhdGVJdGVtcy5sZW5ndGhdID0gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZShpdGVtOiBJVXBkYXRlKTogSVVwZGF0ZSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVJdGVtc1t0aGlzLnJlbW92ZUl0ZW1zLmxlbmd0aF0gPSBpdGVtO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfcmVtb3ZlKGl0ZW06IElVcGRhdGUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudXBkYXRlSXRlbXMuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkgdGhpcy51cGRhdGVJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlSXRlbXMubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gUElYSTsiXSwic291cmNlUm9vdCI6IiJ9
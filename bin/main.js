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

/***/ "./src/Engine.ts":
/*!***********************!*\
  !*** ./src/Engine.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//kick start
document.addEventListener('DOMContentLoaded', function (event) {
    new Engine().start();
});


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
        this._events.on('screen', this.showScreen);
    }
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

/***/ "pixi.js":
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VuZ2luZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9Mb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvU2NyZWVuTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJQSVhJXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDUTtBQUNjO0FBQ1g7QUFDMUMsNkNBQTZDO0FBQzdDO0lBWUk7SUFFQSxDQUFDO0lBRU0sc0JBQUssR0FBWjtRQUNJLHdEQUF3RDtRQUN4RCxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENB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LENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3BFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLE1BQU0sQ0FBQztZQUMzQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQzdDLENBQUM7UUFkRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVNLHVCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQWhCYSxzQkFBYSxHQUFXLGVBQWUsQ0FBQztJQXVCMUQsZUFBQztDQUFBO0FBekJvQjs7Ozs7Ozs7Ozs7O0FDeEJyQixzQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvRW5naW5lLnRzXCIpO1xuIiwiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJ1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuL2NvcmUvTG9hZGVyJztcclxuaW1wb3J0IHsgU2NyZWVuTWFuYWdlciB9IGZyb20gJy4vY29yZS9TY3JlZW5NYW5hZ2VyJztcclxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL2NvcmUvU2V0dGluZ3MnXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL3BpeGkuanMuZC50c1wiIC8+XHJcbmNsYXNzIEVuZ2luZSB7XHJcblxyXG4gICAgcHVibGljIGFwcDogUElYSS5BcHBsaWNhdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgc2V0dGluZ3M6IFNldHRpbmdzO1xyXG5cclxuICAgIHB1YmxpYyBldmVudHM6IFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyO1xyXG5cclxuICAgIHB1YmxpYyBsb2FkZXI6IExvYWRlcjtcclxuXHJcbiAgICBwdWJsaWMgc2NyZWVuTWFuYWdlcjogU2NyZWVuTWFuYWdlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vcHJvYmFibHkgd2FudCB0byB1c2UgdGhlIHBpeGkgbG9hZGVyIGZvciBldmVyeXRoaW5nLi4uXHJcbiAgICAgICAgLy9zbyBjcmVhdGUgdGhlIGFwcCBzdHJhaWdodCBhd2F5XHJcbiAgICAgICAgdGhpcy5hcHAgPSB0aGlzLl9jcmVhdGVQaXhpQXBwKClcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB0aGlzLl9jcmVhdGVFdmVudHMoKTtcclxuICAgICAgICAvL2xvYWQgdGhlIGNvbmZpZ1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3ModGhpcy5hcHAubG9hZGVyLCB0aGlzLmV2ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJlc291cmNlKGlkOiBzdHJpbmcpOiB1bmtub3duIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHAubG9hZGVyLnJlc291cmNlc1tpZF0uZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbmZpZyBoYXMgbm93IGxvYWRlZFxyXG4gICAgcHJpdmF0ZSBidWlsZCgpOiB2b2lkIHtcclxuICAgICAgICAvL3VwZGF0ZSB0aGUgYXBwIHdpdGggdGhlIGxvYWRlZCBzZXR0aW5nc1xyXG4gICAgICAgIHRoaXMuYXBwLnJlbmRlcmVyLnJlc2l6ZSh0aGlzLnNldHRpbmdzLnNpemUud2lkdGgsIHRoaXMuc2V0dGluZ3Muc2l6ZS5oZWlnaHQpXHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHRoZSBsb2FkZXJcclxuICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBMb2FkZXIodGhpcy5hcHAubG9hZGVyLCB0aGlzLmV2ZW50cywgdGhpcy5zZXR0aW5ncylcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgdXBkYXRlIGxvb3BcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgc2NyZWVuIG1hbmFnZXJcclxuICAgICAgICB0aGlzLnNjcmVlbk1hbmFnZXIgPSB0aGlzLl9jcmVhdGVTY3JlZW5NYW5hZ2VyKCk7XHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHR3ZWVuIG1hbmFnZXJcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgc291bmQgbWFuYWdlciAocmV3cml0ZSBpdClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVTY3JlZW5NYW5hZ2VyKCk6IFNjcmVlbk1hbmFnZXIge1xyXG4gICAgICAgIGNvbnN0IHNjcmVlbk1hbmFnZXIgPSBuZXcgU2NyZWVuTWFuYWdlcih0aGlzLmV2ZW50cywgdGhpcy5zZXR0aW5ncy5zaXplKVxyXG4gICAgICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHNjcmVlbk1hbmFnZXIucm9vdClcclxuICAgICAgICByZXR1cm4gc2NyZWVuTWFuYWdlcjtcclxuICAgIH0gICBcclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVFdmVudHMoKTogUElYSS51dGlscy5FdmVudEVtaXR0ZXIge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IG5ldyBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgICAgICBldmVudHMub24oU2V0dGluZ3MuQ09ORklHX0xPQURFRCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbmZpZyBpcyBsb2FkZWQgLSBub3cgYnVpbGQgdGhlIGVuZ2luZVxyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkKCk7XHJcbiAgICAgICAgICAgIC8vbG9hZCBnbG9iYWwgYXNzZXRzXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmxvYWRHbG9iYWwoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBldmVudHMub24oTG9hZGVyLkdMT0JBTF9BU1NFVFNfTE9BREVELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vbm93IHNob3cgZmlyc3Qgc2NyZWVuXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZXZlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVBpeGlBcHAoKTogUElYSS5BcHBsaWNhdGlvbiB7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQSVhJLkFwcGxpY2F0aW9uKHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3NjgsIHdpZHRoOiAxMDI0LFxyXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgdmlldyxcclxuICAgICAgICAgICAgZm9yY2VDYW52YXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc29sdXRpb246IDFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuLy9raWNrIHN0YXJ0XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcclxuICAgIG5ldyBFbmdpbmUoKS5zdGFydCgpO1xyXG59KTsiLCJcclxuXHJcbmltcG9ydCB7IElBc3NldCwgSUFzc2V0cywgU2V0dGluZ3MgfSBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG4vL2Fzc2V0IGxvYWRlclxyXG5leHBvcnQgY2xhc3MgTG9hZGVyIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdMT0JBTF9BU1NFVFNfTE9BREVEOiBzdHJpbmcgPSAnZ2xvYmFsLWFzc2V0cy1sb2FkZWQnO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9sb2FkZXI6IFBJWEkuTG9hZGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2V2ZW50czogUElYSS51dGlscy5FdmVudEVtaXR0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfc2V0dGluZ3M6IFNldHRpbmdzXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRHbG9iYWwoKTogdm9pZCB7XHJcbiAgICAgICAgLy9sb2FkIGl0ZW1zIGZyb20gdGhlIGdsb2JhbCBsaXN0XHJcbiAgICAgICAgdGhpcy5sb2FkQXNzZXRzKHRoaXMuX3NldHRpbmdzLmFzc2V0cy5nbG9iYWwpXHJcbiAgICAgICAgdGhpcy5fbG9hZGVyLm9uQ29tcGxldGUub25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWwgYXNzZXRzIGxvYWRlZCcpXHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5lbWl0KExvYWRlci5HTE9CQUxfQVNTRVRTX0xPQURFRClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkQXNzZXRzKGFzc2V0czogSUFzc2V0W10sIGxvYWQgPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYXNzZXQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuYWRkKGFzc2V0LmlkLCBhc3NldC5zcmMpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAobG9hZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFNjcmVlbihzY3JlZW5JZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgLy9UT0RPXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tIFwiLi9TY3JlZW5cIjtcclxuaW1wb3J0IHsgSVNpemUgfSBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbk1hbmFnZXIge1xyXG5cclxuICAgIHB1YmxpYyByb290OiBQSVhJLkNvbnRhaW5lcjtcclxuXHJcbiAgICBwdWJsaWMgY3VycmVudFNjcmVlbjogU2NyZWVuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2V2ZW50czogUElYSS51dGlscy5FdmVudEVtaXR0ZXIsIHByaXZhdGUgX3NpemU6IElTaXplKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucm9vdC5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB0aGlzLl9zaXplLmhlaWdodCAvIDJcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMuX2V2ZW50cy5vbignc2NyZWVuJywgdGhpcy5zaG93U2NyZWVuKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93U2NyZWVuID0gKFNjcmVlblR5cGUpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmRpc3Bvc2VTY3JlZW4oKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW4gPSB0aGlzLl9jcmVhdGVTY3JlZW4oU2NyZWVuVHlwZSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVTY3JlZW4oU2NyZWVuVHlwZSk6IFNjcmVlbiB7XHJcbiAgICAgICAgY29uc3Qgc2NyZWVuID0gPFNjcmVlbj5uZXcgU2NyZWVuVHlwZSgpO1xyXG4gICAgICAgIHRoaXMucm9vdC5hZGRDaGlsZChzY3JlZW4pO1xyXG4gICAgICAgIHJldHVybiBzY3JlZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvL1RPRE8gLSBrZWVwIHJvb3QgY2VudGVyZWQ/IE9yIG1heWJlIG5vdCBuZWVkZWQuLi5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZVNjcmVlbigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NyZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjcmVlbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjcmVlbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy9pbnRlcmZhY2UgZm9yIHRoZSBjb25maWdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFzc2V0IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBzcmM6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2l6ZSB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFzc2V0cyB7XHJcbiAgICBnbG9iYWw6IElBc3NldFtdO1xyXG4gICAgc2NlbmU6IHtcclxuICAgICAgICBbc2NlbmVJZDogc3RyaW5nXTogSUFzc2V0W107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpZyB7XHJcbiAgICBhc3NldHM6IElBc3NldHM7XHJcbiAgICBzaXplOiBJU2l6ZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzIGltcGxlbWVudHMgSUNvbmZpZyB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDT05GSUdfTE9BREVEOiBzdHJpbmcgPSAnY29uZmlnLWxvYWRlZCc7XHJcblxyXG4gICAgcHVibGljIGNvbmZpZ1BhdGg6IHN0cmluZyA9ICdqc29uL2NvbmZpZy5qc29uJ1xyXG5cclxuICAgIHB1YmxpYyBhc3NldHM6IElBc3NldHM7XHJcbiAgICBwdWJsaWMgc2l6ZTogSVNpemUgPSB7d2lkdGg6IDEzMzQsIGhlaWdodDogNzUwfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2FkZXI6IFBJWEkuTG9hZGVyLCBwcml2YXRlIF9ldmVudHM6IFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWQoKTogU2V0dGluZ3Mge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlci5hZGQoJ2NvbmZpZycsIHRoaXMuY29uZmlnUGF0aCk7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyLm9uQ29tcGxldGUub25jZSh0aGlzLl9jb25maWdMb2FkZWQpXHJcbiAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jb25maWdMb2FkZWQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgY29uZmlnOiBJQ29uZmlnID0gPElDb25maWc+dGhpcy5fbG9hZGVyLnJlc291cmNlcy5jb25maWcuZGF0YTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZylcclxuICAgICAgICB0aGlzLl9ldmVudHMuZW1pdChTZXR0aW5ncy5DT05GSUdfTE9BREVEKVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBQSVhJOyJdLCJzb3VyY2VSb290IjoiIn0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VuZ2luZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9Mb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvU2NyZWVuTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJQSVhJXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDUTtBQUNjO0FBQ1g7QUFDMUMsNkNBQTZDO0FBQzdDO0lBWUk7SUFFQSxDQUFDO0lBRU0sc0JBQUssR0FBWjtRQUNJLHdEQUF3RDtRQUN4RCxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENB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LENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3BFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLE1BQU0sQ0FBQztZQUMzQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQzdDLENBQUM7UUFkRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVNLHVCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQWhCYSxzQkFBYSxHQUFXLGVBQWUsQ0FBQztJQXVCMUQsZUFBQztDQUFBO0FBekJvQjs7Ozs7Ozs7Ozs7O0FDeEJyQixzQiIsImZpbGUiOiJlbmdpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9FbmdpbmUudHNcIik7XG4iLCJpbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnXHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4vY29yZS9Mb2FkZXInO1xyXG5pbXBvcnQgeyBTY3JlZW5NYW5hZ2VyIH0gZnJvbSAnLi9jb3JlL1NjcmVlbk1hbmFnZXInO1xyXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4vY29yZS9TZXR0aW5ncydcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvcGl4aS5qcy5kLnRzXCIgLz5cclxuY2xhc3MgRW5naW5lIHtcclxuXHJcbiAgICBwdWJsaWMgYXBwOiBQSVhJLkFwcGxpY2F0aW9uO1xyXG5cclxuICAgIHB1YmxpYyBzZXR0aW5nczogU2V0dGluZ3M7XHJcblxyXG4gICAgcHVibGljIGV2ZW50czogUElYSS51dGlscy5FdmVudEVtaXR0ZXI7XHJcblxyXG4gICAgcHVibGljIGxvYWRlcjogTG9hZGVyO1xyXG5cclxuICAgIHB1YmxpYyBzY3JlZW5NYW5hZ2VyOiBTY3JlZW5NYW5hZ2VyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgLy9wcm9iYWJseSB3YW50IHRvIHVzZSB0aGUgcGl4aSBsb2FkZXIgZm9yIGV2ZXJ5dGhpbmcuLi5cclxuICAgICAgICAvL3NvIGNyZWF0ZSB0aGUgYXBwIHN0cmFpZ2h0IGF3YXlcclxuICAgICAgICB0aGlzLmFwcCA9IHRoaXMuX2NyZWF0ZVBpeGlBcHAoKVxyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHRoaXMuX2NyZWF0ZUV2ZW50cygpO1xyXG4gICAgICAgIC8vbG9hZCB0aGUgY29uZmlnXHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5ldyBTZXR0aW5ncyh0aGlzLmFwcC5sb2FkZXIsIHRoaXMuZXZlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVzb3VyY2UoaWQ6IHN0cmluZyk6IHVua25vd24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcC5sb2FkZXIucmVzb3VyY2VzW2lkXS5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY29uZmlnIGhhcyBub3cgbG9hZGVkXHJcbiAgICBwcml2YXRlIGJ1aWxkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vdXBkYXRlIHRoZSBhcHAgd2l0aCB0aGUgbG9hZGVkIHNldHRpbmdzXHJcbiAgICAgICAgdGhpcy5hcHAucmVuZGVyZXIucmVzaXplKHRoaXMuc2V0dGluZ3Muc2l6ZS53aWR0aCwgdGhpcy5zZXR0aW5ncy5zaXplLmhlaWdodClcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgdGhlIGxvYWRlclxyXG4gICAgICAgIHRoaXMubG9hZGVyID0gbmV3IExvYWRlcih0aGlzLmFwcC5sb2FkZXIsIHRoaXMuZXZlbnRzLCB0aGlzLnNldHRpbmdzKVxyXG5cclxuICAgICAgICAvL2NyZWF0ZSB1cGRhdGUgbG9vcFxyXG5cclxuICAgICAgICAvL2NyZWF0ZSBzY3JlZW4gbWFuYWdlclxyXG4gICAgICAgIHRoaXMuc2NyZWVuTWFuYWdlciA9IHRoaXMuX2NyZWF0ZVNjcmVlbk1hbmFnZXIoKTtcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgdHdlZW4gbWFuYWdlclxyXG5cclxuICAgICAgICAvL2NyZWF0ZSBzb3VuZCBtYW5hZ2VyIChyZXdyaXRlIGl0KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVNjcmVlbk1hbmFnZXIoKTogU2NyZWVuTWFuYWdlciB7XHJcbiAgICAgICAgY29uc3Qgc2NyZWVuTWFuYWdlciA9IG5ldyBTY3JlZW5NYW5hZ2VyKHRoaXMuZXZlbnRzLCB0aGlzLnNldHRpbmdzLnNpemUpXHJcbiAgICAgICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQoc2NyZWVuTWFuYWdlci5yb290KVxyXG4gICAgICAgIHJldHVybiBzY3JlZW5NYW5hZ2VyO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZUV2ZW50cygpOiBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlciB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gbmV3IFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgICAgIGV2ZW50cy5vbihTZXR0aW5ncy5DT05GSUdfTE9BREVELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uZmlnIGlzIGxvYWRlZCAtIG5vdyBidWlsZCB0aGUgZW5naW5lXHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGQoKTtcclxuICAgICAgICAgICAgLy9sb2FkIGdsb2JhbCBhc3NldHNcclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIubG9hZEdsb2JhbCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGV2ZW50cy5vbihMb2FkZXIuR0xPQkFMX0FTU0VUU19MT0FERUQsICgpID0+IHtcclxuICAgICAgICAgICAgLy9ub3cgc2hvdyBmaXJzdCBzY3JlZW5cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlUGl4aUFwcCgpOiBQSVhJLkFwcGxpY2F0aW9uIHtcclxuICAgICAgICBjb25zdCB2aWV3ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuICAgICAgICByZXR1cm4gbmV3IFBJWEkuQXBwbGljYXRpb24oe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDc2OCwgd2lkdGg6IDEwMjQsXHJcbiAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICB2aWV3LFxyXG4gICAgICAgICAgICBmb3JjZUNhbnZhczogZmFsc2UsXHJcbiAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgICAgICAgcmVzb2x1dGlvbjogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4vL2tpY2sgc3RhcnRcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xyXG4gICAgbmV3IEVuZ2luZSgpLnN0YXJ0KCk7XHJcbn0pOyIsIlxyXG5cclxuaW1wb3J0IHsgSUFzc2V0LCBJQXNzZXRzLCBTZXR0aW5ncyB9IGZyb20gXCIuL1NldHRpbmdzXCI7XHJcbi8vYXNzZXQgbG9hZGVyXHJcbmV4cG9ydCBjbGFzcyBMb2FkZXIge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR0xPQkFMX0FTU0VUU19MT0FERUQ6IHN0cmluZyA9ICdnbG9iYWwtYXNzZXRzLWxvYWRlZCc7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2xvYWRlcjogUElYSS5Mb2FkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfZXZlbnRzOiBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlcixcclxuICAgICAgICBwcml2YXRlIF9zZXR0aW5nczogU2V0dGluZ3NcclxuICAgICkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEdsb2JhbCgpOiB2b2lkIHtcclxuICAgICAgICAvL2xvYWQgaXRlbXMgZnJvbSB0aGUgZ2xvYmFsIGxpc3RcclxuICAgICAgICB0aGlzLmxvYWRBc3NldHModGhpcy5fc2V0dGluZ3MuYXNzZXRzLmdsb2JhbClcclxuICAgICAgICB0aGlzLl9sb2FkZXIub25Db21wbGV0ZS5vbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbCBhc3NldHMgbG9hZGVkJylcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmVtaXQoTG9hZGVyLkdMT0JBTF9BU1NFVFNfTE9BREVEKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRBc3NldHMoYXNzZXRzOiBJQXNzZXRbXSwgbG9hZCA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICBhc3NldHMuZm9yRWFjaChhc3NldCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5hZGQoYXNzZXQuaWQsIGFzc2V0LnNyYylcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChsb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkU2NyZWVuKHNjcmVlbklkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAvL1RPRE9cclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjcmVlbiB9IGZyb20gXCIuL1NjcmVlblwiO1xyXG5pbXBvcnQgeyBJU2l6ZSB9IGZyb20gXCIuL1NldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NyZWVuTWFuYWdlciB7XHJcblxyXG4gICAgcHVibGljIHJvb3Q6IFBJWEkuQ29udGFpbmVyO1xyXG5cclxuICAgIHB1YmxpYyBjdXJyZW50U2NyZWVuOiBTY3JlZW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXZlbnRzOiBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlciwgcHJpdmF0ZSBfc2l6ZTogSVNpemUpIHtcclxuICAgICAgICB0aGlzLnJvb3QgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb290LnBvc2l0aW9uLnNldChcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUuaGVpZ2h0IC8gMlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLm9uKCdzY3JlZW4nLCB0aGlzLnNob3dTY3JlZW4pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dTY3JlZW4gPSAoU2NyZWVuVHlwZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlzcG9zZVNjcmVlbigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3VycmVudFNjcmVlbiA9IHRoaXMuX2NyZWF0ZVNjcmVlbihTY3JlZW5UeXBlKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVNjcmVlbihTY3JlZW5UeXBlKTogU2NyZWVuIHtcclxuICAgICAgICBjb25zdCBzY3JlZW4gPSA8U2NyZWVuPm5ldyBTY3JlZW5UeXBlKCk7XHJcbiAgICAgICAgdGhpcy5yb290LmFkZENoaWxkKHNjcmVlbik7XHJcbiAgICAgICAgcmV0dXJuIHNjcmVlbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vVE9ETyAtIGtlZXAgcm9vdCBjZW50ZXJlZD8gT3IgbWF5YmUgbm90IG5lZWRlZC4uLlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlU2NyZWVuKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTY3JlZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NyZWVuLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NyZWVuID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvL2ludGVyZmFjZSBmb3IgdGhlIGNvbmZpZ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXNzZXQge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHNyYzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTaXplIHtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXNzZXRzIHtcclxuICAgIGdsb2JhbDogSUFzc2V0W107XHJcbiAgICBzY2VuZToge1xyXG4gICAgICAgIFtzY2VuZUlkOiBzdHJpbmddOiBJQXNzZXRbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlnIHtcclxuICAgIGFzc2V0czogSUFzc2V0cztcclxuICAgIHNpemU6IElTaXplO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3MgaW1wbGVtZW50cyBJQ29uZmlnIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENPTkZJR19MT0FERUQ6IHN0cmluZyA9ICdjb25maWctbG9hZGVkJztcclxuXHJcbiAgICBwdWJsaWMgY29uZmlnUGF0aDogc3RyaW5nID0gJ2pzb24vY29uZmlnLmpzb24nXHJcblxyXG4gICAgcHVibGljIGFzc2V0czogSUFzc2V0cztcclxuICAgIHB1YmxpYyBzaXplOiBJU2l6ZSA9IHt3aWR0aDogMTMzNCwgaGVpZ2h0OiA3NTB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvYWRlcjogUElYSS5Mb2FkZXIsIHByaXZhdGUgX2V2ZW50czogUElYSS51dGlscy5FdmVudEVtaXR0ZXIpIHtcclxuICAgICAgICB0aGlzLmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZCgpOiBTZXR0aW5ncyB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyLmFkZCgnY29uZmlnJywgdGhpcy5jb25maWdQYXRoKTtcclxuICAgICAgICB0aGlzLl9sb2FkZXIub25Db21wbGV0ZS5vbmNlKHRoaXMuX2NvbmZpZ0xvYWRlZClcclxuICAgICAgICB0aGlzLl9sb2FkZXIubG9hZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NvbmZpZ0xvYWRlZCA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBjb25maWc6IElDb25maWcgPSA8SUNvbmZpZz50aGlzLl9sb2FkZXIucmVzb3VyY2VzLmNvbmZpZy5kYXRhO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKVxyXG4gICAgICAgIHRoaXMuX2V2ZW50cy5lbWl0KFNldHRpbmdzLkNPTkZJR19MT0FERUQpXHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFBJWEk7Il0sInNvdXJjZVJvb3QiOiIifQ==
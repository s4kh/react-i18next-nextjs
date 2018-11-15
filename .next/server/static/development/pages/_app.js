module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/hera/config.js":
/*!****************************!*\
  !*** ./lib/hera/config.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* User Settings - feel free to change */
var DEFAULT_LANGUAGE = "en";
var OTHER_LANGUAGES = ["fr", "de"];
var DEFAULT_NAMESPACE = "common";
var LOCALE_PATH = "locales";
var LOCALE_STRUCTURE = "{{lng}}/{{ns}}"; // const LOCALE_SUBPATHS = true;

/* Core Settings - only change if you understand what you're changing */

var config = {
  translation: {
    allLanguages: OTHER_LANGUAGES.concat([DEFAULT_LANGUAGE]),
    defaultLanguage: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    load: "languageOnly",
    localesPath: "./lib/hera/".concat(LOCALE_PATH, "/"),
    // localeSubpaths: LOCALE_SUBPATHS,
    ns: [DEFAULT_NAMESPACE],
    defaultNS: DEFAULT_NAMESPACE,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
      format: function format(value, _format) {
        return _format === "uppercase" ? value.toUpperCase() : value;
      }
    },
    detection: {
      order: ["cookie"],
      caches: ["cookie"]
    },
    backend: {
      loadPath: "".concat(LOCALE_PATH, "/").concat(LOCALE_STRUCTURE, ".json"),
      addPath: "".concat(LOCALE_PATH, "/").concat(LOCALE_STRUCTURE, ".missing.json")
    },
    react: {
      wait: true
    }
  }
};
/* SSR Settings - only change if you understand what you're changing */

if (true) {
  var path = __webpack_require__(/*! path */ "path");

  var getAllNamespaces = function getAllNamespaces(p) {
    return fs.readdirSync(p).map(function (file) {
      return file.replace(".json", "");
    });
  };

  config.translation = _objectSpread({}, config.translation, {
    preload: config.translation.allLanguages,
    ns: ["common"],
    detection: {
      order: ["xLangDetector"]
    },
    backend: {
      loadPath: path.join(__dirname, "".concat(LOCALE_PATH, "/").concat(LOCALE_STRUCTURE, ".json")),
      addPath: path.join(__dirname, "".concat(LOCALE_PATH, "/").concat(LOCALE_STRUCTURE, ".missing.json"))
    }
  });
}

module.exports = config;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./lib/hera/i18n.js":
/*!**************************!*\
  !*** ./lib/hera/i18n.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var i18next = __webpack_require__(/*! i18next */ "i18next");

var i18nextXHRBackend = __webpack_require__(/*! i18next-xhr-backend */ "i18next-xhr-backend");

var i18nextBrowserLanguageDetector = __webpack_require__(/*! i18next-browser-languagedetector */ "i18next-browser-languagedetector");

var config = __webpack_require__(/*! ./config */ "./lib/hera/config.js");

var i18n = i18next.default ? i18next.default : i18next;
i18n.nsFromReactTree = [];

if (false) {} else {
  // Clientside i18n setup
  var i18nextNodeBackend = __webpack_require__(/*! i18next-node-fs-backend */ "i18next-node-fs-backend");

  var i18nextMiddleware = __webpack_require__(/*! i18next-express-middleware */ "i18next-express-middleware");

  var lngDetector = new i18nextMiddleware.LanguageDetector();
  lngDetector.addDetector({
    name: "xLangDetector",
    lookup: function lookup(req) {
      // options -> are passed in options
      return req.boot.lang;
    }
  });
  i18n.use(i18nextNodeBackend).use(lngDetector);
}

if (!i18n.isInitialized) {
  /*
     This is the only place `init` should be called.
    We can therefore expect this module to always
    export an already-initialised i18n instance,
    and save ourselves any potential confusion.
  */
  console.log("> initializing i18next");
  i18n.init(config.translation);
} // a simple helper to getInitialProps passed on loaded i18next data


i18n.getInitialProps = function (req, namespaces) {
  if (!namespaces) namespaces = i18n.options.defaultNS;
  if (typeof namespaces === "string") namespaces = [namespaces];

  req.i18n.toJSON = function () {
    return null;
  }; // do not serialize i18next instance and send to client


  var initialI18nStore = {};
  req.i18n.languages.forEach(function (l) {
    initialI18nStore[l] = {};
    namespaces.forEach(function (ns) {
      initialI18nStore[l][ns] = (req.i18n.services.resourceStore.data[l] || {})[ns] || {};
    });
  });
  return {
    i18n: req.i18n,
    // use the instance on req - fixed language on request (avoid issues in race conditions with lngs of different users)
    initialI18nStore: initialI18nStore,
    initialLanguage: req.i18n.language
  };
};

module.exports = i18n;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_hera_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/hera/i18n */ "./lib/hera/i18n.js");
/* harmony import */ var _lib_hera_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_hera_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    foo: ""
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "FOO":
      return _objectSpread({}, state, {
        foo: action.payload
      });

    default:
      return state;
  }
};

var makeStore = function makeStore(initialState, options) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(reducer, initialState);
};

var VoyageXApp =
/*#__PURE__*/
function (_App) {
  _inherits(VoyageXApp, _App);

  function VoyageXApp() {
    _classCallCheck(this, VoyageXApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(VoyageXApp).apply(this, arguments));
  }

  _createClass(VoyageXApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;

      var _ref = pageProps || {},
          i18n = _ref.i18n,
          initialI18nStore = _ref.initialI18nStore,
          initialLanguage = _ref.initialLanguage;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_6__["I18nextProvider"], {
        i18n: i18n || _lib_hera_i18n__WEBPACK_IMPORTED_MODULE_5___default.a,
        initialI18nStore: initialI18nStore,
        initialLanguage: initialLanguage
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps))));
    }
  }]);

  return VoyageXApp;
}(next_app__WEBPACK_IMPORTED_MODULE_1___default.a);

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default()(makeStore, {
  debug: false
})(VoyageXApp));

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),

/***/ "i18next-browser-languagedetector":
/*!***************************************************!*\
  !*** external "i18next-browser-languagedetector" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),

/***/ "i18next-express-middleware":
/*!*********************************************!*\
  !*** external "i18next-express-middleware" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next-express-middleware");

/***/ }),

/***/ "i18next-node-fs-backend":
/*!******************************************!*\
  !*** external "i18next-node-fs-backend" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next-node-fs-backend");

/***/ }),

/***/ "i18next-xhr-backend":
/*!**************************************!*\
  !*** external "i18next-xhr-backend" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next-xhr-backend");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map
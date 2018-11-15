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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./lib/hera/utils/index.js":
/*!*********************************!*\
  !*** ./lib/hera/utils/index.js ***!
  \*********************************/
/*! exports provided: withI18next, withPage, isServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageUtil */ "./lib/hera/utils/pageUtil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPage", function() { return _pageUtil__WEBPACK_IMPORTED_MODULE_0__["withPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return _pageUtil__WEBPACK_IMPORTED_MODULE_0__["isServer"]; });

/* harmony import */ var _withI18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withI18next */ "./lib/hera/utils/withI18next.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withI18next", function() { return _withI18next__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./lib/hera/utils/pageUtil.js":
/*!************************************!*\
  !*** ./lib/hera/utils/pageUtil.js ***!
  \************************************/
/*! exports provided: withPage, isServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPage", function() { return withPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withI18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withI18next */ "./lib/hera/utils/withI18next.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function prepareGetInitialProps(original) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var bootRes, originalResult;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                bootRes = {}; // Do some async call

                originalResult = {};

                if (!original) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return original(Object.assign({}, props, {
                  boot: bootRes
                }));

              case 5:
                originalResult = _context.sent;

              case 6:
                return _context.abrupt("return", Object.assign({}, originalResult, bootRes));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

function withPage(mapStateToProps, mapDispatchToProps) {
  var namespaces = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  namespaces.push("common");
  return function (page) {
    page.getInitialProps = prepareGetInitialProps(page.getInitialProps, namespaces);
    var withT = Object(_withI18next__WEBPACK_IMPORTED_MODULE_2__["default"])(namespaces)(page);
    return Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(withT);
  };
}
var isServer = function isServer() {
  return !(typeof window !== "undefined" && window.document);
};

/***/ }),

/***/ "./lib/hera/utils/withI18next.js":
/*!***************************************!*\
  !*** ./lib/hera/utils/withI18next.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n */ "./lib/hera/i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var namespaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["common"];
  return function (ComposedComponent) {
    var Extended = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["withNamespaces"])(namespaces, {
      wait: false
    })(ComposedComponent);

    Extended.getInitialProps =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        var composedInitialProps, i18nInitialProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!ComposedComponent.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return ComposedComponent.getInitialProps(ctx);

              case 3:
                _context.t0 = _context.sent;
                _context.next = 7;
                break;

              case 6:
                _context.t0 = {};

              case 7:
                composedInitialProps = _context.t0;
                i18nInitialProps = ctx.req ? _i18n__WEBPACK_IMPORTED_MODULE_2___default.a.getInitialProps(ctx.req, namespaces) : {};
                return _context.abrupt("return", _objectSpread({}, composedInitialProps, i18nInitialProps));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return Extended;
  };
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hera_utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/hera/utils/index */ "./lib/hera/utils/index.js");



var IndexPage = function IndexPage(_ref) {
  var query = _ref.query,
      t = _ref.t;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-default"
  }, t("common:faq_title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, query));
};

IndexPage.getInitialProps = function () {
  return {
    query: "eefe"
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_hera_utils_index__WEBPACK_IMPORTED_MODULE_1__["withI18next"])([])(IndexPage));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
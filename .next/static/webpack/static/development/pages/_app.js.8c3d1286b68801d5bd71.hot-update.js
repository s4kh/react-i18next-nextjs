webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/hera/config.js":
/*!****************************!*\
  !*** ./lib/hera/config.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

if (false) { var getAllNamespaces, fs, path; }

module.exports = config;

/***/ })

})
//# sourceMappingURL=_app.js.8c3d1286b68801d5bd71.hot-update.js.map
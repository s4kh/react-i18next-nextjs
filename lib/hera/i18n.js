const i18next = require("i18next");
const i18nextXHRBackend = require("i18next-xhr-backend");
const i18nextBrowserLanguageDetector = require("i18next-browser-languagedetector");

const config = require("./config");

const i18n = i18next.default ? i18next.default : i18next;
i18n.nsFromReactTree = [];

if (process.browser) {
  // Serverside i18n setup
  i18n.use(i18nextXHRBackend).use(i18nextBrowserLanguageDetector);
} else {
  // Clientside i18n setup
  const i18nextNodeBackend = require("i18next-node-fs-backend");
  const i18nextMiddleware = require("i18next-express-middleware");
  const lngDetector = new i18nextMiddleware.LanguageDetector();
  lngDetector.addDetector({
    name: "xLangDetector",

    lookup(req) {
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
}

module.exports = i18n;

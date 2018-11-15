/* User Settings - feel free to change */
const DEFAULT_LANGUAGE = "en";
const OTHER_LANGUAGES = ["fr", "de"];
const DEFAULT_NAMESPACE = "common";
const LOCALE_PATH = "locales";
const LOCALE_STRUCTURE = "{{lng}}/{{ns}}";
// const LOCALE_SUBPATHS = true;

/* Core Settings - only change if you understand what you're changing */
const config = {
  translation: {
    allLanguages: OTHER_LANGUAGES.concat([DEFAULT_LANGUAGE]),
    defaultLanguage: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    load: "languageOnly",
    localesPath: `./lib/hera/${LOCALE_PATH}/`,
    // localeSubpaths: LOCALE_SUBPATHS,
    ns: [DEFAULT_NAMESPACE],
    defaultNS: DEFAULT_NAMESPACE,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
      format: (value, format) =>
        format === "uppercase" ? value.toUpperCase() : value
    },
    detection: {
      order: ["cookie"],
      caches: ["cookie"]
    },
    backend: {
      loadPath: `${LOCALE_PATH}/${LOCALE_STRUCTURE}.json`,
      addPath: `${LOCALE_PATH}/${LOCALE_STRUCTURE}.missing.json`
    },
    react: {
      wait: true
    }
  }
};

/* SSR Settings - only change if you understand what you're changing */
if (!process.browser) {
  const path = require("path");
  const fs = require("fs");

  const getAllNamespaces = p =>
    fs.readdirSync(p).map(file => file.replace(".json", ""));

  config.translation = {
    ...config.translation,
    preload: config.translation.allLanguages,
    ns: getAllNamespaces(`${config.translation.localesPath}${config.translation.defaultLanguage}`),
    detection: {
      order: ["xLangDetector"]
    },
    backend: {
      loadPath: path.join(__dirname, `${LOCALE_PATH}/${LOCALE_STRUCTURE}.json`),
      addPath: path.join(
        __dirname,
        `${LOCALE_PATH}/${LOCALE_STRUCTURE}.missing.json`
      )
    }
  };
}

module.exports = config;

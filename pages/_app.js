import React from "react";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { createStore } from "redux";
import { Provider } from "react-redux";
import i18n from "../lib/hera/i18n";
import { I18nextProvider } from "react-i18next";

const reducer = (state = { foo: "" }, action) => {
  switch (action.type) {
    case "FOO":
      return { ...state, foo: action.payload };
    default:
      return state;
  }
};
const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};

class VoyageXApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // Recompile pre-existing pageProps
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Initiate vars to return
    const { req } = ctx;
    let initialI18nStore = {};
    let initialLanguage = null;

    // Load translations to serialize if we're serverside
    if (req && req.i18n) {
      [initialLanguage] = req.i18n.languages;
      i18n.language = initialLanguage;
      req.i18n.languages.forEach(l => {
        initialI18nStore[l] = {};
        i18n.nsFromReactTree.forEach(ns => {
          initialI18nStore[l][ns] = (req.i18n.services.resourceStore.data[l] || {})[ns] || {};
        });
      });
    } else {
      // Load newly-required translations if changing route clientside
      await Promise.all(
        i18n.nsFromReactTree
          .filter(ns => !i18n.hasResourceBundle(i18n.languages[0], ns))
          .map(ns => new Promise(resolve => i18n.loadNamespaces(ns, () => resolve())))
      );
      initialI18nStore = i18n.store.data;
      initialLanguage = i18n.language;
    }

    // `pageProps` will get serialized automatically by NextJs
    return {
      pageProps: {
        initialI18nStore,
        initialLanguage,
        ...pageProps,
      },
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    let { initialLanguage, initialI18nStore } = pageProps;
    if (!process.browser) {
      initialLanguage = i18n.language;
      initialI18nStore = i18n.store.data;
    }
    return (
      <Container>
        <I18nextProvider
          i18n={i18n}
          initialI18nStore={initialI18nStore}
          initialLanguage={initialLanguage}
        >
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </I18nextProvider>
      </Container>
    );
  }
}

export default withRedux(makeStore, { debug: false })(VoyageXApp);

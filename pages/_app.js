import React from "react";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { createStore } from "redux";
import { Provider } from "react-redux";
import initialI18nInstance from "../lib/hera/i18n";
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
  render() {
    const { Component, pageProps, store } = this.props;
    const { i18n, initialI18nStore, initialLanguage } = pageProps || {};
    return (
      <Container>
        <I18nextProvider
          i18n={i18n || initialI18nInstance}
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

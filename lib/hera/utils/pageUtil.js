import { connect } from "react-redux";
import withI18next from "./withI18next";

function prepareGetInitialProps(original) {
  return async props => {
    const bootRes = {}; // Do some async call
    let originalResult = {};
    if (original) {
      originalResult = await original(
        Object.assign({}, props, { boot: bootRes })
      );
    }
    return Object.assign({}, originalResult, bootRes);
  };
}

export function withPage(mapStateToProps, mapDispatchToProps, namespaces = []) {
  namespaces.push("common");
  return page => {
    page.getInitialProps = prepareGetInitialProps(
      page.getInitialProps,
      namespaces
    );
    const withT = withI18next(namespaces)(page);
    return connect(
      mapStateToProps,
      mapDispatchToProps
    )(withT);
  };
}

export const isServer = () =>
  !(typeof window !== "undefined" && window.document);

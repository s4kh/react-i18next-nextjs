import React from "react";
import { withI18next } from "../lib/hera/utils/index";

const IndexPage = ({ query, t }) => (
  <div>
    <button type="button" className="btn btn-default">
      {t("common:faq_title")}
    </button>
    <span>{query}</span>
  </div>
);

IndexPage.getInitialProps = () => ({
  query: "eefe"
});

export default withI18next([])(IndexPage);

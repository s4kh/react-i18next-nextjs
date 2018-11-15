import React from "react";
import { withPage } from "../lib/hera/utils";

const IndexPage = ({ query, t }) => (
  <div>
    <button type="button" className="btn btn-default">
      {t("common:delete")}
    </button>
    <span>{query}</span>
  </div>
);

IndexPage.getInitialProps = () => ({
  query: "eefe"
});

export default withPage(null, null, [])(IndexPage);

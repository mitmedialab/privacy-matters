import React from "react";
import Layout from "./layout";
import isEnabled, { ACCESS } from "../utils/featureFlags";

import NavBar from "./navbar";
import PolicyHeader from "./policy-header";
import PolicyMain from "./policy-main";
import Reactions from "./reactions";
import ReactionsHeader from "./reactions-header";
import SEO from "./seo";

const Policy = ({ policy }) => {
  if (isEnabled(ACCESS)) {
    return (
      <>
        <SEO />
        <div className="privacy-page">
          <NavBar showHome />
          <PolicyHeader policy={policy} />
          <Layout>
            <PolicyMain policy={policy} />
          </Layout>
          <ReactionsHeader policy={policy} />
          <Layout footer>
            <Reactions policy={policy} />
          </Layout>
        </div>
      </>
    );
  } else {
    return (
      <>
        <p>TBD</p>
      </>
    );
  }
};

export default Policy;

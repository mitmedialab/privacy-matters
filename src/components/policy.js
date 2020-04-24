import React from "react";
import Layout from "./layout";

import NavBar from "./navbar";
import PolicyHeader from "./policy-header";
import PolicyMain from "./policy-main";
import Reactions from "./reactions";
import ReactionsHeader from "./reactions-header";
import SEO from "./seo";

const Policy = ({ policy }) => {
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
};

export default Policy;

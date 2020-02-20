import React from "react";
import Layout from "./layout";
import isEnabled, { ACCESS } from "../utils/featureFlags";

import NavBar from "./navbar";
import PolicyHeader from "./policy-header";
import PolicyMain from "./policy-main";

const Policy = ({ policy }) => {
  if (isEnabled(ACCESS)) {
    return (
      <>
        <NavBar showHome />
        <PolicyHeader policy={policy} />
        <Layout backgroundClass="policy-main-background">
          <PolicyMain policy={policy} />
        </Layout>
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

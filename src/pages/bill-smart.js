import React from "react";

import Layout from "../components/layout";
import Policy from "../components/policy";

import { SMART } from "../constants/policies";
import isEnabled, { ACCESS } from "../utils/featureFlags";

import "bootstrap/dist/css/bootstrap.min.css";

const SmartPage = () => {
  if (isEnabled(ACCESS)) {
    return (
      <Layout>
        <Policy policy={SMART} />
      </Layout>
    );
  } else {
    return (
      <>
        <p>TBD</p>
      </>
    );
  }
};

export default SmartPage;

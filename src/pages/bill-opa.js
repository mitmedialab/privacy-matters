import React from "react";

import Layout from "../components/layout";
import Policy from "../components/policy";

import { ONLINE_PRIVACY } from "../constants/policies";
import isEnabled, { ACCESS } from "../utils/featureFlags";

import "bootstrap/dist/css/bootstrap.min.css";

const OpaPage = () => {
  if (isEnabled(ACCESS)) {
    return (
      <Layout>
        <Policy policy={ONLINE_PRIVACY} />
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

export default OpaPage;

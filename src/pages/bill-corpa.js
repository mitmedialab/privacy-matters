import React from "react";

import Layout from "../components/layout";
import Policy from "../components/policy";

import { CORPA } from "../constants/policies";
import isEnabled, { ACCESS } from "../utils/featureFlags";

import "bootstrap/dist/css/bootstrap.min.css";

const CorpaPage = () => {
  if (isEnabled(ACCESS)) {
    return (
      <Layout>
        <Policy policy={CORPA} />
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

export default CorpaPage;

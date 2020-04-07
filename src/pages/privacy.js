import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import Layout from "../components/layout";
import Privacy from "../components/privacy";
import NavBar from "../components/navbar";

import isEnabled, { ACCESS } from "../utils/featureFlags";

const PrivacyPage = () => {
  if (isEnabled(ACCESS)) {
    return (
      <div className="privacy-page">
        <NavBar showHome />
        <Layout>
          <Privacy />
        </Layout>
        <Layout footer />
      </div>
    );
  } else {
    return (
      <>
        <h1>TBD</h1>
      </>
    );
  }
};

export default PrivacyPage;

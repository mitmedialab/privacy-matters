import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import Layout from "../components/layout";
import Privacy from "../components/privacy";
import NavBar from "../components/navbar";
import SEO from "../components/seo";

const PrivacyPage = () => {
  return (
    <>
      <SEO />
      <div className="privacy-page">
        <NavBar showHome />
        <Layout>
          <Privacy />
        </Layout>
        <Layout footer />
      </div>
    </>
  );
};

export default PrivacyPage;

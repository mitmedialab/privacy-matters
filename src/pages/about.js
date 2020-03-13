import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import Layout from "../components/layout";
import About from "../components/about";
import NavBar from "../components/navbar";

import isEnabled, { ACCESS } from "../utils/featureFlags";

const AboutPage = () => {
  if (isEnabled(ACCESS)) {
    return (
      <div className="privacy-page">
        <NavBar showHome />
        <Layout backgroundClass="secondary-background" footer>
          <About standAlone />
        </Layout>
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

export default AboutPage;

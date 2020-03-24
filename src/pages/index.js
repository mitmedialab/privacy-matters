import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../components/about";
import Jumbotron from "../components/jumbotron";
import ResearchSection from "../components/research-section";
import NavBar from "../components/navbar";

import isEnabled, { ACCESS } from "../utils/featureFlags";

const IndexPage = () => {
  if (isEnabled(ACCESS)) {
    return (
      <div className="privacy-page">
        <NavBar />
        <Jumbotron />
        <ResearchSection />
        <Layout footer>
          <About />
        </Layout>
      </div>
    );
  } else {
    return <>TBD</>;
  }
};

export default IndexPage;

import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutSection from "../components/about-section";
import Jumbotron from "../components/jumbotron";
import ResearchSection from "../components/research-section";
import NavBar from "../components/navbar";
import ContactUs from "../components/contact-us";

const IndexPage = () => {
  return (
    <>
      <SEO />
      <div className="privacy-page">
        <NavBar />
        <Jumbotron />
        <div className="py-5">
          <ResearchSection />
        </div>
        <Layout>
          <AboutSection />
        </Layout>
        <ContactUs />
        <Layout footer />
      </div>
    </>
  );
};

export default IndexPage;

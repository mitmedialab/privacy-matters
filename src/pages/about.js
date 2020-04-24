import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import Layout from "../components/layout";
import About from "../components/about";
import NavBar from "../components/navbar";
import ContactUs from "../components/contact-us";
import SEO from "../components/seo";

const AboutPage = () => {
  return (
    <>
      <SEO />
      <div className="privacy-page">
        <NavBar showHome />
        <Layout>
          <About />
        </Layout>
        <ContactUs />
        <Layout footer />
      </div>
    </>
  );
};

export default AboutPage;

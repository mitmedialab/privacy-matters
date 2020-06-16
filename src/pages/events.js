import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import Layout from "../components/layout";
import Events from "../components/events";
import NavBar from "../components/navbar";
import SEO from "../components/seo";

const EventsPage = () => {
  return (
    <>
      <SEO />
      <div className="privacy-page">
        <NavBar showHome />
        <Layout>
          <Events />
        </Layout>
        <Layout footer />
      </div>
    </>
  );
};

export default EventsPage;

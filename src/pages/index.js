import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Row } from "reactstrap";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import About from "../components/about";
import PolicyToggleButtons from "../components/policy-toggle-buttons";
import Jumbotron from "../components/jumbotron";

import { policies } from "../constants/policies";
import isEnabled, { ACCESS } from "../utils/featureFlags";

import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  if (isEnabled(ACCESS)) {
    return (
      <>
        <Jumbotron siteTitle={data.site.siteMetadata.title} />
        <Layout>
          <Row className="py-5">
            <PolicyToggleButtons
              policies={policies}
              onClick={policy => console.log(policy)}
            />
          </Row>
          <About />
        </Layout>
      </>
    );
  } else {
    return (
      <>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </>
    );
  }
};

export default IndexPage;

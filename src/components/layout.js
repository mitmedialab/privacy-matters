import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "reactstrap";
import CivicImage from "./civic-image";

import Jumbotron from "./jumbotron";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Jumbotron siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main>{children}</main>
        <Row className="pb-5">
          <Col xs={12}>
            <CivicImage />
          </Col>
        </Row>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "reactstrap";
import CivicImage from "./civic-image";

import Jumbotron from "./jumbotron";

import { scrollToRef } from "../utils/scroll";

const MainContainer = React.forwardRef((props, ref) => {
  const { children } = props;
  return (
    <div ref={ref}>
      <Container>{children}</Container>
    </div>
  );
});

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
  const containerRef = React.createRef();

  return (
    <>
      <Jumbotron
        siteTitle={data.site.siteMetadata.title}
        onClick={() => scrollToRef(containerRef)}
      />
      <MainContainer ref={containerRef}>
        <main>{children}</main>
        <Row className="pb-5">
          <Col xs={12}>
            <CivicImage />
          </Col>
        </Row>
      </MainContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

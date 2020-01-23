import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "reactstrap";

import Header from "./header";

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main>{children}</main>
        <footer>Center for Civic Media</footer>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

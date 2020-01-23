import React from "react";
import { Row, Col } from "reactstrap";
import { graphql, useStaticQuery } from "gatsby";

import AboutContent from "./about-content";

const PolicyAboutCorpa = props => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/policy-corpa.md/" }) {
        html
        frontmatter {
          title
        }
      }
    }
  `);
  const { markdownRemark } = data;
  return <AboutContent markdownRemark={markdownRemark} />;
};

export default PolicyAboutCorpa;

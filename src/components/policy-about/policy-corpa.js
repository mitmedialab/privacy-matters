import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import AboutContent from "./about-content";

const PolicyAboutCorpa = props => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/policy-corpa.md/" }) {
        ...AboutPolicyFragment
      }
    }
  `);
  const { markdownRemark } = data;
  return (
    <AboutContent
      markdownRemark={markdownRemark}
      fullPolicyLink="https://www.cantwell.senate.gov/imo/media/doc/COPRA%20Bill%20Text.pdf"
    />
  );
};

export default PolicyAboutCorpa;

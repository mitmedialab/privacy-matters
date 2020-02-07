import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import AboutContent from "./about-content";

const PolicyAboutSmart = props => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/policy-smart.md/" }) {
        ...AboutPolicyFragment
      }
    }
  `);
  const { markdownRemark } = data;
  return (
    <AboutContent
      markdownRemark={markdownRemark}
      fullPolicyLink="https://www.hawley.senate.gov/sites/default/files/2019-07/Social-Media-Addiction-Reduction-Technology-Act.pdf"
    />
  );
};

export default PolicyAboutSmart;

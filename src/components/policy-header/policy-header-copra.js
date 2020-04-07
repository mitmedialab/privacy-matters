import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import HeaderContent from "./header-content";

const PolicyHeaderCopra = props => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/policy-copra.md/" }) {
        ...HeaderPolicyFragment
      }
    }
  `);
  const { markdownRemark } = data;
  return <HeaderContent markdownRemark={markdownRemark} policy="copra" />;
};

export default PolicyHeaderCopra;

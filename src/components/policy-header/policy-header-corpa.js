import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import HeaderContent from "./header-content";

const PolicyHeaderCorpa = props => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/policy-corpa.md/" }) {
        ...HeaderPolicyFragment
      }
    }
  `);
  const { markdownRemark } = data;
  return <HeaderContent markdownRemark={markdownRemark} />;
};

export default PolicyHeaderCorpa;

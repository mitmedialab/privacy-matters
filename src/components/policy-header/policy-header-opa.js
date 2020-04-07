import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import HeaderContent from "./header-content";

const PolicyHeaderOpa = props => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(
        fileAbsolutePath: { regex: "/policy-online-privacy-act.md/" }
      ) {
        ...HeaderPolicyFragment
      }
    }
  `);
  const { markdownRemark } = data;
  return <HeaderContent markdownRemark={markdownRemark} policy="opa" />;
};

export default PolicyHeaderOpa;

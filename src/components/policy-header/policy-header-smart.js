import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import HeaderContent from "./header-content";

const PolicyHeaderSmart = props => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/policy-smart.md/" }) {
        ...HeaderPolicyFragment
      }
    }
  `);
  const { markdownRemark } = data;
  return <HeaderContent markdownRemark={markdownRemark} />;
};

export default PolicyHeaderSmart;

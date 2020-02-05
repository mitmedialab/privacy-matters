import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import AboutContent from "./about-content";

const PolicyAboutOnlinePrivacyAct = props => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(
        fileAbsolutePath: { regex: "/policy-online-privacy-act.md/" }
      ) {
        ...AboutPolicyFragment
      }
    }
  `);
  const { markdownRemark } = data;
  return <AboutContent markdownRemark={markdownRemark} />;
};

export default PolicyAboutOnlinePrivacyAct;

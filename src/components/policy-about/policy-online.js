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
  return <AboutContent markdownRemark={markdownRemark} fullPolicyLink="https://eshoo.house.gov/sites/eshoo.house.gov/files/migrated/wp-content/uploads/2019/11/Bill-Text-Online-Privacy-Act-Eshoo-Lofgren.pdf" />;
};

export default PolicyAboutOnlinePrivacyAct;

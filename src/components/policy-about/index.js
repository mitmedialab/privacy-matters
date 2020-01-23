import React from "react";
import { Row, Col } from "reactstrap";
import { graphql, useStaticQuery } from "gatsby";

import PolicyAboutSmart from "./policy-smart";
import PolicyAboutOnlinePrivacyAct from "./policy-online";
import PolicyAboutCorpa from "./policy-corpa";

import {
  SMART,
  ONLINE_PRIVACY,
  CORPA,
  policies
} from "../../constants/policies";

const PolicyAbout = props => {
  const { selectedPolicy } = props;
  if (selectedPolicy === SMART) {
    return <PolicyAboutSmart />;
  } else if (selectedPolicy === ONLINE_PRIVACY) {
    return <PolicyAboutOnlinePrivacyAct />;
  } else if (selectedPolicy === CORPA) {
    return <PolicyAboutCorpa />;
  }
};
export default PolicyAbout;

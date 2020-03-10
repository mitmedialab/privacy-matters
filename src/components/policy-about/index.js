import React from "react";

import PolicyAboutSmart from "./policy-smart";
import PolicyAboutOnlinePrivacyAct from "./policy-online";
import PolicyAboutCopra from "./policy-copra";

import { SMART, ONLINE_PRIVACY, COPRA } from "../../constants/policies";

import "./style.scss";

const PolicyAbout = props => {
  const { selectedPolicy } = props;
  if (selectedPolicy === SMART) {
    return <PolicyAboutSmart />;
  } else if (selectedPolicy === ONLINE_PRIVACY) {
    return <PolicyAboutOnlinePrivacyAct />;
  } else if (selectedPolicy === COPRA) {
    return <PolicyAboutCopra />;
  }
};
export default PolicyAbout;

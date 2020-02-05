import React from "react";

import PolicyAboutSmart from "./policy-smart";
import PolicyAboutOnlinePrivacyAct from "./policy-online";
import PolicyAboutCorpa from "./policy-corpa";

import { SMART, ONLINE_PRIVACY, CORPA } from "../../constants/policies";

import "./style.scss";

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

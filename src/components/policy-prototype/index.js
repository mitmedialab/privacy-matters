import React from "react";

import { SMART, ONLINE_PRIVACY, CORPA } from "../../constants/policies";
import PolicyPrototypeSmart from "./policy-smart";
import PolicyPrototypeOnlinePrivacyAct from "./policy-online";
import PolicyPrototypeCorpa from "./policy-corpa";

import "./policy-prototype.scss";

const PolicyPrototype = props => {
  const { selectedPolicy } = props;
  let prototype;
  if (selectedPolicy === SMART) {
    prototype = <PolicyPrototypeSmart />;
  } else if (selectedPolicy === ONLINE_PRIVACY) {
    prototype = <PolicyPrototypeOnlinePrivacyAct />;
  } else if (selectedPolicy === CORPA) {
    prototype = <PolicyPrototypeCorpa />;
  }
  return <div className="m-3">{prototype}</div>;
};

export default PolicyPrototype;

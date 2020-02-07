import React from "react";

import { SMART, ONLINE_PRIVACY, CORPA } from "../../constants/policies";
import PolicyPrototypeSmart from "./policy-smart";
import PolicyPrototypeOnlinePrivacyAct from "./policy-online";
import PolicyPrototypeCorpa from "./policy-corpa";

import "./policy-prototype.scss";

const PolicyPrototype = props => {
  const { selectedPolicy } = props;
  const prototypes = {
    [SMART]: <PolicyPrototypeSmart />,
    [ONLINE_PRIVACY]: <PolicyPrototypeOnlinePrivacyAct />,
    [CORPA]: <PolicyPrototypeCorpa />
  };
  return (
    <div className="my-3">
      <h3 className="mb-5">
        How might a social media platform look like if this bill were passed?
      </h3>
      {prototypes[selectedPolicy]}
    </div>
  );
};

export default PolicyPrototype;

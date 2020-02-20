import React from "react";
import { Card, CardTitle } from "reactstrap";

import { SMART, ONLINE_PRIVACY, CORPA } from "../../constants/policies";
import PolicyPrototypeSmart from "./policy-smart";
import PolicyPrototypeOnlinePrivacyAct from "./policy-online";
import PolicyPrototypeCorpa from "./policy-corpa";

import "./style.scss";

const PolicyPrototype = props => {
  const { selectedPolicy } = props;
  const prototypes = {
    [SMART]: <PolicyPrototypeSmart />,
    [ONLINE_PRIVACY]: <PolicyPrototypeOnlinePrivacyAct />,
    [CORPA]: <PolicyPrototypeCorpa />
  };
  return (
    <div className="prototype">
      <Card body className="prototype-card">
        <CardTitle className="card-title">View the mockup</CardTitle>
        {prototypes[selectedPolicy]}
      </Card>
    </div>
  );
};

export default PolicyPrototype;

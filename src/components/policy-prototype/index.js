import React from "react";
import { Row, Col } from "reactstrap";

import {
  SMART,
  ONLINE_PRIVACY,
  CORPA
} from "../../constants/policies";
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
  return (
    <Row>
      <Col xs={12} className="m-3">
        {prototype}
      </Col>
    </Row>
  );
};

export default PolicyPrototype;

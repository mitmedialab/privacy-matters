import React, { useState } from "react";
import { Row, Col } from "reactstrap";

import PolicyToggleButtons from "./policy-toggle-buttons";
import PolicyPrototype from "./policy-prototype";
import PolicyAbout from "./policy-about";
import PolicyQuotes from "./policy-quotes";
import { SMART, policies } from "../constants/policies";

const Policy = () => {
  const [selectedPolicy, setPolicy] = useState(SMART);

  return (
    <>
      <Row>
        <Col>
          <h1>{policies[selectedPolicy].long}</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <PolicyAbout selectedPolicy={selectedPolicy} />
        </Col>
        <Col md={6}>
          <PolicyPrototype
            selectedPolicy={selectedPolicy}
            policies={policies}
          />
        </Col>
      </Row>
      <PolicyQuotes selectedPolicy={selectedPolicy} />
      <PolicyToggleButtons
        selectedPolicy={selectedPolicy}
        policies={policies}
        onClick={setPolicy}
      />
    </>
  );
};

export default Policy;

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
      <Row className="py-5">
        <PolicyToggleButtons
          selectedPolicy={selectedPolicy}
          policies={policies}
          onClick={setPolicy}
        />
      </Row>
      <Row className="py-3">
        <Col>
          <h1>{policies[selectedPolicy].long}</h1>
        </Col>
      </Row>
      <Row className="pb-3">
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
    </>
  );
};

export default Policy;

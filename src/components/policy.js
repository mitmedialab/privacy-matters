import React, { useState } from "react";
import { Row, Col } from "reactstrap";

import PolicyToggleButtons from "./policy-toggle-buttons";
import PolicyPrototype from "./policy-prototype";
import PolicyAbout from "./policy-about";
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
      <PolicyPrototype selectedPolicy={selectedPolicy} policies={policies} />
      <PolicyToggleButtons
        selectedPolicy={selectedPolicy}
        policies={policies}
        onClick={setPolicy}
      />
      <PolicyAbout selectedPolicy={selectedPolicy} policies={policies} />
    </>
  );
};

export default Policy;

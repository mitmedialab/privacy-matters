import React from "react";
import { Row, Col } from "reactstrap";

import PolicyPrototype from "../policy-prototype";
import PolicyAbout from "../policy-about";
import PolicyQuotes from "../policy-quotes";

import "./style.scss";

const PolicyMain = props => {
  const { policy } = props;
  return (
    <>
      <Row className="pb-3">
        <Col md={6}>
          <PolicyAbout selectedPolicy={policy} />
        </Col>
        <Col md={6}>
          <PolicyPrototype selectedPolicy={policy} />
          <div className="mt-5" />
          <PolicyQuotes selectedPolicy={policy} />
        </Col>
      </Row>
    </>
  );
};

export default PolicyMain;

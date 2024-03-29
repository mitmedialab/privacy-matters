import React from "react";
import { Row, Col } from "reactstrap";

import PolicyPrototype from "../policy-prototype";
import PolicyAbout from "../policy-about";

import "./style.scss";

const PolicyMain = props => {
  const { policy } = props;
  return (
    <>
      <Row>
        <Col md={6}>
          <div className="d-block d-md-none my-5">
            <PolicyPrototype selectedPolicy={policy} />
          </div>
          <PolicyAbout selectedPolicy={policy} />
        </Col>
        <Col md={6}>
          <div className="d-none d-md-block d-lg-block d-lx-block">
            <PolicyPrototype selectedPolicy={policy} />
          </div>
          <div className="mt-5" />
        </Col>
      </Row>
    </>
  );
};

export default PolicyMain;

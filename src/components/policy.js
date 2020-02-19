import React from "react";
import { Row, Col } from "reactstrap";

import PolicyPrototype from "./policy-prototype";
import PolicyAbout from "./policy-about";
import PolicyQuotes from "./policy-quotes";
import { policies } from "../constants/policies";

import "./style.scss";

const PolicyLayout = props => {
  const { title, policy } = props;
  return (
    <div>
      <Row className="py-3">
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row className="pb-3">
        <Col md={3}>
          <PolicyAbout selectedPolicy={policy} />
        </Col>
        <Col md={9}>
          <PolicyPrototype selectedPolicy={policy} />
          <PolicyQuotes selectedPolicy={policy} />
        </Col>
      </Row>
    </div>
  );
};

const Policy = ({ policy }) => {
  return (
    <>
      <PolicyLayout
        key={`policy-layout-${policy}`}
        title={policies[policy].long}
        policy={policy}
        className="py-5"
      />
    </>
  );
};

export default Policy;

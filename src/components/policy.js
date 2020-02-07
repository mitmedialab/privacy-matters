import React from "react";
import { Row, Col } from "reactstrap";

import PolicyToggleButtons from "./policy-toggle-buttons";
import PolicyPrototype from "./policy-prototype";
import PolicyAbout from "./policy-about";
import PolicyQuotes from "./policy-quotes";
import { SMART, ONLINE_PRIVACY, CORPA, policies } from "../constants/policies";

import { scrollToRef } from "../utils/scroll";

import "./style.scss";

const PolicyLayout = React.forwardRef((props, ref) => {
  const { title, policy } = props;
  return (
    <div ref={ref}>
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
});

const Policy = () => {
  const policyRefs = {
    [SMART]: React.createRef(),
    [ONLINE_PRIVACY]: React.createRef(),
    [CORPA]: React.createRef()
  };

  return (
    <>
      <Row className="py-5 min-full-height">
        <PolicyToggleButtons
          policies={policies}
          onClick={policy => scrollToRef(policyRefs[policy])}
        />
      </Row>
      {Object.keys(policies).map(policy => (
        <PolicyLayout
          key={`policy-layout-${policy}`}
          title={policies[policy].long}
          policy={policy}
          ref={policyRefs[policy]}
          className="py-5"
        />
      ))}
    </>
  );
};

export default Policy;

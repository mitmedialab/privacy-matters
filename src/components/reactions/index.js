import React from "react";
import { Row, Col } from "reactstrap";

import PolicyQuotes from "../policy-quotes";
import Commentary from "./commentary";
import Insights from "./insights";

const Reactions = props => {
  const { policy } = props;
  return (
    <>
      <Row className="pb-3">
        <Col md={6}>
          <div className="d-block d-md-none my-5">
            <PolicyQuotes selectedPolicy={policy} />
          </div>
          <h2 className="pt-3">
            <span className="half-highlight">Key Insights</span>
          </h2>
          <Insights policy={policy} />
        </Col>
        <Col md={6}>
          <div className="d-none d-md-block d-lg-block d-lx-block">
            <PolicyQuotes selectedPolicy={policy} />
          </div>
        </Col>
      </Row>
      <Row className="py-5">
        <Col md={6}>
          <Commentary
            heading="Positive reactions to the bill"
            policy={policy}
            responseType="pro"
          />
        </Col>
        <Col md={6}>
          <Commentary
            heading="Negative reactions to the bill"
            policy={policy}
            responseType="con"
          />
        </Col>
      </Row>
    </>
  );
};

export default Reactions;

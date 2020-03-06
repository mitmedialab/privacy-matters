import React from "react";
import { Row, Col } from "reactstrap";

import Commentary from "./commentary";

const Reactions = props => {
  const { policy } = props;
  return (
    <>
      <Row className="pb-3">
        <Col xs={12}>
          <h2>Responses</h2>
          <p>TBD</p>
        </Col>
      </Row>
      <Row className="pb-3">
        <Col xs={12}>
          <h3>High Level Insights</h3>
          <p>TBD</p>
        </Col>
      </Row>
      <Row className="pb-3">
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

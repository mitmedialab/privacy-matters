import React from "react";
import { Col, Row } from "reactstrap";

import "./style.scss";

const About = props => {
  return (
    <div id="about" className="about">
      <Row>
        <Col xs={12}>
          <h2>
            <span className="half-highlight">About</span>
          </h2>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={6}>
          <p className="lead">
            Privacy Matters explores how the implementation of privacy and data
            governance policies might impact a variety of fields.
          </p>
          <p>
            We interviewed 41 lawyers, designers, engineers, civil rights
            advocates, policymakers, and stewards of sensitive data (from social
            workers, pediatricians, and librarians). These conversations
            revealed 1) the many definitions and importance of privacy in
            distinct contexts 2) how the varied responses to recent data
            governance and privacy draft bills, and 3) the biggest
            privacy-related challenges (and possible ways to solve them) in
            different fields.
          </p>
          <p>
            We believe in transparency and the necessity of improving how we
            translate complex topics to the public. This project aims to better
            inform and engage everyday people -- the non-privacy related
            lawyers, technologists, researchers about some of the latest
            developments in policy. We also aim to aggregate cross-disciplinary
            insights to inform policymakers about the impact their bills have on
            end users and people who manage sensitive data for a variety of
            marginalized and vulnerable communities.
          </p>
          <p>
            This research is only a small portion of the diverse perspectives we
            can bring to data governance and policy making. We hope to spur
            conversations, reveal new insights, and prompt positive action.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default About;

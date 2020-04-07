import React from "react";
import { Col, Row } from "reactstrap";

const Privacy = props => {
  return (
    <div className="privacy">
      <Row>
        <Col xs={12}>
          <h1 className="text-center">
            <span className="half-highlight">Privacy</span>
          </h1>
        </Col>
      </Row>

      <Row className="mt-4 justify-content-md-center">
        <Col xs={12} md={6}>
          <p>
            This website uses Google Analytics to better understand how our
            website is used. Google Analytics is a web analytics service offered
            by Google that tracks and reports website traffic. This data is
            shared with other Google services. Google may use the collected data
            to contextualise and personalise ads on its own advertising network.
            For more information on data practices related to Google Analytics
            and how you can adjust your settings or disable Google Analytics
            please visit:{" "}
            <a
              href="https://support.google.com/analytics/answer/6004245?hl=en&ref_topic=2919631"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://support.google.com/analytics/answer/6004245?hl=en&ref_topic=2919631
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Privacy;

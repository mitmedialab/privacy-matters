import React from "react";
import { Row, Col } from "reactstrap";
import CivicImage from "./../civic-image";

const Footer = props => {
  return (
    <Row className="pb-5">
      <Col xs={12}>
        <CivicImage />
      </Col>
      <Col xs={12}>
        <div className="text-center ">
          <small>
            <a href="mailto:letstalkprivacy@media.mit.edu" target="_top">
              letstalkprivacy@media.mit.edu
            </a>
          </small>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;

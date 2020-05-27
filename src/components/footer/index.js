import React from "react";
import { Row, Col } from "reactstrap";
import InstituteLogo from "./../institute-logo";

import "./style.scss";

const Footer = props => {
  const email = "letstalkprivacy@media.mit.edu";
  return (
    <Row className="footer pb-5 justify-content-center">
      <Col lg={2} md={3} sm={4} xs={12}>
        <InstituteLogo institute="civic" />
      </Col>
      <Col lg={2} md={3} sm={4} xs={12}>
        <InstituteLogo institute="mediaLab" />
      </Col>
      <Col xs={12}>
        <div className="text-center ">
          <small>
            <a href={`mailto:${email}`} target="_top">
              {email}
            </a>
          </small>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;

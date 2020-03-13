import React from "react";
import { Row, Col } from "reactstrap";
import CivicImage from "./../civic-image";

const Footer = props => {
  const email = "letstalkprivacy@media.mit.edu";
  return (
    <Row className="pb-5">
      <Col xs={12}>
        <CivicImage />
      </Col>
      <Col xs={12}>
        <div className="text-center ">
          <small>
            <a href={`mailto:${email}@media.mit.edu`} target="_top">
              {email}
            </a>
          </small>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;

import React from "react";
import { Row, Col } from "reactstrap";
import CivicImage from "./../civic-image";

import "./style.scss";

const Footer = props => {
  return (
    <Row className="footer pb-5">
      <Col xs={12}>
        <CivicImage />
      </Col>
    </Row>
  );
};

export default Footer;

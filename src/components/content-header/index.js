import React from "react";
import { Row, Col } from "reactstrap";

const ContentHeader = ({ title, subtitle, image, children }) => {
  return (
    <Row className="header-content py-md-5 py-4">
      <Col md="8">
        <h1 className="py-2">{title}</h1>
        <div className="d-block d-md-none header-image-inline mx-auto">
          {image}
        </div>
        <div className="py-4 subheading-1">{subtitle}</div>
        {children}
      </Col>
      <Col className="mt-3 d-none d-md-block d-lg-block d-lx-block" md="4">
        {image}
      </Col>
    </Row>
  );
};

export default ContentHeader;

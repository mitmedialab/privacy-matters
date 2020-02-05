import React from "react";
import { Row, Col, Container } from "reactstrap";

import "./style.scss";

const Jumbotron = props => {
  const { siteTitle } = props;
  return (
    <Container fluid>
      <Row className="p-5 align-middle text-center pm-jumbotron">
        <Col xs={12} className="justify-content-center align-self-center">
          <h1>{siteTitle}</h1>
          <h2>
            What is <code>privacy?</code>
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Jumbotron;

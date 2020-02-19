import React from "react";
import { Row, Col, Button, Container } from "reactstrap";

import "./style.scss";

const Jumbotron = props => {
  const { siteTitle, onClick } = props;
  return (
    <Container fluid>
      <Row className="p-5 align-middle text-center pm-jumbotron d-flex">
        <Col sm={6} className="d-flex flex-column">
          <div>
            <h1>{siteTitle}</h1>
          </div>
        </Col>
        <Col sm={6} className="d-flex flex-column">
          <div>
            <p className="mt-3 text-left description">
              Exploring how data privacy policies translates into design and
              practice for librarians, pediatricians, lawyers, designers,
              engineers, philosophers, etc.
            </p>
          </div>
          <Button onClick={onClick}>Explore privacy bills</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Jumbotron;

import React from "react";
import { Row, Col, Button, Container } from "reactstrap";

import "./style.scss";

const Jumbotron = props => {
  const { siteTitle, onClick } = props;
  return (
    <Container fluid className="shadow-lg">
      <Row className="p-5 align-middle text-center pm-jumbotron d-flex">
        <Col xs={12} className="d-flex flex-column">
          <div className="mt-auto">
            <h1>{siteTitle}</h1>
            <div className="mt-3 subtitle">Putting policy into practice</div>
            <p className="mt-3 description">
              Exploring how data privacy policies translates into design and
              practice for librarians, pediatricians, lawyers, designers,
              engineers, philosophers, etc.
            </p>
          </div>
          <Button onClick={onClick} className="mt-auto">
            Explore privacy bills
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Jumbotron;

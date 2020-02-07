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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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

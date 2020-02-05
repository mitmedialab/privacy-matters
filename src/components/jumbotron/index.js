import React from "react";
import { Row, Col, Container } from "reactstrap";
import Typist from 'react-typist';

import "./style.scss";

const Jumbotron = props => {
  const { siteTitle } = props;
  return (
    <Container fluid>
      <Row className="p-5 align-middle text-center pm-jumbotron">
        <Col xs={12} className="justify-content-center align-self-center">
          <h1>👀 {siteTitle}</h1>
          <div className="mt-3 lead">
            <Typist>
              <Typist.Delay ms={1000} />
              What is <code>privacy?</code>
              <Typist.Delay ms={500} />
              <Typist.Backspace count={8} delay={200} />
              <code>policy?</code>
              <Typist.Delay ms={500} />
              <Typist.Backspace count={10} delay={200} />
              matters <code>to you?</code>
            </Typist>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Jumbotron;

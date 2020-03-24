import React from "react";
import { Row, Col, Container } from "reactstrap";

import PolicyToggleButtons from "../policy-toggle-buttons";
import Typing from "../typing";
import { policies } from "../../constants/policies";

import JumbotronImage from "./jumbotron-image";

import "./style.scss";

const Jumbotron = props => {
  const privacyDefinitions = [
    "a human right",
    "security",
    "personal",
    "mine",
    "over-rated"
  ];

  return (
    <div className="landing-jumbotron">
      <Container fluid>
        <div className="cover">
          <Row className="align-middle d-flex title-row">
            <Col md={6} sm={8} className="d-flex flex-column">
              <div>
                <h1 className="title">
                  <Typing prepend="Privacy is" words={privacyDefinitions} />
                </h1>
              </div>
              <p className="mt-3 text-center subheading-1 description">
                Exploring how privacy and data governance policies translate
                into practice
              </p>
            </Col>
            <Col md={6} sm={4} className="d-flex flex-column">
              <JumbotronImage />
            </Col>
          </Row>
        </div>
        <Row className="py-5">
          <PolicyToggleButtons policies={policies} />
        </Row>
      </Container>
    </div>
  );
};

export default Jumbotron;

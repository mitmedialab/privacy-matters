import React from "react";
import { Row, Col, Container } from "reactstrap";
import PolicyToggleButtons from "../policy-toggle-buttons";

import { policies } from "../../constants/policies";

import "./style.scss";

const Jumbotron = props => {
  const { siteTitle } = props;
  return (
    <div className="landing-jumbotron">
      <Container fluid>
        <div className="cover">
          <Row className="align-middle d-flex title-row">
            <Col md={6} className="d-flex flex-column justify-content-start">
              <div>
                <h1 className="title">
                  <span className="half-highlight">{siteTitle}</span>
                </h1>
              </div>
            </Col>
          </Row>
          <Row className="align-middle text-center d-flex">
            <Col
              md={6}
              className="d-flex offset-md-6 flex-column justify-content-between"
            >
              <div>
                <p className="mt-3 text-left subheading-1 description">
                  Exploring how privacy and data governance policies translate
                  into practice for librarians, pediatricians, lawyers,
                  designers, engineers, philosophers, etc.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="py-5">
          <PolicyToggleButtons
            policies={policies}
            onClick={policy => console.log(policy)}
          />
        </Row>
      </Container>
    </div>
  );
};

export default Jumbotron;

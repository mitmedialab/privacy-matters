import React from "react";
import { Row, Col, Container } from "reactstrap";
import PolicyToggleButtons from "../policy-toggle-buttons";

import { policies } from "../../constants/policies";

import "./style.scss";

const Jumbotron = props => {
  const { siteTitle } = props;
  return (
    <div className="policy-toggle-background">
      <Container fluid>
        <Row className="p-5 align-middle text-center pm-jumbotron d-flex">
          <Col md={6} className="d-flex flex-column">
            <div>
              <h1>
                <span className="half-highlight">{siteTitle}</span>
              </h1>
            </div>
          </Col>
          <Col md={6} className="d-flex flex-column">
            <div>
              <p className="mt-3 text-left description">
                Exploring how data privacy policies translates into design and
                practice for librarians, pediatricians, lawyers, designers,
                engineers, philosophers, etc.
              </p>
            </div>
          </Col>
        </Row>
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

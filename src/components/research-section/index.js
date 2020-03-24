import React from "react";
import { Row, Col, Card } from "reactstrap";
import { Link } from "gatsby";

import CardSection from "../card-section";
import ResearchImage from "./research-image";

const ResearchSection = props => {
  return (
    <CardSection>
      <Row>
        <Col md={8}>
          <Card className="p-5">
            <h2>
              <span className="half-highlight">Our research</span>
            </h2>
            <p>
              We interviewed 41 people, from privacy experts to everyday people,
              to understand the potential impact of data privacy policies.
            </p>
            <Link className="btn py-3">Read our report</Link>
          </Card>
        </Col>
        <Col md={4}>
          <ResearchImage />
        </Col>
      </Row>
    </CardSection>
  );
};

export default ResearchSection;

import React from "react";
import { Row, Col, Card } from "reactstrap";
import { Link } from "gatsby";

import CardSection from "../card-section";
import ResearchImage from "./research-image";

import { ACCESS } from "../../utils/featureFlags";

const DownloadResearch = props => {
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
            <Link
              className="btn btn-secondary py-3"
              to={`/research?ft=${ACCESS}`}
            >
              Download 1 page summary
            </Link>
            <Link
              className="btn btn-secondary py-3"
              to={`/research?ft=${ACCESS}`}
            >
              Download full report
            </Link>
          </Card>
        </Col>
        <Col md={4}>
          <ResearchImage />
        </Col>
      </Row>
    </CardSection>
  );
};

export default DownloadResearch;

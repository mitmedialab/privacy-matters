import React from "react";
import { Row, Col, Card } from "reactstrap";

import CardSection from "../card-section";
import ResearchImage from "./research-image";

const DownloadResearch = props => {
  return (
    <CardSection buffer>
      <Row>
        <Col md={8}>
          <Card className="p-5">
            <h2>
              <span className="half-highlight">Our Research</span>
            </h2>
            <p className="pt-2 pb-3 subheading-2">
              We interviewed 41 people, from privacy experts to everyday people,
              to understand the potential impact of data privacy policies.
            </p>
            <a
              className="btn btn-secondary py-2 my-3"
              href="/SIGCHI-CHI20-Sample-EA.pdf"
            >
              Download 1 page summary
            </a>
            <a
              className="btn btn-secondary py-2"
              href="/SIGCHI-CHI20-Sample-EA.pdf"
            >
              Download full report
            </a>
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

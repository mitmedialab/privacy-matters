import React from "react";
import { Row, Col, Card } from "reactstrap";

import CardSection from "../card-section";
import ResearchImage from "./research-image";

import "./style.scss";

const DownloadResearch = props => {
  return (
    <CardSection buffer>
      <Row>
        <Col md={5}>
          <Card className="p-5">
            <div className="p-2">
              <h2>
                <span className="half-highlight">Our Research</span>
              </h2>
              <p className="pt-2 pb-3 subheading-2">
                We interviewed 41 people, from privacy experts to everyday
                people, to understand the potential impact of data privacy
                policies.
              </p>
              <a
                className="btn btn-secondary mt-3 py-2 px-4"
                href="/SIGCHI-CHI20-Sample-EA.pdf"
              >
                Download 1 page summary
              </a>
              <a
                className="btn btn-secondary mt-3 py-2 px-4"
                href="/SIGCHI-CHI20-Sample-EA.pdf"
              >
                Download full report
              </a>
            </div>
          </Card>
        </Col>
        <Col md={7} className="research-image-col">
          <ResearchImage />
        </Col>
      </Row>
    </CardSection>
  );
};

export default DownloadResearch;

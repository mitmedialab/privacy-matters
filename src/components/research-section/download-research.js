import React from "react";
import { Row, Col, Card } from "reactstrap";

import CardSection from "../card-section";
import DownloadReport from "../download-report";
import ResearchImage from "./research-image";

import "./style.scss";

const DownloadResearch = props => {
  const links = (
    <>
      <DownloadReport report="fullReport" />
      <DownloadReport report="summary" />
      <DownloadReport report="onePager" />
      <DownloadReport report="prototypingGuide" />
    </>
  );

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
                people, to understand their views on privacy and the ways that
                different policies could impact their work.
              </p>
              {links}
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

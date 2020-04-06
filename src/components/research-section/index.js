import React from "react";
import { Row, Col, Card } from "reactstrap";
import { Link } from "gatsby";

import CardSection from "../card-section";
import ResearchImage from "./research-image";

import { ACCESS } from "../../utils/featureFlags";

const ResearchSection = props => {
  return (
    <CardSection>
      <Row>
        <Col md={5}>
          <Card className="p-5">
            <div className="p-2">
              <h2>
                <span className="half-highlight">Our research</span>
              </h2>
              <p className="subheading-2">
                We interviewed 41 people, from privacy experts to everyday
                people, to understand the potential impact of data privacy
                policies.
              </p>
              <Link
                className="btn btn-secondary mt-3 py-2 px-4"
                to={`/research?ft=${ACCESS}`}
              >
                Read our report
              </Link>
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

export default ResearchSection;

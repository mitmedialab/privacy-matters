import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "gatsby";

import "./style.scss";

const AboutSection = props => {
  return (
    <Row className="py-5 justify-content-md-center">
      <Col md={6} className="text-center mb-4">
        <div className="about-section">
          <h2>
            <span className="half-highlight">About</span>
          </h2>
          <p className="subheading-2">
            Project: Let’s Talk Privacy explores how the implementation of
            privacy and data governance policies might impact a variety of
            fields. We specifically explored three draft policies and shared
            them with both privacy experts and everyday people to get their
            feedback. Our goal is to bridge the gap between legislators,
            researchers, industry practitioners, and everyday people. We also
            believe that collaborating and designing with marginalized
            populations improve how these bills serve individuals and
            communities. This project was created by researchers and
            practitioners from MIT, University of Florida, and Carnegie Mellon
            University.
          </p>
          <Link to={`/about`} className="btn btn-secondary mt-3 py-2 px-4">
            Learn More
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default AboutSection;

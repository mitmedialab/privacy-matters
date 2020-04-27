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
            fields. We interviewed 41 people, including lawyers, designers,
            engineers, civil rights advocates, policymakers, and stewards of
            sensitive data: social workers, pediatricians, librarians.
          </p>
          <p className="subheading-2">
            Our goal is to bridge the gap between legislators, researchers,
            industry practitioners, and everyday people. We advocate for the
            creation of a common language around privacy protections that can be
            understood across all sectors. We also believe that collaborating
            and designing with marginalized populations improve how these bills
            serve the intended end users and communities. This project was
            created by researchers and practitioners from MIT, University of
            Florida, and Carnegie Mellon University.
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

import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "gatsby";

import { ACCESS } from "../../utils/featureFlags";
import "./style.scss";

const AboutSection = props => {
  return (
    <Row className="py-5">
      <Col className="text-center">
        <div className="about-section">
          <h2>
            <span className="half-highlight">About</span>
          </h2>
          <p className="subheading-2">
            Let's Talk Privacy explores how the implementation of privacy and
            data governance policies might impact a variety of fields. The
            project was started in 2019 by a group of researchers from MIT,
            Carnegie Mellon, and University of Florida.
          </p>
          <Link to={`/about?ft=${ACCESS}`} className="btn btn-secondary mt-3 py-3">Learn More</Link>
        </div>
      </Col>
    </Row>
  );
};

export default AboutSection;

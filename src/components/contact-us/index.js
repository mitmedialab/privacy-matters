import React from "react";
import { Row, Col, Card } from "reactstrap";
import { Link } from "gatsby";

import CardSection from "../card-section";

import "./style.scss";

const ContactUs = props => {
  return (
    <CardSection>
      <Row className="my-5 contact-us">
        <Col md={8}>
          <Card className="p-5">
            <h2>
              <span className="half-highlight">
                Lets talk privacy (and more)
              </span>
            </h2>
            <p className="pt-2 pb-3 subheading-2">
              Have thoughts on our research? <br />
              Interested in collaborating with us? <br />
              We want to hear from you!
            </p>
            <Link className="btn btn-secondary py-2">
              <a href={`mailto:letstalkprivacy@media.mit.edu`} target="_top">
                Shoot us an email
              </a>
            </Link>
          </Card>
        </Col>
      </Row>
    </CardSection>
  );
};

export default ContactUs;

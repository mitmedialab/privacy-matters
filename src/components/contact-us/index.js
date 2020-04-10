import React from "react";
import { Row, Col, Card } from "reactstrap";
import { useStaticQuery, graphql } from "gatsby";

import CardSection from "../card-section";

import "./style.scss";

const ContactUs = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email
          }
        }
      }
    `
  );
  const { email } = site.siteMetadata;
  return (
    <CardSection>
      <Row className="my-5 contact-us">
        <Col md={8}>
          <Card className="p-5">
            <h2>
              <span className="half-highlight">
                Let’s Talk Privacy (and More)
              </span>
            </h2>
            <p className="pt-2 pb-3 subheading-2">
              Have thoughts on our research? <br />
              Interested in collaborating with us? <br />
              We want to hear from you!
            </p>
            <p>
              Send us an email at{" "}
              <a href={`mailto:${email}`} target="_top">
                {" "}
                {email}
              </a>
            </p>
          </Card>
        </Col>
      </Row>
    </CardSection>
  );
};

export default ContactUs;

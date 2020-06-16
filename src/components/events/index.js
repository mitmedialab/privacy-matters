import React from "react";
import { Col, Row } from "reactstrap";
import { graphql, useStaticQuery } from "gatsby";

const EventsSection = props => {
  const { edges, past } = props;
  return edges
    .filter(edge => edge.node.frontmatter.past === past)
    .map(edge => (
      <>
        <div>
          <strong>{edge.node.frontmatter.title}</strong>
        </div>
        <div
          className="definition-highlights"
          dangerouslySetInnerHTML={{ __html: edge.node.html }}
        />
      </>
    ));
};

const Events = props => {
  // TODO: remove this once we've solified some future events
  const pastOnly = true;
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(events)/.*\\\\.md$/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date
              past
              title
            }
            html
          }
        }
      }
    }
  `);

  return (
    <div className="privacy">
      <Row>
        <Col xs={12}>
          <h1 className="text-center">
            <span className="half-highlight">Events</span>
          </h1>
        </Col>
      </Row>

      <Row className="mt-4 justify-content-md-center">
        <Col xs={12} md={6}>
          <p>
            Join us at one of our upcoming events to take part in conversations
            with various thinkers and practitioners around privacy, policy, and
            prototyping.
          </p>
          {!pastOnly && (
            <EventsSection edges={data.allMarkdownRemark.edges} past={false} />
          )}
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={12}>
          <h1 className="text-center">
            <span className="half-highlight">Past Events</span>
          </h1>
        </Col>
      </Row>

      <Row className="pb-4 my-4 justify-content-md-center">
        <Col xs={12} md={6}>
          <EventsSection edges={data.allMarkdownRemark.edges} past={true} />
        </Col>
      </Row>
    </div>
  );
};

export default Events;

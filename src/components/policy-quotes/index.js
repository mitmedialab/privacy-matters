import React from "react";
import { Row, Col } from "reactstrap";
import { graphql, useStaticQuery } from "gatsby";

import Quote from "./quote";

const PolicyQuotes = props => {
  const { selectedPolicy } = props;
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(quotes)/.*\\\\.md$/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              quotee
              policy
            }
            html
          }
        }
      }
    }
  `);
  return (
    <Row className="pb-5">
      {data.allMarkdownRemark.edges
        .filter(edge => edge.node.frontmatter.policy === selectedPolicy)
        .map(edge => (
          <Col sm={4} key={`${selectedPolicy}-${edge.node.frontmatter.quotee}`}>
            <Quote node={edge.node} />
          </Col>
        ))}
    </Row>
  );
};

export default PolicyQuotes;

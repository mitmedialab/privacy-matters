import React from "react";
import { Col } from "reactstrap";
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
              prompt
            }
            html
          }
        }
      }
    }
  `);
  return (
    <>
      {data.allMarkdownRemark.edges
        .filter(edge => edge.node.frontmatter.policy === selectedPolicy)
        .map(edge => (
          <Quote
            key={`${selectedPolicy}-${edge.node.frontmatter.quotee}`}
            node={edge.node}
          />
        ))}
    </>
  );
};

export default PolicyQuotes;

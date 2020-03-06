import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Quote from "./quote";

const PolicyQuotes = props => {
  const { selectedPolicy } = props;
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(quotes)/.*\\\\.md$/" } }
      ) {
        ...QuoteFragment
      }
    }
  `);
  return (
    <>
      {data.allMarkdownRemark.edges
        .filter(
          edge =>
            edge.node.frontmatter.policy === selectedPolicy &&
            edge.node.frontmatter.responseType === "highlight"
        )
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

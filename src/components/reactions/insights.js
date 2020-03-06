import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Insights = props => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(insights)/.*\\\\.md$/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              policy
            }
            html
          }
        }
      }
    }
  `);
  const { policy } = props;
  return (
    <>
      {data.allMarkdownRemark.edges
        .filter(edge => edge.node.frontmatter.policy === policy)
        .map(edge => (
          <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
        ))}
    </>
  );
};

export default Insights;

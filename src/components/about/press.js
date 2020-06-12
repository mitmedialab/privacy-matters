import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Press = props => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(press)/.*\\\\.md$/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date
            }
            html
          }
        }
      }
    }
  `);

  return (
    <>
      <h2 className="text-center">
        <span className="half-highlight">Press</span>
      </h2>

      {data.allMarkdownRemark.edges
        .map(edge => (
          <div
            className="definition-highlights"
            dangerouslySetInnerHTML={{ __html: edge.node.html }}
          />
        ))}
    </>
  );
};

export default Press;

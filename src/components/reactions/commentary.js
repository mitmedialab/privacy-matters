import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Comment = props => {
  const { quotee, html } = props;
  return (
    <div className="quote">
      <blockquote className="blockquote">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>- {quotee}</p>
      </blockquote>
    </div>
  );
};

const Commentary = props => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(quotes)/.*\\\\.md$/" } }
      ) {
        ...QuoteFragment
      }
    }
  `);
  const { heading, policy, responseType } = props;
  return (
    <>
      <h3>{heading}</h3>
      {data.allMarkdownRemark.edges
        .filter(
          edge =>
            edge.node.frontmatter.policy === policy &&
            edge.node.frontmatter.responseType === responseType
        )
        .map(edge => (
          <Comment
            quotee={edge.node.frontmatter.quotee}
            html={edge.node.html}
          />
        ))}
    </>
  );
};

export default Commentary;

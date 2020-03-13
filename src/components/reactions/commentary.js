import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Comment = props => {
  const { quotee, html } = props;
  return (
    <div className="quote pt-5">
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
      <h2>
        <span className="half-highlight">{heading}</span>
      </h2>
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

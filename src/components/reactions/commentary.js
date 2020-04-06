import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "./style.scss";

const Comment = props => {
  const { quotee, html } = props;
  return (
    <div className="quote comment mt-3 mb-3 p-5">
      <blockquote className="">
        <div dangerouslySetInnerHTML={{ __html: html }} />-{" "}
        <span className="author">{quotee}</span>
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
        <span className={`half-highlight ${responseType}`}>{heading}</span>
      </h2>
      <div className={`${responseType}`}>
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
      </div>
    </>
  );
};

export default Commentary;

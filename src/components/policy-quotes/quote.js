import React from "react";
import { Card, CardTitle } from "reactstrap";

const Quote = props => {
  const { frontmatter, html } = props.node;
  return (
    <div className="callout-box">
      <Card body className="callout-card py-3 px-5">
        <CardTitle className="card-title">
          <h2>
            <span className="half-highlight">Responses to the bill</span>
          </h2>
        </CardTitle>
        <blockquote className="blockquote">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <p>- {frontmatter.quotee}</p>
        </blockquote>
      </Card>
    </div>
  );
};

export const query = graphql`
  fragment QuoteFragment on MarkdownRemarkConnection {
    edges {
      node {
        id
        frontmatter {
          quotee
          policy
          responseType
        }
        html
      }
    }
  }
`;

export default Quote;

import React from "react";
import { Card, CardTitle } from "reactstrap";
import CalloutCard from "../callout-card";

const Quote = props => {
  const { frontmatter, html } = props.node;
  return (
    <CalloutCard title="Responses to the bill">
      <blockquote className="blockquote">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>- {frontmatter.quotee}</p>
      </blockquote>
    </CalloutCard>
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

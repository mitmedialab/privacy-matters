import React from "react";
import { Button } from "reactstrap";

const AboutContent = props => {
  const { frontmatter, html } = props.markdownRemark;
  return (
    <div className="policy-about pb-5">
      <h2>{frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Button block size="lg" color="link">
        See Full Bill
      </Button>
    </div>
  );
};

export const query = graphql`
  fragment AboutPolicyFragment on MarkdownRemark {
    html
    frontmatter {
      title
    }
  }
`;

export default AboutContent;

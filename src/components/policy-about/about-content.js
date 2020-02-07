import React from "react";
import { Button } from "reactstrap";

const AboutContent = props => {
  const { fullPolicyLink } = props;
  const { frontmatter, html } = props.markdownRemark;
  return (
    <div className="policy-about pt-3 pb-5">
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div className="text-center">
        <a href={fullPolicyLink} rel="noopener noreferrer" target="_blank">
          See Full Bill
        </a>
      </div>
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

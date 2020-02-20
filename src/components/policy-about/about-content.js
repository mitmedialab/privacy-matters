import React from "react";

const AboutContent = props => {
  const { fullPolicyLink } = props;
  const { html } = props.markdownRemark;
  return (
    <div className="policy-about pt-3 pb-5">
      <h2>
        <span className="half-highlight">Highlights</span>
      </h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div className="text-center">
        <a href={fullPolicyLink} rel="noopener noreferrer" target="_blank">
          See full text
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

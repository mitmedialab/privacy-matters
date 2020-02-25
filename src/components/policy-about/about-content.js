import React from "react";

const AboutContent = props => {
  const { html } = props.markdownRemark;
  return (
    <>
      <div className="policy-about pt-3 pb-5">
        <h2 className="pb-3">
          <span className="half-highlight">Highlights</span>
        </h2>
        <div
          className="bill-highlights"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
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

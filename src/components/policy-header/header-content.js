import React from "react";
import BillImage from "./bill-image";
import ContentHeader from "../content-header";

const HeaderContent = props => {
  const { policy } = props;
  const { title, subtitle, link, date, by } = props.markdownRemark.frontmatter;
  const image = <BillImage policy={policy} />;
  return (
    <ContentHeader
      title={
        <a href={link} rel="noopener noreferrer" target="_blank">
          {title}
        </a>
      }
      subtitle={subtitle}
      image={image}
    >
      <div className="">Introduced on {date}</div>
      <div dangerouslySetInnerHTML={{ __html: by }} />
    </ContentHeader>
  );
};

export const query = graphql`
  fragment HeaderPolicyFragment on MarkdownRemark {
    frontmatter {
      title
      subtitle
      link
      date
      by
    }
  }
`;

export default HeaderContent;

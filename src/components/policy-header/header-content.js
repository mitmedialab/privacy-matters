import React from "react";
import { Row, Col } from "reactstrap";

const HeaderContent = props => {
  const { title, subtitle, date, by } = props.markdownRemark.frontmatter;
  return (
    <Row>
      <Col>
        <h2>{title}</h2>
        <div className="lead">{subtitle}</div>
        <div>Introduced on {date}</div>
        <div>{by}</div>
      </Col>
    </Row>
  );
};

export const query = graphql`
  fragment HeaderPolicyFragment on MarkdownRemark {
    frontmatter {
      title
      subtitle
      date
      by
    }
  }
`;

export default HeaderContent;

import React from "react";
import { Row, Col } from "reactstrap";
import BillImage from "./bill-image";

const HeaderContent = props => {
  const { title, subtitle, date, by } = props.markdownRemark.frontmatter;
  return (
    <Row className="header-content py-md-5 py-4">
      <Col md="8">
        <h2 className="py-2">{title}</h2>
        <div className="d-block d-md-none bill-image-inline mx-auto">
          <BillImage />
        </div>
        <div className="py-4 lead">{subtitle}</div>
        <div className="">Introduced on {date}</div>
        <div className="">{by}</div>
      </Col>
      <Col className="mt-3 d-none d-md-block d-lg-block d-lx-block" md="4">
        <BillImage />
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

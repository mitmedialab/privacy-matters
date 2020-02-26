import React from "react";
import { Row, Col } from "reactstrap";
import BillImage from "./bill-image";

const HeaderContent = props => {
  const { title, subtitle, date, by, byUri } = props.markdownRemark.frontmatter;

  // const authors = by.split(",");
  // const uris = byUri.split(",");
  // const authorUris = authors.map(function(author, i) {
  //   return { author, uri: uris[i] };
  // });

  return (
    <Row className="header-content py-md-5 py-4">
      <Col md="8">
        <h1 className="py-2">{title}</h1>
        <div className="d-block d-md-none bill-image-inline mx-auto">
          <BillImage />
        </div>
        <div className="py-4 subheading-1">{subtitle}</div>
        <div className="">Introduced on {date}</div>
        <div dangerouslySetInnerHTML={{ __html: by }} />
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
      byUri
    }
  }
`;

export default HeaderContent;

import React from "react";
import { Row, Col } from "reactstrap";

const AboutContent = props => {
  const { frontmatter, html } = props.markdownRemark;
  return (
    <>
      <Row>
        <Col>
          <h2>{frontmatter.title}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Col>
      </Row>
    </>
  );
};

export default AboutContent;

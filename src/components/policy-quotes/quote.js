import React from "react";
import { Row, Col } from "reactstrap";

import "./style.scss";

const Quote = props => {
  const { frontmatter, html } = props.node;
  return (
    <>
      <Col className="quote-prompt my-3" xs={12}>
        <div>{frontmatter.prompt}</div>
      </Col>
      <Col xs={12}>
        <Row>
          <Col xs={3}>
            <div className="text-center display-1">🦊</div>
          </Col>
          <Col xs={9}>
            <blockquote className="blockquote">
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <footer className="blockquote-footer">
                {frontmatter.quotee}
              </footer>
            </blockquote>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Quote;

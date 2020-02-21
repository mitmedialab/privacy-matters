import React from "react";
import { Card, CardTitle } from "reactstrap";

import "./style.scss";

const Quote = props => {
  const { frontmatter, html } = props.node;
  return (
    <div className="quote">
      <Card body className="quote-card">
        <CardTitle className="card-title">
          <span className="half-highlight">Responses to the bill</span>
        </CardTitle>
        <blockquote className="blockquote">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <footer className="blockquote-footer">{frontmatter.quotee}</footer>
        </blockquote>
      </Card>
    </div>
  );
};

export default Quote;

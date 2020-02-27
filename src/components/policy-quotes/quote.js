import React from "react";
import { Card, CardTitle } from "reactstrap";

import "./style.scss";

const Quote = props => {
  const { frontmatter, html } = props.node;
  return (
    <div className="quote">
      <Card body className="quote-card py-3 px-5">
        <CardTitle className="card-title">
          <h2>
            <span className="half-highlight">Responses to the bill</span>
          </h2>
        </CardTitle>
        <blockquote className="blockquote">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <p>- {frontmatter.quotee}</p>
        </blockquote>
      </Card>
    </div>
  );
};

export default Quote;

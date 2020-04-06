import React from "react";
import { Card, CardTitle } from "reactstrap";

import "./style.scss";

const ContactUs = props => {
  const { title, flush, onClick, children } = props;
  return (
    <div className={`callout-box ${flush ? "flush" : ""}`}>
      <Card
        body
        className={`callout-card py-3 px-5 ${onClick ? "clickable" : ""}`}
        onClick={onClick}
      >
        <CardTitle className="card-title">
          <h2>
            <span className="half-highlight">{title}</span>
          </h2>
        </CardTitle>
        {children}
      </Card>
    </div>
  );
};

export default ContactUs;

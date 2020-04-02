import React from "react";
import { Row, Col, Card, CardTitle } from "reactstrap";
import { Link } from "gatsby";

import "./style.scss";

const ContactUs = props => {
  const { title, children } = props;
  return (
    <div className="callout-box">
      <Card body className="callout-card py-3 px-5">
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

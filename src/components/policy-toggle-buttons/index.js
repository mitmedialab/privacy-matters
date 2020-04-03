import React from "react";
import { Link } from "gatsby";
import { Col, Card, CardTitle } from "reactstrap";

import { ACCESS } from "../../utils/featureFlags";

import "./style.scss";

const PolicyToggleButtons = props => {
  const { policies } = props;

  return (
    <>
      <Col xs={12}>
        <h2 className="text-center pb-5">
          <span className="half-highlight">Explore privacy bills</span>
        </h2>
      </Col>
      {Object.keys(policies).map(key => (
        <Col
          key={`policy-select-button-${key}`}
          md={4}
          sm={12}
          className="pb-5 policy-cards"
        >
          <Link to={`/bill-${key}/?ft=${ACCESS}`}>
            <Card body className="bill-card h-100">
              <CardTitle className="card-title mt-auto">
                <h2>{policies[key].long}</h2>
              </CardTitle>
              <Link
                className="mt-auto arrow text-right"
                to={`/bill-${key}/?ft=${ACCESS}`}
              >
                &#10230; <span className="sr-only">Explore bill</span>
              </Link>
            </Card>
          </Link>
        </Col>
      ))}
    </>
  );
};

export default PolicyToggleButtons;

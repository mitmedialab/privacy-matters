import React from "react";
import { Link } from "gatsby";
import { Col, Card, CardTitle } from "reactstrap";

import { ACCESS } from "../../utils/featureFlags";

import "./style.scss";

const PolicyToggleButtons = props => {
  const { policies } = props;

  return (
    <>
      {Object.keys(policies).map(key => (
        <Col
          key={`policy-select-button-${key}`}
          md={4}
          sm={12}
          className="pb-5 policy-cards"
        >
          <Card body className="bill-card h-100">
            <CardTitle className="card-title">{policies[key].long}</CardTitle>
            <Link
              className="mt-auto arrow text-right"
              to={`/bill-${key}/?ft=${ACCESS}`}
            >
              &rarr; <span className="sr-only">Explore bill</span>
            </Link>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default PolicyToggleButtons;
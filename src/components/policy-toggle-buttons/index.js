import React from "react";
import { Col, Button, Card, CardTitle, CardText } from "reactstrap";
import PolicyPrototypeSmart from "./../policy-prototype/policy-smart";
import PolicyPrototypeOnlinePrivacyAct from "./../policy-prototype/policy-online";
import PolicyPrototypeCorpa from "./../policy-prototype/policy-corpa";

import { SMART, ONLINE_PRIVACY, CORPA } from "../../constants/policies";

import "./style.scss";

const PolicyToggleButtons = props => {
  const { policies, onClick } = props;

  const prototypes = {
    [SMART]: <PolicyPrototypeSmart />,
    [ONLINE_PRIVACY]: <PolicyPrototypeOnlinePrivacyAct />,
    [CORPA]: <PolicyPrototypeCorpa />
  };

  return (
    <>
      {Object.keys(policies).map(key => (
        <Col
          key={`policy-select-button-${key}`}
          md={4}
          sm={12}
          className="pb-3"
        >
          <Card body className="bill-card h-100">
            {prototypes[key]}
            <CardTitle className="card-title">{policies[key].long}</CardTitle>
            <CardText>{policies[key].summary}</CardText>
            <Button
              color="primary"
              onClick={e => onClick(key)}
              size="lg"
              className="w-100 mt-auto"
            >
              Explore the bill
            </Button>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default PolicyToggleButtons;

import React from "react";
import { Col, Button, Card, CardTitle, CardText } from "reactstrap";
import PolicyPrototypeSmart from "./../policy-prototype/policy-smart";
import PolicyPrototypeOnlinePrivacyAct from "./../policy-prototype/policy-online";
import PolicyPrototypeCorpa from "./../policy-prototype/policy-corpa";

import { SMART, ONLINE_PRIVACY, CORPA } from "../../constants/policies";

import "./style.scss";

const PolicyToggleButtons = props => {
  const { selectedPolicy, policies, onClick } = props;

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
          sm={4}
          xs={12}
          className="pb-1"
        >
          <Card body className="h-100">
            {prototypes[key]}
            <CardTitle className="display-4">{policies[key].short}</CardTitle>
            <CardText>{policies[key].summary}</CardText>
            <Button
              color="primary"
              onClick={e => onClick(key)}
              size="lg"
              className="w-100"
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

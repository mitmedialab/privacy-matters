import React from "react";
import { Col, Button } from "reactstrap";

const PolicyToggleButtons = props => {
  const { selectedPolicy, policies, onClick } = props;

  return (
    <>
      {Object.keys(policies).map(key => (
        <Col
          key={`policy-select-button-${key}`}
          sm={4}
          xs={12}
          className="pb-1"
        >
          <Button
            color={selectedPolicy === key ? "primary" : "secondary"}
            onClick={e => onClick(key)}
            size="lg"
            className="w-100 h-100"
          >
            {policies[key].short}
          </Button>
        </Col>
      ))}
    </>
  );
};

export default PolicyToggleButtons;

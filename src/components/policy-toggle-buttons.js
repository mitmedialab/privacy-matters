import React from "react";
import { Row, Col, Button } from "reactstrap";

const PolicyToggleButtons = props => {
  const { selectedPolicy, policies, onClick } = props;

  return (
    <Row>
      {Object.keys(policies).map(key => (
        <Col key={`policy-select-button-${key}`}>
          <Button
            color={selectedPolicy === key ? "primary" : "secondary"}
            onClick={e => onClick(key)}
            size="lg"
            className="w-100"
          >
            {policies[key].short}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default PolicyToggleButtons;

import React from "react";
import { Container } from "reactstrap";

import "./style.scss";

const CardSection = props => {
  const { children } = props;
  return (
    <div className="card-section">
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default CardSection;

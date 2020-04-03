import React from "react";
import { Container } from "reactstrap";

import "./style.scss";

const CardSection = props => {
  const { children, buffer } = props;
  return (
    <div className={`${buffer ? "my-5 py-5" : ""}`}>
      <div className="card-section">
        <Container>
          <main>{children}</main>
        </Container>
      </div>
    </div>
  );
};

export default CardSection;

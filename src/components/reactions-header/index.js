import React from "react";
import { Container } from "reactstrap";

import ContentHeader from "../content-header";
import ReactionsImage from "./reactions-image";
import { policies } from "../../constants/policies";

import "./style.scss";

const ReactionsHeader = ({ policy }) => {
  const image = <ReactionsImage />;
  return (
    <div className="secondary-background">
      <Container>
        <ContentHeader
          backgroundClass="secondary-background"
          title={`How people responded to the ${policies[policy].long}`}
          subtitle="Key insights and responses from 41 interviews with experts and everyday people"
          image={image}
        >
          <div>Read more about our research</div>
        </ContentHeader>
      </Container>
    </div>
  );
};

export default ReactionsHeader;

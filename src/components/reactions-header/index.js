import React from "react";
import { Container } from "reactstrap";
import { Link } from "gatsby";

import ContentHeader from "../content-header";
import ReactionsImage from "./reactions-image";
import { policies } from "../../constants/policies";

import { ACCESS } from "../../utils/featureFlags";

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
          <Link to={`/research?ft=${ACCESS}`}>
            Read more about our research
          </Link>
        </ContentHeader>
      </Container>
    </div>
  );
};

export default ReactionsHeader;

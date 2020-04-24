import React from "react";
import { Container } from "reactstrap";
import { Link } from "gatsby";

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
          subtitle="We interviewed 41 people, from privacy experts to everyday people, to get feedback on the bill and prototype."
          image={image}
        >
          <Link to={`/research`}>Read more about our interviews</Link>
        </ContentHeader>
      </Container>
    </div>
  );
};

export default ReactionsHeader;

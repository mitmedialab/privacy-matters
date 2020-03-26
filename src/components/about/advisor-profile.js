import React from "react";
import { Card, CardTitle, CardBody, CardText, CardSubtitle } from "reactstrap";

const AdvisorProfile = props => {
  const { image, name, role, affiliation } = props;

  return (
    <Card className="advisor-profile">
      {image}
      <CardBody className="text-center pb-5">
        <CardTitle className="py-3">{name}</CardTitle>
        <CardSubtitle>{role}</CardSubtitle>
        <CardText>
          <i>{affiliation}</i>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default AdvisorProfile;

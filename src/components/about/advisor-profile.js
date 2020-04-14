import React from "react";
import { Card, CardTitle, CardBody, CardText, CardSubtitle } from "reactstrap";

const AdvisorProfile = props => {
  const {
    name,
    role,
    affiliation,
    additionalRole,
    additionalAffiliation
  } = props;

  return (
    <Card className="advisor-profile">
      <CardBody className="text-center pb-1">
        <CardTitle className="py-2">{name}</CardTitle>
        <CardSubtitle>
          {role} <i>{affiliation}</i>
        </CardSubtitle>
        {additionalRole && additionalAffiliation && (
          <CardText>
            {additionalRole} <i>{additionalAffiliation}</i>
          </CardText>
        )}
      </CardBody>
    </Card>
  );
};

export default AdvisorProfile;

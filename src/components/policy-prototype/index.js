import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { graphql } from "gatsby";

import {
  SMART,
  ONLINE_PRIVACY,
  COPRA,
  policies
} from "../../constants/policies";
import PolicyPrototypeSmart from "./policy-smart";
import PolicyPrototypeOnlinePrivacyAct from "./policy-online";
import PolicyPrototypeCopra from "./policy-copra";
import CalloutCard from "../callout-card";

const PolicyPrototype = props => {
  const { selectedPolicy } = props;
  const prototypes = {
    [SMART]: <PolicyPrototypeSmart />,
    [ONLINE_PRIVACY]: <PolicyPrototypeOnlinePrivacyAct />,
    [COPRA]: <PolicyPrototypeCopra />
  };
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <CalloutCard title="How this bill might look" onClick={toggle}>
      {prototypes[selectedPolicy]}

      <Button color="primary" className="my-2 py-2 rounded-0" onClick={toggle}>
        View
      </Button>
      <Modal className="privacy-modal" isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>How this bill might look</ModalHeader>
        <ModalBody>
          {prototypes[selectedPolicy]}
          <p>
            Our team created a speculative mockup to show how a social media
            platform might look if {policies[selectedPolicy].short} were passed.
          </p>
        </ModalBody>
      </Modal>
    </CalloutCard>
  );
};

export const prototypeImage = graphql`
  fragment prototypeImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default PolicyPrototype;

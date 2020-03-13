import React, { useState } from "react";
import {
  Button,
  Card,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

import { SMART, ONLINE_PRIVACY, COPRA } from "../../constants/policies";
import PolicyPrototypeSmart from "./policy-smart";
import PolicyPrototypeOnlinePrivacyAct from "./policy-online";
import PolicyPrototypeCopra from "./policy-copra";

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
    <div className="callout-box">
      <Card body className="callout-card py-3 px-5">
        <CardTitle className="card-title">
          <h2>
            <span className="half-highlight">How this bill might look</span>
          </h2>
        </CardTitle>
        {prototypes[selectedPolicy]}

        <Button color="primary" className="my-2" onClick={toggle}>
          View
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>How this bill might look</ModalHeader>
          <ModalBody>{prototypes[selectedPolicy]}</ModalBody>
        </Modal>
      </Card>
    </div>
  );
};

export default PolicyPrototype;

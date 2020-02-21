import React, { useState } from "react";
import {
  Button,
  Card,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

import { SMART, ONLINE_PRIVACY, CORPA } from "../../constants/policies";
import PolicyPrototypeSmart from "./policy-smart";
import PolicyPrototypeOnlinePrivacyAct from "./policy-online";
import PolicyPrototypeCorpa from "./policy-corpa";

import "./style.scss";

const PolicyPrototype = props => {
  const { selectedPolicy } = props;
  const prototypes = {
    [SMART]: <PolicyPrototypeSmart />,
    [ONLINE_PRIVACY]: <PolicyPrototypeOnlinePrivacyAct />,
    [CORPA]: <PolicyPrototypeCorpa />
  };
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div className="prototype">
      <Card body className="prototype-card">
        <CardTitle className="card-title">
          <span className="half-highlight">
            How might we visualize this bill?
          </span>
        </CardTitle>
        {prototypes[selectedPolicy]}
        <Button onClick={toggle}>View</Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            How might we visualize this bill?
          </ModalHeader>
          <ModalBody>{prototypes[selectedPolicy]}</ModalBody>
        </Modal>
      </Card>
    </div>
  );
};

export default PolicyPrototype;

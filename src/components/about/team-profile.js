import React, { useState } from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  ModalFooter,
  CardTitle,
  CardBody,
  CardFooter,
  CardText,
  CardSubtitle
} from "reactstrap";

const TeamProfile = props => {
  const { image, name, role, affiliation, website, children } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Card onClick={toggle} className="team-profile" tabindex="0" role="button">
      {image}
      <CardBody className="text-center pb-5">
        <CardTitle className="py-3">{name}</CardTitle>
        <CardSubtitle>{role}</CardSubtitle>
        <CardText>
          <i>{affiliation}</i>
        </CardText>
        <Modal
          className="profile-modal"
          isOpen={modal}
          toggle={toggle}
          centered={true}
          size="lg"
        >
          <ModalHeader toggle={toggle}></ModalHeader>
          <ModalBody>
            <Row>
              <Col md={4} className="text-center">
                <div>{image}</div>
                <div className="profile-meta">
                  <div className="profile-name">{name}</div>
                  <div>{role}</div>
                  <div>
                    <i>{affiliation}</i>
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <p>{children}</p>
                <p>
                  <a href={website} rel="noopener noreferrer" target="_blank">
                    Website
                  </a>
                </p>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <div className="animation" />
          </ModalFooter>
        </Modal>
      </CardBody>
      <CardFooter />
    </Card>
  );
};

export default TeamProfile;

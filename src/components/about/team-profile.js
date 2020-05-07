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
  CardSubtitle,
  Button
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
          <div className="pt-3">
            <Button color="secondary" className="mt-3 py-2 px-4 rounded-0">
              Learn More
            </Button>
          </div>
        </CardText>
        <Modal
          className="profile-modal privacy-modal"
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

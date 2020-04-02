import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Card, Row, Col } from "reactstrap";

import Layout from "../components/layout";
import NavBar from "../components/navbar";
import DownloadResearch from "../components/research-section/download-research";
import CardSection from "../components/card-section";
import CalloutCard from "../components/callout-card";

import isEnabled, { ACCESS } from "../utils/featureFlags";

const ResearchPage = () => {
  if (isEnabled(ACCESS)) {
    return (
      <div className="privacy-page">
        <NavBar showHome />
        <DownloadResearch />
        <Layout>
          <Row>
            <Col md={6}>
              <h2>
                <span className="half-highlight">Summary</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
            <Col md={6}>
              <CalloutCard title="Who we talked to">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CalloutCard>
            </Col>
          </Row>
        </Layout>
        <CardSection>
          <Row className="justify-content-end">
            <Col md={6}>
              <Card className="p-5">
                <h2>
                  <span className="half-highlight">Our process</span>
                </h2>
                <p className="pt-2 pb-3 subheading-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Card>
            </Col>
          </Row>
        </CardSection>
        <Layout>
          <Row>
            <Col md={6}>
              <CalloutCard title="Team in action">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CalloutCard>
            </Col>
            <Col md={6}>
              <h2>
                <span className="half-highlight">Selecting the bills</span>
              </h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <h2>
                <span className="half-highlight">Designing the mockups</span>
              </h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <h2>
                <span className="half-highlight">Conducting interviews</span>
              </h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
          </Row>
        </Layout>
        <CardSection>
          <Row>
            <Col md={6}>
              <Card className="p-5">
                <h2>
                  <span className="half-highlight">Our takeaways</span>
                </h2>
                <p className="pt-2 pb-3 subheading-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Card>
            </Col>
          </Row>
        </CardSection>
        <Layout footer>
          <Row>
            <Col md={6} className="learnings">
              <h2>
                <span className="half-highlight">What we learned</span>
              </h2>
              <dl>
                <dt>Learning #1</dt>
                <dd>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </dd>
              </dl>

              <dl>
                <dt>Learning #2</dt>
                <dd>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </dd>
              </dl>

              <dl>
                <dt>Learning #3</dt>
                <dd>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </dd>
              </dl>
            </Col>

            <Col md={6}>
              <CalloutCard title="What we heard">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CalloutCard>
            </Col>
          </Row>
        </Layout>
      </div>
    );
  } else {
    return (
      <>
        <h1>TBD</h1>
      </>
    );
  }
};

export default ResearchPage;

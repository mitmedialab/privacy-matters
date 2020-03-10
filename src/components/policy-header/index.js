import React from "react";
import { Container, TabContent, TabPane, Nav, NavItem } from "reactstrap";

import { Link } from "gatsby";

import PolicyHeaderSmart from "./policy-header-smart";
import PolicyHeaderOpa from "./policy-header-opa";
import PolicyHeaderCopra from "./policy-header-copra";
import { SMART, ONLINE_PRIVACY, COPRA } from "../../constants/policies";

import { ACCESS } from "../../utils/featureFlags";

import "./style.scss";

const PolicyHeader = ({ policy }) => {
  const prototypes = {
    [SMART]: <PolicyHeaderSmart />,
    [ONLINE_PRIVACY]: <PolicyHeaderOpa />,
    [COPRA]: <PolicyHeaderCopra />
  };

  return (
    <>
      <Container fluid>
        <Nav tabs>
          <NavItem>
            <Link
              className={`nav-link ${policy === SMART ? "active" : ""}`}
              to={`/bill-smart/?ft=${ACCESS}`}
            >
              SMART
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className={`nav-link ${
                policy === ONLINE_PRIVACY ? "active" : ""
              }`}
              to={`/bill-opa/?ft=${ACCESS}`}
            >
              OPA
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className={`nav-link ${policy === COPRA ? "active" : ""}`}
              to={`/bill-copra/?ft=${ACCESS}`}
            >
              COPRA
            </Link>
          </NavItem>
        </Nav>
      </Container>
      <div className="primary-background">
        <Container>
          <TabContent activeTab="1">
            <TabPane tabId="1">{prototypes[policy]}</TabPane>
          </TabContent>
        </Container>
      </div>
    </>
  );
};

export default PolicyHeader;

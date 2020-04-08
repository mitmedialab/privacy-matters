import React from "react";
import { Container, TabContent, TabPane, Nav, NavItem } from "reactstrap";

import { Link } from "gatsby";

import PolicyHeaderSmart from "./policy-header-smart";
import PolicyHeaderOpa from "./policy-header-opa";
import PolicyHeaderCopra from "./policy-header-copra";
import {
  SMART,
  ONLINE_PRIVACY,
  COPRA,
  policies
} from "../../constants/policies";

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
          {[SMART, ONLINE_PRIVACY, COPRA].map(current => (
            <NavItem key={current}>
              <Link
                className={`nav-link ${policy === current ? "active" : ""}`}
                to={`/bill-${current}/?ft=${ACCESS}`}
              >
                {policies[current].short}
              </Link>
            </NavItem>
          ))}
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

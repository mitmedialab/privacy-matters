import React from "react";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { Link } from "gatsby";

import PolicyHeaderSmart from "./policy-header-smart";
import PolicyHeaderOpa from "./policy-header-opa";
import PolicyHeaderCorpa from "./policy-header-corpa";
import { SMART, ONLINE_PRIVACY, CORPA } from "../../constants/policies";

import { ACCESS } from "../../utils/featureFlags";

import "./style.scss";

const PolicyHeader = ({ policy }) => {
  const prototypes = {
    [SMART]: <PolicyHeaderSmart />,
    [ONLINE_PRIVACY]: <PolicyHeaderOpa />,
    [CORPA]: <PolicyHeaderCorpa />
  };

  return (
    <>
      <Container fluid>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={"active"}
              onClick={() => {
                console.log("1");
              }}
            >
              <Link to={`/bill-smart/?ft=${ACCESS}`}>SMART</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="">
              <Link to={`/bill-opa/?ft=${ACCESS}`}>OPA</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="">
              <Link to={`/bill-corpa/?ft=${ACCESS}`}>CORPA</Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
      <div className="secondary-background">
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

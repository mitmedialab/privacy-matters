import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem
} from "reactstrap";

import EyesIcon from "./eyes-icon";

import { policies } from "../../constants/policies";

import "./style.scss";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const { showHome } = props;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar light expand="md" className="sticky-top">
        <div className="navbar-brand">
          {showHome && (
            <Link to={`/`}>
              <EyesIcon />
              <span className="ml-2 site-name half-highlight">
                Let’s Talk Privacy
              </span>
            </Link>
          )}
        </div>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <div className="d-sm-block d-md-none text-right">
              {Object.keys(policies).map(key => (
                <NavItem
                  key={`policy-select-nav-item-${key}`}
                  className="ml-auto"
                >
                  <Link className="nav-link subheading-2" to={`/bill-${key}`}>
                    {policies[key].short}
                  </Link>
                </NavItem>
              ))}
            </div>
            <div className="d-none d-md-block">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <span className="subheading-2">Bills</span>
                </DropdownToggle>
                <DropdownMenu right>
                  {Object.keys(policies).map(key => (
                    <DropdownItem key={`policy-select-button-${key}`}>
                      <Link className="nav-link px-3" to={`/bill-${key}`}>
                        {policies[key].short}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <DropdownItem divider />
            <NavItem className="ml-auto">
              <Link className="nav-link subheading-2 px-md-5" to={`/research`}>
                Research
              </Link>
            </NavItem>
            <NavItem className="ml-auto">
              <Link className="nav-link pr-md-5 subheading-2" to={`/about`}>
                About
              </Link>
            </NavItem>
            <NavItem className="ml-auto">
              <Link className="nav-link subheading-2" to={`/privacy`}>
                Privacy Policy
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;

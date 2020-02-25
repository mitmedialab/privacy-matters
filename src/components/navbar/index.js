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

import { ACCESS } from "../../utils/featureFlags";
import { policies } from "../../constants/policies";

import "./style.scss";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const { showHome } = props;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <div className="navbar-brand">
          {showHome && (
            <Link to={`/?ft=${ACCESS}`}>
              <span className="site-name half-highlight">
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
                  className="ml-auto pt-3"
                >
                  <Link to={`/bill-${key}/?ft=${ACCESS}`}>
                    {policies[key].short}
                  </Link>
                </NavItem>
              ))}
            </div>
            <div className="d-none d-md-block">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Bills
                </DropdownToggle>
                <DropdownMenu right>
                  {Object.keys(policies).map(key => (
                    <DropdownItem key={`policy-select-button-${key}`}>
                      <Link to={`/bill-${key}/?ft=${ACCESS}`}>
                        {policies[key].short}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

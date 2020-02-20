import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { ACCESS } from "../../utils/featureFlags";
import { policies } from "../../constants/policies";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const { showHome } = props;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        {showHome && (
          <NavbarBrand>
            <Link to={`/?ft=${ACCESS}`}>Home</Link>
          </NavbarBrand>
        )}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
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
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

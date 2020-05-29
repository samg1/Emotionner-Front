import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  button,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navbar_ = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Emotionner</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Usuarios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Artículos</NavLink>
            </NavItem>
          </Nav>
          <button className="btn btn-light btn-outline-secondary" style={{color:'00000'}}>Cerrar Sesión</button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar_;
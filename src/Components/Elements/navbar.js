import React, { useState } from 'react';

import {auth} from '../../firebase';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  button,
  NavItem,
  NavLink,

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
              <NavLink href="">Tus emociones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Tus tareas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Artículos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Estadísticas</NavLink>
            </NavItem>
          </Nav>
          <div className=''>
          <NavLink href="" type='button' style={{fontWeight:'lighter'}, {fontSize:'18px'}}className='btn-md btn-light' onClick = {() => {auth.signOut()}}><i className="fa fa-user"></i>   Cerrar Sesión</NavLink>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar_;

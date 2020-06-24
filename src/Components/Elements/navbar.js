import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';
import AuthService from './../../Services/auth.service'

const Navbar_ = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Emotionner</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink >Tus emociones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Tus tareas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >Artículos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Estadísticas</NavLink>
            </NavItem>
          </Nav>
          <div className=''>
          <NavLink type='button' style={{fontWeight:'lighter'}, {fontSize:'16px'}}className='btn-md btn-light' onClick = {logOut}><i className="fa fa-user"></i>   Cerrar Sesión</NavLink>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar_;

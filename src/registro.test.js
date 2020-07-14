import React from 'react';
import {shallow} from 'enzyme';
import { textSpanContainsPosition } from 'typescript';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from "react-testing-library"


configure({ adapter: new Adapter() });


const Register = require('./Components/Forms/registration')
const Navbar_ = require('./Components/Elements/navbar')  

test('funcionamiento del link de registro', () =>{
    const { getByText } = render(<Navbar_ />)

    expect(document.querySelector("NavLink").getAttribute("href")).toBe('/singup');
 

})
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'

class LoginUserForm extends Component{
    render(){
        return(
            <div className="container ">
                <div className= 'row '>
                    <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
                        <div className='card card-signin my-5'>
                            <div className='card-body'>
                                <div className='form-icon'>
                                    <span ><FontAwesomeIcon icon={faUser} /></span>
                                </div>
                               <h5 className='card-title text-center text-uppercase'>Iniciar Sesión</h5>
                               <Form className='form-singin'>
                                    <FormGroup>
                                        <Label>Correo Electronico</Label>
                                        <Input className='form-control' type="email" placeholder="Introduzca su correo "></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Contraseña</Label>
                                        <Input className='form-control' type="password" placeholder="Introduzca su contraseña" required></Input>
                                    </FormGroup>
                                    <button className="btn btn-lg btn-block text-uppercase btn-light" style={{backgroundColor:'#b79ced'}}>Iniciar Sesión</button>
                                    <div className="text-center">
                                        <a href="/sing-up">¿No tienes cuenta? Regístrate ahora</a>
                                    </div>
                            </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        
    }
    
}
export default LoginUserForm
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import React, {Component} from 'react';

class LoginAdminForm extends Component{
    render(){
        return(
            <div className="container">
            <div className= 'row '>
                <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
                    <div className='card card-signin my-5'>
                        <div className='card-body'>
                           <h5 className='card-title text-center text-uppercase'>Bienvenido Administrador</h5>
                           <Form className='form-singin'>
                                <FormGroup>
                                    <Label>Correo Electronico</Label>
                                    <Input className='form-control' type="email" placeholder="Introduzca su correo "></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Contraseña</Label>
                                    <Input className='form-control' type="password" placeholder="Introduzca su contraseña" required></Input>
                                </FormGroup>
                                <button className="btn btn-lg btn-primary btn-block text-uppercase">Iniciar Sesión</button>
                        </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            )
        
    }
    
}
export default LoginAdminForm
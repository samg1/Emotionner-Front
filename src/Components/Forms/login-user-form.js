import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { auth, signInWithGoogle, generateUserDocument } from "../../firebase";
import { withRouter } from "react-router";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error al ingresar a la cuenta!");
          console.error("Error al ingresar a la cuenta", error);
          alert("Error al ingresar a la cuenta")
        });
      };
      
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };
   

  return (
    <div className= 'container'>
            <div className= 'row align-items-center'>
                <div className = 'col-sm-9 col-md-7 col-lg-5 mx-auto'>
                <div className='card card-signin my-5'>
                    <div className='card-body'>
                        <div className='form-icon'>
                            <span ><FontAwesomeIcon icon={faUser} /></span>
                        </div>
                            <h5 className='card-title text-center text-uppercase'>Iniciar Sesión</h5>
                            <Form>
                                    <FormGroup>
                                        <Label>Correo Electronico</Label>
                                        <Input className='form-control' type="email" placeholder="Introduzca su correo "
                                            name="userEmail"
                                            value = {email}
                                            id="userEmail"
                                            onChange = {(event) => onChangeHandler(event)}
                                            required
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Contraseña</Label>
                                        <Input className='form-control' type="password" placeholder="Introduzca su contraseña" 
                                            name="userPassword"
                                            value = {password}
                                            placeholder="Your Password"
                                            id="userPassword"
                                            onChange = {(event) => onChangeHandler(event)}
                                        required></Input>
                                    </FormGroup>
                                    <div className="form-group">
                                    <button className="btn btn-lg btn-block text-uppercase btn-light" style={{backgroundColor:'#b79ced'}} onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
                                                  Iniciar Sesion
                                    </button>
                                    </div>
                                    <div className="text-center">
                                        <a href="/singUp">¿No tienes cuenta? Regístrate ahora</a>
                                    </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default withRouter(Login);





import React, {useState} from "react";
import { auth } from "./../../firebase";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error al ingresar a la cuenta!");
          console.error("Error al ingresar a la cuenta", error);
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
        <>
        <div className="wrap-background">
        <div className="cont">
            <div className="form sign-in">
                <h2>¡Bienvenido de Vuelta!</h2>
                <Form>
                    <FormGroup>
                        <label>
                            <span>Correo Electrónico</span>
                            <Input  type = "email" placeholder="Introduzca su correo" className="input-1 input-2"
                                name = "userEmail"
                                value = {email}
                                id = "userEmail"
                                onChange = {(event) => onChangeHandler(event)}
                                required
                            ></Input>
                        </label>
                    </FormGroup>
                    <FormGroup>
                        <label>
                            <span>Contraseña</span>
                            <Input  type = "password" placeholder = "Introduzca su contraseña" className="input-1 input-2"
                                name = "userPassword"
                                value = {password}
                                id = "userPassword"
                                onChange = {(event) => onChangeHandler(event)}
                                required
                            ></Input>
                        </label>
                    </FormGroup>
                    <button  type="button" className="submit" style={{backgroundColor:'#b79ced'}} onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
                        Iniciar Sesión
                    </button>    
                </Form>             
            </div>
            <div className="sub-cont">
                <div className="img">
                    <div className="img__text m--up">
                        <h2>¿Nuevo por Aquí?</h2>
                        <p>¡Regístrate Ahora!</p>
                    </div>
                    <div className="img__btn">
                        <span className="m--up">    
                            <a className="a-link-color" href="/singUp">Registrarse</a>
                        </span>
                    </div>
                </div>
    
            </div>
        </div>
        </div>
        </>
    );
}; 
export default Login;










/**
 const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error al ingresar a la cuenta!");
          console.error("Error al ingresar a la cuenta", error);
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
    <div className= 'container fluid'>
            <div className= 'row align-items-center'>
            {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
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

export default Login;





 */
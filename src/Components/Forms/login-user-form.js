import React, {useState, useContext} from "react";
import {Form, FormGroup,Input} from 'reactstrap';
import { auth, signInWithGoogle, generateUserDocument } from "../../firebase";
import {AuthContext} from '../Authorization/Auth';
import { withRouter, Redirect } from "react-router";
import Footer from '../Elements/footerOutside'

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
    const {currentUser} = useContext(AuthContext);
    if(currentUser){
        return <Redirect to ='/calendar'/>
    }

    return (
        <>
        <div className="wrap-background">
        <div className="cont">
            <div className="form sign-in">
                <h2>¡Bienvenido de Vuelta!</h2>
                <Form>
                    <FormGroup className="label-1">
                        <span>Correo Electrónico</span>
                        <Input  type = "email" placeholder="Introduzca su correo" className="input-1 input-2"
                            name = "userEmail"
                            value = {email}
                            id = "userEmail"
                            onChange = {(event) => onChangeHandler(event)}
                            required
                        ></Input>
                    </FormGroup>
                    <FormGroup className="label-1">
                        <span>Contraseña</span>
                         <Input  type = "password" placeholder = "Introduzca su contraseña" className="input-1 input-2"
                            name = "userPassword"
                            value = {password}
                            id = "userPassword"
                            onChange = {(event) => onChangeHandler(event)}
                            required
                         ></Input>
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
        <div style={{margin:'0', backgroundColor:'#ededed'}}>
            <p style={{color:'#ededed'}}>.</p>
            <p style={{color:'#ededed'}}>.</p>
            <p style={{color:'#ededed'}}>.</p>
            <p style={{color:'#ededed'}}>.</p>
        </div>
        <Footer/>
        </>
  );
};

export default withRouter(Login);












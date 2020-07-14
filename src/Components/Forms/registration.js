import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import './../../App.css'
import Footer from "../Elements/footerInside";
import AuthService from "../../Services/auth.service";
import { FormGroup } from "reactstrap";
/**
 * Requeried method verifies that all the fields are filled in
 * @param {*} value 
 */
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Este campo es requerido!
      </div>
    );
  }
};
/**
 * Email validation method, validates if an email is a valid format
 * @param {*} value 
 */
const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Este no es un email válido, porfavor ingrese una dirección valida.
      </div>
    );
  }
};
/**
 * Password validator, validates if the leght of the password is correct it 
 * must be between 6 and 40 characters
 * @param {*} value 
 */
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        La contraseña debe tener de 6 a 40 caracteres.
      </div>
    );
  }
};
/**
 * Registration Hook
 * @param {*} props 
 */

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  /**
   * Variables
   */
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [ocupation, setOcupation] = useState("");
  const [premium, setPremium] = useState(false);
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

/**
 * Const values changes
 * @param {*} e 
 */
  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeLastName = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangeBirthdate = (e) => {
    const birthdate = e.target.value;
    setBirthdate(birthdate);
  };
 

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  
function registro (name, lastname, email, birthdate, password) {
  setName(name);
  setLastname(lastname);
  setEmail(email);
  setBirthdate(birthdate);
  setPassword(password);

  AuthService.register(name,lastname,email,birthdate,ocupation,premium,password).then(
      (response) => {
        alert(response.data.message);
        setSuccessful(true);
        return response.data.message;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        alert(resMessage);
        setSuccessful(false);
        return resMessage;

      }
    );
      const fallo = 'fallo wey'

    return fallo
}

  module.exports = registro;


  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(name,lastname,email,birthdate,ocupation,premium,password).then(
        (response) => {
          alert(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          alert(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <>
    <div className="container">
      <div className="cont-reg">
        <div className="img-reg">
          <div className="img__text m--in">
            <h2 className="motiv-reg-ph reg-h2">Hoy puede ser el comienzo de todo lo que te propongas</h2>
          </div>
          <div className="logo-text"></div>
        </div>
        <div className="form-reg sign-up">
          <h2 className="h2">¡Regístrate ya!</h2>
          <Form onSubmit={handleRegister} ref={form} autocomplete='off'>
            {!successful && (
              <div >
                <div className="label-1">
                  <label htmlFor="name">Nombre</label>
                  <Input
                    placeholder="Introduzca su nombre"
                    type="text"
                    className="form-control input-1 input-2"
                    name="name"
                    value={name}
                    onChange={onChangeName}
                    validations={[required]}
                  />
                </div>

                <div className="label-1">
                  <label htmlFor="lastname">Apellido</label>
                  <Input
                    placeholder="Introduzca su apellido"
                    type="text"
                    className="form-control input-1 input-2"
                    name="lastname"
                    value={lastname}
                    onChange={onChangeLastName}
                    validations={[required]}
                  />
                </div>

                <div className="label-1">
                  <label htmlFor="email">Correo Electrónico</label>
                  <Input
                    placeholder="Introduzca su correo"
                    type="text"
                    className="form-control input-1 input-2"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                  />
                </div>

                <div className="label-1">
                  <label htmlFor="password">Contraseña</label>
                  <Input
                    placeholder="Introduzca su contraseña"
                    type="password"
                    className="form-control input-1 input-2"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="label-1">
                  <label htmlFor="birthdate">Fecha de Nacimiento</label>
                  <Input
                    placeholder="Introduzca su fecha de nacimiento"
                    type="date"
                    className="form-control input-1 input-2"
                    name="birthdate"
                    value={birthdate}
                    onChange={onChangeBirthdate}
                    validations={[required]}
                  />
                </div>

                <div className="label-1">
                  <button className="btn btn-primary btn-block submitreg">Registrarse</button>
                </div>
              </div>
            )}
            {message && (
              <div className="form-group">
                <div
                  className={
                    successful ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </div>
    <div>
      <p >.</p>
      <p >.</p>
      <p >.</p>
      <p >.</p>
    </div>
    <Footer/>
    </>
  );
};

export default Register;

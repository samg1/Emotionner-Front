import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'

import AuthService from "../../Services/auth.service";
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
  const onChangeOcupation = (e) => {
    const ocupation = e.target.value;
    setOcupation(ocupation);
  };


  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(name,lastname,email,birthdate,ocupation,premium,password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="container">
      <div className="card card-signin my-5">
        <div className="card-body">
            <div className='form-icon'>
              <span ><FontAwesomeIcon icon={faUser} /></span>
            </div>
            <h5 className='card-title text-center text-uppercase'>Registrate</h5>
            <Form onSubmit={handleRegister} ref={form}>
              {!successful && (
                <div>
                  <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="name"
                      value={name}
                      onChange={onChangeName}
                      validations={[required]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastname">Apellido</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="lastname"
                      value={lastname}
                      onChange={onChangeLastName}
                      validations={[required]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={onChangeEmail}
                      validations={[required, validEmail]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      validations={[required, vpassword]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="birthdate">Fecha de Nacimiento</label>
                    <Input
                      type="date"
                      className="form-control"
                      name="birthdate"
                      value={birthdate}
                      onChange={onChangeBirthdate}
                      validations={[required]}
                    />
                  </div>

                  <div className="form-group">
                    <button className="btn btn-primary btn-block">Registrarse</button>
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
  );
};

export default Register;
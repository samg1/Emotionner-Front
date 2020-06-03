import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
//import React, {Component} from 'react';
import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'; 
import { Link } from '@reach/router';

const SignUp = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [ocupation, setOcupation] = useState("");
  const [premium, setPremium] = useState(null);
  const [password, setPassword] = useState("");


  const createUserWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    setName("");
    setLastname("");
    setEmail("");
    setBirthdate("");
    setOcupation("");
    setPremium(null);
    setPassword("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "name") {
      setName(value);
    }else if (name === "lastname") {
      setLastname(value);
    }else if (name === "email") {
      setEmail(value);
    }else if ( name === "birthdate") {
      setBirthdate(value);
    }else if (name === "ocupation") {
      setOcupation(value);
    }else if (name === "premium") {
      setPremium(null);
    }else if (name === "password") {
      setPassword(value);
    }
  };

  const sendSave = () => {

    if (name === "") {
      alert("Introduzca su nombre")
    }
    else if (!validateEmail(email)) {
        alert("El correo ingresado no es valido")
    }
    else if (lastname === "") {
       alert("Introduzca su apellido")
    }
    else if (birthdate  === "") {
       alert("Introduzca su fecha de nacimiento")
    }
    else if (ocupation === "" || ocupation === "Ocupación") {
       alert("Introduzca su ocupación")
    }
    else if (email === "") {
        alert("Introduzca su correo electrónico")
    }
    else if (password === "") {
        alert("Introduzca una contraseña")
    }
    else {
 
      const url = "https://emotionner.herokuapp.com/users/createUser"

      const datapost = {
        name : name,
        lastname : lastname,
        email : email,
        birthdate : birthdate,
        ocupation  : ocupation,
        premium : 'false',
        password : password
      }

      console.log(datapost)
      
      axios.post(url,datapost)
      .then(response=>{
        if (response.data.success===true) {
          alert(response.data.message)
          window.location.replace("https://emotionner.web.app/");
        }
        else {
          alert(response.data.message)
        }
      }).catch(error=>{
        alert(""+error)
      })
 
    }

  }; 

  function validateEmail(email) 
  {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return(
    <div className="container ">
        <div className= 'row '>
            <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
                <div className='card card-signin my-5'>
                    <div className='card-body'>
                        <div className='form-icon'>
                            <span ><FontAwesomeIcon icon={faUser} /></span>
                        </div>
                       <h5 className='card-title text-center text-uppercase'>Registrate</h5>
                       <Form className='form-singin'>
                            <FormGroup>
                                <Label>Nombre</Label>
                                <Input className='form-control' type="text" placeholder="Introduzca su nombre " name="name" 
                                value={name} onChange={event => onChangeHandler(event)}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Apellido</Label>
                                <Input className='form-control' type="text" placeholder="Introduzca su apellido " name="lastname" 
                                value={lastname} onChange={event => onChangeHandler(event)}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Fecha de nacimiento</Label>
                                <Input className='form-control' type="date" placeholder="Introduzca su fecha de nacimiento " name="birthdate" 
                                value={birthdate} onChange={event => onChangeHandler(event)}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Ocupación</Label>
                                <Input type="select"  name="ocupation" value={ocupation} onChange={event => onChangeHandler(event)}>
                                <option value="">Ocupación</option>
                                <option>Estudiante</option>
                                <option>Trabajo a tiempo completo</option>
                                <option>Trabajo a medio tiempo</option>
                                <option>Freelancer</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Correo Electronico</Label>
                                <Input className='form-control' type="email" placeholder="Introduzca su correo " name = "email"
                                value={email} onChange={event => onChangeHandler(event)}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Contraseña</Label>
                                <Input className='form-control' type="password" placeholder="Introduzca su contraseña" name="password"
                                value={password} onChange={event => onChangeHandler(event)}></Input>
                            </FormGroup>
                            <button type='submit' className="btn btn-lg btn-block text-uppercase btn-light" style={{backgroundColor:'#b79ced'}} onClick={()=> sendSave()} 
                              onClick={event => {
                                createUserWithEmailAndPasswordHandler(event, email, password)
                              }}
                            >
                              Registrarse 
                            </button>
                    </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )


}; 
export default SignUp;



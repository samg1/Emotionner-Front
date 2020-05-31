import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'; 

class UserRegistration extends Component{

    constructor(props){
        super(props);
        this.state = {
          campName: "",
          campLastname: "",
          campEmail:"",
          campBdate:"",
          campOcupation:"",
          campPassword: "",
          article: "",
          emotion:""
        }
      }

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
                               <h5 className='card-title text-center text-uppercase'>Registrate</h5>
                               <Form className='form-singin'>
                                    <FormGroup>
                                        <Label>Nombre</Label>
                                        <Input className='form-control' type="text" placeholder="Introduzca su nombre " required
                                        value={this.state.campName} onChange={(value)=> this.setState({campName:value.target.value})}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Apellido</Label>
                                        <Input className='form-control' type="text" placeholder="Introduzca su apellido " required
                                        value={this.state.campLastname} onChange={(value)=> this.setState({campLastname:value.target.value})}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Fecha de nacimiento</Label>
                                        <Input className='form-control' type="date" placeholder="Introduzca su fecha de nacimiento " required
                                        value={this.state.campBdate} onChange={(value)=> this.setState({campBdate:value.target.value})}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Ocupación</Label>
                                        <Input type="select" id="exampleCustomSelect" name="customSelect" value={this.state.campOcupation} onChange={(value)=> this.setState({campOcupation:value.target.value})}>
                                        <option value="">Ocupación</option>
                                        <option>Estudiante</option>
                                        <option>Trabajo a tiempo completo</option>
                                        <option>Trabajo a medio tiempo</option>
                                        <option>Freelancer</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Correo Electronico</Label>
                                        <Input className='form-control' type="email" placeholder="Introduzca su correo " required
                                        value={this.state.campEmail} onChange={(value)=> this.setState({campEmail:value.target.value})}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Contraseña</Label>
                                        <Input className='form-control' type="password" placeholder="Introduzca su contraseña" required
                                        value={this.state.campPassword} onChange={(value)=> this.setState({campPassword:value.target.value})}></Input>
                                    </FormGroup>
                                    <button className="btn btn-lg btn-block text-uppercase btn-light" type="button" style={{backgroundColor:'#b79ced'}} onClick={()=>this.sendSave()}>Registrarse</button>
                            </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        
    }

    sendSave(){

        if (this.state.campName=="") {
          alert("Introduzca su nombre")
        }
        else if (!validateEmail(this.state.campEmail)) {
            alert("El correo ingresado no es valido")
         }
        else if (this.state.campLastname=="") {
           alert("Introduzca su apellido")
        }
        else if (this.state.campBdate=="") {
           alert("Introduzca su fecha de nacimiento")
        }
        else if (this.state.campOcupation=="" || this.state.campOcupation=="Ocupación") {
           alert("Introduzca su ocupación")
        }
        else if (this.state.campEmail=="") {
            alert("Introduzca su correo electrónico")
         }
        else if (this.state.campPassword=="") {
            alert("Introduzca una contraseña")
         }
        else {
     
          const baseUrl = "https://emotionner-project.herokuapp.com/users/createUser"

          const datapost = {
            name : this.state.campName,
            lastname : this.state.campLastname,
            email : this.state.campEmail,
            birthdate : this.state.campBdate,
            ocupation  : this.state.campOcupation,
            premium : 'false',
            password : this.state.campPassword
          }

          console.log(datapost)
     
          axios.post(baseUrl,datapost)
          .then(response=>{
            if (response.data.success===true) {
              alert(response.data.message)
            }
            else {
              alert(response.data.message)
            }
          }).catch(error=>{
            alert(""+error)
          })
     
        }

        axios.get('https://emotionner-project.herokuapp.com/articles/lastArticle')
        .then(response => {
              this.state.article = response.data;
        })
        .catch(e => {
        // Podemos mostrar los errores en la consola
        console.log(e);
        })

        axios.post("https://emotionner-project.herokuapp.com/articles/relation", {
          articleid:this.state.article.id, 
          emotionid: this.state.emotion
          }
          .then(response=>{
            if (response.data.success===true) {
              alert(response.data.message)
            }
            else {
              alert(response.data.message)
            }
          }).catch(error=>{
            alert(""+error)
          })
     
        )}

      
    
}
export default UserRegistration

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
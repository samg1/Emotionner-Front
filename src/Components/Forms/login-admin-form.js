import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import React, {Component} from 'react';

class LoginAdminForm extends Component{
    constructor(props) {
        super(props)
       
        this.state = {
            username : '',
            campPassword: ''  
        }
        
    }
    handleChange = (e) => {
        const {name, value}= e.target;
        this.setState({... this.state, [name]: value });
    }
    singIn(){
        if (this.state.username==="") {
            alert("Introduzca su usuario")
          }
        else if (this.state.campPassword==="") {
              alert("La contraseña ingresada no es valida")
        } else {
            if(this.state.username ==="admin" && this.state.campPassword==="admin"){
                window.location.replace("https://emotionner.web.app/addArticle");
            }else{
                alert("Los datos ingresados no son validos")
            }
        }
    }
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
                                    <Label>Username</Label>
                                    <Input className='form-control' type="text" value={this.state.username} onChange={(value)=> this.setState({username:value.target.value})}  placeholder="Introduzca su usuario "></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Contraseña</Label>
                                    <Input className='form-control' type="text"  value={this.state.campPassword} onChange={(value)=> this.setState({campPassword:value.target.value})} placeholder="Introduzca su contraseña" required></Input>
                                </FormGroup>
                                <button type='button' className="btn btn-lg btn-block text-uppercase btn-light" style={{backgroundColor:'#b79ced'}} onClick={()=>this.singIn()}>Iniciar Sesión</button>
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
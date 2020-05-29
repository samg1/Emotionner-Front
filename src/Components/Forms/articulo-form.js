import {Button, CustomInput, Form, FormGroup, Label, Input} from 'reactstrap';
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenFancy} from '@fortawesome/free-solid-svg-icons'

class article extends Component{
    render(){
        return(
            <div className="container ">
                <div className= 'row '>
                    <div className='col-sm-12 col-md-12 col-lg-12 mx-auto'>
                        <div className='card card-signin my-5'>
                            <div className='card-body'>
                                <div className='form-icon'>
                                    <span ><FontAwesomeIcon icon={faPenFancy} /></span>
                                </div>
                               <h5 className='card-title text-center text-uppercase'>Crear un artículo</h5>
                               <Form className='form-singin'>
                                    <FormGroup>
                                        <Label>Título</Label>
                                        <Input className='form-control' type="title" placeholder="Introduzca el título del artículo "></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">Breve descripción del artículo</Label>
                                        <Input type="textarea" name="text" id="exampleText" />
                                    </FormGroup><FormGroup>
                                        <Label for="exampleText">Artículo</Label>
                                        <Input type="textarea" name="text" id="exampleText" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Autor</Label>
                                        <Input className='form-control' type="title" placeholder="Introduzca el autor del artículo "></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleCustomFileBrowser">Selecciona una imágen</Label>
                                        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleCustomFileBrowser">Selecciona una imágen</Label>
                                        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
                                    </FormGroup>
                                    <button className="btn btn-lg btn-block text-uppercase btn-light" style={{backgroundColor:'#b79ced'}}>Guardar artículo</button>
                            </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        
    }
    
}
export default article
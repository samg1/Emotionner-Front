import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, FormGroup, Label, Col, Row, Input} from 'reactstrap';
import AuthService from '../../Services/auth.service';
import axios from 'axios';

const TaskForm = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const currentUser = AuthService.getCurrentUser();
    const id = currentUser.id;
    console.log(id);
  /**
   * Form fields
   */
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [completed] = useState(false);
    const [time, setHour] = useState("");
    /**
 * Requeried method verifies that all the fields are filled in
 * @param {*} value 
 */

      /**
     * Const values changes
     * @param {*} e 
     */
    const onChangeTitle = (e) => {
      const title = e.target.value;
      setTitle(title);
    };
    const onChangeDescription = (e) => {
      const description = e.target.value;
      setDescription(description);
    };
    const onChangeStart = (e) => {
      const start = e.target.value;
      setStart(start);
      setEnd(start)
    };

    const onChangeEnd = (e) => {
      const end = e.target.value;
      setEnd(end);
    };
    const onChangeHour = (e) => {
      const hour = e.target.value;
      setHour(hour);
    };

    /**
     * Form registration function
     * @param {*} e 
     */
    
    const handleRegister = () => {
      const currentUser = AuthService.getCurrentUser();
      const userId = currentUser.id;
      var dias = 1; // Número de días a agregar
      console.info(start)
      console.info(end)
      if (title==="") {
        alert("Porfavor ingrese todos los campos requeridos")
      }
      const data ={
        title, description,completed, start, end, time, userId 
      }
      
      axios.post("https://emotionner.herokuapp.com/users/createTask", data)
        .then(response => {
          hideModal()
        })
        .catch(function (error) {
          console.log(error);
        });
        
    };

    /**
     * Modal const
     */
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
      window.location.reload();
    };

     

  
    return (
      <>
        <div className = 'buttonArrow'>
        <a className="link" onClick={showModal} style={{textTransform: 'uppercase'}}>Nueva Tarea</a>
        </div>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title style = {{letterSpacing:'4px'}, {fontWeight:'lighter'}}>PLANEA TU DÍA</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className = 'styleLetters'>
            <Form>
            <div className = "try"> 
            <FormGroup>
                <Label for="title">Título de la tarea</Label>
                <Input type="text" name="title" id="title" placeholder="Tarea" value={title}
                      onChange={onChangeTitle} required/>
            </FormGroup>
            <FormGroup>
                <Label for="description">Descripción (Opcional) </Label>
                <Input type="description" name="description" id="description" placeholder="Descripción"
                value={description}
                onChange={onChangeDescription} required />
            </FormGroup>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="exampleEmail">Fecha</Label>
                            <Input type="date" name="start" id="start" placeholder="Fecha de inicio"
                            value={start}
                            onChange={onChangeStart} required
                            />
                        </FormGroup>
                    </Col>
                </Row>
            <FormGroup>
                <Label for="exampleEmail">Hora (Opcional)</Label>
                <Input type="time" name="time" id="time" placeholder="Hora"
                value={time}
                onChange={onChangeHour} 
                />
            </FormGroup>
            </div>
            </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
              
             <div className="d-flex justify-content-center">
                <button type='button' className="btn-horizontal" onClick={()=>handleRegister()}>Guardar</button>
            </div>

          </Modal.Footer>
        </Modal>
      </>
    );
  }; export default TaskForm;
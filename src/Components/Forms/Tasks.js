import React from 'react';
import Modal from "react-bootstrap/Modal";
import { Form, FormGroup, Label, Col, Row, Input} from 'reactstrap';

const TaskForm = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
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
                <Label for="task">Título de la tarea</Label>
                <Input type="text" name="task" id="task" placeholder="Tarea" />
            </FormGroup>
            <FormGroup>
                <Label for="description">Descripción (Opcional) </Label>
                <Input type="description" name="description" id="description" placeholder="Descripción" />
            </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">Fecha de inicio</Label>
                            <Input type="date" name="date" id="StartDate" placeholder="Fecha de inicio"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">Fecha de Fin</Label>
                            <Input type="date" name="date" id="FinalDate" placeholder="Fecha final"/>
                        </FormGroup>
                    </Col>
                </Row>
            <FormGroup>
                <Label for="exampleEmail">Hora (Opcional)</Label>
                <Input type="time" name="time" id="time" placeholder="Hora"/>
            </FormGroup>
            </div>
            </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
              
             <div className="d-flex justify-content-center">
                <a class="btn-horizontal"><span>Guardar</span></a>
            </div>

          </Modal.Footer>
        </Modal>
      </>
    );
  }; export default TaskForm;
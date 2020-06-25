import React from 'react';
import Modal from "react-bootstrap/Modal";
import 'font-awesome/css/font-awesome.min.css';
import { Form, FormGroup, Col, Row} from 'reactstrap';
import all from '../Forms/all';

const EmotionsForm = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
  
    return (
      <>
        <div className = 'buttonArrow fit-to-content'>
        <a className="link" onClick={showModal} style={{textTransform: 'uppercase'}}>¿CÓMO TE SIENTES HOY?</a>
        </div>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title style = {{letterSpacing:'4px'}, {fontWeight:'lighter'}}>SELECCIONA UNA EMOCIÓN</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className = 'styleLetters'>
            <Form>
            <div className = "try">
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <p className='d-flex justify-content-center'>Increíble</p>
                            <a  className=' d-flex justify-content-center'><i className="increible far fa-grin-stars"></i></a>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <p className='d-flex justify-content-center'>Bien</p>
                            <a  className=' d-flex justify-content-center'><i className="bien far fa-smile"></i></a>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <p className='d-flex justify-content-center'>Triste</p>
                            <a  className='triste d-flex justify-content-center'><i className="triste far fa-sad-tear"></i></a>
                        </FormGroup>
                    </Col>
                </Row>
                <div style={{marginBottom:'20px'}}>
                </div>
                <Row>
                <Col md={4}>
                        <FormGroup>
                            <p className='d-flex justify-content-center'>Enojado</p>
                            <a  className=' d-flex justify-content-center'><i className="enojado far fa-angry"></i></a>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <p className='d-flex justify-content-center'>Ansioso</p>
                            <a className=' d-flex justify-content-center'><i className="ansioso far fa-grimace"></i></a>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <p className='d-flex justify-content-center'>Estresado</p>
                            <a className=' d-flex justify-content-center'><i className="estresado far fa-tired"></i></a>
                        </FormGroup>
                    </Col>
                </Row>
            </div>
            </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
              
             <div className="d-flex justify-content-center">
                <a  className="btn-horizontal"><span>Listo</span></a>
            </div>

          </Modal.Footer>
        </Modal>
      </>
    );
  }; export default EmotionsForm;
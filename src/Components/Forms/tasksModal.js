import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddEditForm from '../Forms/taskEdit';

class ModalForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
  }
  
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
     
    }))
  }

  render() {
      const closeBtn = <button className="close d-flex justify-content-end" onClick={this.toggle}>&times;</button>

      const label = this.props.buttonLabel

      let button = ''
      let title = ''


      if(label === 'Edit'){
        button = <>
                        <div className = 'buttonArrow'>
                            <a className="link" style={{textTransform: 'uppercase'}} onClick={this.toggle } title='Editar'>{label}</a>
                        </div>
                        </>
      } else {
        button = 
        <>
        <div className = 'buttonArrow' style={{marginTop:'25px'}}>
          <a className="link" style={{textTransform: 'uppercase'}} onClick={this.toggle } title='Añadir Tarea'>{label}</a>
        </div>
        </>
      }


      return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>
            <AddEditForm
              addItemToState={this.props.addItemToState}
              updateState={this.props.updateState}
              toggle={this.toggle}
              item={this.props.item} />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalForm
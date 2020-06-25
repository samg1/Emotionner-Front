import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import AuthService from '../../Services/auth.service';

/**
 * Form for CRUD operations in Tasks table
 */

class AddEditForm extends React.Component {
    state = {
        id: '',
        title: '', 
        description: '',
        completed: '', 
        start: '', 
        end: '', 
        time: '',
        userId: ''
    }
    /**
     * Listen to the value changes on the table
     * @param {*} e 
     */
    onChange = e => {
      this.setState({[e.target.name]: e.target.value})
    }
    /**
     * If we're adding a new task we use this function 
     * If props.item meaning we dont pass a item through props
     * we are adding a new tasks
     * @param {*} e 
     */
    submitFormAdd = e => {
        e.preventDefault()
        const currentUser = AuthService.getCurrentUser();
        const id = currentUser.id;
        fetch('https://emotionner.herokuapp.com/users/createTask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            completed: false,
            start: this.state.start,
            end: this.state.start,
            time: this.state.time,
            userId: id
        })
      })
        .then(response => response.json())
        .then(item => {
          console.log(item.data)
          window.location.reload()
        })
        .catch(err => console.log(err))
      }
      /**
       * If we pass a item trough props we are editing it so we use ]
       * this function with the axios PUT
       * @param {*} e 
       */
    submitFormEdit = e => {
      e.preventDefault()
      const currentUser = AuthService.getCurrentUser();
      const user = currentUser.id;
      const id = this.state.id
      console.log(`https://emotionner.herokuapp.com/users/tasks/${user}/${id}`)
      let data={
        id: this.state.id,
        title: this.state.title,
        description: this.state.description,
        completed: false,
        start: this.state.start,
        end: this.state.start,
        time: this.state.time
      }
      console.log(data)
      
      fetch(`https://emotionner.herokuapp.com/users/updateTask`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(item => {
          console.log(item.data)
          window.location.reload()
        })
        .catch(err => console.log(err))
        
    }
  
    componentDidMount(){
      // if item exists, populate the state with proper data
      if(this.props.item){
        const { id, title, description,completed, start, end, time} = this.props.item
        this.setState({ id, title, description,completed, start, end, time})
      }
    }
  
    render() {
      return (
        <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd} autoComplete= 'off'>
          <FormGroup>
            <Label for="first">Título de la tarea</Label>
            <Input type="text" name="title" id="title" onChange={this.onChange} value={this.state.title === null ? '' : this.state.title} />
          </FormGroup>
          <FormGroup>
            <Label for="last">Description</Label>
            <Input type="text" name="description" id="description" onChange={this.onChange} value={this.state.description === null ? '' : this.state.description}  />
          </FormGroup>
          <FormGroup>
            <Label for="start">Fecha</Label>
            <Input type="date" name="start" id="start" onChange={this.onChange} value={this.state.start === null ? '' : this.state.start}  />
          </FormGroup>
          <FormGroup>
            <Label for="time">Hora (Opcional)</Label>
            <Input type="time" name="time" id="time" onChange={this.onChange} value={this.state.time === null ? '' : this.state.time}  placeholder="Hora" />
          </FormGroup>
          <Col>
          <Button className='btn-block' style={{marginTop: '20px', marginBottom:'20px'}}>Submit</Button>
          </Col>
        </Form>
      );
    }
  }
  
  export default AddEditForm
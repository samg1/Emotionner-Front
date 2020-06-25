import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from '../Forms/tasksModal'
import TasksTable from '../Elements/taskTable'
import AuthService from '../../Services/auth.service'
import axios from 'axios'
import Footer from '../Elements/footerInside'

/**
 * Emotions View where all agenda components are called
 */
class emotionsView extends Component {
  state = {
    items: []
  }

  /**
   * GetItems()
   * @returns emotions in the database
   */

  getItems(){
    const currentUser = AuthService.getCurrentUser();
    const id = currentUser.id;
    console.log(id)
    //Axios call
    axios.get(`https://emotionner.herokuapp.com/users/registeredEmotions/${id}`)
        .then(response => {
          console.log('ANTES')
          console.log(response.data)
          let appointments = response.data;
          this.setState({
            items : appointments
          })
        })
        .catch(function (error) {
          console.log(error);
        });
  }
/***
 * Adds a new item to the state of the component
 */
  addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }
/**
 * Updates de state of the component
 * @param {*} item 
 */
  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
    // add the updated item to the array
      item,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1)
    ]
    this.setState({ items: newArray })
  }

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
  }

  componentDidMount(){
    this.getItems()
  }

  render() {
    return (
      <>
      <Container className="container" style={{marginBottom: '20px'}}>
        <Row>
          <Col>
            <h1 style={{margin: "20px 0"}}> Journal de Emociones</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <TasksTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ModalForm buttonLabel="Add Item" addItemToState={this.addItemToState}/>
          </Col>
        </Row>
      </Container>
      <Footer/>
      </>
    )
  }
}

export default emotionsView
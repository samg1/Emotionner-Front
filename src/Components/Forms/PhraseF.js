import React, { Component, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import AuthService from '../../Services/auth.service'
import axios from 'axios'
import Footer from '../Elements/footerInside'
import Phrases from '../Elements/phrases';

/**
 * We call all the phrases in here
 */
class PhraseView extends Component {
  state = {
    items: []
  }

  /**
   * GetItems()
   * @returns articles in the database
   */

  getItems(){
    const currentUser = AuthService.getCurrentUser();
    const id = currentUser.id;
    console.log(id)
    //Axios call
    axios.get(`https://emotionner.herokuapp.com/users/tasks/${id}`) //CAMBIAR
        .then(response => {
          console.log('ANTES')
          console.log(response.data.tasks.tasks)
          let articles = response.data.tasks.tasks;
          this.setState({
            items : articles
          })
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  componentDidMount(){
    this.getItems()
  }

  render() {

    return (
      <>
      <Container className="container">
        <Row>
          <Col>
            <Phrases items={this.state.items}/>
          </Col>
        </Row>
      </Container>
      </>
    )
  }
} export default PhraseView;
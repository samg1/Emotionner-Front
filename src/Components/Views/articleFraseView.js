import React, { Component, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from '../Forms/tasksModal'
import TasksTable from '../Elements/taskTable'
import AuthService from '../../Services/auth.service'
import axios from 'axios'
import Footer from '../Elements/footerInside'
import RecoHero from '../Elements/recomendadoHero';
import Taskquote from '../Elements/taskQuote';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import addCards from '../Forms/articleCard';

/**
 * Agenda View where all agenda components are called
 */
class articleView extends Component {
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
      <RecoHero/>
      
      <Container className="container" style={{marginBottom: '20px'}}>
        <Row>
          <Col>
            <h1 style={{margin: "20px", fontWeight:'lighter', letterSpacing: '5px', fontSize:'25px'}}> Recomendaciones según tus últimos registros</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <addCards items={this.state.items}/>
          </Col>
        </Row>
      </Container>
      <Footer/>
      </>
    )
  }
} export default articleView;
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
   * @returns a phrase in the database based in the last registered emotion that the user registered in the page
   */

  getItems(){
    const currentUser = AuthService.getCurrentUser();
    const id = currentUser.id;
    var emotionid = ''
    /**
     * First we return the last emotion that the user registered 
     */
    axios.get(`https://emotionner.herokuapp.com/users/getLastEmotion/${id}`)
    .then(response => {
      emotionid = response.data.emotion[0].emotion_id
      var id2 = parseInt(emotionid)
      /**
       * Then we do another axios call to get a random phrase that match the emotion id
       */
      axios.get(`https://emotionner.herokuapp.com/phrases/selectPhrase/${id2}`)
      .then(response => {
        let phrases = response.data.phrase;
        this.setState({
            items : phrases
        })
      }).catch(function (error) {
        console.log(error);
      });
    }). catch(function (error) {
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
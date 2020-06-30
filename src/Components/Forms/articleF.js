import React, { Component, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import AuthService from '../../Services/auth.service'
import axios from 'axios'
import AddCards from '../Forms/articleCard';

/**
 * We call all the articles in here
 */
class ArticleView extends Component {
  state = {
    items: []
  }


  /**
   * GetItems()
   * @returns articles in the database based in the last registered emotion that the user registered in the page
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
       * Then we do another axios call to get all the articles that match the emotion id
       */
      axios.get(`https://emotionner.herokuapp.com/articles/selectArticle/${id2}`)
      .then(response => {
        let articles = response.data.article;
        this.setState({
            items : articles
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
            <AddCards items={this.state.items}/>
          </Col>
        </Row>
      </Container>
      </>
    )
  }
} export default ArticleView;
import React, { Component, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import AuthService from '../../Services/auth.service'
import axios from 'axios'
import Footer from '../Elements/footerInside'
import RecoHero from '../Elements/recomendadoHero';
import ArticleView from '../Forms/articleF';
import PhraseView from '../Forms/PhraseF';


class RecomendationView extends Component {
  
  render() {

    return (
      <>
      <RecoHero/>
      <Container className="container">
        <Row>
          <Col>
            <h1 className='d-flex justify-content-center'style={{margin: "20px", fontWeight:'lighter', letterSpacing: '5px', fontSize:'25px'}}>Recomendaciones según tus últimos registros.</h1>
          </Col>
        </Row>
        <Row>
          <ArticleView/>
        </Row>
        <Row>
          <PhraseView/>
        </Row>
      </Container>
      <Footer/>
      </>
    )
  }
} export default RecomendationView;
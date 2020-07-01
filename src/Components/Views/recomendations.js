import React, { Component, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import Footer from '../Elements/footerInside'
import RecoHero from '../Elements/recomendadoHero';
import ArticleView from '../Forms/articleF';
import PhraseView from '../Forms/PhraseF';


class RecomendationView extends Component {
  
  render() {

    return (
      <>
      <RecoHero/>
      <Container>
        <Row>
          <Col>
            <h1 className='d-flex justify-content-center'style={{margin: "20px", fontWeight:'lighter', letterSpacing: '5px', fontSize:'25px'}}>Recomendaciones según tus últimos registros.</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className='d-flex justify-content-start'style={{margin: "20px", fontFamily:'Dancing Script'}}>Artículos para ti</h1>
          </Col>
        </Row>
        <Row>
          <ArticleView/>
        </Row>
        </Container>
        
            <div class="section-container">
                <div class="left-banner"></div>
                <div class="right-banner">
                    <div>
                    <h3 style={{fontFamily:'Dancing Script', fontSize:'40px'}}>Tu espacio seguro</h3>
                    <p style={{fontFamily:'Montserrat'}}>¡Recuerda registrar todas tu tareas y emociones<br/>para recibir más recomendaciones como esta!</p>
                    </div>
                </div>
            </div>
        <Container>
        <Row>
          <Col>
            <h1 className='d-flex justify-content-start'style={{margin: "20px", fontFamily:'Dancing Script'}}>Encuentra tu motivación</h1>
          </Col>
        </Row>
        <Row>
          <ArticleView/>
        </Row>
      </Container>
      <Footer/>
      </>
    )
  }
} export default RecomendationView;
import footer from 'bootstrap';
import React, {Component} from 'react';

const Footer = (props) => {
return(
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Acerca de nosotros</h6>
            <p className="text-justify">Conocernos emocionalmente es una parte muy importante
            de nuestro desarrollo personal y el no hacerlo promete afectar nuestro bienestar tanto físico como mental.
            Creemos que la vida no tiene que ser tan difícil; 
            Emotionner es una aplicación que busca batallar la ansiedad y el estrés 
            ayudándote a planear tu día paso a paso. </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>¿Necesitas ayuda?</h6>
            <ul className="footer-links">
              <li><a href="https://www.helpguide.org/home-pages/anxiety.htm">HelpGuide: Anxiety</a></li>
              <li><a href='https://www.mentalhealth.org.uk/publications/how-manage-and-reduce-stress'>MentalHealth: Stress</a></li>
              <li><a href='https://www.helpguide.org/articles/stress/stress-management.htm'>Stress Management</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Integrantes</h6>
            <ul className="footer-links">
              <li><a href="#">Amanda Gonzalez</a></li>
              <li><a href="#">Andrea Charles</a></li>
              <li><a href="#">Orly Dahan</a></li>
              <li><a href="#">José Cisneros</a></li>
            </ul>
          </div>
          </div>
        <div className= 'line'>
        <div className="container">
            <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
         <a href="#"> Emotionner</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
      </div>
      </div>
</footer>
)
}; export default Footer   
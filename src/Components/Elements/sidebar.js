import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'

const Sidebar_ = (props) => {

    const $button  = document.querySelector('#sidebar-toggle');
    const $wrapper = document.querySelector('#wrapper');

    if($button && $wrapper){
        $button.addEventListener('click', (e) => {
            e.preventDefault();
            $wrapper.classList.toggle('toggled');
            });
    }

  return (
    <div id="wrapper">

  <aside id="sidebar-wrapper">
    <div className="sidebar-brand">
      <h2>Emotionner</h2>
    </div>
    <ul className="sidebar-nav">
      <li>
        <a  href="#" ><i className="fa fa-home" ></i>Home</a>
      </li>
      <li>
        <a  href="/addArticle" ><i className="fa fa-edit"></i>Artículo</a>
      </li>
      <li>
        <a  href="#" ><i className="fa fa-user"></i>Users</a>
      </li>
    </ul>
  </aside>

  <div id="navbar-wrapper">
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href="#" className="navbar-brand" id="sidebar-toggle"><i className="fa fa-bars"></i></a>
        </div>
      </div>
    </nav>
  </div>

</div>
  );
}

 export default Sidebar_;

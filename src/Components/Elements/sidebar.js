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
    <div class="sidebar-brand">
      <h2>Emotionner</h2>
    </div>
    <ul class="sidebar-nav">
      <li class="active">
        <a href="#"><i class="fa fa-home" ></i>Home</a>
      </li>
      <li>
        <a href="#"><i class="fa fa-plug"></i>Plugins</a>
      </li>
      <li>
        <a href="#"><i class="fa fa-user"></i>Users</a>
      </li>
    </ul>
  </aside>

  <div id="navbar-wrapper">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a href="#" class="navbar-brand" id="sidebar-toggle"><i class="fa fa-bars"></i></a>
        </div>
      </div>
    </nav>
  </div>

</div>
  );
}

 export default Sidebar_;

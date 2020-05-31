import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginUserForm from './Components/Forms/login-user-form';
import LoginAdminForm from './Components/Forms/login-admin-form';
import UserRegistration from './Components/Forms/user-registration';
import CreateArticle from './Components/Forms/articulo-form';
import Navbar from './Components/Elements/navbar'
function App() {
  return (
    <div>
      <Navbar/>
      <div class="container">
        <div class= "row">
          <div class="col">
          <CreateArticle/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

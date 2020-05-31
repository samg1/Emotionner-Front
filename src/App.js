import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginUserForm from './Components/Forms/login-user-form';
import LoginAdminForm from './Components/Forms/login-admin-form';
import UserRegistration from './Components/Forms/user-registration';
import addArticleView from './Components/Views/addArticle';
import Navbar_ from './Components/Elements/navbar';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
        <Router>
         <Switch>
            <Route path='/' exact={true} component={LoginUserForm}/>
            <Route path='/createArticle' exact={true} component={addArticleView}/>
            <Route path='/' exact={true} component={LoginUserForm}/>
            <Route path='/singUp' exact={true} component={UserRegistration}/>
            <Route path='/loginAdmin' exact={true} component={LoginAdminForm}/>
          </Switch>
        </Router>

  );
}

export default App;

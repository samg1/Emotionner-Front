import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Profile from "./Components/Elements/profile";
import LoginUserForm from './Components/Forms/login-user-form';
import LoginAdminForm from './Components/Forms/login-admin-form';
import UserRegistration from './Components/Forms/user-registration';
import CreateArticle from './Components/Forms/articulo-form';
import addArticleView from './Components/Views/addArticle';


class App extends Component {
  
  render() {
   

    return (
      <Router>
          <div>
            <Switch>
              <Route exact path={["/", "/home"]} component={LoginUserForm} />
              <Route exact path="/singUp" component={UserRegistration} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/addArticle" component={addArticleView} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
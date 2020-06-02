import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./Services/auth.service";

//import Login from "./components/login.component";
//import Register from "./components/register.component";
//import Home from "./components/home.component";
import Profile from "./Components/Elements/profile";
//import BoardUser from "./components/board-user.component";
import LoginUserForm from './Components/Forms/login-user-form';
import LoginAdminForm from './Components/Forms/login-admin-form';
import UserRegistration from './Components/Forms/user-registration';
import CreateArticle from './Components/Forms/articulo-form';


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              Emotionner
            </Link>
            <div className="navbar-nav mr-auto">
              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    Cerrar Sesion
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/singUp"} className="nav-link">
                    Crear una cuenta
                  </Link>
                </li>
              </div>
            )}
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={LoginUserForm} />
              <Route exact path="/singUp" component={UserRegistration} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
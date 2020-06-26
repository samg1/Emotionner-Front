import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./Services/auth.service";
import Login from "./Components/Forms/login-user-form";
import CalendarioView from "./Components/Views/calendarView";
import Register from "./Components/Forms/registration";
import agendaView from "./Components/Views/agendaView";
import emotionsView from "./Components/Views/emotionsView";
import Navbar_ from "./Components/Elements/navbar";
import  PrivateRoute from "./Services/privateRoute";
import HomePage from "./Components/Views/homePage";
import LoginAdminForm from "./Components/Forms/login-admin-form";
import addArticleView from "./Components/Views/addArticle";

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);


  return (
    <>
    <Navbar_/>
    <Router>
<<<<<<< HEAD
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <Link to={"/"} className="navbar-brand" style={{fontWeight: "light"}}>
            Emotionner
          </Link>
          <div className="navbar-nav mr-auto">
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  Mi Calendario
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/agenda"} className="nav-link">
                  Mi Agenda
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/emotions"} className="nav-link">
                  Mood Journal
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  Cerrar Sesión
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={["/", "/login"]} className="nav-link">
                  Iniciar Sesión
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/singup"} className="nav-link">
                  Crea una cuenta
                </Link>
              </li>
            </div>
          )}
        </nav>
=======
>>>>>>> amanda-new
            <Switch>
            <Route exact path={"/login"} component={Login} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/singup" component={Register} />
            <Route exact path="/admin" component={LoginAdminForm} />
            <Route exact path="/admin/create" component={addArticleView} />
            <PrivateRoute exact path="/profile" component={CalendarioView} />
            <PrivateRoute exact path="/agenda" component={agendaView} />
            <PrivateRoute exact path="/mood" component={emotionsView} />
          </Switch>
    </Router>
    </>
  );
};

export default App;
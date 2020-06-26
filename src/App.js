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

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <>
    <Navbar_/>
    <Router>
            <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
            <Route path="/profile" component={CalendarioView} />
            <Route path="/singup" component={Register} />
            <Route path="/agenda" component={agendaView} />
            <Route path="/emotions" component={emotionsView} />
          </Switch>
    </Router>
    </>
  );
};

export default App;
import React, { useContext, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserProvider from "./Providers/userProvider";
import Application from "./Components/aplication";
import LoginAdminForm from "./Components/Forms/login-admin-form";
import addArticleView from "./Components/Views/addArticle";
import Login from "./Components/Forms/login-user-form";
import UserRegistration from "./Components/Forms/user-registration";
import CreateArticle from './Components/Forms/articulo-form';

function App() {

    return (
      <Router>
          <div>
            <Application/>
          </div>
      </Router>
    );
}

export default App;
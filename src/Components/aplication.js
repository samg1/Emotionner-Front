import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Components/Forms/login-user-form";
import UserRegistration from "../Components/Forms/user-registration";
import UserProvider from "../Providers/userProvider";
import ProfilePage from "../Components/Elements/profile";
import { UserContext } from "../Providers/userProvider";
import LoginAdminForm from "../Components/Forms/login-admin-form";
import addArticleView from "./Views/addArticle";
import CreateArticle from "../Components/Forms/articulo-form";


function Application() {
  const user = useContext(UserContext);
  return (
        user ?
        <ProfilePage />
      :
      <Router>
      <Route exact path="/admin" component={LoginAdminForm} />
        <Route exact path="/addArticle" component={addArticleView} />
        <Route exact path={["/", "/home"]} component={Login} />
        <Route exact path="/singUp" component={UserRegistration} />
      </Router>
      
      
  );
}

export default Application;
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
<<<<<<< HEAD
import {AuthProvider} from '../Components/Authorization/Auth';
import PrivateRoute from '../Components/Authorization/privateRoute';
import TasksForm from '../Components/Forms/Tasks'
=======
>>>>>>> amanda-V2


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
<<<<<<< HEAD
        <PrivateRoute exact path="/profilePage" component={ProfilePage} />
        <Route exact path={"/PRUEBA"} component={TasksForm}/>
=======
>>>>>>> amanda-V2
      </Router>
      
      
  );
}

export default Application;
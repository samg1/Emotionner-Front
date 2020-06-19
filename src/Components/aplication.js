import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Components/Forms/login-user-form";
import UserRegistration from "../Components/Forms/user-registration";
import UserProvider from "../Providers/userProvider";
import ProfilePage from "../Components/Elements/profile";
import { UserContext } from "../Providers/userProvider";
import LoginAdminForm from "../Components/Forms/login-admin-form";
import addArticleView from "./Views/addArticle";
import {AuthProvider} from '../Components/Authorization/Auth';
import PrivateRoute from '../Components/Authorization/privateRoute';
import CalendarView from './Views/calendarView';


function Application() {
  const user = useContext(UserContext);
  return (

    <AuthProvider>

      <Router>
        <Route exact path="/admin" component={LoginAdminForm} />
        <Route exact path="/admin/addArticle" component={addArticleView} />
        <Route exact path={["/", "/home"]} component={Login} />
        <Route exact path="/singUp" component={UserRegistration} />
        <PrivateRoute exact path="/profilePage" component={ProfilePage} />
        <PrivateRoute exact path="/calendar" component={CalendarView} />
      </Router>
      
      </AuthProvider>
  );
}

export default Application;
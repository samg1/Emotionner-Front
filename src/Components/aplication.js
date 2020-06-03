import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Components/Forms/login-user-form";
import UserRegistration from "../Components/Forms/user-registration";
import UserProvider from "../Providers/userProvider";
import ProfilePage from "../Components/Elements/profile";
import { UserContext } from "../Providers/userProvider";
import LoginAdminForm from "../Components/Forms/login-admin-form";
import addArticleView from "./Views/addArticle";


function Application() {
  const user = useContext(UserContext);
  return (
        user ?
        <ProfilePage />
      :
      <Router>
      <Link to ='/'></Link>
      </Router>
      
      
  );
}

export default Application;
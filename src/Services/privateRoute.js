import AuthService from './auth.service'
import React from "react";
import {
  Route,
  Redirect
} from "react-router-dom";

const user = AuthService.getCurrentUser();
/**
 * Protects the routes of the app you need to be logged to
 * navigate the routes.
 * @param {*} param0 
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
    /**
     * If the user is logged we load the view
     */
    <Route {...rest} render={(props) => (
      AuthService.isAuth(user) === true
        ? <Component {...props} />
        : <Redirect to='/' /> //else we redirect
    )} />
)
export default PrivateRoute;

  

import React, { Component } from "react";
import AuthService from "../../Services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>Profile</strong> 
          </h3>
        </header>
      </div>
    );
  }
}
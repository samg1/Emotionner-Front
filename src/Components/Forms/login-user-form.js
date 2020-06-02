import {Button, FormGroup, Label} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../../Services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
        <div className= 'container fluid'>
            <div className= 'row align-items-center'>
                <div className = 'col-sm-9 col-md-7 col-lg-5 mx-auto'>
                <div className='card card-signin my-5'>
                    <div className='card-body'>
                        <div className='form-icon'>
                            <span ><FontAwesomeIcon icon={faUser} /></span>
                        </div>
                            <h5 className='card-title text-center text-uppercase'>Iniciar Sesión</h5>
                            <Form className='form-singin'
                                onSubmit={this.handleLogin}
                                ref={c => {
                                  this.form = c;
                                }}
                            >
                                    <FormGroup>
                                        <Label>Correo Electronico</Label>
                                        <Input className='form-control' type="email" placeholder="Introduzca su correo "
                                            name = "username"
                                            value={this.state.username}
                                            onChange={this.onChangeUsername}
                                            validations={[required]}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Contraseña</Label>
                                        <Input className='form-control' type="password" placeholder="Introduzca su contraseña" 
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.onChangePassword}
                                            validations={[required]} 
                                        required></Input>
                                    </FormGroup>
                                    <div className="form-group">
                                            <button
                                            className="btn btn-lg btn-block text-uppercase btn-light" style={{backgroundColor:'#b79ced'}}
                                            disabled={this.state.loading}
                                            >
                                            {this.state.loading && (
                                                <span className="spinner-border spinner-border-sm"></span>
                                            )}
                                            <span>Login</span>
                                            </button>
                                    </div>

                                        {this.state.message && (
                                            <div className="form-group">
                                            <div className="alert alert-danger" role="alert">
                                                {this.state.message}
                                            </div>
                                            </div>
                                        )}
                                        <CheckButton
                                            style={{ display: "none" }}
                                            ref={c => {
                                            this.checkBtn = c;
                                            }}
                                        />
                                    <div className="text-center">
                                        <a href="/singUp">¿No tienes cuenta? Regístrate ahora</a>
                                    </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
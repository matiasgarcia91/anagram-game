import React, { Component } from "react";
import axios from "./../axios";
import { connect } from "react-redux";
import { login } from "../store/session/actions";
import { Card, Button, TextField } from "@material-ui/core";

class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };

  onText = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
          height: "1000px"
        }}
      >
        <Card
          variant='elevation'
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "30px",
            width: "400px",
            height: "300px"
          }}
        >
          <h2>Login</h2>
          <form
            noValidate
            onSubmit={this.login}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <TextField
              onChange={this.onText}
              name='email'
              value={this.state.email}
              label='Email'
              variant='filled'
            />
            <TextField
              onChange={this.onText}
              value={this.state.password}
              name='password'
              label='Password'
              variant='filled'
            />
            <Button
              variant='contained'
              color='primary'
              type='submit'
              style={{ marginTop: "10px", width: "100px" }}
            >
              Login
            </Button>
            <Button
              variant='contained'
              style={{ marginTop: "10px", width: "100px" }}
              onClick={() => this.props.history.push("/")}
            >
              Cancel
            </Button>
          </form>
        </Card>
      </div>
    );
  }
}

export default connect(() => ({}), { login })(LoginPage);

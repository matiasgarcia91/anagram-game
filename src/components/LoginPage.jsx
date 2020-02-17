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
    this.props.login(email, password, this.props.history);
  };

  render() {
    return (
      <>
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
              type='password'
              label='Password'
              variant='filled'
            />
            <div>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                style={{
                  marginTop: "10px",
                  width: "100px",
                  marginRight: "10px"
                }}
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
            </div>
          </form>
        </Card>
      </>
    );
  }
}

export default connect(() => ({}), { login })(LoginPage);

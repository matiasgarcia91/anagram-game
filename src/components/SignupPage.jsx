import React, { Component } from "react";
import { Card, Button, TextField } from "@material-ui/core";

import axios from "../axios";

class SignupPage extends Component {
  state = {
    nickname: "",
    email: "",
    password: ""
  };

  onText = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  signUp = e => {
    e.preventDefault();
    const { email, password, nickname } = this.state;
    axios
      .post("/user", {
        email,
        nickname,
        password
      })
      .then(resp => console.log(resp))
      .then(() => this.props.history.push("/"));
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
          <h2>Sign up!</h2>
          <form
            noValidate
            onSubmit={this.signUp}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <TextField
              onChange={this.onText}
              name='nickname'
              value={this.state.nickname}
              label='Nickname'
              variant='filled'
            />
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
              type='password'
              name='password'
              label='Password'
              variant='filled'
            />
            <div style={{ display: "flex" }}>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                style={{
                  marginRight: "10px",
                  marginTop: "10px",
                  width: "100px"
                }}
              >
                Submit
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

export default SignupPage;

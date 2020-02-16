import React, { Component } from "react";

import { Paper, Button, FormHelperText } from "@material-ui/core";

class WelcomePage extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "200px"
        }}
      >
        <Paper
          variant='elevation'
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "30px",
            width: "400px"
          }}
        >
          <h2>Welcome to the Game!</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <Button
              variant='contained'
              color='primary'
              style={{ marginTop: "10px", width: "170px" }}
              onClick={() => this.props.history.push("/login")}
            >
              Login
            </Button>
            <Button
              variant='contained'
              color='primary'
              style={{ marginTop: "10px", width: "170px" }}
            >
              Signup
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default WelcomePage;

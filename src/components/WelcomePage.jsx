import React, { Component } from "react";

import { Paper, Button, FormHelperText } from "@material-ui/core";

class WelcomePage extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "200px"
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
          <Button
            variant='contained'
            color='primary'
            style={{ marginTop: "10px" }}
          >
            Login
          </Button>
          <Button
            variant='contained'
            color='primary'
            style={{ marginTop: "10px" }}
          >
            Signup
          </Button>
        </Paper>
      </div>
    );
  }
}

export default WelcomePage;

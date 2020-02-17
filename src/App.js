import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";
import { Route, Switch } from "react-router-dom";
import SignupPage from "./components/SignupPage";
import LobbyPage from "./components/LobbyPage";
import RoomPage from "./components/RoomPage";

class App extends Component {
  stream = new EventSource("http://localhost:4000/stream");

  componentDidMount = () => {
    this.stream.onmessage = event => {
      console.log(event.data);
      const action = JSON.parse(event.data);
      this.props.dispatch(action);
    };
  };

  render() {
    return (
      <div className='App'>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "100px",
            height: "1000px"
          }}
        >
          <Switch>
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignupPage} />
            <Route path='/lobby' component={LobbyPage} />
            <Route path='/room/:roomId' component={RoomPage} />
            <Route path='/' component={WelcomePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect()(App);

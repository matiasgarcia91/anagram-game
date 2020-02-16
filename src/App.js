import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
//import LoginPage from "./components/LoginPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={WelcomePage} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";
import { Route, Switch } from "react-router-dom";
import SignupPage from "./components/SignupPage";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
        <Route path='/' component={WelcomePage} />
      </Switch>
    </div>
  );
}

export default App;

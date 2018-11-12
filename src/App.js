import React, { Component } from "react";
import { Router } from "@reach/router";
import firebase from './Firebase';

import Home from "./Home";
import Welcome from "./Welcome";
import Navigation from "./Navigation";
import Login from "./Login";
import Register from "./Register";
import Meetings from "./Meetings";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  render() {
    return (
      <div>
        <Navigation user={this.state.user}/>
        {this.state.user && <Welcome user={this.state.user} />}        
        
        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login" />
          <Meetings path="/meeting" />
          <Register path="/register" />
        </Router>
      </div>
    );
  }
}

export default App;

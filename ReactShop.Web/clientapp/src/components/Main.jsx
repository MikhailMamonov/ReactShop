import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Catalog from "./Catalog/Catalog";
import Admin from "./Admin/Admin";
import HomePage from "./HomePage";
import { LoginPage } from "./LoginPage";
import {RegisterPage}  from "./RegisterPage";

class Main extends Component {
  state = {};
  componentDidMount() {
    console.log("I was triggered during componentDidMount");
  }
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />

        </Switch>
      </main>
    );
  }
}

export default Main;

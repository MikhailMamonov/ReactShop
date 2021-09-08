import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Catalog from "./Catalog/Catalog";
import Admin from "./Admin/Admin";
import HomePage from "./HomePage";
import { LoginPage } from "./LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import { ErrorPage } from "./ErrorPage";

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
          <Route path="/error" component={ErrorPage} />
          <Route path="/register" component={RegisterPage} />
          <Redirect from="/" to="/home" />
        </Switch>
      </main>
    );
  }
}

export default withRouter(Main);

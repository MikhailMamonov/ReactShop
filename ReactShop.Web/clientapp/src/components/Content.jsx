import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
// import CatalogPage from "../pages/CatalogPage";
// import AdminPage from "../pages/AdminPage";
// import HomePage from "./../pages/HomePage";
// import LoginPage from "./../pages/LoginPage";
// import RegisterPage from "./../pages/RegisterPage";
// import ErrorPage from "./../pages/ErrorPage";
import AppRouter from "./AppRouter";

class Content extends Component {
  state = {};
  componentDidMount() {
    console.log("I was triggered during componentDidMount");
  }
  render() {
    return (
      <main>
        {/* <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/register" component={RegisterPage} />
          <Redirect from="/" to="/home" />
        </Switch> */}
        <AppRouter></AppRouter>
      </main>
    );
  }
}

export default withRouter(Content);

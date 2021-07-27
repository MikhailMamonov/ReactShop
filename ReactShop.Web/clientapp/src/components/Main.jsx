import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Catalog from "./Catalog/Catalog";
import Admin from "./Admin/Admin";
import Home from "./Home";

class Main extends Component {
  state = {};
  componentDidMount() {
    console.log("I was triggered during componentDidMount");
  }
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </main>
    );
  }
}

export default Main;

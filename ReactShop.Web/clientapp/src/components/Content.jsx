import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import AppRouter from "./AppRouter";

class Content extends Component {
  state = {};
  componentDidMount() {
    console.log("I was triggered during componentDidMount");
  }
  render() {
    return (
      <main>
        <AppRouter></AppRouter>
      </main>
    );
  }
}

export default withRouter(Content);

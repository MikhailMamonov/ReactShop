import { Content } from "antd/lib/layout/layout";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import AppRouter from "./AppRouter";

class AppContent extends Component {
  state = {};
  componentDidMount() {
    console.log("I was triggered during componentDidMount");
  }
  render() {
    return (
      <Content>
        <AppRouter></AppRouter>
      </Content>
    );
  }
}

export default withRouter(AppContent);

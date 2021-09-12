import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Content from "./components/Content";
import Header from "./components/Header";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Router } from "react-router-dom";

import { history } from "./helpers/history";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <MuiThemeProvider>
          <div className="App">
            <Header></Header>
            <Content></Content>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;

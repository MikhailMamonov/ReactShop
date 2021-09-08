import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Main from "./components/Main";
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
            <Main></Main>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);

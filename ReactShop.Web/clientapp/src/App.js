import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Main from "./components/Main";
import Header from "./components/Header";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { logout } from "./store/actions/authActions";

class App extends Component {
  constructor(props){
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      currentUser: undefined,
    };

  }

  componentDidMount() {
    const user = this.props.user;
    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser } = this.state;
    return (
      <BrowserRouter>
      <MuiThemeProvider>
        <div className="App">
          <Header logOut={this.logOut} currentUser={currentUser}></Header>
            <Main></Main>
        </div>
      </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);

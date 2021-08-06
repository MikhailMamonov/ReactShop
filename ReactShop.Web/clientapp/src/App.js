import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import store from "./store/store";
import { Provider } from "react-redux";
import {getUsersThunk} from "./store/actions/users"

export default class App extends Component {
  componentDidMount(){
    store.dispatch(getUsersThunk())
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Provider store={store}>
          <Main></Main>
        </Provider>
      </div>
    );
  }
}

import React, { FC, useEffect } from "react";
import "./App.css";

import Content from "./components/Content";
import Header from "./components/Header";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Router } from "react-router-dom";

import { history } from "./helpers/history";
import { getAllUsersThunk } from "./store/action-creators/users";
import { getAllProductsThunk } from "./store/action-creators/products";
import { getAllCategoriesThunk } from "./store/action-creators/categories";

const App: FC = () => {
  useEffect(() => {
    getAllUsersThunk();
    getAllProductsThunk();
    getAllCategoriesThunk();
  });
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
};
export default App;

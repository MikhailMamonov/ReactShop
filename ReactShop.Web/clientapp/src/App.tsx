import React, { FC, useEffect } from "react";
import "./App.css";

import Content from "./components/Content";
import AppHeader from "./components/AppHeader";
import { Layout } from "antd";
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
      <Layout className="layout">
        <div className="App">
          <AppHeader></AppHeader>
          <Content></Content>
        </div>
      </Layout>
    </Router>
  );
};
export default App;

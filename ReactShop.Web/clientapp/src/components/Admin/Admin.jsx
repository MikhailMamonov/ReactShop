import React, { Component } from "react";
import ProductsContainer from "./Products/ProductsContainer";
import UsersContainer from "./Users/UsersContainer";
import CategoriesContainer from "./Categories/CategoriesContainer"

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div>
        <h1>Admin</h1>
        <UsersContainer />
        <ProductsContainer />
        <CategoriesContainer/>
      </div>
    );
  }
}

export default Admin;

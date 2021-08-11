import React, { Component } from "react";
import ProductsContainer from "./Products/ProductsContainer";
import UsersContainer from "./Users/UsersContainer";

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
      </div>
    );
  }
}

export default Admin;

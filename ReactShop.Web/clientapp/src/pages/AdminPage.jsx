import React, { Component } from "react";
import ProductsContainer from "../components/Admin/Products/ProductsContainer";
import UsersContainer from "../components/Admin/Users/UsersContainer";
import CategoriesContainer from "../components/Admin/Categories/CategoriesContainer";

class AdminPage extends Component {
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
        <CategoriesContainer />
      </div>
    );
  }
}

export default AdminPage;

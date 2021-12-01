import React from "react";
import ProductsContainer from "../components/Admin/Products/ProductsContainer";
import UsersContainer from "../components/Admin/Users/UsersContainer";
import CategoriesContainer from "../components/Admin/Categories/CategoriesContainer";
import CartItemsContainer from "./../components/Admin/CartItems/CartItemsContainer";

const AdminPage: React.FC = () => {
  return (
    <div>
      <h1>Admin</h1>
      <UsersContainer />
      <ProductsContainer />
      <CategoriesContainer />
      <CartItemsContainer />
    </div>
  );
};

export default AdminPage;

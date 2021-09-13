import React from "react";
import ProductsContainer from "../components/Admin/Products/ProductsContainer";
import UsersContainer from "../components/Admin/Users/UsersContainer";
import CategoriesContainer from "../components/Admin/Categories/CategoriesContainer";
import { IUser } from "../models/User";

const AdminPage: React.FC<any> = () => {
  return (
    <div>
      <h1>Admin</h1>
      <UsersContainer />
      <ProductsContainer />
      <CategoriesContainer />
    </div>
  );
};

export default AdminPage;

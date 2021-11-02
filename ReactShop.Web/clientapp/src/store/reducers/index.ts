import { combineReducers } from "redux";
import products from "../products/products.reducer";
import users from "../users/users.reducer";
import categories from "../categories/categories.reducer";
import auth from "../auth/auth.reducer";
import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";

export const rootReducer = combineReducers({
  users: users,
  products: products,
  categories: categories,
  auth: auth,
});

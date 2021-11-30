import { combineReducers } from "redux";
import products from "./products.reducer";
import users from "./users.reducer";
import categories from "./categories.reducer";
import auth from "./auth.reducer";
import cartItems from "./cartItems.reducer";
import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";

export const rootReducer = combineReducers({
  users: users,
  products: products,
  categories: categories,
  auth: auth,
  cartItems: cartItems,
});

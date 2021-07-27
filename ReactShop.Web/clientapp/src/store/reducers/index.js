import { combineReducers } from "redux";
import products from "./products";
import users from "./users";

export default combineReducers({
  users: users,
  products: products,
});

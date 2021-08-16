import { combineReducers } from "redux";
import products from "./productsReducer";
import users from "./usersReducer";

export default combineReducers({
  users: users,
  products: products,
});

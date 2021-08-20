import { combineReducers } from "redux";
import products from "./productsReducer";
import users from "./usersReducer";
import  categories  from "./categoriesReducer";

export default combineReducers({
  users: users,
  products: products,
  categories: categories
});

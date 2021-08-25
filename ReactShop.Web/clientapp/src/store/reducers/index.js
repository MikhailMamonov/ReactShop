import { combineReducers } from "redux";
import products from "./productsReducer";
import users from "./usersReducer";
import  categories  from "./categoriesReducer";
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

export default combineReducers({
  users: users,
  products: products,
  categories: categories
});

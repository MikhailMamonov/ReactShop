import { combineReducers } from "redux";
import products from "./products.reducer";
import users from "./users.reducer";
import  categories  from "./categories.reducer";
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

export default combineReducers({
  users: users,
  products: products,
  categories: categories
});

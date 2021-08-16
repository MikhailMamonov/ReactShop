import { createStore, applyMiddleware } from "redux"; // импорт из Redux-библиотеки
import reducer from "./reducers/index";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllUsersThunk } from './actions/userActions'
import { getAllProductsThunk } from './actions/productActions'
import { getAllCategoriesThunk } from './actions/productActions'


const middleware = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)));

store.dispatch(getAllUsersThunk())
store.dispatch(getAllProductsThunk())
store.dispatch(getAllCategoriesThunk())
export default store;

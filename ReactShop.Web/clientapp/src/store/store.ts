import { createStore, applyMiddleware } from "redux"; // импорт из Redux-библиотеки
import reducer from "./reducers/index";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllUsersThunk } from "./reducers/users/userActions";
import { getAllProductsThunk } from "./reducers/products/productActions";
import { getAllCategoriesThunk } from "./reducers/category/categoryActions";

const middleware = [thunk as ThunkMiddleware];

const logger = createLogger()

if (process.env.NODE_ENV !== "production") {
  middleware.push(logger);
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

store.dispatch(getAllUsersThunk());
store.dispatch(getAllProductsThunk());
store.dispatch(getAllCategoriesThunk());
export default store;

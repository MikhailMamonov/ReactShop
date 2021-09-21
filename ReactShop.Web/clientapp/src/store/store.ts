import { createStore, applyMiddleware } from "redux"; // импорт из Redux-библиотеки
import { rootReducer } from "./reducers/index";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllUsersThunk } from "./action-creators/users";
import { getAllProductsThunk } from "./action-creators/products";
import { getAllCategoriesThunk } from "./action-creators/categories";
import { ActionTypes } from "../types/actionCreators";
import { ThunkDispatch } from "redux-thunk";

const middleware = [thunk as ThunkMiddleware];

const logger = createLogger();

if (process.env.NODE_ENV !== "production") {
  middleware.push(logger);
}

export type RootStateType = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
const dispatch = store.dispatch as ThunkDispatch<
  RootStateType,
  void,
  ActionTypes
>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
dispatch(getAllUsersThunk());
dispatch(getAllProductsThunk());
dispatch(getAllCategoriesThunk());

export default store;

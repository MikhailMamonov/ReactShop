import { createStore, applyMiddleware } from "redux"; // импорт из Redux-библиотеки
import { rootReducer } from "./reducers/index";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
// import { getAllUsersThunk } from "./users/actionCreators";
// import { getAllProductsThunk } from "./products/actionCreators";
// import { getAllCategoriesThunk } from "./categories/actionCreators";
import { ActionTypes } from "../types/actionCreators";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";

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

export type AppDispatch = typeof dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); //

// dispatch(getAllUsersThunk());
// dispatch(getAllProductsThunk());
// dispatch(getAllCategoriesThunk());

export default store;

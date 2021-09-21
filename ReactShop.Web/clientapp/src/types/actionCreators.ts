import { UsersActions } from "./users";
import { ProductsActions } from "./products";
import { AuthActions } from "./auth";
import { CategoriesActions } from "./categories";

export type ActionTypes =
  | AuthActions
  | UsersActions
  | ProductsActions
  | CategoriesActions;

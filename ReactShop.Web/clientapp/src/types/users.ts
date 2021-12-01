import { ShoppingCart } from "types";

export type User = {
  id: string;
  userName: string;
  email?: string;
  shoppingCart?: ShoppingCart;
  password: string;
};

export type UsersState = {
  users: any[];
  isLoading: boolean;
  error?: string;
};

export enum usersActionTypes {
  ADD_USER_REQUEST = "ADD_USER_REQUEST",
  ADD_USER_FAILURE = "ADD_USER_FAILURE",
  ADD_USER_SUCCESS = "ADD_USER_SUCCESS",

  GET_USERS_REQUEST = "GET_USERS_REQUEST",
  GET_USERS_FAILURE = "GET_USERS_FAILURE",
  GET_USERS_SUCCESS = "GET_USERS_SUCCESS",

  DELETE_USER_REQUEST = "DELETE_USER_REQUEST",
  DELETE_USER_FAILURE = "DELETE_USER_FAILURE",
  DELETE_USER_SUCCES = "DELETE_USER_SUCCES",

  EDIT_USER_REQUEST = "EDIT_USER_REQUEST",
  EDIT_USER_FAILURE = "EDIT_USER_FAILURE",
  EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS",
  USERS = "users",
}

export type AddUserRequestAction = {
  type: usersActionTypes.ADD_USER_REQUEST;
};

export type AddUserSuccessAction = {
  type: usersActionTypes.ADD_USER_SUCCESS;
  user: User;
};

export type AddUserFailureAction = {
  type: usersActionTypes.ADD_USER_FAILURE;
  error: string;
};

export type GetUsersRequestAction = {
  type: usersActionTypes.GET_USERS_REQUEST;
};

export type GetUsersSuccessAction = {
  type: usersActionTypes.GET_USERS_SUCCESS;
  users: User[];
};

export type GetUsersFailureAction = {
  type: usersActionTypes.GET_USERS_FAILURE;
  error: string;
};

export type EditUserRequestAction = {
  type: usersActionTypes.EDIT_USER_REQUEST;
};

export type EditUserSuccessAction = {
  type: usersActionTypes.EDIT_USER_SUCCESS;
  user: User;
  id: string;
};

export type EditUserFailureAction = {
  type: usersActionTypes.EDIT_USER_FAILURE;
  error: string;
};

export type DeleteUserRequestAction = {
  type: usersActionTypes.DELETE_USER_REQUEST;
};

export type DeleteUserSuccessAction = {
  type: usersActionTypes.DELETE_USER_SUCCES;
  id: string;
};

export type DeleteUserFailureAction = {
  type: usersActionTypes.DELETE_USER_FAILURE;
  error: string;
};

export type UsersActions =
  | AddUserRequestAction
  | AddUserSuccessAction
  | AddUserFailureAction
  | GetUsersSuccessAction
  | GetUsersRequestAction
  | GetUsersFailureAction
  | EditUserSuccessAction
  | EditUserRequestAction
  | EditUserFailureAction
  | DeleteUserSuccessAction
  | DeleteUserRequestAction
  | DeleteUserFailureAction;

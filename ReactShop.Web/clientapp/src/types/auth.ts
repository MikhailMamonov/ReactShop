import { User } from "../types/users";

export type AuthState = {
  isLoggedIn: boolean;
  currentUser?: User;
  accessToken?: string;
  loggingIn: boolean;
  error?: string;
};

export enum authActionTypes {
  REGISTER_REQUEST = "USERS_REGISTER_REQUEST",
  REGISTER_SUCCESS = "USERS_REGISTER_SUCCESS",
  REGISTER_FAILURE = "USERS_REGISTER_FAILURE",
  RESET_REGISTER_FORM = "RESET_REGISTER_FORM",

  LOGIN_REQUEST = "USERS_LOGIN_REQUEST",
  LOGIN_SUCCESS = "USERS_LOGIN_SUCCESS",
  LOGIN_FAILURE = "USERS_LOGIN_FAILURE",

  LOGOUT = "LOGOUT",
}

export type LoginSuccessAction = {
  type: authActionTypes.LOGIN_SUCCESS;
  user: User;
  accessToken: string;
};

export type RegisterRequestAction = {
  type: authActionTypes.REGISTER_REQUEST;
};

export type ResetRegisterFormAction = {
  type: authActionTypes.RESET_REGISTER_FORM;
};

export type RegisterSuccessAction = {
  type: authActionTypes.REGISTER_SUCCESS;
};

export type RegisterFailureAction = {
  type: authActionTypes.REGISTER_FAILURE;
  error: string;
};

export type LoginRequestAction = {
  type: authActionTypes.LOGIN_REQUEST;
};

export type LogoutAction = {
  type: authActionTypes.LOGOUT;
};

export type LoginFailureAction = {
  type: authActionTypes.LOGIN_FAILURE;
  error: string;
};

export type AuthActions =
  | LoginSuccessAction
  | RegisterRequestAction
  | LoginRequestAction
  | LogoutAction
  | LoginFailureAction
  | RegisterSuccessAction
  | RegisterFailureAction;

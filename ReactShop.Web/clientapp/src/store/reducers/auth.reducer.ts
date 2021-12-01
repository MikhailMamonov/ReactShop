import { AuthActions, authActionTypes, AuthState } from "../../types/auth";
import { User } from "../../types";

const user: User = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") || "{}")
  : null;

let accessToken: string = localStorage.getItem("accessToken") || "";

export const initialState: AuthState = user
  ? {
      isLoggedIn: true,
      currentUser: user,
      accessToken,
      loggingIn: false,
      error: undefined,
    }
  : {
      isLoggedIn: false,
      currentUser: undefined,
      accessToken,
      loggingIn: false,
      error: undefined,
    };

export default function auth(
  state = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case authActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
      };
    case authActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        error: undefined,
      };
    case authActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.error,
      };
    case authActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        loggingIn: true,
      };
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loggingIn: false,
        error: undefined,
        currentUser: action.user,
        accessToken: action.accessToken,
      };
    case authActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        loggingIn: false,
        error: action.error,
      };
    case authActionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: undefined,
        accessToken: undefined,
      };
    default:
      return state;
  }
}

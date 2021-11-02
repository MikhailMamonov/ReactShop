import { initialState } from "./auth.state";
import { AuthActions, authActionTypes, AuthState } from "../../types/auth";

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

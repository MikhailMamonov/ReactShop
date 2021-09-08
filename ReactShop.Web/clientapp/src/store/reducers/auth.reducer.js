import { authConstants } from "../constants";

let currentUser = JSON.parse(localStorage.getItem("user"));
const initialState = currentUser
  ? { isLoggedIn: true, currentUser }
  : { isLoggedIn: false, currentUser: null };

export default function auth(state = initialState, action) {
  switch (action.type) {
    case authConstants.REGISTER_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        registering: true,
        error: null,
      };
    case authConstants.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        registering: false,
        error: null,
        isSubmitted: true,
      };
    case authConstants.REGISTER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        registering: false,
        error: action.error,
        isSubmitted: true,
      };
    case authConstants.RESET_REGISTER_FORM:
      return {
        ...state,
        registering: false,
        isSubmitted: null,
      };
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggedIn: false,
        currentUser: action.user,
        loggingIn: true,
        error: null,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loggingIn: false,
        currentUser: action.user,
        error: null,
      };
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        loggingIn: false,
        error: action.error,
      };
    case authConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
}

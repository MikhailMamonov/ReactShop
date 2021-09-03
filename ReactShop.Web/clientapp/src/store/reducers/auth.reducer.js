import { authConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function auth(state = initialState, action){
  switch (action.type) {

    case authConstants.REGISTER_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        registering:true,
        error:null
        
      };
    case authConstants.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        registering:false,
        error:null
      };
    case authConstants.REGISTER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        registering:false,
        error:  action.error
      };
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggedIn: false,
        user: action.user,
        loggingIn:true,
        error:null
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loggingIn: false ,
        user: action.user,
        error:null
      };
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn:false,
        loggingIn:false,
        error:  action.error
      };
    case authConstants.LOGOUT:
      return {
        ...state,
        loggedIn:false
      };
    default:
      return state
  }
}
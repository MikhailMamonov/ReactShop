import { userConstants } from "../../constants";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.ADD_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case userConstants.ADD_USER_SUCCESS:
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: action.user.id,
            displayName: action.user.displayName,
            email: action.user.email,
            password: action.user.password,
          },
        ],
        error: null,
        isLoading: false,
      };
    case userConstants.ADD_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case userConstants.GET_USERS_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case userConstants.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.users,
        error: null,
        isLoading: false,
      };
    }
    case userConstants.GET_USERS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case userConstants.EDIT_USER_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case userConstants.EDIT_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((p) => (p.id === action.id ? action.user : p)),
        error: null,
        isLoading: false,
      };
    case userConstants.EDIT_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case userConstants.DELETE_USER_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case userConstants.DELETE_USER_SUCCES:
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.id),
        error: null,
        isLoading: false,
      };

    case userConstants.DELETE_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case userConstants.USER_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case userConstants.SET_FETCHING_USER:
      return {
        ...state,
        isLoading: true,
      };

    case userConstants.UNSET_FETCHING_USER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

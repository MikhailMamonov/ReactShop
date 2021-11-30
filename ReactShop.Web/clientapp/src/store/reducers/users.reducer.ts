import { UsersState, UsersActions, usersActionTypes } from "types/users";

const initialState: UsersState = {
  users: [],
  isLoading: false,
};

export default function usersReducer(
  state: UsersState = initialState,
  action: UsersActions
): UsersState {
  switch (action.type) {
    case usersActionTypes.ADD_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case usersActionTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: action.user.id,
            userName: action.user.userName,
            email: action.user.email,
            password: action.user.password,
          },
        ],
        isLoading: false,
      };
    case usersActionTypes.ADD_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case usersActionTypes.GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case usersActionTypes.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.users,
        isLoading: false,
      };
    }
    case usersActionTypes.GET_USERS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case usersActionTypes.EDIT_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case usersActionTypes.EDIT_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((p) => (p.id === action.id ? action.user : p)),
        isLoading: false,
      };
    case usersActionTypes.EDIT_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case usersActionTypes.DELETE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case usersActionTypes.DELETE_USER_SUCCES:
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.id),
        isLoading: false,
      };

    case usersActionTypes.DELETE_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}

import { 
  ADD_USER_SUCCESS,
  GET_USERS_SUCCESS,
  DELETE_USER_SUCCES,
  USER_ERROR,
  SET_FETCHING_USER,
  UNSET_FETCHING_USER
} from "../types";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FETCHING_USER:
      return {
        ...state,
        isLoading: true,
      };
      case UNSET_FETCHING_USER:
        return{
          ...state,
          isLoading: false
        } 
    case ADD_USER_SUCCESS:
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: action.payload.id,
            displayName: action.payload.displayName,
            email: action.payload.email,
            password:action.payload.password
          },
        ],
        error: null
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error:null
      }
    case DELETE_USER_SUCCES:
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload.idForDelete),
        error:null,
      };
    case USER_ERROR:
      return{
        ...state,
        error: action.error,
      }
    default:
      return state;
  }
}

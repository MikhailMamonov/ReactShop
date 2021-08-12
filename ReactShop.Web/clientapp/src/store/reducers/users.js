import { 
  ADD_USER_SUCCESS,
  USER_ERROR, 
  TOGGLE_FETCHING, 
  GET_USERS_SUCCESS,
  DELETE_USER 
} from "../types";

const initialState = {
  users: [
     ],
  isLoading: false,
  error: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FETCHING:
      return { ...state, isLoading: action.payload.isFething };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: users.length + 1,
            displayName: action.payload.displayName,
            email: action.payload.email,
            password:action.payload.password
          },
        ],
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users
      }
    case USER_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case DELETE_USER:
      console.log(state.users);
      console.log(state.users.filter((u) => u.id !== action.payload.idForDelete));
      debugger;
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload.idForDelete)};
    default:
      return state;
  }
}

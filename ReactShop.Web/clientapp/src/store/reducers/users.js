import { ADD_USER_SUCCESS, USER_ERROR, TOGGLE_FETCHING } from "../types";

const initialState = {
  users: [
    { id: 1, displayName: "First item", email: "jiojioj@mail.ru" },
    { id: 2, displayName: "Second item", email: "bjhbj@mail.ru" },
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
            displayName: action.payload.newUser.displayName,
            email: action.payload.newUser.email,
          },
        ],
      };
    case USER_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case "DELETE_USER":
      return [...users.filter((u) => u.id !== action.payload.idForDelete)];
    default:
      return state;
  }
}

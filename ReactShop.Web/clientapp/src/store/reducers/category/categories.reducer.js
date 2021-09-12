import {
  categoryConstants,
  // SET_FETCHING_CATEGORY,
  // UNSET_FETCHING_CATEGORY,
  // CATEGORY_ERROR,
  // GET_CATEGORIES_SUCCESS,
  // DELETE_CATEGORY_SUCCESS,
  // ADD_CATEGORY_SUCCESS,
  // EDIT_CATEGORY_SUCCES
} from "../../constants/category.constants";

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case categoryConstants.SET_FETCHING_CATEGORY:
      return {
        ...state,
        isLoading: true,
      };
    case categoryConstants.UNSET_FETCHING_CATEGORY:
      return {
        ...state,
        isLoading: false,
      };

    case categoryConstants.ADD_CATEGORY_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case categoryConstants.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [
          ...state.categories,
          {
            id: action.category.id,
            name: action.category.name,
          },
        ],
        error: null,
      };

    case categoryConstants.ADD_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case categoryConstants.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case categoryConstants.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        error: null,
        isLoading: false,
      };

    case categoryConstants.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case categoryConstants.DELETE_CATEGORY_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case categoryConstants.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.filter((c) => c.id !== action.id),
        error: null,
      };

    case categoryConstants.DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case categoryConstants.EDIT_CATEGORY_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case categoryConstants.EDIT_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.map((p) =>
          p.id === action.category.id ? action.category.item : p
        ),
        error: null,
      };

    case categoryConstants.EDIT_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case categoryConstants.CATEGORY_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

import {
  categoriesActionTypes,
  CategoriesActions,
  CategoriesState,
  Category,
} from "../../types/categories";

const initialState: CategoriesState = {
  categories: [] as Array<Category>,
  isLoading: false,
  error: "",
};

export default function categoriesReducer(
  state = initialState,
  action: CategoriesActions
): CategoriesState {
  switch (action.type) {
    case categoriesActionTypes.ADD_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case categoriesActionTypes.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [
          ...state.categories,
          {
            id: action.category.id,
            name: action.category.name,
          },
        ],
        isLoading: false,
      };

    case categoriesActionTypes.ADD_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case categoriesActionTypes.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case categoriesActionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        isLoading: false,
      };

    case categoriesActionTypes.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case categoriesActionTypes.DELETE_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case categoriesActionTypes.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.filter((c) => c.id !== action.id),
        isLoading: false,
      };

    case categoriesActionTypes.DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case categoriesActionTypes.EDIT_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case categoriesActionTypes.EDIT_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.map((p) =>
          p.id === action.id ? action.category : p
        ),
        isLoading: false,
      };

    case categoriesActionTypes.EDIT_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}

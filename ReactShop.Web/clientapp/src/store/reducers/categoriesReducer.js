import { 
  categoryConstants
    // SET_FETCHING_CATEGORY, 
    // UNSET_FETCHING_CATEGORY, 
    // CATEGORY_ERROR,
    // GET_CATEGORIES_SUCCESS,
    // DELETE_CATEGORY_SUCCESS,
    // ADD_CATEGORY_SUCCESS,
    // EDIT_CATEGORY_SUCCES
  } from "./../constants/category.constants";
  
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
          isLoading: false
        }


      case categoryConstants.ADD_CATEGORY_SUCCESS:
        return {...state,
          categories:[
          ...state.categories,
          {
            id: action.payload.id,
            name: action.payload.name,
          },
        ],
        error:null,
      };
      case categoryConstants.GET_CATEGORIES_SUCCESS:
        return {
          ...state,
          categories: action.categories,
          error:null,
        }
      case categoryConstants.DELETE_CATEGORY_SUCCESS:
        return {
          ...state,
          categories: state.categories.filter((c) => c.id !== action.payload.idForDelete),
          error:null,
        } 
      case categoryConstants.EDIT_CATEGORY_SUCCES:
        return {
          ...state,
          categories: state.categories.map(p=>
             p.id === action.payload.id?action.payload.item: p),
          error:null
        }
      case categoryConstants.CATEGORY_ERROR:
        return {
          ...state,
          error: action.error,
        }
        default:
        return state;
    }
  }
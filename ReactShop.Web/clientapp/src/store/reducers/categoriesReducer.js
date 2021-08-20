import { 
    SET_FETCHING, 
    UNSET_FETCHING, 
    ERROR,
    GET_CATEGORIES_SUCCESS,
    DELETE_CATEGORY_SUCCESS,
    ADD_CATEGORY_SUCCESS
  } from "../types";
  
  const initialState = {
    categories: [],
    isLoading: false,
    error: null,
  };
  
  export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
      case SET_FETCHING:
        return {
          ...state,
          isLoading: true,
        };
      case UNSET_FETCHING:
        return {
          ...state,
          isLoading: false
        }


      case ADD_CATEGORY_SUCCESS:
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
      case GET_CATEGORIES_SUCCESS:
        return {
          ...state,
          categories: action.payload.categories,
          error:null,
        }
      case DELETE_CATEGORY_SUCCESS:
        return {
          ...state,
          categories: state.categories.filter((c) => c.id !== action.payload.idForDelete)
        } 
      case ERROR:
        return {
          ...state,
          error: action.error,
        }
        default:
        return state;
    }
  }
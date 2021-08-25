import { 
    SET_FETCHING_CATEGORY, 
    UNSET_FETCHING_CATEGORY, 
    CATEGORY_ERROR,
    GET_CATEGORIES_SUCCESS,
    DELETE_CATEGORY_SUCCESS,
    ADD_CATEGORY_SUCCESS,
    EDIT_CATEGORY_SUCCES
  } from "../types";
  
  const initialState = {
    categories: [],
    isLoading: false,
    error: null,
  };
  
  export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
      case SET_FETCHING_CATEGORY:
        return {
          ...state,
          isLoading: true,
        };
      case UNSET_FETCHING_CATEGORY:
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
          categories: action.payload,
          error:null,
        }
      case DELETE_CATEGORY_SUCCESS:
        return {
          ...state,
          categories: state.categories.filter((c) => c.id !== action.payload.idForDelete),
          error:null,
        } 
      case EDIT_CATEGORY_SUCCES:
        return {
          ...state,
          categories: state.categories.map(p=>
             p.id === action.payload.id?action.payload.item: p),
          error:null
        }
      case CATEGORY_ERROR:
        return {
          ...state,
          error: action.error,
        }
        default:
        return state;
    }
  }
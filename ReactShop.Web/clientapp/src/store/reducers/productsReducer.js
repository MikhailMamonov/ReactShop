import { 
  SET_FETCHING, 
  UNSET_FETCHING, 
  ADD_PRODUCT_SUCCESS, 
  DELETE_PRODUCT_SUCCES, 
  GET_PRODUCTS_SUCCESS,
  PRODUCT_ERROR,
  GET_CATEGORIES_SUCCESS
} from "../types";

const initialState = {
  products: [],
  categories: [],
  isLoading: false,
  error: null,
};

export default function productsReducer(state = initialState, action) {
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
    case ADD_PRODUCT_SUCCESS:
      return {...state,
        products:[
        ...state.products,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          categoryId: action.payload.categoryId
        },
      ],
      error:null,
    };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        error:null,
      }
    case DELETE_PRODUCT_SUCCES:
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload.idForDelete)
      } 
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories,
        error:null,
      }
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.error,
      }
      default:
      return state;
  }
}

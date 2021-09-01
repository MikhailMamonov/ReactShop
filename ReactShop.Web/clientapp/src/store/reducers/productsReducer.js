import { 
  // ADD_PRODUCT_SUCCESS, 
  // DELETE_PRODUCT_SUCCES, 
  // EDIT_PRODUCT_SUCCES, 
  // GET_PRODUCTS_SUCCESS,
  // PRODUCT_ERROR,
  // SET_FETCHING_PRODUCT,
  // UNSET_FETCHING_PRODUCT,
  productConstants
} from "..//constants/product.constants";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case productConstants.SET_FETCHING_PRODUCT:
      return {
        ...state,
        isLoading: true,
      };
    case productConstants.UNSET_FETCHING_PRODUCT:
      return {
        ...state,
        isLoading: false
      }

    case productConstants.ADD_PRODUCT_REQUEST:
      return{
        ...state,
        error:null,
        isLoading:true
      }
    case productConstants.ADD_PRODUCT_SUCCESS:
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
      isLoading:false
    };
    case productConstants.ADD_PRODUCT_FAILURE:
        return {
          ...state,
          error: action.error,
          isLoading: false
        }

    case productConstants.GET_PRODUCTS_REQUEST:
      return{
        ...state,
        error:null,
        isLoading:true
      }
    case productConstants.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
        error:null,
        isLoading:false
      }
      case productConstants.GET_PRODUCTS_FAILURE:
        return {
          ...state,
          error: action.error,
          isLoading: false
        }

      case productConstants.DELETE_PRODUCT_REQUEST:
        return{
          ...state,
          error:null,
          isLoading:true
        }
    case productConstants.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload.idForDelete),
        error:null,
        isLoading:false
      } 
      case productConstants.DELETE_PRODUCT_FAILURE:
        return {
          ...state,
          error: action.error,
          isLoading: false
        }
    
      case productConstants.EDIT_PRODUCT_REQUEST:
      return{
        ...state,
        error:null,
        isLoading:true
      }
    case productConstants.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map(p=>
           p.id === action.payload.id?action.payload.item: p),
        error:null, 
        isLoading:false
      }

      case productConstants.EDIT_PRODUCT_FAILURE:
        return {
          ...state,
          error: action.error,
          isLoading: false
        }
    

    case productConstants.PRODUCT_ERROR:
      return {
        ...state,
        error: action.error,
      }
      default:
      return state;
  }
}

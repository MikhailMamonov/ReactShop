import {
  Product,
  ProductsState,
  ProductsActions,
  productsActionTypes,
} from "types/products";

const initialState: ProductsState = {
  products: [] as Array<Product>,
  isLoading: false,
};

export default function productsReducer(
  state: ProductsState = initialState,
  action: ProductsActions
): ProductsState {
  switch (action.type) {
    case productsActionTypes.ADD_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case productsActionTypes.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [
          ...state.products,
          {
            id: action.product.id,
            name: action.product.name,
            price: action.product.price,
            categoryId: action.product.categoryId,
            category: action.product.category,
            image: action.product.image,
          },
        ],
        isLoading: false,
      };
    case productsActionTypes.ADD_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case productsActionTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case productsActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,

        isLoading: false,
      };
    case productsActionTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case productsActionTypes.DELETE_PRODUCT_REQUEST:
      return {
        ...state,

        isLoading: true,
      };
    case productsActionTypes.DELETE_PRODUCT_SUCCES:
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.id),

        isLoading: false,
      };
    case productsActionTypes.DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case productsActionTypes.EDIT_PRODUCT_REQUEST:
      return {
        ...state,

        isLoading: true,
      };
    case productsActionTypes.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.id ? action.product : p
        ),

        isLoading: false,
      };

    case productsActionTypes.EDIT_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}

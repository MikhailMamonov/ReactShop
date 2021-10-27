import {
  shoppingCartItemsActionTypes,
  ShoppingCartItemsActions,
  ShoppingCartItemsState,
  CartItem,
} from "types/shoppingCart";

const initialState: ShoppingCartItemsState = {
  shoppingCartItems: [] as Array<CartItem>,
  isLoading: false,
  error: "",
};

export default function shoppingCartItemsReducer(
  state = initialState,
  action: ShoppingCartItemsActions
): ShoppingCartItemsState {
  switch (action.type) {
    case shoppingCartItemsActionTypes.ADD_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case shoppingCartItemsActionTypes.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        shoppingCartItems: [
          ...state.shoppingCartItems,
          {
            id: action.cartItem.id,
            name: action.cartItem.name,
          },
        ],
        isLoading: false,
      };

    case shoppingCartItemsActionTypes.ADD_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case shoppingCartItemsActionTypes.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case shoppingCartItemsActionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        shoppingCartItems: action.shoppingCartItems,
        isLoading: false,
      };

    case shoppingCartItemsActionTypes.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case shoppingCartItemsActionTypes.DELETE_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case shoppingCartItemsActionTypes.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        shoppingCartItems: state.shoppingCartItems.filter(
          (c) => c.id !== action.id
        ),
        isLoading: false,
      };

    case shoppingCartItemsActionTypes.DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case shoppingCartItemsActionTypes.EDIT_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case shoppingCartItemsActionTypes.EDIT_CATEGORY_SUCCESS:
      return {
        ...state,
        shoppingCartItems: state.shoppingCartItems.map((p) =>
          p.id === action.id ? action.cartItem : p
        ),
        isLoading: false,
      };

    case shoppingCartItemsActionTypes.EDIT_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}

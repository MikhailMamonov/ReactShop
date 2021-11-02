import {
  shoppingCartItemsActionTypes,
  ShoppingCartItemsActions,
  ShoppingCartItemsState,
  CartItem,
} from "types/shoppingCart";

const initialState: ShoppingCartItemsState = {
  cartItems: [] as Array<CartItem>,
  isLoading: false,
  error: "",
};

export default function shoppingCartItemsReducer(
  state = initialState,
  action: ShoppingCartItemsActions
): ShoppingCartItemsState {
  switch (action.type) {
    case shoppingCartItemsActionTypes.ADD_CART_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case shoppingCartItemsActionTypes.ADD_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            id: action.cartItem.id,
            cartId: action.cartItem.cartId,
            amount: action.cartItem.amount,
            dateCreated: action.cartItem.dateCreated,
            productId: action.cartItem.productId,
          },
        ],
        isLoading: false,
      };

    case shoppingCartItemsActionTypes.ADD_CART_ITEM_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case shoppingCartItemsActionTypes.GET_CART_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case shoppingCartItemsActionTypes.GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cartItems: action.cartItems,
        isLoading: false,
      };

    case shoppingCartItemsActionTypes.GET_CART_ITEMS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case shoppingCartItemsActionTypes.DELETE_CART_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case shoppingCartItemsActionTypes.DELETE_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.id !== action.id),
        isLoading: false,
      };

    case shoppingCartItemsActionTypes.DELETE_CART_ITEM_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case shoppingCartItemsActionTypes.EDIT_CART_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case shoppingCartItemsActionTypes.EDIT_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.map((p) =>
          p.id === action.id ? action.cartItem : p
        ),
        isLoading: false,
      };

    case shoppingCartItemsActionTypes.EDIT_CART_ITEM_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}

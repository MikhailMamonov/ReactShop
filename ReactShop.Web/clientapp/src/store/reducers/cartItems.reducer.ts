import {
  cartItemsActionTypes,
  CartItemsActions,
  CartItemsState,
  CartItem,
} from "types/cartItems";

const initialState: CartItemsState = {
  cartItems: [] as Array<CartItem>,
  isLoading: false,
  error: "",
};

export default function cartItemsReducer(
  state = initialState,
  action: CartItemsActions
): CartItemsState {
  switch (action.type) {
    case cartItemsActionTypes.ADD_CART_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case cartItemsActionTypes.ADD_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            id: action.cartItem.id,
            shoppingCartId: action.cartItem.shoppingCartId,
            amount: action.cartItem.amount,
            dateCreated: action.cartItem.dateCreated,
            productId: action.cartItem.productId,
          },
        ],
        isLoading: false,
      };

    case cartItemsActionTypes.ADD_CART_ITEM_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case cartItemsActionTypes.GET_CART_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case cartItemsActionTypes.GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cartItems: action.cartItems,
        isLoading: false,
      };

    case cartItemsActionTypes.GET_CART_ITEMS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case cartItemsActionTypes.DELETE_CART_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case cartItemsActionTypes.DELETE_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.id !== action.id),
        isLoading: false,
      };

    case cartItemsActionTypes.DELETE_CART_ITEM_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case cartItemsActionTypes.EDIT_CART_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case cartItemsActionTypes.EDIT_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.map((p) =>
          p.id === action.id ? action.cartItem : p
        ),
        isLoading: false,
      };

    case cartItemsActionTypes.EDIT_CART_ITEM_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}

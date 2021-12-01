export type ShoppingCart = {
  id: number;
  cartItems: CartItem[];
};

export type CartItem = {
  id: number;
  shoppingCartId: number;
  amount: number;
  dateCreated: Date;
  productId: number;
};

export type CartItemsState = {
  cartItems: Array<CartItem>;
  isLoading: boolean;
  error?: string;
};

export enum cartItemsActionTypes {
  ADD_CART_ITEM_REQUEST = "ADD_CART_ITEM_REQUEST",
  ADD_CART_ITEM_FAILURE = "ADD_CART_ITEM_FAILURE",
  ADD_CART_ITEM_SUCCESS = "ADD_CART_ITEM_SUCCESS",

  GET_CART_ITEMS_REQUEST = "GET_CART_ITEMS_REQUEST",
  GET_CART_ITEMS_FAILURE = "GET_CART_ITEMS_FAILURE",
  GET_CART_ITEMS_SUCCESS = "GET_CART_ITEMS_SUCCESS",

  DELETE_CART_ITEM_REQUEST = "DELETE_CART_ITEM_REQUEST",
  DELETE_CART_ITEM_FAILURE = "DELETE_CART_ITEM_FAILURE",
  DELETE_CART_ITEM_SUCCESS = "DELETE_CART_ITEM_SUCCESS",

  EDIT_CART_ITEM_REQUEST = "EDIT_CART_ITEM_REQUEST",
  EDIT_CART_ITEM_FAILURE = "EDIT_CART_ITEM_FAILURE",
  EDIT_CART_ITEM_SUCCESS = "EDIT_CART_ITEM_SUCCESS",
  CART_ITEMS = "cartItems",
}

export type AddCartItemRequestAction = {
  type: cartItemsActionTypes.ADD_CART_ITEM_REQUEST;
};

export type AddCartItemSuccessAction = {
  type: cartItemsActionTypes.ADD_CART_ITEM_SUCCESS;
  cartItem: CartItem;
};

export type AddCartItemFailureAction = {
  type: cartItemsActionTypes.ADD_CART_ITEM_FAILURE;
  error: string;
};

export type GetCartItemsRequestAction = {
  type: cartItemsActionTypes.GET_CART_ITEMS_REQUEST;
};

export type GetCartItemsSuccessAction = {
  type: cartItemsActionTypes.GET_CART_ITEMS_SUCCESS;
  cartItems: CartItem[];
};

export type GetCartItemsFailureAction = {
  type: cartItemsActionTypes.GET_CART_ITEMS_FAILURE;
  error: string;
};

export type EditCartItemRequestAction = {
  type: cartItemsActionTypes.EDIT_CART_ITEM_REQUEST;
};

export type EditCartItemSuccessAction = {
  type: cartItemsActionTypes.EDIT_CART_ITEM_SUCCESS;
  cartItem: CartItem;
  id: number;
};

export type EditCartItemFailureAction = {
  type: cartItemsActionTypes.EDIT_CART_ITEM_FAILURE;
  error: string;
};

export type DeleteCartItemRequestAction = {
  type: cartItemsActionTypes.DELETE_CART_ITEM_REQUEST;
};

export type DeleteCartItemSuccessAction = {
  type: cartItemsActionTypes.DELETE_CART_ITEM_SUCCESS;
  id: number;
};

export type DeleteCartItemFailureAction = {
  type: cartItemsActionTypes.DELETE_CART_ITEM_FAILURE;
  error: string;
};

export type CartItemsActions =
  | AddCartItemRequestAction
  | AddCartItemSuccessAction
  | AddCartItemFailureAction
  | GetCartItemsSuccessAction
  | GetCartItemsRequestAction
  | GetCartItemsFailureAction
  | EditCartItemSuccessAction
  | EditCartItemRequestAction
  | EditCartItemFailureAction
  | DeleteCartItemSuccessAction
  | DeleteCartItemRequestAction
  | DeleteCartItemFailureAction;

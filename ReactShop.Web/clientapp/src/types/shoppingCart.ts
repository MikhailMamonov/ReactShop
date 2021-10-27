export type CartItem = {
  id: number;
  cartId: number;
  amount: number;
  dateCreated: Date;
  productId: number;
};

export type ShoppingCartItemsState = {
  cartItems: Array<CartItem>;
  isLoading: boolean;
  error?: string;
};

export enum shoppingCartItemsActionTypes {
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
  type: shoppingCartItemsActionTypes.ADD_CART_ITEM_REQUEST;
};

export type AddCartItemSuccessAction = {
  type: shoppingCartItemsActionTypes.ADD_CART_ITEM_SUCCESS;
  cartItem: CartItem;
};

export type AddCartItemFailureAction = {
  type: shoppingCartItemsActionTypes.ADD_CART_ITEM_FAILURE;
  error: string;
};

export type GetShoppingCartItemsReguestAction = {
  type: shoppingCartItemsActionTypes.GET_CART_ITEMS_REQUEST;
};

export type GetShoppingCartItemsSuccessAction = {
  type: shoppingCartItemsActionTypes.GET_CART_ITEMS_SUCCESS;
  cartItems: CartItem[];
};

export type GetShoppingCartItemsFailureAction = {
  type: shoppingCartItemsActionTypes.GET_CART_ITEMS_FAILURE;
  error: string;
};

export type EditCartItemRequestAction = {
  type: shoppingCartItemsActionTypes.EDIT_CART_ITEM_REQUEST;
};

export type EditCartItemSuccessAction = {
  type: shoppingCartItemsActionTypes.EDIT_CART_ITEM_SUCCESS;
  cartItem: CartItem;
  id: number;
};

export type EditCartItemFailureAction = {
  type: shoppingCartItemsActionTypes.EDIT_CART_ITEM_FAILURE;
  error: string;
};

export type DeleteCartItemReguestAction = {
  type: shoppingCartItemsActionTypes.DELETE_CART_ITEM_REQUEST;
};

export type DeleteCartItemSuccessAction = {
  type: shoppingCartItemsActionTypes.DELETE_CART_ITEM_SUCCESS;
  id: number;
};

export type DeleteCartItemFailureAction = {
  type: shoppingCartItemsActionTypes.DELETE_CART_ITEM_FAILURE;
  error: string;
};

export type ShoppingCartItemsActions =
  | AddCartItemRequestAction
  | AddCartItemSuccessAction
  | AddCartItemFailureAction
  | GetShoppingCartItemsSuccessAction
  | GetShoppingCartItemsReguestAction
  | GetShoppingCartItemsFailureAction
  | EditCartItemSuccessAction
  | EditCartItemRequestAction
  | EditCartItemFailureAction
  | DeleteCartItemSuccessAction
  | DeleteCartItemReguestAction
  | DeleteCartItemFailureAction;

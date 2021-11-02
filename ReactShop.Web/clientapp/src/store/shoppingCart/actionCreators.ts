import shoppingCartDataService from "store/shoppingCart/shoppingCart.service";
import { shoppingCartItemsActionTypes, CartItem, thunkType } from "types";
import axios, { AxiosError } from "axios";

export const addToCartThunk = (newCartItem: CartItem): thunkType => {
  return (dispatch) => {
    dispatch({ type: shoppingCartItemsActionTypes.ADD_CART_ITEM_REQUEST });
    shoppingCartDataService
      .create({
        id: newCartItem.id,
        cartId: newCartItem.cartId,
        amount: newCartItem.amount,
        dateCreated: newCartItem.dateCreated,
        productId: newCartItem.productId,
      })
      .then((newCartItem: CartItem) => {
        dispatch({
          type: shoppingCartItemsActionTypes.ADD_CART_ITEM_SUCCESS,
          cartItem: newCartItem,
        });
      })
      .catch((err: Error | AxiosError) => {
        debugger;
        dispatch({
          type: shoppingCartItemsActionTypes.ADD_CART_ITEM_FAILURE,
          error: err.message,
        });
      });
  };
};

export const getAllCategoriesThunk = (): thunkType => {
  return (dispatch) => {
    dispatch({ type: shoppingCartItemsActionTypes.GET_CART_ITEMS_REQUEST });
    shoppingCartDataService
      .getAll()
      .then((cartItems: CartItem[]) => {
        dispatch({
          type: shoppingCartItemsActionTypes.GET_CART_ITEMS_SUCCESS,
          cartItems: cartItems,
        });
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          dispatch({
            type: shoppingCartItemsActionTypes.GET_CART_ITEMS_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: shoppingCartItemsActionTypes.GET_CART_ITEMS_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

export const deleteCartItemThunk = (id: number): thunkType => {
  return (dispatch) => {
    dispatch({ type: shoppingCartItemsActionTypes.DELETE_CART_ITEM_REQUEST });
    shoppingCartDataService
      .remove(id)
      .then((deleteRespone) => {
        dispatch({
          type: shoppingCartItemsActionTypes.DELETE_CART_ITEM_SUCCESS,
          id: deleteRespone.id,
        });
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          dispatch({
            type: shoppingCartItemsActionTypes.DELETE_CART_ITEM_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: shoppingCartItemsActionTypes.EDIT_CART_ITEM_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

export const editCartItemThunk = (id: number, item: CartItem): thunkType => {
  return (dispatch) => {
    dispatch({ type: shoppingCartItemsActionTypes.EDIT_CART_ITEM_REQUEST });
    shoppingCartDataService
      .update(id, item)
      .then((editedCartItem: CartItem) => {
        dispatch({
          type: shoppingCartItemsActionTypes.EDIT_CART_ITEM_SUCCESS,
          id: editedCartItem.id,
          cartItem: editedCartItem,
        });
      })
      .catch((err: Error | AxiosError) => {
        console.log(err);
        if (axios.isAxiosError(err)) {
          dispatch({
            type: shoppingCartItemsActionTypes.EDIT_CART_ITEM_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: shoppingCartItemsActionTypes.EDIT_CART_ITEM_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

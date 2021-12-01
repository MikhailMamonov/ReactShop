import axios, { AxiosError } from "axios";
import { CartItem, cartItemsActionTypes, thunkType } from "../../types";
import { cartItemsService } from "../api/services";

export const addCartItemThunk = (newCartItem: CartItem): thunkType => {
  return (dispatch) => {
    dispatch({ type: cartItemsActionTypes.ADD_CART_ITEM_REQUEST });
    cartItemsService
      .create({
        id: newCartItem.id,
        shoppingCartId: newCartItem.shoppingCartId,
        amount: newCartItem.amount,
        dateCreated: newCartItem.dateCreated,
        productId: newCartItem.productId,
      })
      .then((newCartItem: CartItem) => {
        dispatch({
          type: cartItemsActionTypes.ADD_CART_ITEM_SUCCESS,
          cartItem: newCartItem,
        });
      })
      .catch((err: Error | AxiosError) => {
        debugger;
        dispatch({
          type: cartItemsActionTypes.ADD_CART_ITEM_FAILURE,
          error: err.message,
        });
      });
  };
};

export const getAllCartItemsThunk = (): thunkType => {
  return (dispatch) => {
    dispatch({ type: cartItemsActionTypes.GET_CART_ITEMS_REQUEST });
    cartItemsService
      .getAll()
      .then((cartItems: CartItem[]) => {
        dispatch({
          type: cartItemsActionTypes.GET_CART_ITEMS_SUCCESS,
          cartItems: cartItems,
        });
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          dispatch({
            type: cartItemsActionTypes.GET_CART_ITEMS_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: cartItemsActionTypes.GET_CART_ITEMS_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

export const deleteCartItemThunk = (id: number): thunkType => {
  return (dispatch) => {
    dispatch({ type: cartItemsActionTypes.DELETE_CART_ITEM_REQUEST });
    cartItemsService
      .remove(id)
      .then((deleteRespone) => {
        dispatch({
          type: cartItemsActionTypes.DELETE_CART_ITEM_SUCCESS,
          id: deleteRespone.id,
        });
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          dispatch({
            type: cartItemsActionTypes.DELETE_CART_ITEM_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: cartItemsActionTypes.EDIT_CART_ITEM_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

export const editCartItemThunk = (id: number, item: CartItem): thunkType => {
  return (dispatch) => {
    dispatch({ type: cartItemsActionTypes.EDIT_CART_ITEM_REQUEST });
    cartItemsService
      .update(id, item)
      .then((editedCartItem: CartItem) => {
        dispatch({
          type: cartItemsActionTypes.EDIT_CART_ITEM_SUCCESS,
          id: editedCartItem.id,
          cartItem: editedCartItem,
        });
      })
      .catch((err: Error | AxiosError) => {
        console.log(err);
        if (axios.isAxiosError(err)) {
          dispatch({
            type: cartItemsActionTypes.EDIT_CART_ITEM_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: cartItemsActionTypes.EDIT_CART_ITEM_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

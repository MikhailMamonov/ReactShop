import { ThunkAction } from "redux-thunk";
import { Product, productsActionTypes } from "../../types/products";

import axios, { AxiosError } from "axios";
import productsDataService from "./product.service";
import { RootStateType } from "../store";
import { ActionTypes } from "../../types/actionCreators";

type thunkType = ThunkAction<void, RootStateType, unknown, ActionTypes>;

export const addProductThunk = (newProduct: Product): thunkType => {
  return (dispatch) => {
    dispatch({ type: productsActionTypes.ADD_PRODUCT_REQUEST });
    debugger;
    console.log("newProduct", newProduct);
    productsDataService
      .create({
        id: 0,
        name: newProduct.name,
        price: newProduct.price,
        categoryId: newProduct.categoryId,
        image: newProduct.image,
      })
      .then((product) => {
        dispatch({
          type: productsActionTypes.ADD_PRODUCT_SUCCESS,
          product: product,
        });
      })
      .catch((err: any) => {
        dispatch({
          type: productsActionTypes.ADD_PRODUCT_FAILURE,
          error: err.message,
        });
      });
  };
};

export const editProductThunk = (id: number, item: Product): thunkType => {
  return (dispatch) => {
    dispatch({ type: productsActionTypes.EDIT_PRODUCT_REQUEST });
    console.log("editProductThunk -> item", item);
    productsDataService
      .update(id, item)
      .then((product) => {
        console.log("editProductThunk -> res.data", product);
        dispatch({
          type: productsActionTypes.EDIT_PRODUCT_SUCCESS,
          id: id,
          product: product,
        });
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          dispatch({
            type: productsActionTypes.EDIT_PRODUCT_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: productsActionTypes.EDIT_PRODUCT_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

export const getAllProductsThunk = (): thunkType => {
  return (dispatch) => {
    dispatch({ type: productsActionTypes.GET_PRODUCTS_REQUEST });
    productsDataService
      .getAll()
      .then((products) => {
        dispatch({
          type: productsActionTypes.GET_PRODUCTS_SUCCESS,
          products: products,
        });
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          console.log(err);
          dispatch({
            type: productsActionTypes.GET_PRODUCTS_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: productsActionTypes.GET_PRODUCTS_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

export const deleteProductThunk = (id: number): thunkType => {
  return (dispatch) => {
    dispatch({ type: productsActionTypes.DELETE_PRODUCT_REQUEST });
    productsDataService
      .remove(id)
      .then(() => {
        dispatch({ type: productsActionTypes.DELETE_PRODUCT_SUCCES, id });
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          dispatch({
            type: productsActionTypes.GET_PRODUCTS_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: productsActionTypes.GET_PRODUCTS_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

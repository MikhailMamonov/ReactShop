import ProductsDataService from '../api/ProductService'
import {
  ADD_PRODUCT_SUCCESS,
  PRODUCT_ERROR,
  GET_PRODUCTS_SUCCESS,
  DELETE_PRODUCT_SUCCES,
  GET_CATEGORIES_SUCCESS
} from "../types";

import { setFetchingFlag, unsetFetchingFlag } from "./index";

export const addProductActionSuccess = (newProduct) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: {
    name: newProduct.name,
    price: newProduct.price,
    id: newProduct.id,
    categoryId: newProduct.categoryId  
  },
  error: null
});

export const addProductActionError = (err) => ({
  type: PRODUCT_ERROR,
  payload: null,
  error: err
});

export const getProductsActionSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: {
    products },
  error: null
});

export const getProductsActionError = (err) => ({
  type: PRODUCT_ERROR,
  payload: null,
  error: err
});

export const getCategoriesActionSuccess = (categories) => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: {
        categories },
    error: null
  });
  
  export const getCategoriesActionError = (err) => ({
    type: PRODUCT_ERROR,
    payload: null,
    error: err
  });

export const deleteProductActionSuccess = (id) => ({
  type: DELETE_PRODUCT_SUCCES,
  payload: { idForDelete: id },
});

export const deleteProductActionError = (err) => ({
  type: PRODUCT_ERROR,
  payload: null,
  error: err
});


export const addProductThunk = (newProduct) => {
  return (dispatch) => {
    dispatch(setFetchingFlag())
    debugger;
    ProductsDataService.create(
       {
          name: newProduct.name,
          price: newProduct.price,
          categoryId: newProduct.categoryId,
      })
      .then((res) => {
        dispatch(addProductActionSuccess(res.data.product));
      })
      .catch((e) => {
        debugger;
        dispatch(addProductActionError(e.response.data));
      });

      setTimeout(() => {
      dispatch(unsetFetchingFlag())}, 2000);
  };
};

export const getAllProductsThunk = () => {
  return (dispatch) => {
    dispatch(setFetchingFlag())

    ProductsDataService.getAll()
      .then((res) => {   
          dispatch(getProductsActionSuccess(res.data.products));
      })
      .catch((e) => {
          debugger;
        dispatch(getProductsActionError(e.response.data));
      });

      setTimeout(() => {
        dispatch(unsetFetchingFlag())}, 2000);
  };
};

export const getAllCategoriesThunk = () => {
    return (dispatch) => {
      dispatch(setFetchingFlag())
  
      ProductsDataService.getAllCategories()
        .then((res) => {   
            dispatch(getCategoriesActionSuccess(res.data.categories));
        })
        .catch((e) => {
            debugger;
          dispatch(getCategoriesActionError(e.response.data));
        });
  
        setTimeout(() => {
          dispatch(unsetFetchingFlag())}, 2000);
    };
  };

export const deleteProductThunk = (id) => {
  return (dispatch) => {
    dispatch(setFetchingFlag())

    ProductsDataService.remove(id)
      .then((res) => {
        debugger;
        dispatch(deleteProductActionSuccess(res.data.id));

      })
      .catch((e) => {
        dispatch(deleteProductActionError(e.response.data));

      });

      setTimeout(() => {
        dispatch(unsetFetchingFlag())}, 2000);
  };
};
  
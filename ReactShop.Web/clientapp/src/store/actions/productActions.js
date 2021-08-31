//import ProductsDataService from '../api/ProductService'
import GeneralDataService from "../api/GeneralService";
import {
  setFetchingFlag,
  unsetFetchingFlag,
  setActionError,
  deleteActionSuccess,
  getActionSuccess,
  editActionSuccess,
} from "./index";
import {
  ADD_PRODUCT_SUCCESS,
  PRODUCT_ERROR,
  GET_PRODUCTS_SUCCESS,
  DELETE_PRODUCT_SUCCES,
  PRODUCTS,
  SET_FETCHING_PRODUCT,
  UNSET_FETCHING_PRODUCT,
  EDIT_PRODUCT_SUCCES,
  GET_USERS_SUCCESS,
} from "../types";
import { ContactsOutlined } from "@material-ui/icons";

export const addProductActionSuccess = (newProduct) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: {
    name: newProduct.name,
    price: newProduct.price,
    id: newProduct.id,
    categoryId: newProduct.categoryId,
  },
  error: null,
});

export const editProductActionSuccess = (id, item) => ({
  type: EDIT_PRODUCT_SUCCES,
  payload: {
    id: id,
    item: item,
  },
});

export const addProductThunk = (newProduct) => {
  return (dispatch) => {
    dispatch(setFetchingFlag(SET_FETCHING_PRODUCT));

    GeneralDataService.create(PRODUCTS, {
      name: newProduct.name,
      price: newProduct.price,
      categoryId: newProduct.categoryId,
    })
      .then((res) => {
        dispatch(addProductActionSuccess(res.data));
      })
      .catch((e) => {
        dispatch(setActionError(PRODUCT_ERROR, e.response.data));
      });

    setTimeout(() => {
      dispatch(unsetFetchingFlag(UNSET_FETCHING_PRODUCT));
    }, 2000);
  };
};

export const editProductThunk = (id, item) => {
  return (dispatch) => {
    dispatch(setFetchingFlag(SET_FETCHING_PRODUCT));
    console.log("editProductThunk -> item", item);
    GeneralDataService.update(PRODUCTS, id, item)
      .then((res) => {
        console.log("editProductThunk -> res.data", res.data);
        dispatch(editActionSuccess(EDIT_PRODUCT_SUCCES, res.data.id, res.data));
      })
      .catch((e) => {
        dispatch(setActionError(PRODUCT_ERROR, e));
      });

    setTimeout(() => {
      dispatch(unsetFetchingFlag(UNSET_FETCHING_PRODUCT));
    }, 2000);
  };
};

export const getAllProductsThunk = () => {
  return (dispatch) => {
    dispatch(setFetchingFlag(SET_FETCHING_PRODUCT));

    GeneralDataService.getAll(PRODUCTS)
      .then((res) => {
        dispatch(getActionSuccess(GET_PRODUCTS_SUCCESS, res.data));
      })
      .catch((e) => {
        dispatch(setActionError(PRODUCT_ERROR, e));
      });

    setTimeout(() => {
      dispatch(unsetFetchingFlag(UNSET_FETCHING_PRODUCT));
    }, 2000);
  };
};

export const deleteProductThunk = (id) => {
  return (dispatch) => {
    dispatch(setFetchingFlag(SET_FETCHING_PRODUCT));

    GeneralDataService.remove(PRODUCTS, id)
      .then((res) => {
        dispatch(deleteActionSuccess(DELETE_PRODUCT_SUCCES, res.data.id));
      })
      .catch((e) => {
        dispatch(setActionError(PRODUCT_ERROR, e));
      });

    setTimeout(() => {
      dispatch(unsetFetchingFlag(UNSET_FETCHING_PRODUCT));
    }, 2000);
  };
};

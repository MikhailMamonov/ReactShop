//import ProductsDataService from '../api/ProductService'
import GeneralDataService from "../api/GeneralService";
import {
  productConstants
} from "..//constants/product.constants";


export const addProductActionSuccess = (newProduct) => ({
  type: productConstants.ADD_PRODUCT_SUCCESS,
  payload: {
    name: newProduct.name,
    price: newProduct.price,
    id: newProduct.id,
    categoryId: newProduct.categoryId,
  },
  error: null,
});

export const editProductActionSuccess = (id, item) => ({
  type: productConstants.EDIT_PRODUCT_SUCCESS,
  payload: {
    id: id,
    item: item,
  },
});

export const addProductThunk = (newProduct) => {
  return (dispatch) => {
   
    dispatch(request(newProduct))
    GeneralDataService.create(productConstants.PRODUCTS, {
      name: newProduct.name,
      price: newProduct.price,
      categoryId: newProduct.categoryId,
    })
      .then((res) => {
        dispatch(success(res.data));
      })
      .catch((e) => {
        dispatch(failure(e.response.data));
      });



    function request(product){return { type: productConstants.ADD_PRODUCT_REQUEST, product }}
    function success(product){return { type: productConstants.ADD_PRODUCT_SUCCESS, product }}
    function failure(error){return  { type: productConstants.ADD_PRODUCT_FAILURE, error }}
  };
};

export const editProductThunk = (id, item) => {
  return (dispatch) => {
    //dispatch(setFetchingFlag(productConstants.SET_FETCHING_PRODUCT));
    dispatch(request());
    console.log("editProductThunk -> item", item);
    GeneralDataService.update(productConstants.PRODUCTS, id, item)
      .then((res) => {
        console.log("editProductThunk -> res.data", res.data);
        //dispatch(editActionSuccess(productConstants.EDIT_PRODUCT_SUCCES, res.data.id, res.data));
        dispatch(success(res.data.id, res.data))
      })
      .catch((e) => {
        dispatch(failure(e.response.data));
      });


    function request (id) {return  { type: productConstants.EDIT_PRODUCT_REQUEST, id }}
    function success (id,product) {return { type: productConstants.EDIT_PRODUCT_SUCCESS, id, product }} 
    function failure (error) {return { type: productConstants.EDIT_PRODUCT_FAILURE, error,id }} 
  };
};

export const getAllProductsThunk = () => {
  return (dispatch) => {
    //dispatch(setFetchingFlag(productConstants.SET_FETCHING_PRODUCT));
    dispatch(request());
    GeneralDataService.getAll(productConstants.PRODUCTS)
      .then((res) => {
        // dispatch(getActionSuccess(productConstants.GET_PRODUCTS_SUCCESS, res.data));
        dispatch(success(res.data));
      })
      .catch((e) => {
        dispatch(failure(e.response.data));
      });


    function request () {return { type: productConstants.GET_PRODUCTS_REQUEST}}
    function success (products) {return { type: productConstants.GET_PRODUCTS_SUCCESS,products }} 
    function failure (error) {return { type: productConstants.GET_PRODUCTS_FAILURE, error}} 
  };
};

export const deleteProductThunk = (id) => {
  return (dispatch) => {
    //dispatch(setFetchingFlag(productConstants.SET_FETCHING_PRODUCT));
    dispatch(request(IDBFactory));
    GeneralDataService.remove(productConstants.PRODUCTS, id)
      .then((res) => {
        dispatch(success(res.data.id));
      })
      .catch((e) => {
        dispatch(failure(e.response.data));
      });


    function request(id){return { type: productConstants.DELETE_PRODUCT_REQUEST, id }}
    function success(id){return { type: productConstants.DELETE_PRODUCT_SUCCESS, id }}
    function failure(error){return { type: productConstants.EDIT_PRODUCT_FAILURE, error }}
  };
};

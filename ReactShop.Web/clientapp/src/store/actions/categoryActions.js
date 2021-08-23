import GeneralDataService from '../api/GeneralService'
import { setFetchingFlag, unsetFetchingFlag } from "./index";
import {
    ADD_CATEGORY_SUCCESS,
    GET_CATEGORIES_SUCCESS,
    DELETE_CATEGORY_SUCCESS,
    CATEGORIES,
    ERROR
} from '../types'

export const addCategoryActionSuccess = (newCategory) => ({
    type: ADD_CATEGORY_SUCCESS,
    payload: {
      name: newCategory.name,
      id: newCategory.id,
    },
    error: null
  });
  
  export const addCategoryActionError = (err) => ({
    type: ERROR,
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
    type: ERROR,
    payload: null,
    error: err
  });

  export const deleteCategoryActionSuccess = (id) => ({
    type: DELETE_CATEGORY_SUCCESS,
    payload: { idForDelete: id },
  });
  
  export const deleteCategoryActionError = (err) => ({
    type: ERROR,
    payload: null,
    error: err
  });



  export const addCategoryThunk = (newCategory) => {
    return (dispatch) => {
      dispatch(setFetchingFlag())
      debugger;
      GeneralDataService.create(
          CATEGORIES,
         {
            name: newCategory.name
        })
        .then((res) => {
          dispatch(addCategoryActionSuccess(res.data.category));
        })
        .catch((e) => {
          debugger;
          dispatch(addCategoryActionError(e.response.data));
        });
  
        setTimeout(() => {
        dispatch(unsetFetchingFlag())}, 2000);
    };
  };

  export const getAllCategoriesThunk = () => {
    return (dispatch) => {
      dispatch(setFetchingFlag())
  
      GeneralDataService.getAll(CATEGORIES)
        .then((res) => {   
            dispatch(getCategoriesActionSuccess(res.data));
        })
        .catch((e) => {
            debugger;
          dispatch(getCategoriesActionError(e.response.data));
        });
  
        setTimeout(() => {
          dispatch(unsetFetchingFlag())}, 2000);
    };
  };

  export const deleteCategoryThunk = (id) => {
    return (dispatch) => {
      dispatch(setFetchingFlag())
  
      GeneralDataService.remove(CATEGORIES,id)
        .then((res) => {
          debugger;
          dispatch(deleteCategoryActionSuccess(res.data.id));
  
        })
        .catch((e) => {
          dispatch(deleteCategoryActionError(e.response.data));
  
        });
  
        setTimeout(() => {
          dispatch(unsetFetchingFlag())}, 2000);
    };
  };
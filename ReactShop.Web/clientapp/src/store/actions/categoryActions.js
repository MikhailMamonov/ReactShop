import GeneralDataService from '../api/GeneralService'
import { deleteActionSuccess, editActionSuccess, getActionSuccess, setActionError, setFetchingFlag, unsetFetchingFlag } from "./index";
import {
    ADD_CATEGORY_SUCCESS,
    GET_CATEGORIES_SUCCESS,
    DELETE_CATEGORY_SUCCESS,
    CATEGORIES,
    CATEGORY_ERROR,
    SET_FETCHING_CATEGORY,
    UNSET_FETCHING_CATEGORY,
    EDIT_CATEGORY_SUCCES
} from '../types'

export const addCategoryActionSuccess = (newCategory) => ({
    type: ADD_CATEGORY_SUCCESS,
    payload: {
      name: newCategory.name,
      id: newCategory.id,
    },
    error: null
  });
    
  export const addCategoryThunk = (newCategory) => {
    return (dispatch) => {
      dispatch(setFetchingFlag(SET_FETCHING_CATEGORY))
      debugger;
      GeneralDataService.create(
          CATEGORIES,
         {
            name: newCategory.name
        })
        .then((res) => {
          dispatch(addCategoryActionSuccess(res.data));
        })
        .catch((e) => {
          debugger;
          dispatch(setActionError(CATEGORY_ERROR,e.response.data));
        });
  
        setTimeout(() => {
        dispatch(unsetFetchingFlag(UNSET_FETCHING_CATEGORY))}, 2000);
    };
  };

  export const getAllCategoriesThunk = () => {
    return (dispatch) => {
      dispatch(setFetchingFlag(SET_FETCHING_CATEGORY))
  
      GeneralDataService.getAll(CATEGORIES)
        .then((res) => {   
            dispatch(getActionSuccess(GET_CATEGORIES_SUCCESS, res.data));
        })
        .catch((e) => {
            debugger;
          dispatch(setActionError(CATEGORY_ERROR,e));
        });
  
        setTimeout(() => {
          dispatch(unsetFetchingFlag(UNSET_FETCHING_CATEGORY))}, 2000);
    };
  };

  export const deleteCategoryThunk = (id) => {
    return (dispatch) => {
      dispatch(setFetchingFlag(SET_FETCHING_CATEGORY))
  
      GeneralDataService.remove(CATEGORIES,id)
        .then((res) => {
          debugger;
          dispatch(deleteActionSuccess(DELETE_CATEGORY_SUCCESS,res.data.id));
  
        })
        .catch((e) => {
          dispatch(setActionError(CATEGORY_ERROR,e));
  
        });
  
        setTimeout(() => {
          dispatch(unsetFetchingFlag(UNSET_FETCHING_CATEGORY))}, 2000);
    };
  };


  export const editCategoryThunk = (id,item) => {
    return (dispatch) => {
      dispatch(setFetchingFlag(SET_FETCHING_CATEGORY))
  
      GeneralDataService.update(CATEGORIES, id,item)
        .then((res) => {
          dispatch(editActionSuccess(EDIT_CATEGORY_SUCCES, res.data.id, res.data));
        })
        .catch((e) => {
          dispatch(setActionError(CATEGORY_ERROR,e));
  
        });
  
        setTimeout(() => {
          dispatch(unsetFetchingFlag(UNSET_FETCHING_CATEGORY))}, 2000);
    };
  };
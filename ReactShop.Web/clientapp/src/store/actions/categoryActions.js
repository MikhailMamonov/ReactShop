import GeneralDataService from "../api/GeneralService";
import {
  deleteActionSuccess,
  editActionSuccess,
  getActionSuccess,
  setActionError,
  setFetchingFlag,
  unsetFetchingFlag,
} from "./index";
import {
  categoryConstants
  // ADD_CATEGORY_SUCCESS,
  // GET_CATEGORIES_SUCCESS,
  // DELETE_CATEGORY_SUCCESS,
  // CATEGORIES,
  // CATEGORY_ERROR,
  // SET_FETCHING_CATEGORY,
  // UNSET_FETCHING_CATEGORY,
  // EDIT_CATEGORY_SUCCES,
} from "../constants";

export const addCategoryActionSuccess = (newCategory) => ({
  type: categoryConstants.ADD_CATEGORY_SUCCESS,
  payload: {
    name: newCategory.name,
    id: newCategory.id,
  },
  error: null,
});

export const addCategoryThunk = (newCategory) => {
  return (dispatch) => {
    //dispatch(setFetchingFlag(categoryConstants.SET_FETCHING_CATEGORY));
    dispatch(request());
    GeneralDataService.create(categoryConstants.CATEGORIES, {
      name: newCategory.name,
    })
      .then((res) => {
        //dispatch(addCategoryActionSuccess(res.data));
        dispatch(success(res.data))
      })
      .catch((e) => {
        //dispatch(setActionError(categoryConstants.CATEGORY_ERROR, e.response.data));
        dispatch(failure(e.response.data));
      });

    setTimeout(() => {
      dispatch(unsetFetchingFlag(categoryConstants.UNSET_FETCHING_CATEGORY));
    }, 2000);

    function request(category) {return { type: categoryConstants.ADD_CATEGORY_REQUEST, category }}
    function success(category){return { type: categoryConstants.ADD_CATEGORY_SUCCESS, category }}
    function failure(error) {return  { type: categoryConstants.ADD_CATEGORY_FAILURE, error }}
  };
};

export const getAllCategoriesThunk = () => {
  return (dispatch) => {
    //dispatch(setFetchingFlag(categoryConstants.SET_FETCHING_CATEGORY));
    dispatch(request());
    GeneralDataService.getAll(categoryConstants.CATEGORIES)
      .then((res) => {
        //dispatch(getActionSuccess(categoryConstants.GET_CATEGORIES_SUCCESS, res.data));
        dispatch(success(res.data))
      })
      .catch((e) => {
        //dispatch(setActionError(categoryConstants.CATEGORY_ERROR, e));
        dispatch(failure(e.response.data));
      });

    setTimeout(() => {
      dispatch(unsetFetchingFlag(categoryConstants.UNSET_FETCHING_CATEGORY));
    }, 2000);

    function request(){return { type: categoryConstants.GET_CATEGORIES_REQUEST}}
    function success(categories)  {return { type: categoryConstants.GET_CATEGORIES_SUCCESS, categories }}
    function failure(error) {return  { type: categoryConstants.GET_CATEGORIES_FAILURE, error }}
  };
};

export const deleteCategoryThunk = (id) => {
  return (dispatch) => {
    dispatch(request(id));
    GeneralDataService.remove(categoryConstants.CATEGORIES, id)
      .then((res) => {
        dispatch(success(res.data.id, res.data))
      })
      .catch((e) => {
        dispatch(failure(e.response.data));
      });

    function request (id){return { type: categoryConstants.ADD_CATEGORY_REQUEST, id }}
    function success (id) {return { type: categoryConstants.ADD_CATEGORY_SUCCESS, id }}
    function failure (error){return  { type: categoryConstants.ADD_CATEGORY_FAILURE, error }}
  };
};

export const editCategoryThunk = (id, item) => {
  return (dispatch) => {
    //dispatch(setFetchingFlag(categoryConstants.SET_FETCHING_CATEGORY));
    dispatch(request());
    GeneralDataService.update(categoryConstants.CATEGORIES, id, item)
      .then((res) => {
        dispatch(
          // editActionSuccess(categoryConstants.EDIT_CATEGORY_SUCCESS, res.data.id, res.data)
          dispatch(success(res.data.id, res.data))
        );
      })
      .catch((e) => {
        //dispatch(setActionError(categoryConstants.CATEGORY_ERROR, e));
        dispatch(failure(e.response.data));
      });

    setTimeout(() => {
      dispatch(unsetFetchingFlag(categoryConstants.UNSET_FETCHING_CATEGORY));
    }, 2000);

    function request (id) {return  { type: categoryConstants.EDIT_CATEGORY_REQUEST, id }}
    function success (id,category) {return { type: categoryConstants.EDIT_CATEGORY_SUCCESS, id, category }} 
    function failure (error) {return { type: categoryConstants.EDIT_CATEGORY_FAILURE, error,id }} 
  };
};

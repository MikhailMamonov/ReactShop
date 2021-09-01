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
    dispatch(setFetchingFlag(categoryConstants.SET_FETCHING_CATEGORY));

    GeneralDataService.create(categoryConstants.CATEGORIES, {
      name: newCategory.name,
    })
      .then((res) => {
        dispatch(addCategoryActionSuccess(res.data));
      })
      .catch((e) => {
        dispatch(setActionError(categoryConstants.CATEGORY_ERROR, e.response.data));
      });

    setTimeout(() => {
      dispatch(unsetFetchingFlag(categoryConstants.UNSET_FETCHING_CATEGORY));
    }, 2000);
  };
};

export const getAllCategoriesThunk = () => {
  return (dispatch) => {
    dispatch(setFetchingFlag(categoryConstants.SET_FETCHING_CATEGORY));

    GeneralDataService.getAll(categoryConstants.CATEGORIES)
      .then((res) => {
        dispatch(getActionSuccess(categoryConstants.GET_CATEGORIES_SUCCESS, res.data));
      })
      .catch((e) => {
        dispatch(setActionError(categoryConstants.CATEGORY_ERROR, e));
      });

    setTimeout(() => {
      dispatch(unsetFetchingFlag(categoryConstants.UNSET_FETCHING_CATEGORY));
    }, 2000);
  };
};

export const deleteCategoryThunk = (id) => {
  return (dispatch) => {
    dispatch(setFetchingFlag(categoryConstants.SET_FETCHING_CATEGORY));

    GeneralDataService.remove(categoryConstants.CATEGORIES, id)
      .then((res) => {
        dispatch(deleteActionSuccess(categoryConstants.DELETE_CATEGORY_SUCCESS, res.data.id));
      })
      .catch((e) => {
        dispatch(setActionError(categoryConstants.CATEGORY_ERROR, e));
      });

    // setTimeout(() => {
    //   dispatch(unsetFetchingFlagcategoryConstants.UNSET_FETCHING_CATEGORY);
    // }, 2000);
  };
};

export const editCategoryThunk = (id, item) => {
  return (dispatch) => {
    dispatch(setFetchingFlag(categoryConstants.SET_FETCHING_CATEGORY));

    GeneralDataService.update(categoryConstants.CATEGORIES, id, item)
      .then((res) => {
        dispatch(
          editActionSuccess(categoryConstants.EDIT_CATEGORY_SUCCES, res.data.id, res.data)
        );
      })
      .catch((e) => {
        dispatch(setActionError(categoryConstants.CATEGORY_ERROR, e));
      });

    setTimeout(() => {
      dispatch(unsetFetchingFlag(categoryConstants.UNSET_FETCHING_CATEGORY));
    }, 2000);
  };
};

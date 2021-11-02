import { categoriesActionTypes, Category } from "../../types/categories";
import axios, { AxiosError } from "axios";
import categoriessDataService from "./category.service";
import { thunkType } from "../../types";

export const addCategoryThunk = (newCategory: Category): thunkType => {
  return (dispatch) => {
    dispatch({ type: categoriesActionTypes.ADD_CATEGORY_REQUEST });
    categoriessDataService
      .create({
        id: newCategory.id,
        name: newCategory.name,
      })
      .then((newCategory: Category) => {
        dispatch({
          type: categoriesActionTypes.ADD_CATEGORY_SUCCESS,
          category: newCategory,
        });
      })
      .catch((err: Error | AxiosError) => {
        debugger;
        dispatch({
          type: categoriesActionTypes.ADD_CATEGORY_FAILURE,
          error: err.message,
        });
      });
  };
};

export const getAllCategoriesThunk = (): thunkType => {
  return (dispatch) => {
    dispatch({ type: categoriesActionTypes.GET_CATEGORIES_REQUEST });
    categoriessDataService
      .getAll()
      .then((categories: Category[]) => {
        dispatch({
          type: categoriesActionTypes.GET_CATEGORIES_SUCCESS,
          categories,
        });
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          dispatch({
            type: categoriesActionTypes.GET_CATEGORIES_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: categoriesActionTypes.GET_CATEGORIES_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

export const deleteCategoryThunk = (id: number): thunkType => {
  return (dispatch) => {
    dispatch({ type: categoriesActionTypes.DELETE_CATEGORY_REQUEST });
    categoriessDataService
      .remove(id)
      .then((deleteRespone) => {
        dispatch({
          type: categoriesActionTypes.DELETE_CATEGORY_SUCCESS,
          id: deleteRespone.id,
        });
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          dispatch({
            type: categoriesActionTypes.GET_CATEGORIES_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: categoriesActionTypes.GET_CATEGORIES_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

export const editCategoryThunk = (id: number, item: Category): thunkType => {
  return (dispatch) => {
    dispatch({ type: categoriesActionTypes.EDIT_CATEGORY_REQUEST });
    categoriessDataService
      .update(id, item)
      .then((editedCategory: Category) => {
        dispatch({
          type: categoriesActionTypes.EDIT_CATEGORY_SUCCESS,
          id: id,
          category: editedCategory,
        });
      })
      .catch((err: Error | AxiosError) => {
        console.log(err);
        if (axios.isAxiosError(err)) {
          dispatch({
            type: categoriesActionTypes.EDIT_CATEGORY_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: categoriesActionTypes.EDIT_CATEGORY_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

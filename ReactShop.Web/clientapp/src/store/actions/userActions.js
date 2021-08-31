import GeneralDataService from "../api/GeneralService";
import {
  ADD_USER_SUCCESS,
  USER_ERROR,
  GET_USERS_SUCCESS,
  DELETE_USER_SUCCES,
  SET_FETCHING_USER,
  UNSET_FETCHING_USER,
  USERS,
  EDIT_USER_SUCCES,
} from "../types";

import {
  deleteActionSuccess,
  getActionSuccess,
  setActionError,
  setFetchingFlag,
  unsetFetchingFlag,
  editActionSuccess
} from "./index";

export const addUserActionSuccess = (newUser) => ({
  type: ADD_USER_SUCCESS,
  payload: {
    displayName: newUser.displayName,
    password: newUser.password,
    email: newUser.email,
    id: newUser.id,
  },
  error: null,
});

export const addUserThunk = (newUser) => {
  return (dispatch) => {
    dispatch(setFetchingFlag(SET_FETCHING_USER));
    GeneralDataService.create(USERS,{
      displayName: newUser.displayName,
      email: newUser.email,
      password: newUser.password,
    })
      .then((res) => {
        dispatch(addUserActionSuccess(res.data));
      })
      .catch((e) => {
        dispatch(setActionError(USER_ERROR, e.response.data));
      });
    setTimeout(() => {
      dispatch(unsetFetchingFlag(UNSET_FETCHING_USER));
    }, 2000);
  };
};

export const getAllUsersThunk = () => {
  return (dispatch) => {
    dispatch(setFetchingFlag(SET_FETCHING_USER));

    GeneralDataService.getAll(USERS)
      .then((res) => {
        dispatch(getActionSuccess(GET_USERS_SUCCESS, res.data));
      })
      .catch((e) => {
        dispatch(setActionError(USER_ERROR, e));
      });

    setTimeout(() => {
      dispatch(unsetFetchingFlag(UNSET_FETCHING_USER));
    }, 2000);
  };
};

export const deleteUserThunk = (id) => {
  return (dispatch) => {
    dispatch(setFetchingFlag(SET_FETCHING_USER));
    GeneralDataService.remove(USERS,id)
      .then((res) => {
        dispatch(deleteActionSuccess(DELETE_USER_SUCCES, res.data.id));
      })
      .catch((e) => {
        dispatch(setActionError(USER_ERROR, e.response.data));
      });

    setTimeout(() => {
      dispatch(unsetFetchingFlag(UNSET_FETCHING_USER));
    }, 2000);
  };
};

export const editUserThunk = (id,item) => {
  return (dispatch) => {
    dispatch(setFetchingFlag(SET_FETCHING_USER));
    GeneralDataService.update(USERS, id, item)
      .then((res) => {
        debugger
        dispatch(editActionSuccess(EDIT_USER_SUCCES, res.data.id, res.data));
      })
      .catch((e) => {
        dispatch(setActionError(USER_ERROR, e.response.data));
      });

    setTimeout(() => {
      dispatch(unsetFetchingFlag(UNSET_FETCHING_USER));
    }, 2000);
  };
};

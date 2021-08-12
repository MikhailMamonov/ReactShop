import UsersDataService from './../api/UserService'

import {
  ADD_USER_SUCCESS,
  USER_ERROR,
  TOGGLE_FETCHING,
  DELETE_USER,
  GET_USERS_SUCCESS
} from "../types";

export const addUserAction = (newUser) => ({
  type: ADD_USER_SUCCESS,
  payload: {
    displayName: newUser.displayName,
    password: newUser.password,
    email: newUser.email  
  },
});

export const getUsersAction = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: {
    users },
});

export const deleteUserAction = (id) => ({
  type: DELETE_USER,
  payload: { idForDelete: id },
});

export const toggleIsFetching = (isFething) => ({
  type: TOGGLE_FETCHING,
  payload: { isFething },
});

export const onErrorAction = (error) => ({
  type: USER_ERROR,
  payload: {
    error,
  },
});

export const getAllUsersThunk = () => {
  return (dispatch) => {
    dispatch(onErrorAction(null));
    dispatch(toggleIsFetching(true));
    UsersDataService.getAll()
      .then((res) => {   
        dispatch(getUsersAction(res.data));
        dispatch(toggleIsFetching(false));
      })
      .catch((e) => {
        dispatch(onErrorAction(e.stack));
        dispatch(toggleIsFetching(false));
      });
  };
};

export const addUserThunk = (newUser) => {
  return (dispatch) => {
    dispatch(onErrorAction(null));
    dispatch(toggleIsFetching(true));
    UsersDataService.create(
       {
          displayName: newUser.displayName,
          email: newUser.email,
          password: newUser.password,
      })
      .then((res) => {
        dispatch(addUserAction(res.data));
        dispatch(toggleIsFetching(false));
      })
      .catch((e) => {
        debugger;
        dispatch(onErrorAction(e.response.data));
        dispatch(toggleIsFetching(false));
      });
  };
};

export const deleteUserThunk = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    UsersDataService.remove( id)
      .then((res) => {
        debugger;
        dispatch(deleteUserAction(res.data.id));
        dispatch(toggleIsFetching(false));
      })
      .catch((e) => {
        dispatch(onErrorAction(e));
        dispatch(toggleIsFetching(false));
      });
  };
};



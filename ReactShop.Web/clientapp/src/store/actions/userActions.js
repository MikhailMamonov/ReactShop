import UsersDataService from '../api/UserService'
import {
  ADD_USER_SUCCESS,
  ERROR,
  GET_USERS_SUCCESS,
  DELETE_USER_SUCCES
} from "../types";

import { setFetchingFlag, unsetFetchingFlag } from "./index";




export const addUserActionSuccess = (newUser) => ({
  type: ADD_USER_SUCCESS,
  payload: {
    displayName: newUser.displayName,
    password: newUser.password,
    email: newUser.email  
  },
  error: null
});

export const addUserActionError = (err) => ({
  type: ERROR,
  payload: null,
  error: err
});

export const getUsersActionSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: {
    users },
  error: null
});

export const getUsersActionError = (err) => ({
  type: ERROR,
  payload: null,
  error: err
});

export const deleteUserActionSuccess = (id) => ({
  type: DELETE_USER_SUCCES,
  payload: { idForDelete: id },
});

export const deleteUserActionError = (err) => ({
  type: ERROR,
  payload: null,
  error: err
});



export const addUserThunk = (newUser) => {
  return (dispatch) => {
    dispatch(setFetchingFlag())
    UsersDataService.create(
       {
          displayName: newUser.displayName,
          email: newUser.email,
          password: newUser.password,
      })
      .then((res) => {
        dispatch(addUserActionSuccess(res.data.user));
              })
      .catch((e) => {
        debugger;
        dispatch(addUserActionError(e.response.data));
        
      });
      setTimeout(() => {
      dispatch(unsetFetchingFlag())}, 2000);
  };
};

export const getAllUsersThunk = () => {
  return (dispatch) => {
    dispatch(setFetchingFlag())
    
    UsersDataService.getAll()
      .then((res) => {   
          dispatch(getUsersActionSuccess(res.data));
         ;
      })
      .catch((e) => {
        dispatch(getUsersActionError(e.response.data));
      
      });

      setTimeout(() => {
        dispatch(unsetFetchingFlag())}, 2000)
  };
};

export const deleteUserThunk = (id) => {
  return (dispatch) => {
    dispatch(setFetchingFlag())
    UsersDataService.remove(id)
      .then((res) => {
        debugger;
        dispatch(deleteUserActionSuccess(res.data.id));
        
      })
      .catch((e) => {
        dispatch(deleteUserActionError(e.response.data));
        
      });

      setTimeout(() => {
        dispatch(unsetFetchingFlag())}, 2000)
  };
};



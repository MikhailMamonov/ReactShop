import UsersDataService from '../api/UserService'
import {
  ADD_USER_SUCCESS,
  USER_ERROR,
  GET_USERS_SUCCESS,
  DELETE_USER_SUCCES,
  SET_FETCHING_USER,
  UNSET_FETCHING_USER
} from "../types";

import { deleteActionSuccess, getActionSuccess, setActionError, setFetchingFlag, unsetFetchingFlag } from "./index";


export const addUserActionSuccess = (newUser) => ({
  type: ADD_USER_SUCCESS,
  payload: {
    displayName: newUser.displayName,
    password: newUser.password,
    email: newUser.email  
  },
  error: null
});


export const addUserThunk = (newUser) => {
  return (dispatch) => {
    dispatch(setFetchingFlag(SET_FETCHING_USER))
    UsersDataService.create(
       {
          displayName: newUser.displayName,
          email: newUser.email,
          password: newUser.password,
      })
      .then((res) => {
        debugger;
        dispatch(addUserActionSuccess(res.data));
              })
      .catch((e) => {
        debugger;
        dispatch(setActionError(USER_ERROR,e.response.data));
        
      });
      setTimeout(() => {
      dispatch(unsetFetchingFlag(UNSET_FETCHING_USER))}, 2000);
  };
};

export const getAllUsersThunk = () => {
  return (dispatch) => {
    dispatch(setFetchingFlag(SET_FETCHING_USER))
    
    UsersDataService.getAll()
      .then((res) => {   
          dispatch(getActionSuccess(GET_USERS_SUCCESS,res.data));
         ;
      })
      .catch((e) => {
        dispatch(setActionError(USER_ERROR,e));
      
      });

      setTimeout(() => {
        dispatch(unsetFetchingFlag(UNSET_FETCHING_USER))}, 2000)
  };
};

export const deleteUserThunk = (id) => {
  return (dispatch) => {
    dispatch(setFetchingFlag(SET_FETCHING_USER))
    UsersDataService.remove(id)
      .then((res) => {
        debugger;
        dispatch(deleteActionSuccess(DELETE_USER_SUCCES,res.data.id));
        
      })
      .catch((e) => {
        dispatch(setActionError(USER_ERROR,e.response.data));
        
      });

      setTimeout(() => {
        dispatch(unsetFetchingFlag(UNSET_FETCHING_USER))}, 2000)
  };
};



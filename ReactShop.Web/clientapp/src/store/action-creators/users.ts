import axios, { AxiosError } from "axios";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../../types/actionCreators";
import { UsersActions, usersActionTypes } from "../../types/users";
import userService from "../api/user.service";
import { RootStateType } from "../store";

import { User } from "./../../types/users";

type thunkType = ThunkAction<void, RootStateType, unknown, ActionTypes>;

export const addUserThunk = (newUser: User): thunkType => {
  return (dispatch) => {
    dispatch({ type: usersActionTypes.ADD_USER_REQUEST });
    userService
      .create({
        id: "",
        userName: newUser.userName,
        email: newUser.email,
        password: newUser.password,
      })
      .then((newUser: User) => {
        setTimeout(() => {
          dispatch({ type: usersActionTypes.ADD_USER_SUCCESS, user: newUser });
        }, 2000);
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          dispatch({
            type: usersActionTypes.ADD_USER_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: usersActionTypes.ADD_USER_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

export const getAllUsersThunk = (): thunkType => {
  return async (dispatch) => {
    dispatch({ type: usersActionTypes.GET_USERS_REQUEST });

    userService
      .getAll()
      .then((users) => {
        dispatch({ type: usersActionTypes.GET_USERS_SUCCESS, users: users });
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          dispatch({
            type: usersActionTypes.GET_USERS_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: usersActionTypes.GET_USERS_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

export const deleteUserThunk = (id: string): thunkType => {
  return (dispatch: Dispatch<UsersActions>) => {
    dispatch({ type: usersActionTypes.DELETE_USER_REQUEST });
    userService
      .remove(id)
      .then((deleteResponse) => {
        setTimeout(() => {
          dispatch({
            type: usersActionTypes.DELETE_USER_SUCCES,
            id,
          });
        }, 2000);
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          dispatch({
            type: usersActionTypes.DELETE_USER_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: usersActionTypes.DELETE_USER_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

export const editUserThunk = (id: string, user: User): thunkType => {
  return (dispatch: Dispatch<UsersActions>) => {
    dispatch({ type: usersActionTypes.EDIT_USER_REQUEST });
    userService
      .update(id, user)
      .then((updatedUser: User) => {
        setTimeout(() => {
          dispatch({
            type: usersActionTypes.EDIT_USER_SUCCESS,
            id: id,
            user: updatedUser,
          });
        }, 2000);
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          dispatch({
            type: usersActionTypes.EDIT_USER_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: usersActionTypes.EDIT_USER_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

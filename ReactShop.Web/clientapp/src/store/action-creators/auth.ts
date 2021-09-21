import authService from "../api/auth.service";

import { history } from "../../helpers/history";
import { ThunkAction } from "redux-thunk";
import { RootStateType } from "../store";
import axios, { AxiosError } from "axios";

import { authActionTypes } from "../../types/auth";
import { ActionTypes } from "../../types/actionCreators";
import { LoginResponseType } from "../../types/api.services";
import { User } from "../../types/users";

type thunkType = ThunkAction<void, RootStateType, unknown, ActionTypes>;

export const login = (user: User): thunkType => {
  return (dispatch): void => {
    debugger;
    dispatch({ type: authActionTypes.LOGIN_REQUEST, user });
    authService
      .login(user.userName, user.password)
      .then((res: LoginResponseType) => {
        dispatch({
          type: authActionTypes.LOGIN_SUCCESS,
          user: res.user,
          accessToken: res.accessToken,
        });
        history.push("/");
      })
      .catch((err: Error | AxiosError) => {
        debugger;
        if (axios.isAxiosError(err)) {
          dispatch({
            type: authActionTypes.LOGIN_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: authActionTypes.LOGIN_FAILURE,
            error: err.message,
          });
        }
      });
  };
};

export const logout = () => {
  authService.logout();
  return { type: authActionTypes.LOGOUT };
};

export const register = (
  username: string,
  email: string,
  password: string
): thunkType => {
  return async (dispatch) => {
    dispatch({ type: authActionTypes.REGISTER_REQUEST });
    authService.register(username, email, password).then(
      () => {
        dispatch({ type: authActionTypes.REGISTER_SUCCESS });
      },
      (err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          dispatch({
            type: authActionTypes.REGISTER_FAILURE,
            error: err.response?.data.ToString(),
          });
        } else {
          dispatch({
            type: authActionTypes.REGISTER_FAILURE,
            error: err.message,
          });
        }
      }
    );
  };
};

export const resetRegisterForm = () => {
  return { type: authActionTypes.RESET_REGISTER_FORM };
};

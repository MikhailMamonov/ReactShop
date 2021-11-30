import { history } from "../../helpers/history";
import { ThunkAction } from "redux-thunk";
import { RootStateType } from "..";
import axios, { AxiosError } from "axios";

import {
  authActionTypes,
  LogoutAction,
  ResetRegisterFormAction,
} from "../../types/auth";
import { ActionTypes } from "../../types/actionCreators";
import { LoginResponseType } from "../../types/api.services";
import { authService } from "../api/services";

export type thunkType = ThunkAction<
  Promise<void>,
  RootStateType,
  unknown,
  ActionTypes
>;

export const login = (userName: string, password: string): thunkType => {
  return async (dispatch) => {
    dispatch({ type: authActionTypes.LOGIN_REQUEST });
    authService
      .login(userName, password)
      .then((res: LoginResponseType) => {
        dispatch({
          type: authActionTypes.LOGIN_SUCCESS,
          user: res.user,
          accessToken: res.accessToken,
        });
        dispatch({
          type: authActionTypes.LOGIN_SUCCESS,
          user: res.user,
          accessToken: res.accessToken,
        });
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          dispatch({
            type: authActionTypes.LOGIN_FAILURE,
            error: err.message,
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

export const logout = (): LogoutAction => {
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
          console.log("err", err);
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

export const resetRegisterForm = (): ResetRegisterFormAction => {
  return { type: authActionTypes.RESET_REGISTER_FORM };
};

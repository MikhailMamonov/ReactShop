import authService from "../../api/auth.service";
import { authConstants } from "../../constants";
import { history } from "../../../helpers/history";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store";
import { AnyAction } from "redux";
import { IUser } from "../../../models/User";
import axios, { AxiosError } from "axios";

export const login = (
  user: IUser
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch) => {
    dispatch(loginRequestActionCreator(user));

    authService
      .login(user.username, user.password)
      .then((res) => {
        dispatch(loginSuccessActionCreator(res.user, res.accessToken));
        history.push("/");
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          dispatch(loginFailureActionCreator(err.response?.data.ToString()));
        } else {
          dispatch(loginFailureActionCreator(err.message));
        }
      });
  };

  // function request(user: IUser) {
  //   return { type: authConstants.LOGIN_REQUEST, user };
  // }
  // function success(user: IUser, accessToken: string) {
  //   return { type: authConstants.LOGIN_SUCCESS, user, accessToken };
  // }
  // function failure(error: string) {
  //   return { type: authConstants.LOGIN_FAILURE, error };
  // }
};

export const logout = () => {
  authService.logout();
  return { type: authConstants.LOGOUT };
};

export const register = (
  username: string,
  email: string,
  password: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch) => {
    dispatch(request({ username, email, password }));
    authService.register(username, email, password).then(
      () => {
        dispatch(success());
        //history.push("/login");
      },
      (err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          dispatch(failure(err.response?.data.ToString()));
        } else {
          dispatch(failure(err.message));
        }
      }
    );
  };

  function request(user: IUser) {
    return { type: authConstants.REGISTER_REQUEST, user };
  }
  function success() {
    return { type: authConstants.REGISTER_SUCCESS };
  }
  function failure(error: string) {
    return { type: authConstants.REGISTER_FAILURE, error };
  }
};

export const loginFailureActionCreator = (error: string) => ({
  type: authConstants.LOGIN_FAILURE,
  error,
});
export const loginSuccessActionCreator = (
  user: IUser,
  accessToken: string
) => ({ type: authConstants.LOGIN_SUCCESS, user, accessToken });
export const loginRequestActionCreator = (user: IUser) => ({
  type: authConstants.LOGIN_REQUEST,
  user,
});

export const resetRegisterForm = () => {
  return { type: authConstants.RESET_REGISTER_FORM };
};

import authService from "../../api/auth.service";
import { authConstants } from "../../constants";
import { history } from "./../../../helpers/history";

export const login = (username, password) => {
  return (dispatch) => {
    dispatch(request({ username }));

    authService
      .login(username, password)
      .then((res) => {
        dispatch(success(res.user, res.accessToken));
        history.push("/");
      })
      .catch((err) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(user) {
    return { type: authConstants.LOGIN_REQUEST, user };
  }
  function success(user, accessToken) {
    return { type: authConstants.LOGIN_SUCCESS, user, accessToken };
  }
  function failure(error) {
    return { type: authConstants.LOGIN_FAILURE, error };
  }
};

export const logout = () => {
  authService.logout();
  return { type: authConstants.LOGOUT };
};

export const register = (username, email, password) => {
  return (dispatch) => {
    dispatch(request({ username, email, password }));
    authService.register(username, email, password).then(
      (user) => {
        dispatch(success());
        //history.push("/login");
      },
      (error) => {
        dispatch(failure(error.response.data.message));
        //history.push("/error");
      }
    );
  };

  function request(user) {
    return { type: authConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: authConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: authConstants.REGISTER_FAILURE, error };
  }
};

export const resetRegisterForm = () => {
  return { type: authConstants.RESET_REGISTER_FORM };
};

import http from "./../../http-common";
import LocalStorageService from "./../../LocalStorageService";

const localStorageService = LocalStorageService.getService();

const login = (username, password) => {
  // const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ username, password })
  // };

  return http.post(`/auth/login`, { username, password }).then((response) => {
    if (response.data.accessToken) {
      localStorageService.setToken(
        response.data.user,
        response.data.accessToken
      );
    }

    return response.data;
  });
};

const logout = () => {
  // remove user from local storage to log user out
  localStorageService.clearToken();
};

const register = (username, email, password) => {
  return http.post("/auth/register", {
    username,
    email,
    password,
  });
};

const userService = {
  login,
  logout,
  register,
};

export default userService;

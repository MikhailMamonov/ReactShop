import http from "./http-common";
import LocalStorageService from "./LocalStorageService";

const localStorageService = new LocalStorageService();

const login = (username: string, password: string) => {
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

const register = (username: string, email: string, password: string) => {
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

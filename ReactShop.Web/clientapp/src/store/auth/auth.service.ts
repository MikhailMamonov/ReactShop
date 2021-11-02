import http from "../api/http-common";
import LocalStorageService from "../api/LocalStorageService";

const localStorageService = new LocalStorageService();

const login = (username: string, password: string) => {
  return http.post(`/auth/login`, { username, password }).then((Model) => {
    if (Model.data.accessToken) {
      localStorageService.setToken(Model.data.user, Model.data.accessToken);
    }

    return Model.data;
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

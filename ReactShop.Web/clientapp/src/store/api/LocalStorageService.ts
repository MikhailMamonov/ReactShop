// LocalStorageService.js
import { User } from "../../types/users";
const LocalStorageService = (function () {
  let _service: any;
  function _getService(this: void) {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  function _setToken(user: User, accessToken: string) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("accessToken", accessToken);
  }
  function _getAccessToken() {
    return localStorage.getItem("accessToken");
  }
  function _getRefreshToken() {
    return localStorage.getItem("refresh_token");
  }
  function _clearToken() {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  }
  return {
    getService: _getService,
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    getRefreshToken: _getRefreshToken,
    clearToken: _clearToken,
  };
})();
export default LocalStorageService;

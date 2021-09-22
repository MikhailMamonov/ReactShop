// LocalStorageService.js
import { User } from "../../types/users";
interface ILocalStorageService {
  setToken(user: User, accessToken: string): void;
  getAccessToken(): string | null;
  getRefreshToken(): string | null;
  clearToken(): void;
}

class LocalStorageService implements ILocalStorageService {
  setToken(user: User, accessToken: string) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("accessToken", accessToken);
  }
  getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  getRefreshToken() {
    return localStorage.getItem("refresh_token");
  }
  clearToken() {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  }
}
export default LocalStorageService;

import { User } from "types/users";
import { AuthState } from "types/auth";

const user: User = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") || "{}")
  : null;

let accessToken: string = localStorage.getItem("accessToken") || "";

export const initialState: AuthState = user
  ? { isLoggedIn: true, currentUser: user, accessToken, loggingIn: false }
  : {
      isLoggedIn: false,
      currentUser: undefined,
      accessToken,
      loggingIn: false,
    };

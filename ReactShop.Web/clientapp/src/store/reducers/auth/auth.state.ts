import { IUser } from "../../../models/User";

interface IAuthState {
  isLoggedIn: boolean;
  currentUser?: IUser;
  accessToken: string;
  loggingIn: boolean;
  error?: string;
}

const user: IUser = JSON.parse(localStorage.getItem("user") || "{}");

let accessToken: string = localStorage.getItem("accessToken") || "";

export const initialState: IAuthState = user
  ? { isLoggedIn: true, currentUser: user, accessToken, loggingIn: false }
  : {
      isLoggedIn: false,
      currentUser: undefined,
      accessToken,
      loggingIn: false,
    };

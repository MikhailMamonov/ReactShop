import { IUser } from "../../../models/User";
import { authConstants } from "../../constants/auth.constants";

export interface ILoginSuccessAction {
  type: authConstants.LOGIN_SUCCESS;
  user: IUser;
  accessToken: string;
}

export interface IRegisterRequestAction {
  type: authConstants.REGISTER_REQUEST;
}

export type ActionTypes = ILoginSuccessAction | IRegisterRequestAction;

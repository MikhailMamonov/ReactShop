import { User } from "./users";

export type DeleteResponseType = {
  id: number;
  message: number;
};

export type LoginResponseType = {
  user: User;
  accessToken: string;
};

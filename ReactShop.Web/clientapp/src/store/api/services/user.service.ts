import http from "../http-common";
import { DeleteResponseType } from "../../../types";
import { User } from "../../../types";

const getAll = () => {
  return http.get<User[]>("/users").then((response) => {
    return response.data;
  });
};

const get = (id: string) => {
  return http.get<User>(`/users/${id}`).then((res) => {
    return res.data;
  });
};

const create = (data: User) => {
  return http.post<User>("/users", data).then((res) => {
    return res.data;
  });
};

const update = (id: string, data: User) => {
  return http.put<User>(`/users/${id}`, data).then((res) => {
    return res.data;
  });
};

const remove = (id: string) => {
  return http.delete<DeleteResponseType>(`/users/${id}`).then((res) => {
    return res.data;
  });
};

const removeAll = () => {
  return http.delete(`/users`).then((res) => {
    return res.data;
  });
};

export const userService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};

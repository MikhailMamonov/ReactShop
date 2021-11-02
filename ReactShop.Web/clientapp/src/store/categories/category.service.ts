import http from "./../api/http-common";
import { Category } from "./../../types/categories";
import { DeleteResponseType } from "./../../types/api.services";

const getAll = () => {
  return http.get<Category[]>("/categories").then((Model) => {
    return Model.data;
  });
};

const get = (id: number) => {
  return http.get<Category[]>(`/categories/${id}`).then((Model) => {
    return Model.data;
  });
};

const create = (newCategory: Category) => {
  return http.post<Category>("/categories", newCategory).then((Model) => {
    return Model.data;
  });
};

const remove = (id: number) => {
  return http.delete<DeleteResponseType>(`/categories/${id}`).then((Model) => {
    return Model.data;
  });
};

const update = (id: number, updatedCategory: Category) => {
  return http
    .put<Category>(`/categories/${id}`, updatedCategory)
    .then((Model) => {
      return Model.data;
    });
};

const categoriessDataService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default categoriessDataService;

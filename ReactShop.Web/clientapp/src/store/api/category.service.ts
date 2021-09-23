import http from "./http-common";
import { Category } from "./../../types/categories";
import { DeleteResponseType } from "./../../types/api.services";

const getAll = () => {
  return http.get<Category[]>("/categories").then((response) => {
    return response.data;
  });
};

const get = (id: number) => {
  return http.get<Category[]>(`/categories/${id}`).then((response) => {
    return response.data;
  });
};

const create = (newCategory: Category) => {
  return http.post<Category>("/category", newCategory).then((response) => {
    return response.data;
  });
};

const remove = (id: number) => {
  return http.delete<DeleteResponseType>(`/category/${id}`).then((response) => {
    return response.data;
  });
};

const update = (id: number, updatedCategory: Category) => {
  return http
    .put<Category>(`/category/${id}`, updatedCategory)
    .then((response) => {
      return response.data;
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

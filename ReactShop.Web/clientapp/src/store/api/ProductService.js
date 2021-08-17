

import http from './../../http-common';

const getAll = () => {
  return http.get("/products");
};

const getAllCategories = () => {
    return http.get("/products/categories")
}

const get = id => {
  return http.get(`/products/${id}`);
};

const create = data => {
  return http.post("/products", data);
};

const createCategory = data => {
    return http.post("/products/category",data);
  };

const update = (id, data) => {
  return http.put(`/products/${id}`, data);
};

const remove = id => {
  return http.delete(`/products/${id}`);
};

const removeCategory = id => {
    return http.delete(`/products/category/${id}`);
}

const removeAll = () => {
  return http.delete(`/products`);
};

const findByTitle = title => {
  return http.get(`/products?title=${title}`);
};

const productsDataService = {
  getAll,
  get,
  create,
  createCategory,
  update,
  remove,
  removeAll,
  removeCategory,
  findByTitle,
  getAllCategories
};

export default productsDataService;
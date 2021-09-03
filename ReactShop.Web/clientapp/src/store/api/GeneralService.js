import http from '../../http-common';

const getAll = (endpoint) => {
  return http.get(`/${endpoint}`);
};

const get = (endpoint,id) => {
//   return http.get(`/products/${id}`);
    return http.get(`/${endpoint}/${id}`);
};

const create = (endpoint,data) => {
  return http.post(`/${endpoint}`, data);
};

// const createCategory = data => {
//     return http.post("/products/category",data);
//   };

//id
const update = (endpoint,id, data) => {
    return http.put(`/${endpoint}/${id}`, data);
//   return http.put(`/products/${id}`, data);
};

//id
const remove = (endpoint,id) => {
    return http.delete(`/${endpoint}/${id}`);
  //return http.delete(`/products/${id}`);
};

// const removeCategory = id => {
//     return http.delete(`/products/category/${id}`);
// }

const removeAll = (url) => {
    return http.delete(url);
  //return http.delete(`/products`);
};

// const findByTitle = title => {
//   return http.get(`/products?title=${title}`);
// };

const productsDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};

export default productsDataService;
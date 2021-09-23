import http from "./http-common";
import { DeleteResponseType } from "../../types/api.services";
import { Product } from "./../../types/products";

const getAll = async () => {
  const response = await http.get<Product[]>("/products");
  return response.data;
};

const get = async (id: number) => {
  const response = await http.get(`/products/${id}`);
  return response.data;
};

const create = async (newProduct: Product) => {
  const response = await http.post<Product>("/products", newProduct);
  return response.data;
};

const update = async (id: number, updatedProduct: Product) => {
  const response = await http.put<Product>(`/products/${id}`, updatedProduct);
  return response.data;
};

const remove = (id: number) => {
  return http.delete<DeleteResponseType>(`/products/${id}`).then((response) => {
    return response.data;
  });
};

const removeAll = () => {
  return http.delete(`/products`).then((response) => {
    return response.data;
  });
};

const productsDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};

export default productsDataService;

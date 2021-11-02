import http from "../api/http-common";
import { DeleteResponseType } from "../../types/api.services";
import { Product } from "../../types/products";

const getAll = async () => {
  const Model = await http.get<Product[]>("/products");
  return Model.data;
};

const get = async (id: number) => {
  const Model = await http.get(`/products/${id}`);
  return Model.data;
};

const create = async (newProduct: Product) => {
  const Model = await http.post<Product>("/products", newProduct);
  return Model.data;
};

const update = async (id: number, updatedProduct: Product) => {
  const Model = await http.put<Product>(`/products/${id}`, updatedProduct);
  return Model.data;
};

const remove = (id: number) => {
  return http.delete<DeleteResponseType>(`/products/${id}`).then((Model) => {
    return Model.data;
  });
};

const removeAll = () => {
  return http.delete(`/products`).then((Model) => {
    return Model.data;
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

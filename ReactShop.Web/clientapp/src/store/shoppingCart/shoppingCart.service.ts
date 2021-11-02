import http from "store/api/http-common";
import { CartItem } from "types/shoppingCart";
import { DeleteResponseType } from "types/api.services";

const getAll = () => {
  return http.get<CartItem[]>("/shoppingCart").then((response) => {
    return response.data;
  });
};

const get = (id: number) => {
  return http.get<CartItem[]>(`/shoppingCart/${id}`).then((response) => {
    return response.data;
  });
};

const create = (newCartItem: CartItem) => {
  return http.post<CartItem>("/shoppingCart", newCartItem).then((response) => {
    return response.data;
  });
};

const remove = (id: number) => {
  return http
    .delete<DeleteResponseType>(`/shoppingCart/${id}`)
    .then((response) => {
      return response.data;
    });
};

const update = (id: number, updatedCartItem: CartItem) => {
  return http
    .put<CartItem>(`/shoppingCart/${id}`, updatedCartItem)
    .then((response) => {
      return response.data;
    });
};

const shoppingCartsDataService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default shoppingCartsDataService;

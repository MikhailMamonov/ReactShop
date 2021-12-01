import { CartItem, DeleteResponseType } from "../../../types";
import http from "../http-common";

const getAll = () => {
  return http.get<CartItem[]>("/CartItems").then((response) => {
    return response.data;
  });
};

const get = (id: number) => {
  return http.get<CartItem[]>(`/CartItems/${id}`).then((response) => {
    return response.data;
  });
};

const create = (newCartItem: CartItem) => {
  return http.post<CartItem>("/CartItems", newCartItem).then((response) => {
    return response.data;
  });
};

const remove = (id: number) => {
  return http
    .delete<DeleteResponseType>(`/CartItems/${id}`)
    .then((response) => {
      return response.data;
    });
};

const update = (id: number, updatedCartItem: CartItem) => {
  return http
    .put<CartItem>(`/CartItems/${id}`, updatedCartItem)
    .then((response) => {
      return response.data;
    });
};

export const cartItemsService = {
  getAll,
  get,
  create,
  update,
  remove,
};

//export default shoppingCartsDataService;

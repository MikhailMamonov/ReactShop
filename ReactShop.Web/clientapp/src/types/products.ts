import { Category } from "types";

export type Product = {
  id: number;
  name: string;
  price?: number;
  description?: string;
  categoryId: number;
  category: Category;
  image: string | undefined;
};

export type ProductsState = {
  products: Array<Product>;
  isLoading: boolean;
  error?: string;
};

export enum productsActionTypes {
  ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST",
  ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE",
  ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS",

  GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST",
  GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE",
  GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",

  DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST",
  DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE",
  DELETE_PRODUCT_SUCCES = "DELETE_PRODUCT_SUCCES",

  EDIT_PRODUCT_REQUEST = "EDIT_PRODUCT_REQUEST",
  EDIT_PRODUCT_FAILURE = "EDIT_PRODUCT_FAILURE",
  EDIT_PRODUCT_SUCCESS = "EDIT_PRODUCT_SUCCESS",
  PRODUCTS = "products",

  ADD_PRODUCT_TO_CART_REQUEST = "ADD_PRODUCT_TO_CART_REQUEST",
  ADD_PRODUCT_TO_CART_FAILURE = "ADD_PRODUCT_TO_CART_FAILURE",
  ADD_PRODUCT_TO_CART_SUCCESS = "ADD_PRODUCT_TO_CART_SUCCESS",
}

export type AddProductRequestAction = {
  type: productsActionTypes.ADD_PRODUCT_REQUEST;
};

export type AddProductSuccessAction = {
  type: productsActionTypes.ADD_PRODUCT_SUCCESS;
  product: Product;
};

export type AddProductFailureAction = {
  type: productsActionTypes.ADD_PRODUCT_FAILURE;
  error: string;
};

export type GetProductsRequestAction = {
  type: productsActionTypes.GET_PRODUCTS_REQUEST;
};

export type GetProductsSuccessAction = {
  type: productsActionTypes.GET_PRODUCTS_SUCCESS;
  products: Product[];
};

export type GetProductsFailureAction = {
  type: productsActionTypes.GET_PRODUCTS_FAILURE;
  error: string;
};

export type EditProductRequestAction = {
  type: productsActionTypes.EDIT_PRODUCT_REQUEST;
};

export type EditProductSuccessAction = {
  type: productsActionTypes.EDIT_PRODUCT_SUCCESS;
  product: Product;
  id: number;
};

export type EditProductFailureAction = {
  type: productsActionTypes.EDIT_PRODUCT_FAILURE;
  error: string;
};

export type DeleteProductRequestAction = {
  type: productsActionTypes.DELETE_PRODUCT_REQUEST;
};

export type DeleteProductSuccessAction = {
  type: productsActionTypes.DELETE_PRODUCT_SUCCES;
  id: number;
};

export type DeleteProductFailureAction = {
  type: productsActionTypes.DELETE_PRODUCT_FAILURE;
  error: string | undefined;
};

export type AddProductToCartRequestAction = {
  type: productsActionTypes.ADD_PRODUCT_TO_CART_REQUEST;
};

export type AddProductToCartSuccessAction = {
  type: productsActionTypes.ADD_PRODUCT_TO_CART_SUCCESS;
  id: number;
};

export type AddProductToCartFailureAction = {
  type: productsActionTypes.ADD_PRODUCT_TO_CART_FAILURE;
  error: string | undefined;
};

export type ProductsActions =
  | AddProductRequestAction
  | AddProductSuccessAction
  | AddProductFailureAction
  | GetProductsSuccessAction
  | GetProductsRequestAction
  | GetProductsFailureAction
  | EditProductSuccessAction
  | EditProductRequestAction
  | EditProductFailureAction
  | DeleteProductSuccessAction
  | DeleteProductRequestAction
  | DeleteProductFailureAction
  | AddProductToCartSuccessAction
  | AddProductToCartRequestAction
  | AddProductToCartFailureAction;

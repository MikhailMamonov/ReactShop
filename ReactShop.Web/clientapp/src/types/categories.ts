export type Category = {
  id: number;
  name: string;
};

export type CategoriesState = {
  categories: Array<Category>;
  isLoading: boolean;
  error?: string;
};

export enum categoriesActionTypes {
  ADD_CATEGORY_REQUEST = "ADD_CATEGORY_REQUEST",
  ADD_CATEGORY_FAILURE = "ADD_CATEGORY_FAILURE",
  ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS",

  GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST",
  GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE",
  GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS",

  DELETE_CATEGORY_REQUEST = "DELETE_CATEGORY_REQUEST",
  DELETE_CATEGORY_FAILURE = "DELETE_CATEGORY_FAILURE",
  DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS",

  EDIT_CATEGORY_REQUEST = "EDIT_CATEGORY_REQUEST",
  EDIT_CATEGORY_FAILURE = "EDIT_CATEGORY_FAILURE",
  EDIT_CATEGORY_SUCCESS = "EDIT_CATEGORY_SUCCESS",
  CATEGORIES = "categories",
}

export type AddCategoryRequestAction = {
  type: categoriesActionTypes.ADD_CATEGORY_REQUEST;
};

export type AddCategorySuccessAction = {
  type: categoriesActionTypes.ADD_CATEGORY_SUCCESS;
  category: Category;
};

export type AddCategoryFailureAction = {
  type: categoriesActionTypes.ADD_CATEGORY_FAILURE;
  error: string;
};

export type GetCategoriesReguestAction = {
  type: categoriesActionTypes.GET_CATEGORIES_REQUEST;
};

export type GetCategoriesSuccessAction = {
  type: categoriesActionTypes.GET_CATEGORIES_SUCCESS;
  categories: Category[];
};

export type GetCategoriesFailureAction = {
  type: categoriesActionTypes.GET_CATEGORIES_FAILURE;
  error: string;
};

export type EditCategoryReguestAction = {
  type: categoriesActionTypes.EDIT_CATEGORY_REQUEST;
};

export type EditCategorySuccessAction = {
  type: categoriesActionTypes.EDIT_CATEGORY_SUCCESS;
  category: Category;
  id: number;
};

export type EditCategoryFailureAction = {
  type: categoriesActionTypes.EDIT_CATEGORY_FAILURE;
  error: string;
};

export type DeleteCategoryReguestAction = {
  type: categoriesActionTypes.DELETE_CATEGORY_REQUEST;
};

export type DeleteCategorySuccessAction = {
  type: categoriesActionTypes.DELETE_CATEGORY_SUCCESS;
  id: number;
};

export type DeleteCategoryFailureAction = {
  type: categoriesActionTypes.DELETE_CATEGORY_FAILURE;
  error: string;
};

export type CategoriesActions =
  | AddCategoryRequestAction
  | AddCategorySuccessAction
  | AddCategoryFailureAction
  | GetCategoriesSuccessAction
  | GetCategoriesReguestAction
  | GetCategoriesFailureAction
  | EditCategorySuccessAction
  | EditCategoryReguestAction
  | EditCategoryFailureAction
  | DeleteCategorySuccessAction
  | DeleteCategoryReguestAction
  | DeleteCategoryFailureAction;

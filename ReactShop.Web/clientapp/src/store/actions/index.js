export const addProduct = (newProduct) => ({
  type: "ADD_PRODUCT",
  newProduct,
});
export const deleteProduct = (id) => ({
  type: "DELETE_PRODUCT",
  idForDelete: id,
});

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const toggleUser = (id) => ({
  type: "TOGGLE_USER",
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

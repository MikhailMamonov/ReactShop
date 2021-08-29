export function setFetchingFlag(fetchingType) {
  return { type: fetchingType };
}
export function unsetFetchingFlag(unfetchingType) {
  return { type: unfetchingType };
}

export const setActionError = (actionType, err) => ({
  type: actionType,
  payload: null,
  error: err.response.data.Message,
});

export const deleteActionSuccess = (actionType, id) => ({
  type: actionType,
  payload: { idForDelete: id },
});

export const getActionSuccess = (actionType, items) => ({
  type: actionType,
  payload: items,
});

export const editActionSuccess = (actionType, id, item) => ({
  type: actionType,
  payload: {
    id: id,
    item: item,
  },
});

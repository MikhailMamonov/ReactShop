import {SET_FETCHING, UNSET_FETCHING  } from "./../types";

export function setFetchingFlag() {
  return {type: SET_FETCHING}
}
export function unsetFetchingFlag() {
  return {type: UNSET_FETCHING}
}
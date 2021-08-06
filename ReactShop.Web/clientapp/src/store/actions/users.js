import axios from "axios";
import {
  ADD_USER_SUCCESS,
  USER_ERROR,
  TOGGLE_FETCHING,
  DELETE_USER,
  GET_USERS_SUCCESS
} from "../types";

export const getUsersThunk = () => {
  debugger;
  return (dispatch) => {
    dispatch(onErrorAction(null));
    dispatch(toggleIsFetching(true));
    axios
      .get("https://localhost:44364/Users/Users")
      .then((res) => {
        debugger;
        dispatch(getUsersAction(res.data));
        dispatch(toggleIsFetching(false));
      })
      .catch((e) => {
        debugger;
        dispatch(onErrorAction(e.stack));
        dispatch(toggleIsFetching(false));
      });
  };
};

export const addUserThunk = (newUser) => {
  return (dispatch) => {
    dispatch(onErrorAction(null));
    dispatch(toggleIsFetching(true));
    axios
      .post("https://localhost:44364/Users/AddUser", {
          displayName: newUser.displayName,
          email: newUser.email,
          password: newUser.password,
      })
      .then((res) => {
        debugger;
        dispatch(addUserAction(res.data));
        dispatch(toggleIsFetching(false));
      })
      .catch((e) => {
        debugger;
        dispatch(onErrorAction(e.stack));
        dispatch(toggleIsFetching(false));
      });
  };
};

export const deleteUserThunk = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    axios
      .delete("http://localhost/Users/DeleteUser", {
        id,
      })
      .then((res) => {
        dispatch(deleteUserAction(res.data));
        dispatch(toggleIsFetching(false));
      })
      .catch((e) => {
        dispatch(onErrorAction(e));
        dispatch(toggleIsFetching(false));
      });
  };
};

const addUserAction = (newUser) => ({
  type: ADD_USER_SUCCESS,
  payload: {
    displayName: newUser.displayName,
    password: newUser.password,
    email: newUser.email  
  },
});

const getUsersAction = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: {
    users },
});

export const deleteUserAction = (id) => ({
  type: DELETE_USER,
  payload: { idForDelete: id },
});

const toggleIsFetching = (isFething) => ({
  type: TOGGLE_FETCHING,
  payload: { isFething },
});

const onErrorAction = (error) => ({
  type: USER_ERROR,
  payload: {
    error,
  },
});

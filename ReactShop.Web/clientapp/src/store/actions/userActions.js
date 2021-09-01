import GeneralDataService from "../api/GeneralService";
import userService from "../api/user.service";
import {
  // ADD_USER_SUCCESS,
  // USER_ERROR,
  // GET_USERS_SUCCESS,
  // DELETE_USER_SUCCES,
  // SET_FETCHING_USER,
  // UNSET_FETCHING_USER,
  // USERS,
  // EDIT_USER_SUCCES,
  // LOGIN_REQUEST,
  // LOGIN_SUCCESS,
  // LOGIN_FAILURE,
  // REGISTER_REQUEST,
  // REGISTER_SUCCESS,
  // REGISTER_FAILURE
  userConstants
} from "../constants";

import {
  deleteActionSuccess,
  getActionSuccess,
  setActionError,
  setFetchingFlag,
  unsetFetchingFlag,
  editActionSuccess
} from "./index";

// export const addUserActionSuccess = (newUser) => ({
//   type: ADD_USER_SUCCESS,
//   payload: {
//     displayName: newUser.displayName,
//     password: newUser.password,
//     email: newUser.email,
//     id: newUser.id,
//   },
//   error: null,
// });

export const addUserThunk = (newUser) => {
  return (dispatch) => {
    //dispatch(setFetchingFlag(userConstants.SET_FETCHING_USER));
    dispatch(request({ newUser }));
    userService.create(
      {
        displayName: newUser.displayName,
        email: newUser.email,
        password: newUser.password,
      })
      .then((res) => {
        setTimeout(() => {
          dispatch(success(res.data));
        }, 2000);
      })
      .catch((e) => {
        dispatch(failure(e));
      });
    // setTimeout(() => {
    //   dispatch(unsetFetchingFlag(UNSET_FETCHING_USER));
    // }, 2000);

    const request = (user) =>{return { type: userConstants.ADD_USER_REQUEST, user }}
    const success = (user) => {return { type: userConstants.ADD_USER_SUCCESS, user }}
    const failure = (error) =>{return  { type: userConstants.ADD_USER_FAILURE, error }}

  };
};

export const getAllUsersThunk = () => {
  return (dispatch) => {
    //dispatch(setFetchingFlag(SET_FETCHING_USER));
    dispatch(request());

    userService.getAll()
      .then((res) => {
          dispatch(success(res.data));
      })
      .catch((e) => {
        dispatch(failure(e));
      });

    // setTimeout(() => {
    //   dispatch(unsetFetchingFlag(UNSET_FETCHING_USER));
    // }, 2000);
    
    function request () {return { type: userConstants.GET_USERS_REQUEST }}
    function success(users) {return { type: userConstants.GET_USERS_SUCCESS, users }}
    function failure(error) {return { type: userConstants.GET_USERS_FAILURE, error }}

  };
};

export const deleteUserThunk = (id) => {
  return (dispatch) => {
    //dispatch(setFetchingFlag(SET_FETCHING_USER));
    dispatch(request())
    userService.remove(id)
      .then((res) => {
        setTimeout(() => {
          dispatch(success(res.data.id));
        }, 2000);
      })
      .catch((e) => {
        dispatch(failure(e));
      });

    // setTimeout(() => {
    //   dispatch(unsetFetchingFlag(UNSET_FETCHING_USER));
    // }, 2000);

    const request = (id) => {return { type: userConstants.DELETE_USER_REQUEST, id }}
    const success = (id) => {return { type: userConstants.DELETE_USER_SUCCES, id }}
    const failure = (error) => {return { type: userConstants.DELETE_USER_FAILURE, error,id }}
  };
};

export const editUserThunk = (id, user) => {
  return (dispatch) => {
    //dispatch(setFetchingFlag(SET_FETCHING_USER));
    dispatch(request());
    userService.update(id, user)
      .then((res) => {
        debugger
        setTimeout(() => {
          dispatch(success(res.data.id, res.data));
        }, 2000);
      })
      .catch((e) => {
        dispatch(failure(e));
      });

    // setTimeout(() => {
    //   dispatch(unsetFetchingFlag(UNSET_FETCHING_USER));
    // }, 2000);

    function request (id) {return  { type: userConstants.EDIT_USER_REQUEST, id }}
    function success (id,user) {return { type: userConstants.DELETE_USER_SUCCES, id, user }} 
    function failure (error) {return { type: userConstants.DELETE_USER_FAILURE, error,id }} 
  };
};


export const login = (username, password) => {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password)
      .then(
        user => {
          dispatch(success(user));
          //history.push('/');
        }).catch(
        err => {
          dispatch(failure(err.toString()));
        });
  };

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

export const logout = () => {
  userService.logout();                                               
  return { type: userConstants.LOGOUT };
}

export const register = (user) => {
  return dispatch => {
    dispatch(request(user));
    userService.register(user)
      .then(
        user => {
          dispatch(success());
          //history.push('/login');
          //dispatch(alertActions.success('Registration successful'));
        },
        error => {
          dispatch(failure(error.toString()));
          //dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
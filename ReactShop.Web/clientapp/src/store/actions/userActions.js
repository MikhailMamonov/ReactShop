import userService from "../api/user.service";
import {
  userConstants
} from "../constants";





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
        dispatch(failure(e.response.data));
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
        dispatch(failure(e.response.data));
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
        dispatch(failure(e.response.data));
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

        setTimeout(() => {
          dispatch(success(res.data.id, res.data));
        }, 2000);
      })
      .catch((e) => {
        dispatch(failure(e.response.data));
      });

    // setTimeout(() => {
    //   dispatch(unsetFetchingFlag(UNSET_FETCHING_USER));
    // }, 2000);

    function request (id) {return  { type: userConstants.EDIT_USER_REQUEST, id }}
    function success (id,user) {return { type: userConstants.DELETE_USER_SUCCES, id, user }} 
    function failure (error) {return { type: userConstants.DELETE_USER_FAILURE, error }} 
  };
};



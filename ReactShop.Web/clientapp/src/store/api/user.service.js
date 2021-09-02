
import { userConstants } from "..//constants";
import http from './../../http-common';

const getAll = () => {
  return http.get("/users");
};

const get = id => {
  return http.get(`/users/${id}`);
};

const create = data => {
  return http.post("/users", data);
};

const update = (id, data) => {
  return http.put(`/users/${id}`, data);
};

const remove = id => {
  return http.delete(`/users/${id}`);
};

const removeAll = () => {
  return http.delete(`/users`);
};

const  login = (username, password) => {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
  };

  return http(`/users/login`, requestOptions)
      
      .then(res => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(res.data.user));

          return res.data.user;
      });
}

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}


const findByTitle = title => {
  return http.get(`/users?title=${title}`);
};

const register = (user) => {
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



const userService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  login,
  logout,
  register
};

export default userService;
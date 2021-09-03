 
import http from "./../../http-common";
import authHeader from './auth-header';

const  login = (username, password) => {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // };
  
    return http.post(`/auth/login`, { username, password } )
        .then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
              }
              
              return response.data;
        });
  }
  
  const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
  }
  
  const register = (username, email, password) => {
    return http.post("/auth/register", 
    {
        username,
        email,
        password,
      });
  }

  const userService = {
    login,
    logout,
    register
  };
  
  export default userService;
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from 'react-compose';

import { register } from "./../../store/actions/authActions";

const RegisterPage = (props) => {
  const [registerForm, setRegisterForm] = React.useState(
    {
      user: {
        username: "",
        email:"",
        password: "",
      },
      submitted: false
    });


  const handleChange = (event) => {
    const { name, value } = event.target;
    const { user } = registerForm;
    setRegisterForm({
      ...registerForm,
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setRegisterForm({ ...registerForm, submitted: true });
    const { user } = registerForm;
    if (user.username&& user.email && user.password) {
      props.register(user.username, user.email, user.password);
      props.history.push("/");
    }
  }

  const { registering } = props;
  const { user, submitted } = registerForm;
  return (
    <div className="col-md-6 col-md-offset-3">
      <h2>Register</h2>
      {props.error?props.error.toString():null}
      <form name="form" onSubmit={handleSubmit}>
          
        <div
          className={
            "form-group" + (submitted && !user.username ? " has-error" : "")
          }
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          {submitted && !user.username && (
            <div className="help-block">Username is required</div>
          )}
        </div>

        <div
          className={
            "form-group" + (submitted && !user.email ? " has-error" : "")
          }
        >
          <label htmlFor="username">Email</label>
          <input
            className="form-control"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
          {submitted && !user.email && (
            <div className="help-block">Email is required</div>
          )}
        </div>
        <div
          className={
            "form-group" + (submitted && !user.password ? " has-error" : "")
          }
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          {submitted && !user.password && (
            <div className="help-block">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Register</button>
          {registering && (
            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="" />
          )}
          <Link to="/login" className="btn btn-link">
            Cancel
            </Link>
        </div>
      </form>
    </div>
  );
}

function mapState(state) {
  const { registering, error} = state.auth;
  return { registering, error };
}

const actionCreators = {
  register: register,
};

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
const RegisterPageWithRouter = compose(withRouter, connectedRegisterPage)
export { RegisterPageWithRouter as RegisterPage };

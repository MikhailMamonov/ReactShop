import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register, resetRegisterForm } from "store/action-creators/auth";
import { RootStateType } from "../store";

type RegisterPageProps = {
  error: string | undefined;
  register: (username: string, email: string, password: string) => void;
  resetRegisterForm: () => { type: any };
  history: any;
};

const RegisterPage: React.FC<RegisterPageProps> = (props) => {
  const [registerForm, setRegisterForm] = React.useState({
    user: {
      username: "",
      email: "",
      password: "",
    },
    submitted: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const { user } = registerForm;
    setRegisterForm({
      ...registerForm,
      user: {
        ...user,
        [name]: value,
      },
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRegisterForm({ ...registerForm, submitted: true });
    const { user } = registerForm;
    if (user.username && user.email && user.password) {
      props.register(user.username, user.email, user.password);
      props.resetRegisterForm();
    }
  };

  const { user, submitted } = registerForm;
  return (
    <div className="col-md-6 col-md-offset-3">
      <h2>Register</h2>
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

          <Link to="/login" className="btn btn-link">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

function mapState(state: RootStateType) {
  const { error } = state.auth;
  return { error };
}

export default connect(mapState, { register, resetRegisterForm })(RegisterPage);

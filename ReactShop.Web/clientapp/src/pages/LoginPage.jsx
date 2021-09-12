import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "./../store/reducers/auth/authActions";
import {
  Paper,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
  TextField,
  withStyles,
} from "@material-ui/core";
import { Face, Fingerprint } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit,
  },
}));

const LoginPage = (props) => {
  const [loginForm, setLoginForm] = React.useState({
    username: "",
    password: "",
    submitted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginForm({ ...loginForm, submitted: true });
    const { username, password } = loginForm;
    if (username && password) {
      props.login(username, password);
    }
  };

  const classes = useStyles();
  const { loggingIn } = props;

  const { username, password, submitted } = loginForm;
  return (
    <div className={classes.root}>
      <h2>Login</h2>
      <Paper className={classes.padding}>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Face />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="username"
                label="Username"
                name="username"
                type="email"
                value={username}
                onChange={handleChange}
                fullWidth
                autoFocus
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Fingerprint />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="username"
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={() => handleChange()}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Button
                disableFocusRipple
                disableRipple
                style={{ textTransform: "none" }}
                variant="text"
                color="primary"
              >
                Forgot password ?
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: "10px" }}>
            <Button
              variant="outlined"
              color="primary"
              style={{ textTransform: "none" }}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Grid>
        </div>
      </Paper>
      {/* 
      <form name="form" onSubmit={handleSubmit}>
        <div
          className={
            "form-group" + (submitted && !username ? " has-error" : "")
          }
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={handleChange}
          />
          {submitted && !username && (
            <div className="help-block">Username is required</div>
          )}
        </div>
        <div
          className={
            "form-group" + (submitted && !password ? " has-error" : "")
          }
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={handleChange}
          />
          {submitted && !password && (
            <div className="help-block">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Login</button>
          {loggingIn && (
            <img
              src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              alt=""
            />
          )}
          <Link to="/register" className="btn btn-link">
            Register
          </Link>
        </div>
      </form> */}
    </div>
  );
};

function mapState(state) {
  const { loggingIn } = state.auth;
  return { loggingIn };
}

const actionCreators = {
  login: login,
};

export default connect(mapState, actionCreators)(LoginPage);

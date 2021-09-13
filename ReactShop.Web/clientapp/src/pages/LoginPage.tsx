import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "../store/reducers/auth/auth.actions";
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
import { RootState } from "../store/store";

interface ILoginProps {
  loggingIn: boolean;
}

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setLoginForm({ ...loginForm, submitted: true });
    const { username, password } = loginForm;
    if (username && password) {
      login({ username, password });
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
                onChange={handleChange}
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
    </div>
  );
};

const mapState = (state: RootState): ILoginProps => {
  const { loggingIn }: { loggingIn: boolean } = state.auth;
  return { loggingIn };
};

const actionCreators = {
  login: login,
};

export default connect(mapState, actionCreators)(LoginPage);

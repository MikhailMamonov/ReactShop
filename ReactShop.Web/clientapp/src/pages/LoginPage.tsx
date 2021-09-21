import React from "react";
import { connect } from "react-redux";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { login } from "../store/action-creators/auth";
import {
  Paper,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { Face, Fingerprint } from "@material-ui/icons";
import { RootStateType } from "../store/store";
import { Dispatch } from "redux";
import { ActionTypes } from "../types/actionCreators";
import { ThunkDispatch } from "redux-thunk";
import { User } from "../types/users";

type LoginProps = {
  loggingIn: boolean;
  login: (user: User) => void;
};

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: spacing(1),
      width: "25ch",
    },
  },
  margin: {
    margin: spacing.length * 2,
  },
  padding: {
    padding: spacing.length,
  },
}));

const LoginPage: React.FC<LoginProps> = (props) => {
  const [loginForm, setLoginForm] = React.useState({
    userName: "",
    password: "",
    submitted: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    try {
      event.preventDefault();
      setLoginForm({ ...loginForm, submitted: true });
      const { userName, password } = loginForm;
      if (userName && password) {
        props.login({ userName, password });
      }
      debugger;
    } catch (e: any) {
      debugger;
    }
  };

  const classes = useStyles();
  const { loggingIn } = props;

  const { userName, password } = loginForm;
  return (
    <div className={classes.root}>
      <h2>Login</h2>
      {loggingIn ?? <CircularProgress color="secondary" />}
      <Paper className={classes.padding}>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Face />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="userName"
                label="Username"
                name="userName"
                type="email"
                value={userName}
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
          <Grid container alignItems="center">
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
          <Grid container style={{ marginTop: "10px" }}>
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

const mapState = (state: RootStateType) => {
  const { loggingIn }: { loggingIn: boolean } = state.auth;
  return { loggingIn };
};

const actionCreators = (
  dispatch: ThunkDispatch<RootStateType, void, ActionTypes>
) => {
  return {
    login: (user: User) => {
      return dispatch(login(user));
    },
  };
};

export default connect(mapState, actionCreators)(LoginPage);

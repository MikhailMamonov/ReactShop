import React from "react";
import {
  Button,
  Typography,
  Toolbar,
  AppBar,
  makeStyles,
} from "@material-ui/core";
import { connect } from "react-redux";
import { logout } from "../store/action-creators/auth";
import { useHistory } from "react-router-dom";
import { RootStateType } from "../store/store";
import { Dispatch } from "redux";
import { User } from "./../types/users";

type Props = {
  currentUser: User | undefined;
  logout: () => void;
};

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(8),
  },
  menuLink: {
    marginLeft: theme.spacing(2),
  },
}));

const Header: React.FC<Props> = (props) => {
  const router = useHistory();

  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Typography variant="h6" noWrap>
          Online Shop
        </Typography>
        {props.currentUser ? (
          <Toolbar>
            <Button
              onClick={() => {
                router.push("admin");
              }}
              color="inherit"
            >
              Admin
            </Button>
            <Button
              href="/catalog"
              className={classes.menuLink}
              color="inherit"
            >
              Catalog
            </Button>
            <Button href="/" className={classes.menuLink} color="inherit">
              Home
            </Button>
            <Button
              href="/login"
              className="nav-link"
              onClick={() => props.logout()}
              color="inherit"
            >
              LogOut {props.currentUser.userName}
            </Button>
          </Toolbar>
        ) : (
          <Toolbar>
            <Button className={classes.menuLink} color="inherit" href="/login">
              Login
            </Button>
            <Button
              className={classes.menuLink}
              color="inherit"
              href="/register"
            >
              Register
            </Button>
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => {
  const { currentUser } = state.auth;
  return { currentUser };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

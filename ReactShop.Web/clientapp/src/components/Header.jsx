import React from "react";
import {
  Button,
  Typography,
  Toolbar,
  AppBar,
  Link,
  makeStyles,
} from "@material-ui/core";
import { connect } from "react-redux";
import { logout } from "../store/reducers/auth/authActions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(8),
  },
  menuLink: {
    marginLeft: theme.spacing(2),
  },
}));

const Header = (props) => {
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
              LogOut
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

const mapStateToProps = (state) => {
  const { currentUser } = state.auth;
  return { currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

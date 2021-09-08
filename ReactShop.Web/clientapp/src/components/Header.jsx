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
import { logout } from "../store/actions/authActions";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(8),
  },
  menuLink: {
    marginLeft: theme.spacing(2),
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Online Shop
          </Typography>
          {props.currentUser && (
            <Button href="/admin" color="inherit">
              Admin
            </Button>
          )}
          <Button href="/catalog" className={classes.menuLink} color="inherit">
            Catalog
          </Button>
          <Button href="/" className={classes.menuLink} color="inherit">
            Home
          </Button>
          {props.currentUser && <Link href="/login">User</Link>}
          {props.currentUser ? (
            //<Nav.Link href="/profile">{props.currentUser.username}</Nav.Link>
            <Button
              href="/login"
              className="nav-link"
              onClick={() => props.logout()}
              color="inherit"
            >
              LogOut
            </Button>
          ) : (
            <div>
              <Button
                className={classes.menuLink}
                color="inherit"
                href="/login"
              >
                Login
              </Button>
              <Button
                className={classes.menuLink}
                color="inherit"
                href="/register"
              >
                Register
              </Button>
            </div>
          )}
        </Toolbar>
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

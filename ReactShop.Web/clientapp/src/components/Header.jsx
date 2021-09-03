import React, { Component } from "react";
import {Button, Typography, Toolbar, AppBar, Link, makeStyles, IconButton, MenuIcon} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(8),
  },
  menuLink:{
    marginLeft: theme.spacing(2),
  }

}));

const Header = (props) => {

  const classes = useStyles();
    return (
      <div >
        <AppBar position="static" color="black">
          <Toolbar>
          <Typography variant="h6" noWrap>
          Online Shop 
          </Typography>
          {props.currentUser&&<Link href="/admin">Admin</Link>}
              <Button href="/catalog" className={classes.menuLink} color="inherit" >Catalog</Button>
              <Button href="/" className={classes.menuLink}  color="inherit" button>Home</Button>
              {props.currentUser && <Link href="/login">User</Link>}
              {props.currentUser ? (
              
                //<Nav.Link href="/profile">{props.currentUser.username}</Nav.Link>
                <Link href="/login" className="nav-link" onClick={props.logOut}>LogOut</Link>
              
              ) :
                (<div>
                <Link className={classes.menuLink} href="/login">Login</Link> 
                <Link className={classes.menuLink} href="/register" button>Register</Link>
                </div>
                )}
                <Button className={classes.menuLink} color="inherit">Signup</Button>
          </Toolbar>
        
        </AppBar>
        {/* <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              

            </Nav>
          </Container>
        </Navbar> */}
      </div>
    );
  }


export default Header;

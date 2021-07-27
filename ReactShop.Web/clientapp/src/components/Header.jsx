  import React, { Component } from 'react';
  import { Nav } from 'react-bootstrap';
  import { Navbar } from 'react-bootstrap';
   import { Container } from 'react-bootstrap';
  
  class Header extends Component {
      render() {
          return (
              <div>
                   <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/admin">Admin</Nav.Link>
      <Nav.Link href="/catalog">Catalog</Nav.Link>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

              </div>
          );
      }
  }
  
  export default Header;
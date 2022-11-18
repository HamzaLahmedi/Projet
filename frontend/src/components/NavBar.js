import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Navbar';

import {Link} from "react-router-dom"

function NAvBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='nav'>Home</Nav.Link>
            <Nav.Link as={Link} href="Profile" className='nav'>Profile</Nav.Link>
            <Nav.Link as={Link} href="Contact" className='nav'>Contact</Nav.Link>
          </Nav>
          <Nav style={{marginLeft:"50px"}}>
            <Link to='./login' >
              <Button style={{marginLeft:"-50px"}}>Login</Button>
            </Link>
            <Link to='./register'>
              
              <Button>signup</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NAvBar;
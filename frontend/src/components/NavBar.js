import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';

import {Link} from "react-router-dom"
import { logout } from '../redux/actions/authActions';

function NAvBar() {
  const auth=useSelector(state=>state.authReducer.auth)
  const dispatch=useDispatch()
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='nav'>Home</Nav.Link>
            <Nav.Link as={Link} to="/Profile" className='nav'>Profile</Nav.Link>
            <Nav.Link as={Link} to="/Contact" className='nav'>Contact</Nav.Link>
          </Nav>


           {

            auth ?<> 
            <Link to='./profile' >
              
              <Button onClick={()=>dispatch(logout())}>logout</Button>
            </Link></> :
            <>
            
            <Link to='./login'>
            
              <Button style={{marginLeft:"-50px"}} >login</Button>
            </Link >
            <Link to='./register'>
            
              <Button>signup</Button>
            </Link>
          </>



           }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NAvBar;
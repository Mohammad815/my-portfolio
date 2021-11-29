import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="black" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Mohammad Forhad</Navbar.Brand>
        <Nav className="ms-auto ">
          <Link className="link" to="/home">Home</Link>
          <Link className="link" to="/contact">Contact</Link>
          <Link className="link" to="/addproject">AddProject</Link>
        </Nav>
        </Container>
      </Navbar>
    
    );
};

export default Header;
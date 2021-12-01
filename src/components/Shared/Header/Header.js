import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Mohammad Forhad</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto ">
          <Link className="link" to="/home">Home</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to="/blog">Blog</Link>
          <Link className="link" to="/contact">Contact</Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
    );
};

export default Header;
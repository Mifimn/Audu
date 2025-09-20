
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="navbar">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          SHOLAXTEAM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Button 
            variant="primary" 
            href="https://wa.me/message/QJJUMIYJ3BLEJ1"
            target="_blank"
          >
            Start a Campaign
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

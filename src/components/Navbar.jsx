
import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function NavigationBar() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setLoading(true);
    
    // Simulate loading for 2 seconds
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 2000);
  };

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-content">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Navbar bg="white" expand="lg" fixed="top" className="navbar">
      <Container>
        <Navbar.Brand onClick={() => handleNavClick('/')} className="navbar-brand" style={{ cursor: 'pointer' }}>
          SHOLAXTEAM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavClick('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('/services')}>Services</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('/portfolio')}>Portfolio</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('/contact')}>Contact</Nav.Link>
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

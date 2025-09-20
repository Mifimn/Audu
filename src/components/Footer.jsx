
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={6}>
            <h5>SHOLAXTEAM</h5>
            <p>Professional Crowdfunding Specialist</p>
            <p>&copy; 2025 SHOLAXTEAM. All rights reserved.</p>
            <p><small>Designed by ~mifimn</small></p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="social-links">
              <a href="https://x.com/Harmonyini47754?t=rXzyT5src-ufiI2iG4RjPA&s=09" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://wa.me/message/QJJUMIYJ3BLEJ1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="mailto:hussainabdullahi2003@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

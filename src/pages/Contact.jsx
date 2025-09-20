
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    // For now, we'll show a success message
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ marginTop: '76px', padding: '60px 0' }}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h1>Get In Touch</h1>
            <p className="lead">Ready to start your crowdfunding campaign? Let's discuss your project.</p>
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mx-auto">
            {showAlert && (
              <Alert variant="success">
                Thank you for your message! I'll get back to you within 24 hours.
              </Alert>
            )}
            
            <Card className="contact-form">
              <Card.Body>
                <h3 className="mb-4">Send Me a Message</h3>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Tell me about your project</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your campaign goals, target amount, timeline, and any specific requirements..."
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" size="lg">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={4} className="text-center">
            <Card className="h-100">
              <Card.Body>
                <i className="fas fa-envelope fa-2x text-primary mb-3"></i>
                <h5>Email</h5>
                <p>
                  <a href="mailto:hussainabdullahi2003@gmail.com">
                    hussainabdullahi2003@gmail.com
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="text-center">
            <Card className="h-100">
              <Card.Body>
                <i className="fab fa-whatsapp fa-2x text-primary mb-3"></i>
                <h5>WhatsApp</h5>
                <p>
                  <a 
                    href="https://wa.me/message/QJJUMIYJ3BLEJ1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Message on WhatsApp
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="text-center">
            <Card className="h-100">
              <Card.Body>
                <i className="fab fa-twitter fa-2x text-primary mb-3"></i>
                <h5>Twitter</h5>
                <p>
                  <a 
                    href="https://x.com/Harmonyini47754?t=rXzyT5src-ufiI2iG4RjPA&s=09" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    @Harmonyini47754
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={8} className="mx-auto text-center">
            <h3>Ready to start immediately?</h3>
            <p>For urgent projects or quick consultations, reach out directly via WhatsApp.</p>
            <Button 
              variant="success" 
              size="lg"
              href="https://wa.me/message/QJJUMIYJ3BLEJ1"
              target="_blank"
            >
              <i className="fab fa-whatsapp me-2"></i>
              Start WhatsApp Chat
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

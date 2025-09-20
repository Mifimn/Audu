
import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';

export default function Home() {
  const testimonials = [
    {
      text: "SHOLAXTEAM helped us exceed our fundraising goal by 150%. Their strategy and execution were flawless.",
      author: "Sarah M., Gaza Relief Campaign"
    },
    {
      text: "Professional, dedicated, and results-driven. They turned our vision into a successful reality.",
      author: "Ahmed H., Medical Emergency Fund"
    },
    {
      text: "The best crowdfunding specialist I've worked with. Highly recommended for any campaign.",
      author: "Mindy R., Personal Emergency"
    }
  ];

  return (
    <div style={{ marginTop: '76px' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <img 
                src="/attached_assets/IMG-20250920-WA0041_1758387803077.jpg" 
                alt="Professional headshot" 
                className="hero-image-full"
              />
            </Col>
            <Col lg={6}>
              <h1>Funding Your Vision, Fueling Your Cause</h1>
              <p>Professional Crowdfunding Specialist with proven results</p>
              <Button 
                variant="light" 
                size="lg" 
                href="https://wa.me/message/QJJUMIYJ3BLEJ1"
                target="_blank"
              >
                Start Your Campaign Today
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Snapshot */}
      <section className="services-snapshot">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2>How I Help You Succeed</h2>
              <p>Comprehensive crowdfunding solutions tailored to your needs</p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4>Campaign Creation</h4>
                <p>Strategic planning and compelling campaign setup that captures attention and drives donations.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h4>Promotion & Strategy</h4>
                <p>Targeted marketing campaigns and social media strategies to maximize your reach and impact.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Results-Driven Solutions</h4>
                <p>Data-driven optimization and continuous monitoring to ensure your campaign exceeds its goals.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2>What Clients Say</h2>
              <p>Real feedback from successful campaigns</p>
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="mx-auto">
              <Carousel indicators={false} controls={true}>
                {testimonials.map((testimonial, index) => (
                  <Carousel.Item key={index}>
                    <div className="testimonial-card">
                      <p className="mb-3">"{testimonial.text}"</p>
                      <footer className="text-muted">— {testimonial.author}</footer>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

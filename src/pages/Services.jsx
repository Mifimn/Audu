
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Services() {
  const services = [
    {
      title: "Campaign Strategy & Planning",
      description: "Complete campaign strategy development including goal setting, target audience analysis, and timeline planning. I work with you to create a comprehensive roadmap for success.",
      features: ["Market Research", "Goal Setting", "Timeline Development", "Risk Assessment"]
    },
    {
      title: "Content Creation & Optimization",
      description: "Compelling campaign content that tells your story and motivates people to donate. This includes writing, image selection, and video content creation.",
      features: ["Story Writing", "Visual Content", "Video Scripts", "Campaign Updates"]
    },
    {
      title: "Campaign Setup & Launch",
      description: "Complete campaign setup on major platforms including GoFundMe, Chuffed, and others. I handle all technical aspects and ensure optimal presentation.",
      features: ["Platform Setup", "Payment Processing", "SEO Optimization", "Launch Coordination"]
    },
    {
      title: "Marketing & Promotion",
      description: "Comprehensive marketing strategy including social media promotion, email campaigns, and influencer outreach to maximize your campaign's reach.",
      features: ["Social Media Marketing", "Email Campaigns", "Influencer Outreach", "PR Strategy"]
    },
    {
      title: "Campaign Management",
      description: "Ongoing campaign management including regular updates, donor communication, and performance optimization to ensure continued success.",
      features: ["Daily Monitoring", "Donor Communication", "Performance Analytics", "Strategy Adjustments"]
    },
    {
      title: "Results Analysis & Reporting",
      description: "Detailed analysis of campaign performance with actionable insights and recommendations for future campaigns.",
      features: ["Performance Metrics", "ROI Analysis", "Detailed Reports", "Future Recommendations"]
    }
  ];

  return (
    <div style={{ marginTop: '76px', padding: '60px 0' }}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h1>Professional Crowdfunding Services</h1>
            <p className="lead">Comprehensive solutions to make your campaign a success</p>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="h-100 service-card">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <ul className="list-unstyled">
                    {service.features.map((feature, idx) => (
                      <li key={idx}><i className="fas fa-check text-success me-2"></i>{feature}</li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer className="bg-transparent">
                  <Button 
                    variant="primary" 
                    className="w-100"
                    href="https://wa.me/message/QJJUMIYJ3BLEJ1"
                    target="_blank"
                  >
                    Hire Service
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

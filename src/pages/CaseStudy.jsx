
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function CaseStudy() {
  const { id } = useParams();

  const caseStudies = {
    1: {
      title: "eSIMs for Gaza - Emergency Communication",
      client: "Gaza Relief Organization",
      goal: "$40,000",
      raised: "$45,000+",
      duration: "30 days",
      donors: "1,200+",
      challenge: "During the crisis in Gaza, maintaining communication became critical for families to stay connected with loved ones abroad. Traditional communication infrastructure was severely damaged.",
      strategy: "We developed a campaign focused on providing eSIM cards to Palestinian families, emphasizing the humanitarian aspect and the immediate need for communication. The strategy included emotional storytelling, visual content showing the impact, and strategic social media outreach.",
      actions: [
        "Created compelling campaign narrative with personal stories",
        "Developed visual content showcasing the need and impact",
        "Implemented targeted social media advertising",
        "Engaged with humanitarian communities and influencers",
        "Provided regular updates showing direct impact"
      ],
      results: "Exceeded the goal by 112.5% in just 30 days, helping over 500 families stay connected during a critical time."
    },
    2: {
      title: "Mindy Jean Rudiger - Medical Emergency",
      client: "Rudiger Family",
      goal: "$25,000",
      raised: "$32,000+",
      duration: "45 days",
      donors: "800+",
      challenge: "Urgent medical treatment was needed with significant financial burden on the family. Time-sensitive situation requiring immediate action.",
      strategy: "Personal story-driven campaign emphasizing the urgent medical need and family impact. Focus on community support and personal networks.",
      actions: [
        "Crafted emotional yet factual campaign story",
        "Leveraged personal and professional networks",
        "Created regular update schedule for transparency",
        "Implemented email outreach to extended networks",
        "Coordinated with local community organizations"
      ],
      results: "Achieved 128% of the goal, ensuring complete medical treatment and recovery support for the family."
    }
  };

  const study = caseStudies[id] || caseStudies[1];

  return (
    <div style={{ marginTop: '76px' }}>
      {/* Header */}
      <section className="case-study-header">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h1>{study.title}</h1>
              <p className="lead">Client: {study.client}</p>
              <div className="d-flex justify-content-center gap-4 mt-4">
                <div>
                  <h3>{study.raised}</h3>
                  <small>Funds Raised</small>
                </div>
                <div>
                  <h3>{study.donors}</h3>
                  <small>Donors</small>
                </div>
                <div>
                  <h3>{study.duration}</h3>
                  <small>Duration</small>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Content */}
      <Container style={{ padding: '60px 0' }}>
        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="mb-4">
              <Card.Body>
                <h3>The Challenge</h3>
                <p>{study.challenge}</p>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <h3>Our Strategy</h3>
                <p>{study.strategy}</p>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <h3>Key Actions Taken</h3>
                <ul>
                  {study.actions.map((action, index) => (
                    <li key={index}>{action}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <h3>Results & Impact</h3>
                <p>{study.results}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Metrics */}
        <section className="metrics-section">
          <Container>
            <Row>
              <Col lg={12} className="text-center mb-4">
                <h2>Campaign Metrics</h2>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <div className="metric-card">
                  <div className="metric-number">{study.raised}</div>
                  <p>Total Raised</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="metric-card">
                  <div className="metric-number">{study.goal}</div>
                  <p>Original Goal</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="metric-card">
                  <div className="metric-number">{study.donors}</div>
                  <p>Unique Donors</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="metric-card">
                  <div className="metric-number">{study.duration}</div>
                  <p>Campaign Duration</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h3>Ready to start your own successful campaign?</h3>
            <Button 
              variant="primary" 
              size="lg"
              href="https://wa.me/message/QJJUMIYJ3BLEJ1"
              target="_blank"
            >
              Get Started Today
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

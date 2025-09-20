
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "eSIMs for Gaza - Emergency Communication",
      category: "humanitarian",
      fundsRaised: "$45,000+",
      image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=400&h=200&fit=crop",
      link: "https://www.gofundme.com/f/esims-for-gaza-help-palestinians-be-connected-in-a-genocide"
    },
    {
      id: 2,
      title: "Mindy Jean Rudiger - Medical Emergency",
      category: "medical",
      fundsRaised: "$32,000+",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
      link: "https://www.gofundme.com/f/mindy-jean-rudiger-ramberg"
    },
    {
      id: 3,
      title: "Community Support Campaign",
      category: "community",
      fundsRaised: "$28,000+",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=200&fit=crop",
      link: "https://gofund.me/df2153f41"
    },
    {
      id: 4,
      title: "Hossam Family Survival Fund",
      category: "humanitarian",
      fundsRaised: "$15,000+",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=200&fit=crop",
      link: "https://www.gofundme.com/f/jqjcbd-help-hossam-and-his-family-survive-and-rebuild"
    },
    {
      id: 5,
      title: "Gaza Family Evacuation",
      category: "humanitarian",
      fundsRaised: "$22,000+",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=200&fit=crop",
      link: "https://gogetfunding.com/help-our-family-evacuate-from-gaza"
    },
    {
      id: 6,
      title: "Nour's Emergency Appeal",
      category: "humanitarian",
      fundsRaised: "$18,000+",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=200&fit=crop",
      link: "https://www.gofundme.com/f/help-us-survive-nours-plea-from-gaza"
    },
    {
      id: 7,
      title: "Gaza Strip Financial Aid",
      category: "humanitarian",
      fundsRaised: "$35,000+",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=200&fit=crop",
      link: "https://chuffed.org/project/gaza-strip-financial-aid-food-water-medicine-education"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = ['all', 'humanitarian', 'medical', 'community'];

  return (
    <div style={{ marginTop: '76px', padding: '60px 0' }}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h1>Successful Campaigns</h1>
            <p className="lead">Real results from real campaigns</p>
          </Col>
        </Row>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <Card key={project.id} className="portfolio-card">
              <Card.Img 
                variant="top" 
                src={project.image} 
                className="portfolio-image"
                alt={project.title}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  <span className="badge bg-secondary me-2">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  <strong>Funds Raised: {project.fundsRaised}</strong>
                </Card.Text>
                <div className="d-flex gap-2">
                  <Link to={`/portfolio/${project.id}`} className="btn btn-outline-primary">
                    View Case Study
                  </Link>
                  <Button 
                    variant="primary" 
                    size="sm"
                    href={project.link}
                    target="_blank"
                  >
                    View Campaign
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

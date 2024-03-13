import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: info@backendtattooink.com</p>
            <p>Phone: +34 971 48 01 53</p>
          </Col>
          <Col md={4}>
            <h5>Follow</h5>
            <p>Stay connected with us on social media</p>
            <div className="social-icons">
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
            </div>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <p>&copy; 2024 Backend Tattoo Ink. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
};
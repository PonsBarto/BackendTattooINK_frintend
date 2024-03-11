import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h3>Contact Us</h3>
            <p>Email: info@tattooink.com</p>
            <p>Phone: +34 999 88 77 99</p>
          </Col>
          <Col md={4}>
            <h3>Follow Us</h3>
            <p>Stay connected with us on social media</p>
            <div className="social-icons">
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
            </div>
          </Col>
          <Col md={4}>
            <h3>Quick Links</h3>
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
          <p>&copy; 2024 Tattoo Ink. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
};
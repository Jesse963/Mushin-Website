// src/components/Footer.js
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
// Example social icons (replace with actual links/icons)
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            {/* Placeholder for Footer Logo - Use monochrome version */}
            {/* <img src="/path/to/mushin-logo-monochrome.svg" alt="Mushin Automation" className="logo-footer" /> */}
            <span className="text-light-gray font-montserrat-bold">
              Mushin
              <em style={{ color: "var(--orange)", marginLeft: "-2.5px" }}>
                Automation{" "}
              </em>
            </span>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <Nav className="justify-content-center">
              <Nav.Link href="/privacy-policy" className="text-medium-gray">
                Privacy Policy
              </Nav.Link>
              <Nav.Link href="/terms-of-service" className="text-medium-gray">
                Terms of Service
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <div className="social-icons">
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="text-light-gray me-3"
              >
                <FaLinkedin />
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                className="text-light-gray"
              >
                <FaTwitter />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p className="text-medium-gray mb-0">
              &copy; {new Date().getFullYear()} Mushin Automation. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

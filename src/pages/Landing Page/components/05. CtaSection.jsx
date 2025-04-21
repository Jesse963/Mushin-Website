// src/components/CtaSection.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CtaSection = () => {
  return (
    <section id="assessment" className="cta-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={9} lg={7}>
            <h2 className="font-montserrat-bold">
              Ready to Revolutionise Your Workflow?
            </h2>
            <p>
              Discover how Intelligent Automation can transform your operations.
              Book a complimentary, no-obligation assessment with our experts
              today.
            </p>
            <a href="/contact" className="btn btn-primary-orange">
              {" "}
              {/* Link to form or contact section */}
              Book Your Free Assessment Now
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaSection;

// src/components/Hero.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Use Bootstrap grid

const Hero = () => {
  return (
    <section className="hero-section text-center">
      {" "}
      {/* text-center added for mobile stack */}
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={12}>
            {" "}
            {/* Control content width */}
            <h1 className="font-oxanium">
              AUTOMATE COMPLEXITY.
              <br />
              <em>AMPLIFY RESULTS.</em>
            </h1>
            <p className="lead mb-5" style={{ marginTop: "-2%" }}>
              Move beyond automation to operational intelligence. We embed
              sophisticated AI to optimise workflows, uncover critical insights,
              and enable proactive, data-driven decisions.
            </p>
            <a href="/contact" className="btn btn-primary-orange">
              {" "}
              {/* Use styled anchor or button */}
              Book Your Free Assessment
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

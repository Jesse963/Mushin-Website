import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TrustBar = () => {
  // Placeholder: Replace with actual client logo image paths
  const clientLogos = [
    "src/assets/woolworths.png",
    "src/assets/myb logo.png",
    "src/assets/mastertek.png",
  ];

  return (
    <section className="trust-bar">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} className="text-center mb-4">
            <h5
              className="text-uppercase text-medium-gray"
              style={{ letterSpacing: "1px", fontSize: "1.2rem" }}
            >
              Trusted by Industry Leaders
            </h5>
          </Col>
          {clientLogos.map((logoSrc, index) => (
            <Col
              key={index}
              xs={6}
              sm={4}
              md={2}
              className="text-center mb-3 mb-md-0"
            >
              <img
                src={logoSrc}
                alt={`Client Logo ${index + 1}`}
                className="img-fluid"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TrustBar;

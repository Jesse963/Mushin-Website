import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import woolworthsLogo from "../../../assets/woolworths.png";
import mybLogo from "../../../assets/myb logo.png";
import mastertekLogo from "../../../assets/mastertek.png";

const TrustBar = () => {
  // 2. Use the imported variables in the array
  const clientLogos = [woolworthsLogo, mybLogo, mastertekLogo];

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
          {/* 3. The map function now uses the correct image paths */}
          {clientLogos.map((logoSrc, index) => (
            <Col
              key={index}
              xs={6}
              sm={4}
              md={2}
              className="text-center mb-3 mb-md-0"
            >
              <img
                src={logoSrc} // This now holds the correct path provided by the import
                alt={`Client Logo ${index + 1}`}
                className="img-fluid" // img-fluid is good for responsiveness
                // Consider adding explicit height/width constraints via CSS if needed
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TrustBar;

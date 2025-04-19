// src/components/KeyBenefits.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// Assuming you use an icon library like react-icons
import { FaBrain, FaDatabase, FaSyncAlt, FaChartLine } from "react-icons/fa";

const benefits = [
  {
    icon: <FaBrain />,
    title: "Intelligent Decision Making",
    description:
      "Embed AI to enable your automated processes to make smarter, data-driven decisions.",
  },
  {
    icon: <FaDatabase />,
    title: "Seamless Data Handling",
    description:
      "Automate the processing of both structured and unstructured data sources with high accuracy.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Continuous Improvement",
    description:
      "Leverage machine learning for processes that adapt, learn, and optimise over time.",
  },
  {
    icon: <FaChartLine />,
    title: "Actionable Insights",
    description:
      "Unlock valuable insights from automated processes to drive better business outcomes.",
  },
];

const KeyBenefits = () => {
  return (
    <section id="benefits" className="key-benefits-section">
      <Container>
        <div className="section-title-container">
          <h2 className="font-montserrat-bold">
            The Intelligent Automation Advantage
          </h2>
          <div className="accent-divider"></div>
          <p className="text-dark-gray col-md-8 mx-auto">
            Go beyond simple task automation. Implement solutions that think,
            learn, and deliver exponential value.
          </p>
        </div>
        <Row>
          {benefits.map((benefit, index) => (
            <Col
              key={index}
              md={6}
              lg={3}
              className="d-flex align-items-stretch"
            >
              <div className="benefit-card w-100">
                <div className="icon">{benefit.icon}</div>
                <h3 className="font-montserrat-bold">{benefit.title}</h3>
                <p className="text-dark-gray">{benefit.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default KeyBenefits;

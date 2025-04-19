// src/components/ProblemSolution.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ProblemSolution = () => {
  return (
    <section className="problem-solution-section bg-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="font-montserrat-bold">
              Unlock Your Team's True Potential
            </h2>
            <p className="sub-headline">
              Beyond Automation Lies Transformation
            </p>
            <p className="text-dark-gray mb-4">
              Repetitive, manual tasks drain valuable time and resources,
              preventing your experts from focusing on high-impact strategic
              work. Traditional automation helps, but intelligent automation
              powered by AI takes efficiency and capability to an entirely new
              level.
            </p>
            <ul className="text-dark-gray">
              <li>
                Boost operational{" "}
                <span className="font-montserrat-bold">
                  efficiency dramatically
                </span>
                .
              </li>
              <li>
                Reduce costly{" "}
                <span className="font-montserrat-bold">
                  errors and improve compliance
                </span>
                .
              </li>
              <li>
                Handle complex{" "}
                <span className="font-montserrat-bold">unstructured data</span>{" "}
                effortlessly.
              </li>
              <li>
                Enable systems to{" "}
                <span className="font-montserrat-bold">
                  learn, adapt, and improve
                </span>{" "}
                continuously.
              </li>
            </ul>
            <p className="mt-4 text-dark-gray">
              We partner with you to implement{" "}
              <strong className="text-orange">Intelligent Automation</strong>{" "}
              strategies that deliver measurable results.
            </p>
          </Col>
          <Col md={6} className="mt-4 mt-md-0 ">
            <div>
              <img
                class="img-fluid"
                src="/src/assets/72db83e5-8ef7-459b-8a8d-f7101e51fb0d.png"
                alt="Intelligent Automation Concept"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProblemSolution;

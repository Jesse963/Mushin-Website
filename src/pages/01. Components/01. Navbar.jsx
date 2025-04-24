import React from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";

const Navbar = () => {
  // Placeholder for logo - replace with actual img or SVG component
  const logo = (
    <BootstrapNavbar.Brand href="/" className="font-montserrat-bold">
      {/* <img src="/path/to/mushin-logo-white.svg" alt="Mushin Automation Logo" height="30" /> */}
      Mushin
      <em
        style={{
          color: "var(--orange)",
          marginLeft: "-4.5px",
          fontSize: "larger",
        }}
      >
        Automation{" "}
      </em>
    </BootstrapNavbar.Brand>
  );

  return (
    <BootstrapNavbar variant="dark" expand="lg" className="navbar" fixed="top">
      <Container>
        {logo}
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="ml-auto">
            <Nav.Link
              href="/solutions"
              className="font-montserrat-bold text-white"
            >
              Solutions
            </Nav.Link>
            <Nav.Link
              href="/case-studies"
              className="font-montserrat-bold text-white"
            >
              Case Studies
            </Nav.Link>
            <Nav.Link
              href="/about-us"
              className="font-montserrat-bold text-white"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className="font-montserrat-bold text-white"
            >
              Contact
            </Nav.Link>

            <Nav
              href="/solutions"
              className="font-montserrat-bold text-white"
              style={{ alignItems: "center" }}
            >
              |
            </Nav>
            <Nav.Link
              href="/solutions"
              className="font-montserrat-bold text-white"
            >
              Platform
            </Nav.Link>
            {/* Optional: CTA in Navbar */}
            {/* <Nav.Link href="#assessment" className="btn btn-outline-orange ms-lg-3">Free Assessment</Nav.Link> */}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;

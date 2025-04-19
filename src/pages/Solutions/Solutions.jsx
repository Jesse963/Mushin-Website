import React from "react";
// Assume necessary imports for React Router, etc.
// Assume CSS file with FuturaLegal styles is properly linked/imported.

function SolutionsPage() {
  return (
    <>
      {/* --- Hero Section --- */}
      {/* Use .hero-section for padding/base styles. Add .bg-near-black & .text-white for the dark theme variant. */}
      <section className="hero-section bg-near-black text-white text-center">
        {/* .container is still needed for width constraint */}
        <div className="container">
          {/* Use .font-oxanium for the specific headline font. CSS handles size/weight/color via .hero-section h1 */}
          <h1 className="font-oxanium">
            TRANSFORM YOUR BUSINESS <br /> WITH INTELLIGENT AI
          </h1>
          {/* Use .lead class. CSS handles size/color via .hero-section .lead */}
          <p className="lead mb-5 col-lg-8 mx-auto">
            Leverage cutting-edge Artificial Intelligence and advanced RPA to
            unlock unprecedented efficiency, drive innovation, and secure your
            competitive edge.
          </p>
          {/* Use <a> tag with .btn-primary-orange class directly for the CTA */}
          <a href="#contact-us" className="btn-primary-orange">
            {" "}
            {/* Use CSS class directly */}
            Request an AI Opportunity Assessment
          </a>
        </div>
        {/* Angled background would be applied via .hero-section::before in CSS */}
      </section>

      {/* --- Value Proposition Intro --- */}
      {/* Using a standard div with Bootstrap spacing/container, not necessarily a <section> unless full padding is desired */}
      <div className="container mb-5 pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            {/* Use .font-montserrat-bold for emphasis if needed, h2 styles apply from CSS */}
            <h2 className="mb-3 font-montserrat-bold">
              Intelligent Automation: Beyond Task Execution
            </h2>
            {/* Use .accent-divider class directly */}
            <div className="accent-divider"></div>
            {/* Use .text-dark-gray for specific body text color */}
            <p className="fs-5 text-dark-gray mb-0">
              We architect intelligent automation solutions that integrate AI's
              cognitive power with RPA's efficiency. We don't just automate
              processes; we reimagine them for a future powered by data-driven
              insights and adaptive workflows, delivering measurable business
              growth.
            </p>
          </div>
        </div>
      </div>

      {/* --- AI Solutions Section --- */}
      {/* Use .key-benefits-section and .bg-off-white as per CSS */}
      <section className="key-benefits-section bg-off-white py-5">
        <div className="container">
          {/* Use the .section-title-container structure from CSS */}
          <div className="section-title-container">
            <h2 className="font-montserrat-bold">AI-Powered Solutions</h2>
            <div className="accent-divider"></div>
            <p className="text-dark-gray">
              Harness the power of Artificial Intelligence to solve complex
              challenges and unlock strategic advantages.
            </p>
          </div>

          {/* Use Bootstrap grid for layout */}
          <div className="row g-4">
            {/* AI Service Card Example - Use .benefit-card */}
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
              {/* Apply .benefit-card class for styling. Remove Bootstrap .card, .shadow-sm */}
              <div className="benefit-card h-100">
                {/* Optional: Add icon structure if defined in CSS/HTML pattern */}
                {/* <div className="icon"><i className="bi bi-cpu"></i></div> */}
                {/* Use h3; styling comes from .benefit-card h3 in CSS. Add .font-montserrat-bold. */}
                <h3 className="font-montserrat-bold">
                  AI Consulting & Strategy
                </h3>
                {/* Use p tag; color comes from body default or .text-dark-gray. Use flex-grow-1 for alignment. */}
                <p className="text-dark-gray flex-grow-1">
                  Define your AI vision. We assess readiness, identify
                  high-impact opportunities, and build your roadmap for
                  successful AI adoption.
                </p>
                {/* Optional: Link */}
              </div>
            </div>

            {/* Repeat for other AI services using .benefit-card */}
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="benefit-card h-100">
                <h3 className="font-montserrat-bold">
                  Intelligent Document Processing (IDP)
                </h3>
                <p className="text-dark-gray flex-grow-1">
                  Automate data extraction from invoices, contracts, and more
                  using AI. Eliminate errors and accelerate workflows.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="benefit-card h-100">
                <h3 className="font-montserrat-bold">AI-Enhanced Automation</h3>
                <p className="text-dark-gray flex-grow-1">
                  Infuse RPA with ML and NLP for smarter bots handling complex
                  tasks like fraud detection or sentiment analysis.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="benefit-card h-100">
                <h3 className="font-montserrat-bold">
                  Custom AI Model Development
                </h3>
                <p className="text-dark-gray flex-grow-1">
                  Gain a competitive edge with bespoke AI models tailored to
                  solve your unique, complex business challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RPA & Integration Section --- */}
      {/* Use standard section padding from CSS, default white background */}
      <section className="py-5">
        {" "}
        {/* Keep py-5 for specific spacing control if section default isn't enough */}
        <div className="container">
          {/* Use the .section-title-container structure */}
          <div className="section-title-container">
            <h2 className="font-montserrat-bold">Robust RPA Implementation</h2>
            <div className="accent-divider"></div>
            <p className="text-dark-gray">
              Streamline operations with reliable, scalable Robotic Process
              Automation, often amplified by AI capabilities.
            </p>
          </div>

          {/* Use Bootstrap grid */}
          <div className="row g-4">
            {/* RPA Service Card Example - Use .benefit-card */}
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="benefit-card h-100">
                <h3 className="font-montserrat-bold">
                  Process Analysis & Discovery
                </h3>
                <p className="text-dark-gray flex-grow-1">
                  Deep dive into your workflows to identify prime opportunities
                  for high-impact automation and efficiency gains.
                </p>
              </div>
            </div>

            {/* Repeat for other RPA services using .benefit-card */}
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="benefit-card h-100">
                <h3 className="font-montserrat-bold">Custom Solution Design</h3>
                <p className="text-dark-gray flex-grow-1">
                  Architecting scalable, robust RPA solutions tailored to
                  integrate seamlessly with your existing systems.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="benefit-card h-100">
                <h3 className="font-montserrat-bold">
                  Development & Rigorous Testing
                </h3>
                <p className="text-dark-gray flex-grow-1">
                  Building efficient, reliable bots using best practices,
                  followed by exhaustive testing for guaranteed performance.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="benefit-card h-100">
                <h3 className="font-montserrat-bold">
                  Deployment, Training & Support
                </h3>
                <p className="text-dark-gray flex-grow-1">
                  Ensuring smooth integration, comprehensive team training, and
                  ongoing support for sustained success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Optional: Our Approach Section --- */}
      {/* <section className="container my-5 py-5"> ... </section> */}

      {/* --- Why Choose Us Section --- */}
      {/* Use .cta-section class. It handles bg, color, padding, text-align */}
      <section className="cta-section">
        {" "}
        {/* CSS handles bg, text color, padding */}
        <div className="container">
          {/* Use .section-title-container structure if needed, or just center manually */}
          <div className="text-center">
            {" "}
            {/* Ensure content is centered if not using title container */}
            <h2 className="font-montserrat-bold">
              Your Partner in Intelligent Transformation
            </h2>
            {/* Use .accent-divider directly */}
            <div className="accent-divider"></div>
            {/* CSS .cta-section p likely styles this. Use text-light-gray for specific lighter color from CSS variables */}
            <p className="text-light-gray lead mb-5 col-lg-8 mx-auto">
              We combine deep technical expertise in AI and RPA with strategic
              business acumen to deliver solutions that drive real results.
            </p>
          </div>
          {/* Add key differentiators here - use Bootstrap grid */}
          <div className="row text-center g-4">
            <div className="col-md-4">
              {/* Icon placeholder */}
              {/* h3 style comes from base h3 + .cta-section context. Ensure color is white. */}
              <h3 className="h5 font-montserrat-bold text-white mt-3">
                Expert Consultants
              </h3>
              {/* Use .text-medium-gray or .text-light-gray */}
              <p className="text-medium-gray">
                Seasoned professionals dedicated to your success.
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="h5 font-montserrat-bold text-white mt-3">
                Tailored Solutions
              </h3>
              <p className="text-medium-gray">
                Custom-built automation that fits your unique needs.
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="h5 font-montserrat-bold text-white mt-3">
                Measurable ROI
              </h3>
              <p className="text-medium-gray">
                Focused on delivering tangible value and efficiency gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Final CTA Section --- */}
      {/* Use standard section padding, default white background */}
      <section className="text-center py-5">
        <div className="container">
          <h2 className="mb-3 font-montserrat-bold">
            Ready to Shape Your Future?
          </h2>
          {/* Use text-dark-gray for body text */}
          <p className="fs-5 text-dark-gray mb-4 col-lg-8 mx-auto">
            Let's discuss how intelligent AI and automation can revolutionise
            your operations. Contact us today for a personalised consultation.
          </p>
          {/* Use .btn-primary-orange directly */}
          <a href="#contact-us" className="btn-primary-orange">
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </>
  );
}

export default SolutionsPage;

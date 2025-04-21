import React from "react";
import { Link } from "react-router-dom"; // If needed for CTAs
import jesseImage from "../../assets/jesse.jpg";
// Assume FuturaLegal CSS classes and Bootstrap utilities are available

function AboutUsPage() {
  // Placeholder for potential team member data if needed later
  // const teamMembers = [ { name: 'Jesse', title: 'Founder...', bio: '...', linkedin: '...' } ];

  return (
    // Add pt-5 for navbar offset, adjust as needed
    <div className="container py-5 pt-5">
      {/* --- Page Header / Hero --- */}
      <header className="mb-5 text-center">
        <h1 className="font-montserrat-bold mb-3">About Mushin Automation</h1>
        <p className="lead text-dark-gray col-md-10 mx-auto">
          We partner with businesses to transform operations and unlock human
          potential through intelligent AI and RPA solutions.
        </p>
        <div className="accent-divider"></div>
      </header>
      {/* --- Section: Our Genesis / The 'Why' --- */}
      <section className="row mb-5 pb-5 align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          {/* Consider placing an image here - e.g., team photo, abstract graphic */}
          <div
            className="bg-light-gray rounded d-flex align-items-center justify-content-center"
            style={{ minHeight: "300px" }}
          >
            <p className="text-muted">Conceptual Image Placeholder</p>
          </div>
        </div>
        <div className="col-lg-6">
          <h2 className="font-montserrat-bold mb-3">Driven by Purpose</h2>
          <p className="text-dark-gray">
            Mushin Automation was founded from a direct observation: countless
            hours and valuable human potential being lost to repetitive, manual
            tasks across organisations. Witnessing bright individuals hindered
            by tedious work sparked a mission.
          </p>
          <p className="text-dark-gray">
            We saw a clear need for intelligent automation – not just to cut
            costs, but to fundamentally change how work gets done. Our purpose
            is to liberate teams from mundane processes, enabling them to focus
            on the strategic, creative, and fulfilling aspects of their roles
            where they deliver the most value.
          </p>
        </div>
      </section>
      <hr className="my-5" /> {/* Subtle divider */}
      {/* --- Section: Our Mission & Approach --- */}
      <section className="mb-5 pb-5 text-center">
        <h2 className="font-montserrat-bold mb-3">Our Mission & Approach</h2>
        <p className="text-dark-gray col-md-10 mx-auto mb-4">
          Our mission is to empower Australian businesses by strategically
          implementing cutting-edge AI and RPA solutions. We believe technology
          should amplify human capability, creating more efficient, accurate,
          and engaging work environments.
        </p>
        <p className="text-dark-gray col-md-10 mx-auto">
          We partner closely with our clients, taking the time to deeply
          understand their unique challenges and goals. Our approach is
          collaborative, transparent, and relentlessly focused on delivering
          tailored automation solutions that provide measurable, sustainable
          results.
        </p>
      </section>
      {/* --- Section: Our Core Values --- */}
      {/* Added contrasting background (bg-off-white), padding (py-5), and rounded corners */}
      <section className="mb-5 pb-5 bg-off-white py-5 rounded">
        <div className="container">
          <h2 className="font-montserrat-bold mb-5 text-center">
            Our Core Values
          </h2>

          {/* Using Bootstrap row/col with justify-content-center to help balance the last row */}
          {/* g-4 provides spacing between items */}
          <div className="row g-4 justify-content-center">
            {/* Value 1 */}
            <div className="col-lg-4 col-md-6 text-center">
              {" "}
              {/* Adjust col size if needed, centered text */}
              {/* Optional: Add Icon here - replace 'bi-lightbulb' with an appropriate icon */}
              {/* <div className="fs-2 text-orange mb-2"><i className="bi bi-lightbulb"></i></div> */}
              <h3 className="h5 font-montserrat-bold mb-2 text-orange">
                Innovation
              </h3>
              <p className="text-dark-gray small px-md-3">
                {" "}
                {/* Added padding to constrain text width on wider screens */}
                Constantly exploring advancements in AI and RPA to deliver
                cutting-edge, effective solutions.
              </p>
            </div>

            {/* Value 2 */}
            <div className="col-lg-4 col-md-6 text-center">
              {/* <div className="fs-2 text-orange mb-2"><i className="bi bi-shield-check"></i></div> */}
              <h3 className="h5 font-montserrat-bold mb-2 text-orange">
                Integrity
              </h3>
              <p className="text-dark-gray small px-md-3">
                Operating with honesty, transparency, and ethical practices,
                prioritising client trust.
              </p>
            </div>

            {/* Value 3 */}
            <div className="col-lg-4 col-md-6 text-center">
              {/* <div className="fs-2 text-orange mb-2"><i className="bi bi-person-check"></i></div> */}
              <h3 className="h5 font-montserrat-bold mb-2 text-orange">
                Client Focus
              </h3>
              <p className="text-dark-gray small px-md-3">
                Dedicated to understanding client needs and delivering
                personalised, successful outcomes through close collaboration.
              </p>
            </div>

            {/* Value 4 */}
            {/* On medium screens these might stack (col-md-6), on large they join the row (col-lg-4) */}
            {/* justify-content-center on the parent row helps center these when they form the last row */}
            <div className="col-lg-4 col-md-6 text-center">
              {/* <div className="fs-2 text-orange mb-2"><i className="bi bi-graph-up-arrow"></i></div> */}
              <h3 className="h5 font-montserrat-bold mb-2 text-orange">
                Results-Driven
              </h3>
              <p className="text-dark-gray small px-md-3">
                Committed to delivering measurable improvements, tracking
                progress, and exceeding expectations.
              </p>
            </div>

            {/* Value 5 */}
            <div className="col-lg-4 col-md-6 text-center">
              {/* <div className="fs-2 text-orange mb-2"><i className="bi bi-arrow-repeat"></i></div> */}
              <h3 className="h5 font-montserrat-bold mb-2 text-orange">
                Continuous Improvement
              </h3>
              <p className="text-dark-gray small px-md-3">
                Dedicated to lifelong learning, refining our skills, processes,
                and solutions in a dynamic tech landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- Section: Meet the Founder --- */}
      {/* If multiple team members, adapt this section title and structure */}
      <section className="mb-5 pb-5">
        <h2 className="font-montserrat-bold mb-5 text-center">
          Meet Our Founder
        </h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            {/* Placeholder for Jesse's photo */}
            <div
              style={{
                width: "250px",
                height: "250px",
                margin: "auto",
              }}
            >
              <img
                src={jesseImage}
                alt=""
                srcset=""
                className="bg-medium-gray rounded-circle d-flex align-items-center justify-content-center"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
          <div className="col-md-8">
            <h3 className="font-montserrat-bold">Jesse Jenkins</h3>{" "}
            <p className="text-muted mb-3">Founder & Principal Consultant</p>
            <p className="text-dark-gray">
              Jesse founded Mushin Automation driven by a passion for
              streamlining operations and empowering employees through
              intelligent automation. With over 5 years of experience spanning
              software development, process improvement, and AI implementation,
              he brings a practical, results-oriented approach to solving
              complex business challenges.
            </p>
            <p className="text-dark-gray">
              He has a proven track record designing and deploying impactful RPA
              and AI solutions that deliver significant time savings, cost
              efficiencies, and accuracy improvements for clients across
              Australia. Jesse is committed to building trusted partnerships and
              tailoring automation strategies that drive tangible business
              value.
            </p>
          </div>
        </div>
      </section>
      {/* --- Optional CTA --- */}
      {/* <section className="text-center py-5 bg-near-black text-white rounded">
         <h3 className="font-montserrat-bold">Ready to Transform Your Operations?</h3>
         <p className="mb-4">Let's discuss how intelligent automation can benefit your business.</p>
         <Link to="/contact" className="btn btn-primary-orange">Contact Us</Link>
      </section> */}
    </div>
  );
}

export default AboutUsPage;

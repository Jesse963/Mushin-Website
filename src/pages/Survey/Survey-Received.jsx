import React from "react";
import { Link } from "react-router-dom"; // Assuming you use React Router for navigation

// Assume CSS file with FuturaLegal styles is properly linked/imported.

function ThankYouPage() {
  const companyName = "Mushin Automation";
  const contactEmail = "info@mushin.com.au";
  const contactPhone = "";

  return (
    <>
      {/* --- Thank You Section --- */}
      {/* Use standard section padding, default white background */}
      <section className="text-center py-5 my-5">
        {" "}
        {/* Added my-5 for vertical spacing */}
        <div
          className="container d-flex flex-column justify-content-center align-items-center"
          style={{ minHeight: "calc(100vh - 700px)" }}
        >
          {/* Use H2 with Montserrat Bold for sub-page titles, keeping Oxanium for major landing page H1s */}
          <h2 className="mb-3 font-montserrat-bold">
            Thank You for Your Input!
          </h2>

          {/* Orange accent divider for visual break */}
          <div className="accent-divider"></div>

          {/* Confirmation message - Use standard dark gray body text */}
          <p className="fs-5 text-dark-gray mb-5 col-lg-8 mx-auto">
            We have successfully received your survey submission. Your insights
            are invaluable as we continue to shape the future of AI and
            automation solutions for the legal industry.
          </p>

          {/* --- Action Links --- */}
          <div className="mb-5">
            {" "}
            {/* Add margin below links */}
            {/* Link to Case Studies - Styled as a primary button */}
            <Link to="/case-studies" className="btn-primary-orange mx-2">
              Explore Our Case Studies
            </Link>
            <br />
            <br />
            <Link
              to="/"
              className="text-link-orange mx-2"
              style={{
                fontWeight: 700,
                color: "#f18701",
                textDecoration: "none",
              }}
            >
              Return to Homepage
            </Link>
            {/* Alternatively, make the home link a secondary button if defined in CSS */}
            {/* <Link to="/" className="btn-secondary-outline mx-2">Return Home</Link> */}
          </div>

          {/* --- Contact Information --- */}
          <div className="contact-details mt-5">
            {" "}
            {/* Add margin top */}
            {/* Use a slightly lighter gray for secondary info like footer text */}
            <p className="text-medium-gray mb-1">
              If you have immediate questions, please feel free to reach out:
            </p>
            <p className="text-dark-gray mb-1">
              {" "}
              {/* Use darker gray for actual details */}
              <strong>{companyName}</strong>
            </p>
            <p className="text-dark-gray mb-1">
              Email:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-link-orange"
                style={{
                  fontWeight: 400,
                  color: "#f18701",
                  textDecoration: "none",
                }}
              >
                {contactEmail}
              </a>
            </p>
            <p className="text-dark-gray mb-0">
              {" "}
              {/* No margin bottom on last item */}
              {/* Phone: {contactPhone} */}
            </p>
          </div>
        </div>
      </section>

      {/* Consider adding a standard Footer component here if applicable */}
      {/* <Footer /> */}
    </>
  );
}

export default ThankYouPage;

// src/pages/NotFoundPage.jsx or similar path

import React from "react";
import { Link } from "react-router-dom";

// Helper component for the accent divider (or use a simple div with a class)
// This assumes you have CSS defining '.accent-divider' as per the style guide
const AccentDivider = () => <div className="accent-divider mx-auto my-4"></div>;

function NotFoundPage() {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "calc(100vh - 200px)" }}
    >
      {/* Adjust minHeight based on your header/footer height */}

      <div className="text-center p-5 rounded" style={{ maxWidth: "600px" }}>
        {/* Optional: Add subtle background like bg-light-gray or border if desired */}

        <h1
          className="font-montserrat-bold text-near-black mb-3"
          style={{ fontSize: "calc(2rem + 1vw)" }}
        >
          {/* Using Montserrat Bold like the Case Study H1/H2 for consistency */}
          404
        </h1>

        <AccentDivider />

        <h2 className="font-montserrat-bold text-near-black mb-3">
          Page Not Found
        </h2>

        <p className="text-dark-gray mb-4">
          Sorry, the page you are looking for might have been removed, had its
          name changed, or is temporarily unavailable.
        </p>

        <Link to="/" className="btn btn-primary-orange">
          {/* Applying FuturaLegal primary button style */}
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;

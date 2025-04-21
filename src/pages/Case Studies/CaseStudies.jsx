import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Assuming use of React Router
import { FaArrowTrendUp, FaArrowUpShortWide, FaBolt } from "react-icons/fa6";

// Simulate fetching an index file containing summaries of all case studies
// In a real app, this might come from a CMS API or be generated at build time.
const fetchCaseStudiesIndex = async () => {
  try {
    // Assumes an index file '_index.json' in the '/src/data/case-studies/' directory
    // This file should contain an array of case study summary objects.
    const response = await fetch(`/content/_index.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching case studies index:", error);
    return null;
  }
};

const icons = [<FaArrowTrendUp />, <FaBolt />, <FaArrowUpShortWide />];

function CaseStudiesListPage() {
  const [studies, setStudies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadIndex = async () => {
      setIsLoading(true);
      setError(false);
      const indexData = await fetchCaseStudiesIndex();
      if (indexData && Array.isArray(indexData)) {
        setStudies(indexData);
      } else {
        setError(true); // Set error if data is null or not an array
      }
      setIsLoading(false);
    };

    loadIndex();
  }, []); // Run only once on component mount

  // --- Render Logic ---

  if (isLoading) {
    return (
      <div className="container py-5 pt-5 text-center">
        Loading Case Studies...
      </div>
    );
    // Added pt-5 for navbar offset, adjust as needed
  }

  if (error || studies.length === 0) {
    return (
      <div className="container py-5 pt-5 text-center">
        {/* Added pt-5 for navbar offset */}
        <h2>Our Work</h2>
        <p>
          We are currently updating our case studies. Please check back soon!
        </p>
        {/* Optional: Link back home or to contact */}
      </div>
    );
  }

  return (
    <div className="container py-5 pt-5">
      {" "}
      {/* Added pt-5 for navbar offset */}
      {/* --- Page Header --- */}
      <header className="mb-5 text-center">
        <h1 className="font-montserrat-bold mb-3">Case Studies</h1>
        <p className="lead text-dark-gray col-md-8 mx-auto">
          Explore how we've partnered with clients to deliver transformative
          results through intelligent automation.
        </p>
        <div className="accent-divider"></div>
      </header>
      {/* --- Grid of Case Study Cards --- */}
      <div className="row g-4">
        {" "}
        {/* g-4 provides gutters between columns/rows */}
        {studies.map((study, index) => (
          // Responsive columns: 1 on xs, 2 on md, 3 on lg
          <div
            key={study.slug}
            className="col-md-6 col-lg-4 d-flex align-items-stretch"
          >
            <div className="benefit-card h-100 d-flex flex-column">
              {/* {study.imageUrl && (
                // Link the image as well
                <Link to={`/case-studies/${study.slug}`}>
                  <img
                    src={study.imageUrl}
                    alt={
                      study.imageAlt ||
                      `Case study for ${study.clientName || study.title}`
                    }
                    className="card-img-top" // Bootstrap class for image fitting
                    style={{ aspectRatio: "16/9", objectFit: "cover" }} //Maintain aspect ratio
                  />
                </Link>
              )} */}
              {/* Use card-body for padding */}
              <div
                className="card-body d-flex flex-column"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/case-studies/${study.slug}`)}
              >
                <div className="icon">{icons[index]}</div>

                <h3 className="h2 font-montserrat-bold mb-2">
                  {/* Link the title */}
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="text-decoration-none text-near-black "
                  >
                    <b>{study.title}</b>
                  </Link>
                  {/* stretched-link makes the whole card clickable */}
                </h3>
                <br />
                <div style={{ textAlign: "left", flexGrow: 1 }}>
                  {study.clientName && (
                    <p className="text-muted mb-2">
                      <small>
                        <b>Client:</b> {study.clientName}
                        <br /> <b>Industry:</b> {study.industry || "N/A"}
                      </small>
                    </p>
                  )}

                  <p className="text-dark-gray small flex-grow-1">
                    {study.summary} {/* Display the summary */}
                  </p>
                </div>
                <br />
                {/* Optional: Display tags */}
                {study.tags && study.tags.length > 0 && (
                  <div className="mb-3">
                    {study.tags.slice(0, 3).map(
                      (
                        tag // Show only first 3 tags
                      ) => (
                        <span
                          key={tag}
                          className="badge rounded-pill bg-light-gray text-dark-gray border border-secondary me-1 mb-1 px-2 py-1 small"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                )}
                {/* "Read More" - pushed to bottom using mt-auto */}
                {/* No need for a separate button if using stretched-link */}
                {/* If not using stretched-link, add button here: */}
                {/* <div className="mt-auto">
                    <Link to={`/case-studies/${study.slug}`} className="btn btn-sm btn-primary-orange">
                       Read More
                    </Link>
                 </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudiesListPage;

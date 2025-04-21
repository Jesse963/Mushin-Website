import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Assuming use of React Router

const fetchCaseStudyData = async (slug) => {
  try {
    const response = await fetch(`/Content/${slug}.json`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching case study data: ", error);
    return null;
  }
};

function SingleCaseStudyPage() {
  const { caseStudySlug } = useParams();

  const [caseStudyData, setCaseStudyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(false);
      const data = await fetchCaseStudyData(caseStudySlug);
      if (data) {
        setCaseStudyData(data);
      } else {
        setError(true);
      }
      setIsLoading(false);
    };

    loadData();
  }, [caseStudySlug]); // Re-run effect if the slug changes

  // --- Render Logic ---

  if (isLoading) {
    // Basic loading state - replace with a proper spinner/skeleton component
    return (
      <div className="container py-5 text-center">Loading Case Study...</div>
    );
  }

  if (error || !caseStudyData) {
    // Basic error state
    return (
      <div className="container py-5 text-center">
        <h2>Case Study Not Found</h2>
        <p>Sorry, we couldn't find the case study you were looking for.</p>
        <Link to="/case-studies" className="btn btn-primary-orange">
          Back to Case Studies
        </Link>{" "}
        {/* Use FuturaLegal button class */}
      </div>
    );
  }

  // Destructure data for easier access
  const {
    title,
    clientName,
    industry,
    datePublished,
    imageUrl,
    imageAlt,
    summary,
    challenge,
    solution,
    results,
    tags = [], // Default to empty array if tags are missing
  } = caseStudyData;

  // Helper to render bullet points if they exist
  const renderBulletPoints = (points) => {
    if (!points || points.length === 0) return null;
    // Apply styling similar to 'problem-solution-section ul' from your CSS if desired
    return (
      <ul className="list-unstyled problem-solution-bullets mt-3">
        {" "}
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    );
  };

  return (
    // Using <article> for semantic structure of a self-contained piece of content
    <article className="container mt-5 py-5">
      {/* --- Case Study Header --- */}
      <header className="m-5 text-center">
        <h1 className="font-montserrat-bold m-3">{title}</h1>{" "}
        <div className="text-muted mb-4">
          {" "}
          {/* Or .text-dark-gray */}
          <span>Client: {clientName}</span> |
          <span className="mx-2">Industry: {industry}</span>
          {"| "}
          <span>
            Published: {new Date(datePublished).toLocaleDateString("en-AU")}
          </span>{" "}
          {/* Format date */}
        </div>
        <div className="accent-divider"></div>{" "}
        {/* Use the accent divider class */}
      </header>

      {/* --- Optional Hero Image --- */}
      {imageUrl && (
        <div className="mb-5 text-center">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "400px" }}
          />
          {/* Basic styling, adjust as needed */}
        </div>
      )}

      {/* --- Summary --- */}
      {summary && (
        <p className="lead text-center mb-5 col-md-10 mx-auto">{summary}</p>
      )}

      {/* --- Main Content (Challenge, Solution, Results Metrics) --- */}
      <div className="row g-5 mb-5">
        {/* Left Column: Challenge & Solution */}
        <div className="col-lg-7">
          <section className="mb-5">
            <h2 className="font-montserrat-bold mb-3">{challenge.title}</h2>
            <p className="text-dark-gray">{challenge.content}</p>
          </section>

          <section>
            <h2 className="font-montserrat-bold mb-3">{solution.title}</h2>
            <p className="text-dark-gray">{solution.content}</p>
            {renderBulletPoints(solution.bulletPoints)}
            {solution.footer && (
              <p className="text-muted mt-3">
                <small>{solution.footer}</small>
              </p>
            )}
          </section>
        </div>

        {/* Right Column: Key Results Metrics */}
        <div className="col-lg-5">
          <aside className="bg-off-white p-4 rounded border">
            {" "}
            {/* Style this sidebar */}
            <h3 className="font-montserrat-bold mb-4 text-center">
              Key Results
            </h3>
            {results.metrics && results.metrics.length > 0 ? (
              results.metrics.map((metric, index) => (
                <div key={index} className="metric-item text-center mb-4">
                  {" "}
                  {/* Style each metric item */}
                  <div className="display-4 font-montserrat-bold text-orange">
                    {metric.value}
                  </div>{" "}
                  {/* Prominent value */}
                  <div className="fs-5 text-near-black mt-1">
                    {metric.label}
                  </div>{" "}
                  {/* Label */}
                  {metric.detail && (
                    <div className="text-muted">
                      <small>{metric.detail}</small>
                    </div>
                  )}{" "}
                  {/* Optional detail */}
                  {index < results.metrics.length - 1 && (
                    <hr className="my-4" />
                  )}{" "}
                  {/* Divider */}
                </div>
              ))
            ) : (
              <p className="text-center text-muted">
                Key metrics data not available.
              </p>
            )}
          </aside>
        </div>
      </div>

      {/* --- Results Narrative --- */}
      <section className="mb-5 bg-light-gray p-5 rounded">
        {" "}
        {/* Contrasting background for emphasis */}
        <h2 className="font-montserrat-bold mb-3 text-center">
          {results.title}
        </h2>
        <div className="accent-divider"></div>
        {results.content && (
          <p className="text-dark-gray text-center mb-4">{results.content}</p>
        )}
        <p className="text-dark-gray">{results.conclusion}</p>
      </section>

      {/* --- Tags --- */}
      {tags.length > 0 && (
        <section className="mb-5 text-center">
          <h4 className="font-montserrat-bold mb-3">
            Related Technologies & Areas
          </h4>
          {tags.map((tag) => (
            // Corrected: Use light background, dark text, and border for better contrast/style
            <span
              key={tag}
              className="badge rounded-pill bg-light-gray text-dark-gray border border-secondary me-2 mb-2 px-3 py-2"
              // Added border-secondary for subtle definition matching --border-gray approx
            >
              {tag}
            </span>
          ))}
        </section>
      )}

      {/* --- Back Link --- */}
      <div className="text-center mt-5">
        <Link to="/case-studies" className="btn btn-primary-orange">
          &laquo; Back to All Case Studies
        </Link>
      </div>
    </article>
  );
}

export default SingleCaseStudyPage;

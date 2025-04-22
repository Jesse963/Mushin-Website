// src/pages/SurveyPage.jsx or similar path

import React, { useState } from "react";
import axios from "axios";

// Assuming the AccentDivider component/class is available globally or imported
const AccentDivider = () => (
  <div
    className="accent-divider mx-auto my-4"
    style={{ width: "100px", height: "4px", backgroundColor: "#f18701" }}
  ></div>
);

function SurveyPage() {
  // --- State to hold survey responses ---
  const [formData, setFormData] = useState({
    role: "",
    practiceArea: "",
    painfulProcesses: [], // Store multiple selections
    capabilityValues: {
      // Store Likert scale values
      cap1_extract: "",
      cap2_summarize: "",
      cap3_risk_identify: "",
      cap4_draft: "",
      cap5_categorize: "",
    },
    mostValuable: "",
    otherTask: "",
    followUp: "no", // Default to 'no'
    followUpEmail: "",
  });

  const [errors, setErrors] = useState({}); // Basic error handling state

  // --- Handlers ---
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCapabilityChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      capabilityValues: {
        ...prevData.capabilityValues,
        [name]: value,
      },
    }));
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const maxSelections = 2;
    let currentSelections = [...formData.painfulProcesses];

    if (checked) {
      if (currentSelections.length < maxSelections) {
        currentSelections.push(value);
      } else {
        // Prevent checking more than maxSelections (optional: show feedback)
        event.preventDefault();
        // Simple alert, replace with better UI feedback if desired
        alert(`Please select up to ${maxSelections} options.`);
        return;
      }
    } else {
      currentSelections = currentSelections.filter((item) => item !== value);
    }

    setFormData((prevData) => ({
      ...prevData,
      painfulProcesses: currentSelections,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.role) newErrors.role = "Please select your role.";
    if (!formData.practiceArea)
      newErrors.practiceArea = "Please select your practice area.";
    if (formData.painfulProcesses.length === 0)
      newErrors.painfulProcesses = "Please select at least one process.";
    // Basic check for Likert scale completion (can be more granular)
    if (Object.values(formData.capabilityValues).some((v) => v === ""))
      newErrors.capabilityValues = "Please rate all capabilities.";
    if (!formData.mostValuable)
      newErrors.mostValuable = "Please select the most valuable capability.";
    if (formData.followUp === "yes" && !formData.followUpEmail)
      newErrors.followUpEmail = "Please provide your email for follow-up.";
    else if (
      formData.followUp === "yes" &&
      !/\S+@\S+\.\S+/.test(formData.followUpEmail)
    )
      newErrors.followUpEmail = "Please enter a valid email address.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // True if no errors
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const response = await axios.post(
        "https://survey-api-service-667063972406.australia-southeast1.run.app/api/survey/",
        formData
      );
      const data = await response.data;
      if (response.status === 201) {
        window.location.href = "/survey-received";
      }
    } else {
      console.log("Validation Errors:", errors);
      // Optionally scroll to the first error
    }
  };

  // --- Constants for Options (makes it easier to manage) ---
  const roles = [
    "Lawyer (Partner/Managing Partner)",
    "Lawyer (Associate/Counsel)",
    "Paralegal / Legal Assistant",
    "Legal Operations",
    "Solo Practitioner",
    "In-house (Legal Dept Role)",
    "Other",
  ];
  const practiceAreas = [
    "Litigation",
    "Corporate / Commercial",
    "Intellectual Property",
    "Real Estate",
    "Employment Law",
    "Banking & Finance",
    "Regulatory / Compliance",
    "Other",
  ];
  const processes = [
    {
      id: "proc_review",
      label:
        "Reviewing and analyzing documents (contracts, discovery, evidence)",
    },
    {
      id: "proc_research",
      label: "Conducting legal research and summarizing findings",
    },
    {
      id: "proc_draft",
      label: "Drafting documents (contracts, pleadings, correspondence)",
    },
    {
      id: "proc_manage",
      label: "Managing case/matter deadlines, documents, and workflows",
    },
    { id: "proc_due_diligence", label: "Due diligence processes" },
    {
      id: "proc_extract",
      label: "Extracting specific data points from documents",
    },
  ];
  const capabilities = [
    {
      id: "cap1_extract",
      name: "Key Info Extraction",
      text: "Automatically extracting key dates, financial terms, and party names from uploaded contracts.",
    },
    {
      id: "cap2_summarize",
      name: "Research Summarization",
      text: "Generating concise summaries of relevant case law based on a simple query.",
    },
    {
      id: "cap3_risk_identify",
      name: "Risk Identification",
      text: "Identifying potentially problematic or non-standard clauses in agreements against a checklist.",
    },
    {
      id: "cap4_draft",
      name: "First Draft Automation",
      text: "Drafting initial versions of routine documents like NDAs or simple motions based on inputs.",
    },
    {
      id: "cap5_categorize",
      name: "Document Categorization",
      text: "Automatically categorizing and tagging large volumes of discovery documents.",
    },
  ];
  const valueScale = [
    { value: "1", label: "Not Valuable" },
    { value: "2", label: "Slightly Valuable" },
    { value: "3", label: "Moderately Valuable" },
    { value: "4", label: "Very Valuable" },
    { value: "5", label: "Extremely Valuable" },
  ];

  // --- JSX ---
  return (
    <div className="container py-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="col-lg-9 col-xl-8 mx-auto">
        {" "}
        {/* Centered column for readability */}
        <header className="text-center mb-5 pt-4">
          <h1 className="font-montserrat-bold text-near-black mb-3">
            AI Tool for Legal Professionals Survey
          </h1>
          <AccentDivider />
          <p className="text-dark-gray mb-4">
            Help shape a new AI tool designed for legal work. This 3-5 minute
            survey seeks your expertise on which tasks AI could help with most.
            Your responses are confidential.
          </p>
        </header>
        <form onSubmit={handleSubmit} noValidate>
          {/* --- Question 1: Role --- */}
          <div className="mb-4 p-4 border rounded">
            <label className="form-label font-montserrat-bold text-near-black d-block mb-3">
              1. What is your primary role?
            </label>
            {roles.map((role) => (
              <div className="form-check mb-2" key={role}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="role"
                  id={`role_${role.replace(/\W/g, "")}`} // Create unique ID
                  value={role}
                  checked={formData.role === role}
                  onChange={handleInputChange}
                  required
                />
                <label
                  className="form-check-label text-dark-gray"
                  htmlFor={`role_${role.replace(/\W/g, "")}`}
                >
                  {role}
                </label>
              </div>
            ))}
            {errors.role && (
              <div className="text-danger mt-1">
                <small>{errors.role}</small>
              </div>
            )}
          </div>

          {/* --- Question 2: Practice Area --- */}
          <div className="mb-4 p-4 border rounded">
            <label className="form-label font-montserrat-bold text-near-black d-block mb-3">
              2. What is your primary area of legal practice?
            </label>
            {practiceAreas.map((area) => (
              <div className="form-check mb-2" key={area}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="practiceArea"
                  id={`area_${area.replace(/\W/g, "")}`}
                  value={area}
                  checked={formData.practiceArea === area}
                  onChange={handleInputChange}
                  required
                />
                <label
                  className="form-check-label text-dark-gray"
                  htmlFor={`area_${area.replace(/\W/g, "")}`}
                >
                  {area}
                </label>
              </div>
            ))}
            {errors.practiceArea && (
              <div className="text-danger mt-1">
                <small>{errors.practiceArea}</small>
              </div>
            )}
          </div>

          {/* --- Question 3: Painful Processes --- */}
          <div className="mb-4 p-4 border rounded">
            <label className="form-label font-montserrat-bold text-near-black d-block mb-3">
              3. Which processes currently consume the MOST time or cause the
              most frustration/risk?{" "}
              <span className="fw-normal text-medium-gray">
                (Select up to TWO)
              </span>
            </label>
            {processes.map((proc) => (
              <div className="form-check mb-2" key={proc.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="painfulProcesses" // Use same name for grouping conceptually
                  id={proc.id}
                  value={proc.id} // Use ID or Label as value
                  checked={formData.painfulProcesses.includes(proc.id)}
                  onChange={handleCheckboxChange}
                />
                <label
                  className="form-check-label text-dark-gray"
                  htmlFor={proc.id}
                >
                  {proc.label}
                </label>
              </div>
            ))}
            {errors.painfulProcesses && (
              <div className="text-danger mt-1">
                <small>{errors.painfulProcesses}</small>
              </div>
            )}
          </div>

          {/* --- Question 4: Capability Value --- */}
          <div className="mb-4 p-4 border rounded">
            <label className="form-label font-montserrat-bold text-near-black d-block mb-3">
              4. How valuable would AI tools be if they could reliably perform
              the following specific tasks?
            </label>
            {capabilities.map((cap) => (
              <div
                className="mb-4 p-3 border rounded bg-light-gray"
                key={cap.id}
              >
                {" "}
                {/* Subtle background for each item */}
                <p className="mb-2 font-montserrat-bold text-dark-gray">
                  {cap.text}
                </p>
                <div className="d-flex flex-wrap justify-content-between">
                  {" "}
                  {/* Layout scale horizontally */}
                  {valueScale.map((scale) => (
                    <div
                      className="form-check form-check-inline mb-2 me-3"
                      key={`${cap.id}_${scale.value}`}
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name={cap.id} // Unique name for each capability group
                        id={`${cap.id}_${scale.value}`}
                        value={scale.value}
                        checked={
                          formData.capabilityValues[cap.id] === scale.value
                        }
                        onChange={handleCapabilityChange}
                        required
                      />
                      <label
                        className="form-check-label text-dark-gray small"
                        htmlFor={`${cap.id}_${scale.value}`}
                      >
                        {scale.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {errors.capabilityValues && (
              <div className="text-danger mt-1">
                <small>{errors.capabilityValues}</small>
              </div>
            )}
          </div>

          {/* --- Question 5: Most Valuable --- */}
          <div className="mb-4 p-4 border rounded">
            <label className="form-label font-montserrat-bold text-near-black d-block mb-3">
              5. Which ONE capability (from Q4) would provide the single
              greatest improvement?
            </label>
            {capabilities.map((cap) => (
              <div className="form-check mb-2" key={`mostValuable_${cap.id}`}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="mostValuable"
                  id={`mostValuable_${cap.id}`}
                  value={cap.id} // Store the capability ID
                  checked={formData.mostValuable === cap.id}
                  onChange={handleInputChange}
                  required
                />
                {/* Show concise name for selection */}
                <label
                  className="form-check-label text-dark-gray"
                  htmlFor={`mostValuable_${cap.id}`}
                >
                  {cap.name}:{" "}
                  <span className="text-medium-gray">
                    "{cap.text.substring(0, 50)}..."
                  </span>
                </label>
              </div>
            ))}
            {errors.mostValuable && (
              <div className="text-danger mt-1">
                <small>{errors.mostValuable}</small>
              </div>
            )}
          </div>

          {/* --- Question 6: Other Task (Optional) --- */}
          <div className="mb-4 p-4 border rounded">
            <label
              htmlFor="otherTask"
              className="form-label font-montserrat-bold text-near-black d-block mb-3"
            >
              6. (Optional) Is there one other specific, repetitive task or
              process not mentioned you wish AI could handle?
            </label>
            <textarea
              className="form-control" // Assumes styling via CSS
              id="otherTask"
              name="otherTask"
              rows="3"
              value={formData.otherTask}
              onChange={handleInputChange}
              placeholder="Describe the task..."
              style={{ borderColor: "#cccccc" }} // Inline style example if no class
            ></textarea>
          </div>

          {/* --- Question 7: Follow-up (Optional) --- */}
          <div className="mb-5 p-4 border rounded bg-light-gray">
            {" "}
            {/* Use lighter background for optional sections */}
            <label className="form-label font-montserrat-bold text-near-black d-block mb-3">
              Optional: Follow-up
            </label>
            <p className="text-dark-gray small mb-3">
              Would you be open to a brief (15 min) follow-up chat if we have
              questions about your responses?
            </p>
            <div className="form-check form-check-inline me-3">
              <input
                className="form-check-input"
                type="radio"
                name="followUp"
                id="followUpYes"
                value="yes"
                checked={formData.followUp === "yes"}
                onChange={handleInputChange}
              />
              <label
                className="form-check-label text-dark-gray"
                htmlFor="followUpYes"
              >
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="followUp"
                id="followUpNo"
                value="no"
                checked={formData.followUp === "no"}
                onChange={handleInputChange}
              />
              <label
                className="form-check-label text-dark-gray"
                htmlFor="followUpNo"
              >
                No
              </label>
            </div>
            {/* Conditional Email Input */}
            {formData.followUp === "yes" && (
              <div className="mt-3">
                <label
                  htmlFor="followUpEmail"
                  className="form-label text-dark-gray mb-1"
                >
                  <small>
                    Please provide your email (for scheduling only):
                  </small>
                </label>
                <input
                  type="email"
                  className={`form-control form-control-sm ${
                    errors.followUpEmail ? "is-invalid" : ""
                  }`} // Add error styling class if needed
                  id="followUpEmail"
                  name="followUpEmail"
                  value={formData.followUpEmail}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  style={{
                    borderColor: errors.followUpEmail ? "#dc3545" : "#cccccc",
                  }} // Example error styling
                />
                {errors.followUpEmail && (
                  <div className="invalid-feedback d-block">
                    <small>{errors.followUpEmail}</small>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* --- Submit Button --- */}
          <div className="text-center mt-5">
            <button
              type="submit"
              className="btn btn-primary-orange" // Your FuturaLegal button class
              style={{
                padding: "15px 50px", // Generous padding
                fontSize: "18px",
                borderRadius: "25px", // Pill shape
              }}
            >
              Submit Survey
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SurveyPage;

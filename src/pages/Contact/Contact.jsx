import React, { useState } from "react";
import { Link } from "react-router-dom"; // If needed, though not used in this example

// Assume FuturaLegal CSS classes and Bootstrap utilities are available
// Assume Bootstrap Icons are available or use alternative icons

function ContactPage() {
  // Basic state for form inputs (controlled components)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // --- Form Submission Logic ---
    // Add your logic here to handle form submission,
    // e.g., send data to an API endpoint, email service, etc.
    console.log("Form data submitted:", formData);
    alert("Thank you for your message! We will be in touch soon."); // Placeholder confirmation
    // Reset form after submission (optional)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    // Add pt-5 for navbar offset, adjust as needed
    <div className="container py-5 pt-5">
      {/* --- Page Header --- */}
      <header className="mb-5 text-center">
        <h1 className="font-montserrat-bold mb-3">Get In Touch</h1>
        <p className="lead text-dark-gray col-md-10 mx-auto">
          Ready to explore how intelligent automation can transform your
          business? Contact us today for a complimentary, no-obligation
          consultation.
        </p>
        <div className="accent-divider"></div>
      </header>

      {/* --- Main Content Area (Two Columns) --- */}
      <div className="row g-5">
        {/* Left Column: Contact Info & Intro */}
        <div className="col-lg-5">
          <h2 className="font-montserrat-bold h3 mb-3">
            Start the Conversation
          </h2>
          <p className="text-dark-gray mb-4">
            Our team of AI and RPA experts is ready to help you identify
            opportunities to streamline operations, boost productivity, and
            drive growth. We provide tailored automation strategies designed for
            measurable results.
          </p>

          <h3 className="font-montserrat-bold h5 mb-3">Direct Contact</h3>
          <div className="d-flex align-items-center mb-3">
            {/* Use appropriate icons */}
            <a
              href="mailto:info@mushin.com.au"
              className="text-dark-gray text-decoration-none email link"
            >
              info@mushin.com.au
            </a>
          </div>
          <p className="text-muted mt-4">
            Alternatively, please fill out the form and we'll respond promptly.
          </p>
        </div>

        {/* Right Column: Contact Form */}
        <div className="col-lg-7">
          <div className="bg-off-white p-4 p-md-5 rounded border">
            {" "}
            {/* Form container styling */}
            <h2 className="font-montserrat-bold h3 mb-4">
              Request Your Free Consultation
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Name Fields (Side-by-side) */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label
                    htmlFor="firstName"
                    className="form-label font-montserrat-bold"
                  >
                    First Name <span className="text-orange">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control" // Standard Bootstrap input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <label
                    htmlFor="lastName"
                    className="form-label font-montserrat-bold"
                  >
                    Last Name <span className="text-orange">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label font-montserrat-bold"
                >
                  Email <span className="text-orange">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@company.com"
                />
              </div>

              {/* Phone Field (Optional) */}
              <div className="mb-3">
                <label
                  htmlFor="phone"
                  className="form-label font-montserrat-bold"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(Optional)"
                />
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="form-label font-montserrat-bold"
                >
                  Message <span className="text-orange">*</span>
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5" // Adjust height as needed
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us a bit about your challenges or what you'd like to discuss..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                {" "}
                {/* Center button */}
                <button type="submit" className="btn btn-primary-orange px-5">
                  {" "}
                  {/* Use FuturaLegal button class */}
                  Request Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

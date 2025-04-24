import React from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

// IMPORT COMMON
import Navbar from "./pages/01. Components/01. Navbar";
import Footer from "./pages/01. Components/02. Footer";

// IMPORT PAGES
import LandingPage from "./pages/Landing Page/LandingPage";
import NotFoundPage from "./pages/404";
import SolutionsPage from "./pages/Solutions/Solutions";
import SingleCaseStudyPage from "./pages/Case Studies/SingleCaseStudy";
import CaseStudiesListPage from "./pages/Case Studies/CaseStudies";
import AboutUsPage from "./pages/About Us/AboutUs";
import ContactPage from "./pages/Contact/Contact";
import TermsOfServicePage from "./pages/tos";
import PrivacyPolicyPage from "./pages/privacy";
import SurveyPage from "./pages/Survey/Survey";
import ThankYouPage from "./pages/Survey/Survey-Received";
import ContactReceived from "./pages/Contact/Contact-Received";

function App() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      <div className="main mt-5 pt-5" style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/case-studies" element={<CaseStudiesListPage />} />
          <Route
            path="/case-studies/:caseStudySlug"
            element={<SingleCaseStudyPage />}
          />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/survey-received" element={<ThankYouPage />} />
          <Route path="/contact-received" element={<ContactReceived />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

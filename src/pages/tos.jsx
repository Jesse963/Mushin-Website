// src/pages/TermsOfServicePage.jsx or similar path

import React from "react";

// Assuming the AccentDivider component/class is available globally or imported
const AccentDivider = () => <div className="accent-divider mx-auto my-4"></div>;

function TermsOfServicePage() {
  // !!! IMPORTANT: Replace ALL placeholder text below with your actual, legally reviewed Terms of Service content. !!!
  const lastUpdatedDate = "April 17, 2025"; // Update this date

  return (
    <article className="container py-5">
      <div className="col-lg-9 col-xl-8 mx-auto">
        {" "}
        {/* Consistent narrow column */}
        <header className="text-center mb-5 pt-4">
          <h1 className="font-montserrat-bold text-near-black mb-3">
            Terms of Service
          </h1>
          <AccentDivider />
          <p className="text-medium-gray">Last Updated: {lastUpdatedDate}</p>
        </header>
        <section className="">
          <h2 className="font-montserrat-bold text-near-black mb-3">
            1. Acceptance of Terms
          </h2>
          <p className="text-dark-gray">
            By accessing or using the services provided by Mushin Automation
            ("Company", "we", "us", "our"), including our website and software
            solutions (collectively, the "Service"), you agree to be bound by
            these Terms of Service ("Terms"). If you disagree with any part of
            the terms, then you may not access the Service. These Terms apply to
            all visitors, users, and others who access or use the Service.
          </p>
          {/* Add more introductory content as needed */}
        </section>
        <section className="">
          <h2 className="font-montserrat-bold text-near-black mb-3">
            2. Description of Service
          </h2>
          <p className="text-dark-gray">
            Mushin Automation provides sophisticated AI and Robotic Process
            Automation (RPA) solutions designed for large enterprises. The
            specifics of the Service provided to you may be governed by a
            separate agreement (e.g., Master Service Agreement, Subscription
            Agreement). These Terms govern your general use of publicly
            accessible parts of the Service, such as our website, and set
            general conditions applicable unless superseded by a specific
            agreement.
          </p>
          {/* Expand on the service description */}
        </section>
        <section className="">
          <h2 className="font-montserrat-bold text-near-black mb-3">
            3. User Accounts and Responsibilities
          </h2>
          <p className="text-dark-gray">
            If you create an account for the Service, you are responsible for
            maintaining the security of your account and you are fully
            responsible for all activities that occur under the account. You
            must immediately notify us of any unauthorized uses of your account
            or any other breaches of security. We will not be liable for any
            acts or omissions by You, including any damages of any kind incurred
            as a result of such acts or omissions.
          </p>
          <p className="text-dark-gray mt-3">
            You agree not to use the Service for any unlawful purpose or any
            purpose prohibited under this clause. You agree not to use the
            Service in any way that could damage the Service, website, or
            general business of Mushin Automation.
          </p>
          {/* Add details on prohibited uses, content standards etc. */}
        </section>
        {/* --- Add more sections as required --- */}
        {/* Examples: */}
        {/* 4. Intellectual Property */}
        {/* 5. Confidentiality */}
        {/* 6. Disclaimers */}
        {/* 7. Limitation of Liability */}
        {/* 8. Indemnification */}
        {/* 9. Termination */}
        {/* 10. Governing Law */}
        {/* 11. Changes to Terms */}
        <section className="">
          <h2 className="font-montserrat-bold text-near-black mb-3">
            4. Contact Information
          </h2>
          <p className="text-dark-gray">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-dark-gray mt-3">
            Mushin Automation Legal <br />
            <a href="mailto:info@mushin.com.au">info@mushin.com.au</a>
          </p>
        </section>
      </div>
    </article>
  );
}

export default TermsOfServicePage;

// src/pages/PrivacyPolicyPage.jsx or similar path

import React from "react";

// Assuming the AccentDivider component/class is available globally or imported
const AccentDivider = () => <div className="accent-divider mx-auto my-4"></div>;

function PrivacyPolicyPage() {
  // !!! IMPORTANT: Replace ALL placeholder text below with your actual, legally reviewed Privacy Policy content. !!!
  const lastUpdatedDate = "April 17, 2025"; // Update this date

  return (
    <article className="container py-5">
      <div className="col-lg-9 col-xl-8 mx-auto">
        {" "}
        {/* Slightly wider column for readability */}
        <header className="text-center mb-5 pt-4">
          <h1 className="font-montserrat-bold text-near-black mb-3">
            Privacy Policy
          </h1>
          <AccentDivider />
          <p className="text-medium-gray">
            {/* Using Medium Gray for less emphasis */}
            Last Updated: {lastUpdatedDate}
          </p>
        </header>
        <section className="">
          <h2 className="font-montserrat-bold text-near-black mb-3">
            1. Introduction
          </h2>
          <p className="text-dark-gray">
            Welcome to Mushin Automation. We are committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our services and
            website. Please read this privacy policy carefully. If you do not
            agree with the terms of this privacy policy, please do not access
            the site or use our services.
          </p>
          {/* Add more introductory content as needed */}
        </section>
        <section className="">
          <h2 className="font-montserrat-bold text-near-black mb-3">
            2. Information We Collect
          </h2>
          <p className="text-dark-gray">
            We may collect information about you in a variety of ways. The
            information we may collect includes:
          </p>
          <h3 className="font-montserrat-bold text-dark-gray mt-4 mb-2">
            Personal Data
          </h3>
          <p className="text-dark-gray">
            Personally identifiable information, such as your name, shipping
            address, email address, and telephone number, and demographic
            information, such as your age, gender, hometown, and interests, that
            you voluntarily give to us when you register with the Site or when
            you choose to participate in various activities related to the Site
            and our services.
          </p>
          <h3 className="font-montserrat-bold text-dark-gray mt-4 mb-2">
            Usage Data
          </h3>
          <p className="text-dark-gray">
            Information our servers automatically collect when you access the
            Site, such as your IP address, your browser type, your operating
            system, your access times, and the pages you have viewed directly
            before and after accessing the Site.
          </p>
          {/* Add details on Cookies, Financial Data, etc. as required */}
        </section>
        <section className="">
          <h2 className="font-montserrat-bold text-near-black mb-3">
            3. How We Use Your Information
          </h2>
          <p className="text-dark-gray">
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Site or our services to:
          </p>
          <ul className="text-dark-gray ps-4" style={{ lineHeight: "1.7" }}>
            {" "}
            {/* Example list styling */}
            <li>Create and manage your account.</li>
            <li>Email you regarding your account or order.</li>
            <li>
              Improve the efficiency and operation of the Site and services.
            </li>
            <li>
              Monitor and analyze usage and trends to improve your experience.
            </li>
            {/* Add more usage points */}
          </ul>
        </section>
        {/* --- Add more sections as required --- */}
        {/* Examples: */}
        {/* 4. Disclosure of Your Information */}
        {/* 5. Security of Your Information */}
        {/* 6. Policy for Children */}
        {/* 7. Controls for Do-Not-Track Features */}
        {/* 8. Your Privacy Rights (e.g., GDPR, CCPA) */}
        {/* 9. Changes to This Privacy Policy */}
        <section className="">
          <h2 className="font-montserrat-bold text-near-black mb-3">
            4. Contact Us
          </h2>
          <p className="text-dark-gray">
            If you have questions or comments about this Privacy Policy, please
            contact us at:
          </p>
          <p className="text-dark-gray mt-3">
            Mushin Automation Legal
            <br />
            <a href="mailto:info@mushin.com.au">info@mushin.com.au</a>
          </p>
        </section>
      </div>
    </article>
  );
}

export default PrivacyPolicyPage;

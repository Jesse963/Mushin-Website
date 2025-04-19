import React from "react";
import Hero from "./components/01. Hero";
import TrustBar from "./components/02. TrustBar";
import ProblemSolution from "./components/03. ProblemSolution";
import KeyBenefits from "./components/04. KeyBenefits";
import CtaSection from "./components/05. CtaSection";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <KeyBenefits />
      {/* <HowItWorks /> */} {/* Uncomment if implementing */}
      <CtaSection />
    </main>
  );
};
export default LandingPage;

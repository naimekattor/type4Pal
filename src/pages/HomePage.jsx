import React from "react";
import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";
import QuizAnalysis from "../components/QuizAnalysis";
import ProductSuggestions from "../components/Products";
import FreequentlyAsked from "../components/FreequentlyAsked";
import SubscriptionSection from "../components/SubscriptionSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <QuizAnalysis />
      <SubscriptionSection />
      <FreequentlyAsked />
    </div>
  );
};

export default HomePage;

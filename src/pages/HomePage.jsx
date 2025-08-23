import React from "react";
import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";
import QuizAnalysis from "../components/QuizAnalysis";
import ProductSuggestions from "../components/Products";
import FreequentlyAsked from "../components/FreequentlyAsked";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <QuizAnalysis />
      {/* <ProductSuggestions/> */}
      <FreequentlyAsked />
    </div>
  );
};

export default HomePage;

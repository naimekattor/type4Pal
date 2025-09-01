import React from "react";
import flower from "../assets/img/flower.png";
import InfoCard from "./InfoCard";

const QuizAnalysis = () => {
  return (
    <section
      id="Quiz"
      className="py-20 px-4  bg-gradient-to-r from-[#FAF8F5] to-[#FFFAF5] relative"
    >
      <img
        src={flower}
        alt="flower"
        className=" absolute right-0 top-0 rotate-180"
      />
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900">
          App Features
        </h2>
      </div>

      <div className="max-w-2xl mx-auto ">
        <InfoCard />
      </div>
    </section>
  );
};

export default QuizAnalysis;

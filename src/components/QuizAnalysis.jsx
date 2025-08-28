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
          Quiz Analysis
        </h2>
        {/* <p className="mt-2 text-gray-600">
          Lorem Ipsum is simply dummy text of the
        </p> */}
      </div>

      <div className="max-w-3xl mx-auto ">
        {/* Video player placeholder */}

        {/* <video
            controls
            className="w-full h-full object-cover rounded-lg"
            poster="/img/video-thumbnail.jpg"
          >
            <source src="/video/sample-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        <InfoCard />

        {/* Right text block */}
        {/* <div className="text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Process Flow Of Quiz
          </h3>
          
          <p className="text-sm md:text-base text-gray-500 mb-6">
            Particularly impressed by your recent project launch. Given your
            role as Chief Technology Officer, I believe you I recently came
            across TechNova Solutions's innovative work in cloud solutions and
            was particularly impressed by your recent project launch. Given your
            role as Chief Technology Officer, I believe you recently came across
            TechNova Solutions's innovative work in cloud solutions and was
            particularly impressed by your recent project launch. Given your
            role as Chief Tec
          </p>
          <button className="bg-[#FF6F61] text-[13px] text-white font-semibold py-2 px-6 rounded shadow hover:shadow-md transition">
            Download for Free trail
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default QuizAnalysis;

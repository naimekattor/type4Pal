import React, { useState, useEffect } from "react";
import hairImg1 from "../assets/img/hair1.jpg";
import hairImg2 from "../assets/img/hair2.jpg";
import hairImg3 from "../assets/img/hair3.jpeg";
import hairImg4 from "../assets/img/hair4.jpeg";
import hairImg5 from "../assets/img/hair5.jpg";
import hairImg6 from "../assets/img/hair6.jpeg";
const slides = [
  {
    image: hairImg1,
    title: "Hair Profile Quiz",
    description:
      "Find out your porosity, density, and scalp needs in minutes to build a foundation for healthier hair .",
  },
  {
    image: hairImg3,
    title: "Al-Powered Product Matches",
    description:
      "Say goodbye to trial and error. Get personalized product recommendations that actually work for your unique hair profile.",
  },
  {
    image: hairImg2,
    title: "Smart Routine Builder",
    description:
      "Turn wash days into a stress-free ritual. Create daily, weekly, and monthly plans with reminders to to keep you consistent.",
  },
  {
    image: hairImg1,
    title: "Hair Health Dashboard",
    description:
      "Watch your progress in real time. Track your hair health and growth with clear visuals and side-by-side photos.",
  },
  {
    image: hairImg5,
    title: "Daily Haircare Tips",
    description:
      "Small changes, big results. Receive bite-sized tips tailored to your routine so your hair stays healthy between washes.",
  },
];

// Custom Arrow Components
const ChevronLeft = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export default function InfoCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full  mx-auto bg-white rounded-3xl overflow-hidden px-10 py-4">
      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center ">
          {/* Left: Image */}
          <div className="flex justify-center ">
            <div className="relative">
              <div className="relative w-full ">
                <img
                  src={currentSlideData.image}
                  alt={currentSlideData.title}
                  className="w-full max-h-[500px] object-contain rounded-lg shadow"
                />
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className=" flex md:items-start items-center justify-center md:justify-start px-2">
            <div className="space-y-6 max-w-lg">
              <h2 className="text-2xl md:text-2xl font-bold text-gray-700 leading-tight">
                {currentSlideData.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {currentSlideData.description}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          aria-label="previous slide"
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute -left-9 top-1/2 transform -translate-y-1/2 z-20 group disabled:opacity-50 disabled:cursor-not-allowed hidden md:block"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </div>
        </button>

        <button
          aria-label="next slide"
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute -right-9 top-1/2 transform -translate-y-1/2 z-20 group disabled:opacity-50 disabled:cursor-not-allowed hidden md:block"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </div>
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`h-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                index === currentSlide
                  ? "bg-gray-800 w-6"
                  : "bg-gray-300 hover:bg-gray-400 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

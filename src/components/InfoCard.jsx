import React, { useState, useEffect } from "react";
import hairImg1 from "../assets/img/hair1.jpeg";
import hairImg2 from "../assets/img/hair2.jpeg";
import hairImg3 from "../assets/img/hair3.jpeg";
import hairImg4 from "../assets/img/hair4.jpeg";
import hairImg5 from "../assets/img/hair5.png";
import hairImg6 from "../assets/img/hair6.jpeg";
const slides = [
  {
    image: hairImg1,
    title: "Read advice from our experts",
    description:
      "Receive actual information and useful advice every week. Which products is better for my hair? Is it safe ingredients? Myth or truth? We answer all these questions and many more every week.",
  },
  {
    image: hairImg2,
    title: "Know your PEH balance",
    description:
      "Understand your PEH balance to get the best routine for your hair type. Personalized tips and product recommendations included.",
  },
  {
    image: hairImg3,
    title: "Discover safe ingredients",
    description:
      "We help you understand which ingredients are safe, effective, and suitable for your unique hair needs.",
  },
  {
    image: hairImg4,
    title: "Discover safe ingredients",
    description:
      "We help you understand which ingredients are safe, effective, and suitable for your unique hair needs.",
  },
  {
    image: hairImg5,
    title: "Discover safe ingredients",
    description:
      "We help you understand which ingredients are safe, effective, and suitable for your unique hair needs.",
  },
  {
    image: hairImg6,
    title: "Discover safe ingredients",
    description:
      "We help you understand which ingredients are safe, effective, and suitable for your unique hair needs.",
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
  }, [currentSlide]);

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center min-h-[500px]">
          {/* Left: Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="">
                <img
                  src={currentSlideData.image}
                  alt={currentSlideData.title}
                  className="w-full h-[400px]  object-cover transition-all duration-500"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="480" viewBox="0 0 400 480"><rect width="400" height="480" fill="%23f3f4f6"/><circle cx="200" cy="180" r="60" fill="%236b7280" opacity="0.3"/><path d="M140 300 Q200 340 260 300" stroke="%236b7280" stroke-width="4" fill="none" opacity="0.3"/><text x="50%" y="85%" text-anchor="middle" dy="0.3em" font-family="Arial, sans-serif" font-size="18" fill="%236b7280" opacity="0.5">Hair Care Image</text></svg>`;
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="text-center lg:text-left px-4">
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
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute -left-9 top-1/2 transform -translate-y-1/2 z-20 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </div>
        </button>

        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute -right-9 top-1/2 transform -translate-y-1/2 z-20 group disabled:opacity-50 disabled:cursor-not-allowed"
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

import React, { useState } from 'react';

// ArrowRight icon from Lucide React for the accordion
const ArrowRight = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// AccordionItem component handles the state and rendering for each FAQ item
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage if the accordion item is open or closed

  // Function to toggle the open/closed state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggleAccordion}
        aria-expanded={isOpen} // ARIA attribute for accessibility
      >
        {/* Question text */}
        <span className="text-lg font-medium text-gray-800">{question}</span>
        {/* Arrow icon that rotates based on isOpen state */}
        <ArrowRight
          className={`text-gray-500 transition-transform duration-300 ${
            isOpen ? 'rotate-90' : ''
          }`}
        />
      </button>
      {/* Answer content, conditionally rendered based on isOpen state */}
      {isOpen && (
        <div className="mt-3 pr-8 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem
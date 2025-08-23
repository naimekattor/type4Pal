import React from "react";
import HowItWorkIcon from "../assets/img/HowItWorkIcon.png";
import flower from "../assets/img/flower.png";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Personalized Hair Profile",
      description:
        "Quickly identify your hair's unique characteristics, including curl pattern, porosity, density, thickness, and scalp condition. Type4 Pal's comprehensive quiz takes the guesswork out of hair care.",
    },
    {
      id: 2,
      title: " AI-Driven Recommendations",
      description:
        "Powered by advanced AI, Type4 Pal recommends hair products uniquely suited to your hair’s specific needs and environmental factors. No more guessing, get effective products matched to your exact hair profile.",
    },
    {
      id: 3,
      title: "Smart Routine Builder",
      description:
        "Create, schedule, and stick to personalized hair care routines with ease. Type4 Pal helps you never skip a step, ensuring consistent hair health improvements through daily, weekly, and monthly reminders.",
    },
    {
      id: 4,
      title: "Hair Health Dashboard",
      description:
        "Visually monitor your hair’s progress with the comprehensive hair-health dashboard. Track length, elasticity, strength, scalp health, and more! Celebrate your growth and identify areas for improvement.",
    },
  ];

  return (
    <section id="HowItWorks" className="relative ">
      {/* Background Image: Positioned absolutely to the parent section */}
      <img
        src={flower}
        alt="flower"
        className="absolute left-0 top-0 shrink-0"
      />

      {/* Foreground Content: Positioned relatively with a higher z-index to appear on top */}
      {/* We remove 'bg-white' to let the background image show through */}
      <div className="relative z-10 py-20 px-4 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004D40]">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left side boxes */}
          <div className="flex flex-col gap-[80px]">
            {steps.slice(0, 2).map((step) => (
              <div
                key={step.id}
                className="bg-orange-50 rounded-xl shadow-md p-6 text-left"
              >
                <h3 className="text-xl font-bold text-[#FF6F61] mb-2">
                  {step.id}. {step.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="flex justify-center">
            <img
              src={HowItWorkIcon}
              alt="How it works illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Right side boxes */}
          <div className="flex flex-col gap-[80px]">
            {steps.slice(2).map((step) => (
              <div
                key={step.id}
                className="bg-orange-50 rounded-xl shadow-md p-6 text-left"
              >
                <h3 className="text-xl font-bold text-[#FF6F61] mb-2">
                  {step.id}. {step.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

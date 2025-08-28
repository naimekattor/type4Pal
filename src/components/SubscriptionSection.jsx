import { GrCheckbox } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";

const plans = [
  {
    name: "Freemium",
    price: "$0",
    period: "/month",

    features: [
      "Hair-Profile Quiz",
      "AI Product Recommendations   (limited to 3 per category, basic filters)",
      "Basic Wash-Day Routine (no reminders, max 2 routines)",
      "Referral Program (earn free-month credits)",
      " Ads free",
    ],
    buttonText: "Download Now",
  },
  {
    name: "Basic Tier",
    price: "$5.99",
    period: "/month",

    features: [
      "All freemium freatures",
      "Unlimited AI Recommendations  (advanced ingredient & compatibility filters)",
      "Advanced Routine Builder(unlimited daily/weekly/monthly routines, smart sequencing, reminders)",
      "Hair-Health Dashboard (track length, breakage, elasticity, scalp health, photo progress)",
      "Additional analysis tests",
      "Ads free",
    ],
    buttonText: "Download Now",
  },
  {
    name: "Premium",
    price: "$59",
    period: "/Year",

    features: [
      "All freemium freatures",
      "Unlimited AI Recommendations  (advanced ingredient & compatibility filters)",
      "Advanced Routine Builder(unlimited daily/weekly/monthly routines, smart sequencing, reminders)",
      "Hair-Health Dashboard (track length, breakage, elasticity, scalp health, photo progress)",
      "Additional analysis tests",
      "Ads free",
    ],

    buttonText: "Download Now",
  },
];

export default function SubscriptionSection() {
  return (
    <section id="Pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[42px] font-bold text-black mb-4">
            Subscription Plans
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl  mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#fff7ed] shadow-md border-gray-800 hover:border-[#1E90FF] transition-all duration-300 px-4 py-6`}
            >
              <h2 className="text-center pb-4">
                <h3 className="text-[#1e2939] text-xl font-bold mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-[#1e2939]">
                    {plan.price}
                  </span>
                  <span className="text-[#1e2939] ml-1">{plan.period}</span>
                </div>
                <button
                  className={` 
                    plan.popular bg-[#FF6F61] px-8 py-4 hover:bg-[#fa5749] text-white border  cursor-pointer font-semibold rounded-lg
                  `}
                >
                  {plan.buttonText}
                </button>
              </h2>

              <div className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      {feature.includes("Ads free") &&
                      plan.name === "Freemium" ? (
                        <GrCheckbox className="w-4 h-4 text-[#1e2939] mt-0.5 flex-shrink-0" />
                      ) : (
                        <IoMdCheckboxOutline className="w-5 h-5 text-[#1e2939] mt-0.5 flex-shrink-0" />
                      )}

                      <span className="text-[#1e2939] text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

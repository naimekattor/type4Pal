import AccordionItem from "./AccordionItem";
import ellipse from "../assets/img/Ellipse.png";

const FreequentlyAsked = () => {
  const faqData = [
    {
      question: "What is Type4Pal?",
      answer:
        "Type4Pal is a personalized hair care app designed especially for natural, coily, and kinky hair types. It uses AI to recommend products, build routines, and track your hair health.",
    },
    {
      question: "What hair types does Type4Pal support?",
      answer:
        "The app was created with tightly coiled and afro-textured hair in mind, but anyone with curly, coily, or wavy hair can benefit from its personalized features and product recommendations.",
    },
    {
      question: "How does the app work?",
      answer:
        "Start with a quick hair profile quiz, then get AI-powered analysis, customized routines, and daily care tips. Track your progress with the Hair Health Dashboard and stay consistent with smart reminders.",
    },
    {
      question: "What makes Type4Pal different from other hair apps?",
      answer:
        "Type4Pal goes beyond generic advice. It’s tailored for natural hair, powered by AI, and designed to help you stay consistent with your routine, while also connecting you to a supportive community.",
    },
    {
      question: "What features are free?",
      answer:
        "The free plan includes the hair profile quiz, limited product recommendations, daily tips, and basic hair profile analysis.",
    },
    {
      question: "What do I get with Premium?",
      answer:
        "Premium unlocks the full experience: unlimited recommendations, the Hair Health Dashboard, smart routine builder with reminders and advanced hair profile analysis.",
    },
    {
      question: "How much does Premium cost?",
      answer:
        "Premium is $5.99 per month or $59 per year (with two months free).",
    },
    {
      question: "Will my data be safe?",
      answer:
        "Yes. Your privacy is important to us. We securely store your information and never sell your data.",
    },
    {
      question: "Can I use Type4Pal if I live outside the U.S.?",
      answer:
        "Absolutely. Type4Pal is available globally, with product recommendations and tips tailored to your location and climate.",
    },
    {
      question: "How do I get started?",
      answer:
        "Download the app, take the hair quiz, and start exploring your personalized recommendations and routines.",
    },
  ];

  return (
    <div
      id="FAQ"
      className="px-4 py-20 bg-gradient-to-b from-[#fffaf6] to-[#ffffff]   font-sans relative "
    >
      <img
        src={ellipse}
        className="absolute -top-[200px] -left-[800px] w-full h-[600px] -z-10"
      />
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004D40] mb-2 text-center ">
        Frequently Asked Questions
      </h1>

      <div className="max-w-7xl w-full   overflow-hidden md:flex mx-auto">
        {/* Left Section: Frequently Asked Questions and Accordion */}
        <div className="md:w-2/3 ">
          {/* Accordion Items */}
          <div className="space-y-0">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index} // Using index as key, consider a unique ID if data changes order
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>

        {/* Right Section:  */}
        <div className="md:w-1/3  flex items-center justify-center p-6 sm:p-8 lg:p-10">
          <div className="relative w-28 h-28 sm:w-64 sm:h-64 lg:w-40 lg:h-40 bg-[#F3FAF9] rounded-full flex flex-col items-center justify-center text-center shadow-inner">
            <a
              href="mailto:example@gmail.com"
              className="text-[16px] sm:text-6xl lg:text-2xl font-bold text-[#00000] opacity-75 hover:underline"
            >
              Contact Us
            </a>
            {/* <p className="mt-2 text-sm sm:text-base text-[#919BB7] text-[15px] leading-tight px-4">
              Let us know if you have any other questions, our team is always
              happy to help!
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreequentlyAsked;

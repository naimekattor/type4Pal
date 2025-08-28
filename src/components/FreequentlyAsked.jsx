import AccordionItem from "./AccordionItem";
import ellipse from "../assets/img/Ellipse.png";

const FreequentlyAsked = () => {
  const faqData = [
    {
      question: "What hair types does Type4Pal support?",
      answer:
        "Type4 Pal is designed with a special focus on tightly curled, kinky, and afro-textured hair, but anyone regardless of hair type can benefit from its personalized care, routines, and product recommendations.",
    },
    {
      question: "How does the AI work?",
      answer:
        "Our AI analyzes detailed hair profiles against scientifically vetted product ingredients, user feedback, and environmental data to provide personalized care recommendations.",
    },
    {
      question: "Is Type4Pal free to use?",
      answer:
        "The app offers a freemium version with core features free of charge. Premium subscriptions offer comprehensive features including routine reminders, advanced analytics, and more.",
    },
  ];

  return (
    <div
      id="FAQ"
      className="py-20 bg-gradient-to-b from-[#fffaf6] to-[#ffffff]   font-sans relative "
    >
      <img
        src={ellipse}
        className="absolute -top-[200px] -left-[800px] z-50 w-full h-[600px]"
      />
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004D40] mb-2 text-center ">
        Frequently Asked Questions
      </h1>

      <div className="max-w-7xl w-full   overflow-hidden md:flex mx-auto">
        {/* Left Section: Frequently Asked Questions and Accordion */}
        <div className="md:w-2/3 p-6 sm:p-8 lg:p-10">
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
              className="text-xl sm:text-6xl lg:text-2xl font-bold text-[#00000] opacity-75"
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

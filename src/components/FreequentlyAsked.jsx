import AccordionItem from "./AccordionItem";
import ellipse from '../assets/img/Ellipse.png'

// Main App component that renders the entire FAQ section
const FreequentlyAsked = () => {
  // Data for the FAQ accordion items
  const faqData = [
    {
      question: 'What is field service management ?',
      answer:
        'Field service management (FSM) refers to the processes and systems used by organizations to manage and optimize their field operations. This typically includes scheduling, dispatching, managing mobile workforces, and tracking inventory and assets.',
    },
    {
      question: 'What are the benefits of field service management ?',
      answer:
        'Benefits include improved efficiency, reduced operational costs, better customer satisfaction, real-time visibility into field operations, and enhanced data collection for decision-making.',
    },
    {
      question: 'How much does field service management cost?',
      answer:
        'The cost of FSM solutions varies widely depending on the provider, features included, number of users, and deployment model (cloud-based vs. on-premise). It can range from affordable monthly subscriptions for small businesses to significant investments for large enterprises.',
    },
    {
      question: 'What are the common features of field service management ?',
      answer:
        'Common features include work order management, scheduling and dispatching, mobile access for technicians, customer management, inventory management, reporting and analytics, and integration capabilities with other business systems.',
    },
    {
      question: 'Factors to consider when buying field service management ?',
      answer:
        'Key factors include scalability, ease of use, integration capabilities, mobile functionality, reporting features, customer support, and pricing models. It\'s also important to consider your specific industry needs and future growth plans.',
    },
    {
      question: 'Who needs field service management ?',
      answer:
        'Any business that dispatches technicians or mobile employees to customer locations for installations, maintenance, repairs, or inspections can benefit from FSM. This includes industries like HVAC, plumbing, telecommunications, healthcare, utilities, and many more.',
    },
  ];

  return (
    <div id="FAQ" className="p-4 bg-gradient-to-b from-[#fffaf6] to-[#ffffff] sm:p-6 lg:p-8 font-sans relative " >
        <img src={ellipse} className="absolute -top-[200px] -left-[800px] z-50 w-full h-[600px]"/>
        {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004D40] mb-2 text-center">
            Frequently Asked Questions
          </h1>
          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#6B6868] mb-8 mt-2 text-center">
            We recommend the perfect natural products for your hair
          </p>
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

        {/* Right Section: FAQ Graphic */}
        <div className="md:w-1/3  flex items-center justify-center p-6 sm:p-8 lg:p-10">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-[#F3FAF9] rounded-full flex flex-col items-center justify-center text-center shadow-inner">
            <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#919BB7] opacity-75">
              FAQ
            </span>
            <p className="mt-2 text-sm sm:text-base text-[#919BB7] text-[15px] leading-tight px-4">
              Let us know if you have any other questions, our team is always happy to help!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreequentlyAsked;
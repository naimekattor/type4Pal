import React from 'react';
import HowItWorkIcon from '../assets/img/HowItWorkIcon.png'
import flower from '../assets/img/flower.png'
const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Quiz test',
      description:
        'Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is Ipsum is simply dummy text of the printing and Lorem Ipsum is',
    },
    {
      id: 2,
      title: 'Analysis',
      description:
        'Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is Ipsum is simply dummy text of the printing and Lorem Ipsum is',
    },
    {
      id: 3,
      title: 'Hair care Routine',
      description:
        'Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is Ipsum is simply dummy text of the printing and Lorem Ipsum is',
    },
    {
      id: 4,
      title: 'Products',
      description:
        'Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is Ipsum is simply dummy text of the printing and Lorem Ipsum is',
    },
  ];

  return (
    <section  id='HowItWorks' className='relative'>
      <img src={flower} alt="flower" className=' absolute left-0 top-0' />
      <div className="py-20 px-4 max-w-6xl mx-auto bg-white ">
      
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004D40]">How It Works</h2>
        <p className="mt-2 text-[#6B6868] text-[16px] font-[400]">
          Lorem Ipsum is simply dummy text of the printing and
        </p>
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

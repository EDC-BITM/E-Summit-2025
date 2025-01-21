import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const frequentlyAskQuestions = [
  {
    title: "How many members can form a team?",
    description: "One to four members can participate depending upon the event.",
  },
  {
    title: "Is professional knowledge of Figma required to attend UI/UX workshop?",
    description: "No, we will be there to guide you through each step.",
  },
 
  {
    title: "Are there networking sessions or social events planned?",
    description: "Yes, we have various speakers' sessions planned with various startup founders, CXO's etc inlcuding Vijendar Chauhan.",
  },
 
  {
    title: "How can we register for all the events?",
    description: "The website contains the link for each event which will redirect you to bharatversity from where you can register for all the events.",
  },

  {
    title: "How can I get updates and announcements about E-Summit?",
    description: "Follow us on our social media handles to get regular updates.",
  },
];

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const togglerFunction = (index) => {
    setActiveId(activeId === index ? null : index);
  };

  const memoizedQuestions = useMemo(() => {
    return frequentlyAskQuestions.map((item, i) => (
      <div
        key={i}
        className={`border rounded-lg overflow-hidden ${
          activeId === i ? "bg-zinc-800" : "bg-zinc-900"
        }`}
      >
        <div
          className={`px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-zinc-700 transition-colors`}
          onClick={() => togglerFunction(i)}
        >
          <p className="flex-1 text-[#EEEEEE]">{item.title}</p>
          <span
            className={`text-[#EEEEEE] transform transition-transform duration-300 ${
              activeId === i ? "rotate-180" : "rotate-0"
            }`}
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === i ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="px-4 py-3 bg-zinc-900 text-[#B6B6B6]">
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    ));
  }, [activeId]);

  return (
    <section className="faq w-full relative mx-auto pt-12 pb-12">
      <div className="absolute top-0 left-0 w-[200px] h-[400px] md:w-[600px] md:h-[600px] bg-green-500/30 rounded-full blur-3xl" />
      <div className="flex flex-col justify-center items-center md:gap-6 gap-3 mb-8 ">
        <h1 data-aos="fade-down" data-aos-duration="1000" className="font-semibold md:text-5xl text-3xl text-white">
          Frequently Asked Questions
        </h1>
        <div className="h-1 w-36 bg-primaryGreen rounded-md"></div>
      </div>

      <div data-aos="fade-down" data-aos-duration="1000" className="w-full flex justify-center">
        <div className="md:w-[50rem] w-96 h-max space-y-4">
          {memoizedQuestions}
        </div>
      </div>
    </section>
  );
};

export default Faq;

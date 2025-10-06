import React, { useState } from 'react';
import { H2, H3, P } from '../../../styles/Typography';
import { ContactUs } from '../../../styles/Button';


interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Duis aute irure dolor in reprehenderit in voluptate velit esse?",
    answer: "This is the answer to question 1. It explains more about the question in detail. It explains more about the question in detail. It explains more about the question in detail."
  },
  {
    question: "Duis aute irure dolor in reprehenderit in voluptate velit esse Lorem ipsum dolor?",
    answer: "This is the answer to question 2. It goes into some helpful explanation. It explains more about the question in detail. It explains more about the question in detail."
  },
  {
    question: "Why do we use it instead of actual content?",
    answer: "To focus on layout and interaction, we use placeholder content during development. It explains more about the question in detail. It explains more about the question in detail."
  },
  {
    question: "What are the benefits of Tailwind CSS?",
    answer: "Tailwind CSS allows rapid UI development using utility-first class names. It explains more about the question in detail. It explains more about the question in detail."
  },
  {
    question: "How does the accordion work?",
    answer: "It uses React state to track which item is open and show/hide content accordingly. It explains more about the question in detail. It explains more about the question in detail."
  },
  {
    question: "Is this component accessible?",
    answer: "Yes. We use ARIA attributes and keyboard navigation to enhance accessibility. It explains more about the question in detail. It explains more about the question in detail."
  },
  {
    question: "Can I use this on mobile?",
    answer: "Absolutely. The layout adjusts to screen size using responsive Tailwind classes. It explains more about the question in detail. It explains more about the question in detail."
  }
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <div className="mb-4 text-sm text-gray-700 flex items-center">
            <span className="w-8 h-1 rounded-full bg-gray-400 mr-2"></span>
            <H3>Quis autem</H3>
          </div>
          <H2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Sed ut perspiciatis unde
          </H2>
          <P className="text-gray-600 mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu Duis aute irure dolor in reprehenderit in Duis aute irure dolor in reprehenderit in.
          </P>
          <ContactUs>CONTACT US </ContactUs>
        </div>

        {/* Right Section (Accordion) */}
        <div className="lg:w-1/2">
          {faqData.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className="text-gray-900 font-medium">{item.question}</span>
                  <span className="text-xl text-gray-500">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={`faq-content-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} text-gray-600`}
                >
                  <div className="pb-4 pr-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );                     
};

export default FaqSection;
                                                                                                                                                                                                                              
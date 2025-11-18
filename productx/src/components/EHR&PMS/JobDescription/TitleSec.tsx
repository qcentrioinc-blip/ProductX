import React from 'react';
import { H1, P } from '../../../styles/Typography';
import { Link } from 'react-router-dom';

const JobHeaderBanner: React.FC = () => {
  const jobData = {
    location: "Hyderabad, Telangana",
    title: "Front Desk Office Executive",
    experience: "1 - 4 Years",
  };

 

  return (
    <section
      className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(255, 249, 243, 0.5) 0%, rgba(200, 255, 215, 0.5) 100%)",
      }}
    >
      <div
        className="
          w-full 
          max-w-6xl 
          mx-auto 
          px-6 
          flex 
          flex-col 
          justify-center
          sm:items-start 
          sm:text-left
          items-center 
          text-center
          md:max-w-6xl
          sm:gap-0
          gap-2
        "
      >
        {/* Location */}
        <P className="text-gray-600 tracking-wide mb-2 sm:mb-3">
          {jobData.location}
        </P>

        {/* Title */}
        <H1 className="text-green-700 leading-tight mb-4 sm:mb-6">
          {jobData.title}
        </H1>

        {/* Experience */}
        <P className="text-gray-700 mb-8 sm:mb-10">
          Experience :{" "}
          <span className="font-semibold text-green-800">
            {jobData.experience}
          </span>
        </P>
<Link to="/industries/ehr-and-pms/application-form">
        {/* Button */}
        <button
         
          className="
            inline-flex 
            items-center 
            justify-center 
            px-6 sm:px-8 
            py-3 
            bg-gray-800 
            text-white 
            rounded-lg 
            shadow-lg 
            hover:bg-gray-900 
            transition 
            duration-300 
            transform 
            hover:scale-[1.02]
          "
        >
          SUBMIT APPLICATION
          <svg
            className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
        </Link>
      </div>
    </section>
  );
};

export default JobHeaderBanner;

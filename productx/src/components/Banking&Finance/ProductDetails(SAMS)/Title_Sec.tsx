import React from 'react';
import { ContactUs } from '../../../styles/Button';
import { H1, P } from '../../../styles/Typography';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[1150px] flex flex-col items-start bg-transparent overflow-hidden">
      {/* Pink Background Section */}
      <div className="relative w-full bg-[#A800405C] h-[750px] md:h-[750px] flex flex-col items-start">

      {/* Curved circular accent on top-right */}
      <div className="absolute top-0 right-0 w-[850px] h-[850px] rounded-full border-[17px] border-[#E4E9FF] opacity-70 translate-x-1/4 -translate-y-1/4 hidden md:block"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full border-[10px] border-[#cfcfcf] opacity-70 translate-x-1/4 -translate-y-1/4 hidden md:block"></div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-3xl mx-auto mt-15 mb-10 px-6 py-20 text-left">
          <H1 className="text-gray-900 mb-4 md:ml-[-270px] ml-0">
            Lorem ipsum dolor , consectetur adipis
          </H1>
          <P className="text-gray-800 max-w-xl mx-auto mb-8 md:ml-[-270px] ml-0">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </P>

          <ContactUs className="md:ml-[-270px] ml-0">CONTACT US</ContactUs>
        </div>

        {/* Images Section */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex justify-center gap-6 flex-wrap px-6 w-full">
          <img
            src="/SAMS/img1.png"
            alt="Dashboard 1"
            className="rounded-lg shadow-md w-[410px] h-[430px] md:w-[410px] md:h-[430px] sm:w-[60vw] sm:h-auto object-cover"
          />
          <img
            src="/SAMS/img1.png"
            alt="Dashboard 2"
            className="rounded-lg shadow-md w-[410px] h-[430px] md:w-[410px] md:h-[430px] sm:w-[60vw] sm:h-auto object-cover"
          />
          <img
            src="/SAMS/img1.png"
            alt="Dashboard 3"
            className="rounded-lg shadow-md w-[410px] h-[430px] md:w-[410px] md:h-[430px] sm:w-[60vw] sm:h-auto object-cover"
          />
        </div>
      </div>

      {/* White Background Section */}
      <div className="w-full bg-[#faebf0] h-[400px] md:h-[400px]"></div>
    </section>
  );
};

export default HeroSection;

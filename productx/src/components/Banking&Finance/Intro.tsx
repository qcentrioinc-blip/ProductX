import { ContactUs } from "../../styles/Button";
 
 
const Intro = () => {
 
  return (
    <section className="relative w-full bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Decorative Images */}
      {/* Vector Line - Top Right */}
      <div className="absolute top-0 right-0 w-24 sm:w-28 md:w-32 lg:w-40   pointer-events-none">
        <img
          src="/VectorLine.png"
          alt=""
          className="w-full h-auto"
        />
      </div>
 
      {/* Star - Bottom Right */}
      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 md:bottom-0 md:right-0 w-16 sm:w-20 md:w-24 lg:w-32  pointer-events-none md:pb-10">
        <img
          src="/Star.png"
          alt=""
          className="w-full h-auto"
        />
      </div>
 
      {/* Content Container */}
      <div className="relative max-w-8xl md:px-0 md:mx-10 px-4 sm:px-8 lg:px-8">
        <div className="max-w-4xl">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="text-[#2B68C3]">Sed ut perspiciatis</span>{' '}
            <span className="text-[#666666]">Unde Seduo ut perspiciatis</span>
          </h2>
 
          {/* First Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-[#666666] mb-4 md:mb-6 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
          </p>
 
          {/* Second Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-[#666666] mb-8 md:mb-10 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
          </p>
 
          {/* Contact Button */}
          <ContactUs className="inline-flex items-center gap-2">
            CONTACT US
           
          </ContactUs>
        </div>
      </div>
    </section>
  );
};
 
export default Intro;
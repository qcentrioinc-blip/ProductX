import { ContactUs } from '../../../styles/Button';
import { H1, P } from '../../../styles/Typography';

export default function HeroSection() {
  return (
    <section className="w-full h-[800px] flex items-center justify-center bg-white relative pt-[100px]">
      {/* pt-[100px] adds extra space above content to avoid navbar overlap */}
      <div className="w-full flex flex-col md:flex-row items-center px-4 sm:px-8 py-10 bg-white lg:ml-[80px] gap-10">
        {/* Left: Text + Button */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:pr-8">
          <H1 className="text-[28px] md:text-[32px] lg:text-[48px]">
            Lorem ipsum dolor,<br /> consectetur adipis
          </H1>
          <P className="mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </P>
          <ContactUs>CONTACT US</ContactUs>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
          <img
            src="/ProductDetails4/Title_img.png"
            alt="Sales Report Overview"
            className="w-full max-w-xs sm:w-[1000px] sm:h-[500px] md:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}

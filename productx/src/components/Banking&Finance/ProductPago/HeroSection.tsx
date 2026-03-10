import { Link } from 'react-router-dom';
import { ContactUs } from '../../../styles/Button';
import { H1, P } from '../../../styles/Typography';

const HeroSection = () => {
  return (
    <section className="w-full bg-[#2B68C3] overflow-hidden">
      <div className="max-w-7xl mx-auto py-10 xl:py-16 pt-16 xl:pt-36">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div className="max-w-xl text-center lg:text-left">

            <H1 className="text-white mb-6">
              Lorem ipsum dolor ,<br />
              consectetur adipisc
            </H1>

            <P className="text-white/90 mb-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit.
            </P>

         <Link
                            to="#contact-us"
                            onClick={(e) => {
                                const el = document.getElementById("contact-us");
                                if (el) {
                                    e.preventDefault();
                                    el.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
            <ContactUs className="hidden xl:block gap-2 whitespace-nowrap shrink-0">
              Learn More
            </ContactUs>
            </Link>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center items-center">

        

            <img
              src="/ProductDetailsThree/PagoHero.webp"
              alt="Hero visual"
              className="relative z-10   xl:w-[700px] object-cover "
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
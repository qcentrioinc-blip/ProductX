import { Link } from "react-router-dom";
import { H1, H4, P } from "../../../styles/Typography";
import { ContactUs } from "../../../styles/Button";

const HeroSec1 = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#3f7cc4] to-[#3a78c0] pt-20 lg:pt-40 px-6 pb-8 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-stretch">

          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src="/ProductBankfair/HERO.webp"
              alt=""
              className="w-full h-[500px] md:h-[640px] object-cover rounded-3xl"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-between h-[500px] md:h-[640px]">

            {/* TOP CONTENT */}
            <div>
              <H1 className="text-white leading-tight mb-6 xl:mt-20">
                Bank Operations Suite
              </H1>

              <P className="max-w-2xl text-white/80 mb-6">
                Parameterized core banking and loan management platform designed for financial institutions. Streamlines operations with automated processes, multi-currency support, and scalable architecture. Ensures regulatory compliance while enabling customized product offerings. 
              </P>

              <Link
            to="/marketplace"
            
          >
            <ContactUs>Discover Bankfair Today </ContactUs>
          </Link>
            </div>

            {/* BOTTOM CARDS */}
            <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">

              {/* Card 1 - Image Background */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg 
min-h-[80px] md:min-h-[130px] lg:min-h-[180px]">

                <img
                  src="/ProductBankfair/img1.webp"
                  className="absolute inset-0 w-full h-full object-cover opacity-100"
                  alt=""
                />

                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-gray-400"></div> */}

                <H4 className="relative h-full flex text-[#2B68C3] items-center justify-center text-center font-semibold ">
                  Multi-Currency   <br /> Banking Operations
                </H4>

              </div>

              {/* Card 2 */}
              <div className="bg-white text-gray-800 rounded-2xl p-6 flex items-center gap-5 shadow-lg 
min-h-[80px] md:min-h-[130px] lg:min-h-[180px]">

                <div className="w-[72px] h-[72px] rounded-full bg-[#2B68C3] flex items-center justify-center flex-shrink-0">

  <img
    src="/ProductBankfair/icon1.svg"
    alt="icon"
    className="w-8 h-8 object-contain"
  />

</div>

                <div>
                  <H4 className="text-gray-900 mb-1">
                    End-to-End Loan Management 
                  </H4>

                  <P className=" text-gray-600">
                    Configure products, automate disbursements, track repayments, and manage collateral, all from a single integrated platform. 
                  </P>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSec1;
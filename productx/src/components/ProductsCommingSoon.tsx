import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductsCommingSoon() {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-6 overflow-hidden">

      {/* Subtle Background Accent */}
      <div className="absolute right-0 top-0 w-[40%] h-full bg-[#F4F8FF] hidden xl:block"></div>

      <div className="max-w-5xl w-full grid xl:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[24px] md:text-[32px] lg:text-[48px]

      font-bricolageEHR
        leading-[120%] text-[#2B68C3]"
          >
            Comming Soon..
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]
        font-quicksand
        leading-[120%] max-w-xl"
          >
            We’re working on something exciting. This product is currently under development and will be available soon.

In the meantime, feel free to explore our existing solutions or return to the previous page.
          </motion.p>

          <div className="mt-10 flex flex-col sm:flex-row gap-6">
            <Link
              to="/industries/banking-and-finance"
              className="px-6 py-3 bg-[#2B68C3] text-white rounded-lg  font-bricolage hover:bg-blue-700 transition"
            >
              View All Banking Products
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 border border-[#2B68C3] text-[#2B68C3] rounded-lg  font-bricolage hover:bg-blue-50 transition"
            >
              Contact Our Team
            </Link>
          </div>
        </div>

        {/* Right Suggested Products */}
        <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-8">

          <h3 className="text-[16px] md:text-[20px] lg:text-[24px]
        font-bricolage
        font-bold
        leading-[120%] text-black mb-6">
            Recommended Solutions
          </h3>

          <div className="space-y-6">
            <Link
              to="/industries/banking-and-finance/products/conciliare"
              className="block p-5 border border-gray-100 rounded-xl hover:border-[#2B68C3] hover:shadow-md transition"
            >
              <h4 className="font-semibold  text-[16px] md:text-[20px] lg:text-[24px]
        font-bricolageEHR
     
        leading-[120%] text-[#2B68C3]">
                Reconciliation
              </h4>
              <p className="text-sm text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]
        font-quicksand
        leading-[120%]
        text-[#141414] mt-2">
                Enterprise-grade financial workflow and compliance management platform.
              </p>
            </Link>

            <Link
              to="/industries/banking-and-finance/products/kyc"
              className="block p-5 border border-gray-100 rounded-xl hover:border-[#2B68C3] hover:shadow-md transition"
            >
              <h4 className="font-semibold  text-[16px] md:text-[20px] lg:text-[24px]
        font-bricolageEHR
       
        leading-[120%] text-[#2B68C3]">
                KYC
              </h4>
              <p className="text-sm text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]
        font-quicksand
        leading-[120%]
        text-[#141414] mt-2">
                Advanced fraud detection and risk intelligence for financial institutions.
              </p>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

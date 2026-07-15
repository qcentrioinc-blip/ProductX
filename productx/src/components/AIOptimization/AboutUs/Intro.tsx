
// import { AiOutlineEye, AiOutlineSafety, AiOutlineRobot } from "react-icons/ai";  
import { H2, H4, P } from "../../../styles/Typography";

export default function Intro() {
  return (
    <section className="bg-white dark:bg-black w-full  py-4 lg:px-8">
      <div className="max-w-[1440px] px-8 lg:px-10 xl:px-12 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-stretch">


        {/* LEFT SIDE */}
        <div className="flex flex-col  ">
          <div>
            <H2 className="font-bold mt-10  text-[#254D70]  leading-tight  ">
              Pay Only For <br className="lg:block xl:block hidden" />
              Proven Savings
            </H2>

            <P className="  mt-6 text-left max-w-lg">
              Zero upfront investment required. Our fee is strictly performance-based, calculated as a percentage of your realized cloud savings.
            </P>
          </div>

          {/* STATS */}
          <div className=" flex flex-col md:flex-row mt-8 lg:mt-20 xl:mt-20 gap-4 lg:gap-8 text-gray-900">
            <div className=" flex flex-col  space-y-2 lg:space-y-4 ">
              <div className=" text-4xl  dark:text-[#254D70] lg:text-6xl font-bricolage font-semibold">$0</div>
              <P className=" " >Initial Cost</P>
            </div>
            <div className=" flex flex-col space-y-4 ">
              <div className="text-4xl dark:text-[#254D70] lg:text-6xl font-bricolage font-semibold">30%</div>
              <P className=" " >Typical Waste Found</P>
            </div>

            <div className=" flex flex-col space-y-4 ">
              <div className="text-4xl dark:text-[#254D70] lg:text-6xl font-bricolage font-semibold">6 Week</div>
              <P className=" " >Implementation</P>
            </div>
          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="flex flex-col lg:flex-col xl:flex-col mt-10 gap-4 lg:gap-16 xl:gap-16 lg:pl-10 xl:pl-44">


          {/* ITEM 1 */}
          <div className="flex items-start gap-6 lg:gap-6 xl:gap-6">
            {/* <img src="/AIAbout/AIGraphic1.png" className="w-10 h-10 " /> */}
            <div >
              <H4 className="text-lg dark:text-[#254D70] font-semibold text-gray-900">
                Aligned Incentive Model
              </H4>
              <P className=" max-w-sm  leading-tight    pr-2 sm:pr-0 mt-4">
                We only succeed when you do. Our compensation ties directly to your reduced monthly Azure spend.
              </P>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-start gap-6">
            {/* <img src="/AIAbout/AIGraphic2.png" className="w-10 h-10 " /> */}
            <div>
              <H4 className="text-lg dark:text-[#254D70] font-semibold text-gray-900">
                No Minimum Commitment
              </H4>
              <P className=" max-w-sm  leading-tight    pr-2 sm:pr-0 mt-4">
                Cancel anytime without penalty. Our engagement relies solely on delivering continuous, verifiable cost reduction.
              </P>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex items-start gap-6">
            {/* <img src="/AIAbout/AIGraphic3.png" className="w-10 h-10 " /> */}
            <div>
              <H4 className=" dark:text-[#254D70]  text-gray-900">
                Verified Billing Metrics
              </H4>
              <P className=" max-w-sm  leading-tight    pr-2 sm:pr-0 mt-4">
                Charges align with Azure billing data. You maintain full approval authority on all optimization changes.
              </P>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

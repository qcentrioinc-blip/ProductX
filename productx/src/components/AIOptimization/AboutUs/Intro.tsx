
// import { AiOutlineEye, AiOutlineSafety, AiOutlineRobot } from "react-icons/ai";  
import { H2, H4, P } from "../../../styles/Typography";

export default function Intro() {
  return (
    <section className="bg-white dark:bg-black w-full  py-4 lg:px-8">
      <div className="max-w-7xl mx-auto  xl:px-0 grid grid-cols-1 xl:grid-cols-2   items-stretch">


        {/* LEFT SIDE */}
        <div className="flex flex-col  ">
          <div>
            <H2 className="font-bold mt-10  text-[#254D70]  leading-tight  ">
              The
              manufacturing <br className="xl:block hidden " />
              challenge today
            </H2>

            <P className="  mt-6 text-left max-w-lg">
              We view digital transformation as your key to unlocking higher ROI.
              From operations to customer engagement, we provide holistic tech
              solutions that drive tangible financial results.
            </P>
          </div>

          {/* STATS */}
          <div className=" flex flex-col md:flex-row mt-8 xl:mt-20  gap-4 lg:gap-8   text-gray-900">
            <div className=" flex flex-col  space-y-2 lg:space-y-4 ">
              <div className=" text-4xl  dark:text-[#254D70] lg:text-6xl font-bricolage font-semibold">$3B</div>
              <P className=" " >Factory going for an hour of downtime</P>
            </div>
            <div className=" flex flex-col space-y-4 ">
              <div className="text-4xl dark:text-[#254D70] lg:text-6xl font-bricolage font-semibold">2%</div>
              <P className=" " >Factory going for an hour of downtime</P>
            </div>

            <div className=" flex flex-col space-y-4 ">
              <div className="text-4xl dark:text-[#254D70] lg:text-6xl font-bricolage font-semibold">4,00,000</div>
              <P className=" " >Factory going for an hour of downtime</P>
            </div>
          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="flex flex-col lg:flex-row  xl:flex-col mt-10   gap-4 xl:gap-16 xl:pl-44">


          {/* ITEM 1 */}
          <div className="flex items-start gap-6 lg:gap-0 xl:gap-6">
            {/* <img src="/AIAbout/AIGraphic1.png" className="w-10 h-10 " /> */}
            <div >
              <H4 className="text-lg dark:text-[#254D70] font-semibold text-gray-900">
                Improve operational resilience
              </H4>
              <P className=" max-w-sm  leading-tight    pr-2 sm:pr-0 mt-4">
                Security is more about continuous operation.
                We fortify your production environment against network
                failures and cyber threats, ensuring maximum uptime.
              </P>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-start gap-6">
            {/* <img src="/AIAbout/AIGraphic2.png" className="w-10 h-10 " /> */}
            <div>
              <H4 className="text-lg dark:text-[#254D70] font-semibold text-gray-900">
                Improve operational resilience
              </H4>
              <P className=" max-w-sm  leading-tight    pr-2 sm:pr-0 mt-4">
                Security is more about continuous operation.
                We fortify your production environment against network
                failures and cyber threats, ensuring maximum uptime.
              </P>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex items-start gap-6">
            {/* <img src="/AIAbout/AIGraphic3.png" className="w-10 h-10 " /> */}
            <div>
              <H4 className=" dark:text-[#254D70]  text-gray-900">
                Improve operational resilience
              </H4>
              <P className=" max-w-sm  leading-tight    pr-2 sm:pr-0 mt-4">
                Security is more about continuous operation.
                We fortify your production environment against network
                failures and cyber threats, ensuring maximum uptime.
              </P>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

 
// import { AiOutlineEye, AiOutlineSafety, AiOutlineRobot } from "react-icons/ai";  
import { H2, H4, P } from "../../../styles/Typography";

export default function Intro() {
  return (
    <section className="bg-[#D7F6E9] w-full  py-10 lg:py-20  lg:px-8">
    <div className="max-w-8xl mx-6  lg:mx-10 grid grid-cols-1 lg:grid-cols-2   items-stretch">


        {/* LEFT SIDE */}
<div className="flex flex-col justify-between">
  <div>
    <H2 className="font-bold leading-tight text-gray-900">
      The  
      manufacturing <br />
      challenge today
    </H2>

    <P className="text-gray-700 mt-6 text-left max-w-lg">
      We view digital transformation as your key to unlocking higher ROI.
      From operations to customer engagement, we provide holistic tech
      solutions that drive tangible financial results.
    </P>
  </div>

  {/* STATS */}
  <div className="flex flex-wrap gap-10 mt-10 text-gray-900">
    <div className=" text-4xl lg:text-6xl font-bricolage font-semibold">$3B</div>
    <div className="text-4xl lg:text-6xl font-bricolage font-semibold">2%</div>
    <div className="text-4xl lg:text-6xl font-bricolage font-semibold">4,00,000</div>
  </div>
</div>

        {/* RIGHT SIDE */}
       {/* RIGHT SIDE */}
<div className="flex flex-col  mt-10 gap-16 lg:pl-44">


          {/* ITEM 1 */}
          <div className="flex items-start gap-6">
             <img src="/AIAbout/AIGraphic1.png" className="w-10 h-10 "/>
            <div>
              <H4 className="text-lg font-semibold text-gray-900">
                Improve operational resilience
              </H4>
              <P className="text-gray-700 max-w-sm leading-tight  mt-4">
                Security is more about continuous operation.  
                We fortify your production environment against network
                failures and cyber threats, ensuring maximum uptime.
              </P>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-start gap-6">
            <img src="/AIAbout/AIGraphic2.png"  className="w-10 h-10 "/>
            <div>
              <H4 className="text-lg font-semibold text-gray-900">
                Improve operational resilience
              </H4>
              <P className="text-gray-700 max-w-sm leading-tight  mt-4">
                Security is more about continuous operation.  
                We fortify your production environment against network
                failures and cyber threats, ensuring maximum uptime.
              </P>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex items-start gap-6">
           <img src="/AIAbout/AIGraphic3.png"  className="w-10 h-10 "/>
            <div>
              <H4 className="  text-gray-900">
                Improve operational resilience
              </H4>
              <P className="text-gray-700 max-w-sm leading-tight  mt-4">
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

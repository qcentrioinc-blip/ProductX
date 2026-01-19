 
// import { AiOutlineEye, AiOutlineSafety, AiOutlineRobot } from "react-icons/ai";  
import { H2, H4, P } from "../../../styles/Typography";

export default function Intro() {
  return (
    <section className="bg-[#D7F6E9] w-full  py-10 lg:py-20  lg:px-8">
    <div className="max-w-8xl mx-10  xl:mx-10 grid grid-cols-1 xl:grid-cols-2   items-stretch">


        {/* LEFT SIDE */}
<div className="flex flex-col  ">
  <div>
    <H2 className="font-bold mt-10 leading-tight  ">
      Real-World Cloud <br className="xl:block hidden " />
      Optimization Results
    </H2>

    <P className="  mt-6 text-left max-w-xl">
      We help enterprises transform cloud spend into measurable business value. From cost reduction to performance optimization, CloudDIET delivers actionable insights that drive real financial and operational outcomes. 
    </P>
  </div>

  {/* STATS */}
  <div className=" flex flex-col md:flex-row mt-8 xl:mt-20  gap-4 lg:gap-8   text-gray-900">
    <div className=" flex flex-col  space-y-2 lg:space-y-4 ">
    <div className=" text-4xl lg:text-6xl font-bricolage font-semibold">$1.6M </div>
    <P className=" " >Saved annually through reserved instance optimization. </P>
    </div>
    <div className=" flex flex-col space-y-4 ">
      <div className="text-4xl lg:text-6xl font-bricolage font-semibold">30% </div>
       <P className=" " >Average reduction in overall Azure cloud spend. </P>
    </div>
    
     <div className=" flex flex-col space-y-4 ">
    <div className="text-4xl lg:text-6xl font-bricolage font-semibold">{"<"} 1 </div>
       <P className=" " >Month to achieve a positive return on investment. </P>
       </div>
  </div>
</div>

         
       {/* RIGHT SIDE */}
<div className="flex flex-col lg:flex-row  xl:flex-col mt-10   gap-4 xl:gap-16 xl:pl-44">


          {/* ITEM 1 */}
          <div className="flex items-start gap-6 lg:gap-0 xl:gap-6">
             <img src="/AIAbout/AIGraphic1.png" className="w-10 h-10 "/>
            <div >
              <H4 className="text-lg font-semibold text-gray-900">
                Advanced Azure Expertise 
              </H4>
             <P className=" max-w-sm  leading-tight    pr-2 sm:pr-0 mt-4">
                Our engineering-led profiling uncovers misconfigurations and waste across hundreds of Azure services, insights that generic tools miss. 
              </P>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-start gap-6">
            <img src="/AIAbout/AIGraphic2.png"  className="w-10 h-10 "/>
            <div>
              <H4 className="text-lg font-semibold text-gray-900">
                Guided Savings Execution 
              </H4>
              <P className=" max-w-sm  leading-tight    pr-2 sm:pr-0 mt-4">
                We provide step-by-step optimization plans with effort levels and risk assessments, so you can implement with confidence. 
              </P>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex items-start gap-6">
           <img src="/AIAbout/AIGraphic3.png"  className="w-10 h-10 "/>
            <div>
              <H4 className="  text-gray-900">
                Continuous Cost Intelligence 
              </H4>
               <P className=" max-w-sm  leading-tight    pr-2 sm:pr-0 mt-4">
                CloudDIET monitors your environment daily, ensuring savings are sustained and new opportunities are identified over time. 
              </P>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

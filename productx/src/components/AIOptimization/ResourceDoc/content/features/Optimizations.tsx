import { useState } from "react";

 

 
  

const Optimizations: React.FC = () => {
  const [open, setOpen] = useState(true);
 
  return (
    <div className="space-y-4">
     <h1 className=" text-lg md:text-3xl lg:text-4xl my-4 font-bricolage ">
           Optimizations
        </h1>

        <p className="font-quicksand text-lg leading-tight tracking-wide">CloudDIET profiles your Azure environment to identify hundreds of cost-saving optimizations across IaaS and PaaS resources. We continuously update our capabilities to match Azure’s evolving landscape, including pricing, SKUs, services, and incentives.   </p>

           <p className="font-quicksand text-lg leading-tight tracking-wide">We manage this complexity so you receive clear, actionable insights. We present findings in an easily consumable format through methods such as:   </p>
        

    
         <ul className="list-disc  list-inside space-y-3 font-quicksand text-lg leading-tight tracking-wide">
  <li>  Categorizing savings by effort level: Minimal, Moderate, and Significant.  </li>
  

  <li> Providing relevant configuration details and usage metr </li>
   

  <li>  Detailing each opportunity’s nature, cost drivers, and associated risks.   </li>

     <li>  Offering implementation steps, timelines, and expected savings start dates   </li>
</ul>



  <h2 className="font-bricolage text-xl md:text-2xl lg:text-3xl my-4">Categories</h2>

   <h3 className="font-bricolage  text-xl lg:text-2xl my-4">  Minimal Effort  </h3>
  <p className="font-quicksand text-base text-gray-700 leading-relaxed"> 

Opportunities requiring little effort and no risk. Example: pausing an unused Microsoft Fabric capacity with no recent data or activity.   </p>

 <p className="font-quicksand text-base text-gray-700 leading-relaxed">Savings opportunities can appear within minutes or take up to two weeks. For a new Subscription, CloudDIET builds a profile and baseline of configuration, usage, and cost trends. While some optimizations are immediate, others require days or weeks of utilization analysis. </p>

   <h3 className="font-bricolage  text-xl lg:text-2xl my-4">Moderate Effort  </h3>
  <p className="font-quicksand text-base text-gray-700 leading-relaxed">Opportunities involving configuration or usage changes that should be reviewed, but pose minimal disruption risk. Example: adjusting indexing policies in Azure Cosmos DB.  </p>
    
    <h3 className="font-bricolage  text-xl lg:text-2xl my-4">Significant Effort    </h3>
  <p className="font-quicksand text-base text-gray-700 leading-relaxed"> Opportunities that require review, testing, validation, or planning before implementation. Example: purchasing compute Reservations or making major licensing changes.   </p>
    
     
    
      
      <h2 className="font-bricolage text-xl md:text-2xl lg:text-3xl my-4"> 
Summarized Savings Opportunities  </h2>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">Savings Opportunities are organized by Azure service. You can also filter findings in other ways. The Discovery view, for instance, displays opportunities for Azure Cosmos DB, Azure App Services, and Microsoft Fabric. Drilling into each service reveals various opportunities across resources, each with its own effort level.  </p>

    <img   className="pl-16" src="/AI-CloudFinOps/Resources/featuresOpti1.webp"/>

    <h2 className="font-bricolage text-xl md:text-2xl lg:text-3xl my-4"> 
Savings Opportunity Details 

 </h2>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">Each opportunity shows impacted resources, potential savings, and relevant configuration and usage metrics. Use the dropdown to view the full description and resolution guidance.  </p>

    <img   className="pl-16" src="/AI-CloudFinOps/Resources/FeaturesOpti2.webp"/>
     

<div className="my-6">
      <div className="flex border border-gray-300 rounded-md overflow-hidden bg-white shadow-sm">
        
        {/* LEFT BLUE BAR */}
        <div className="w-22 bg-gray-300 flex items-center justify-center pt-4">
          <div className="w-7 h-7 rounded-full bg-white   flex items-center justify-center font-bold text-sm">
            i
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 px-5 py-4 relative">
          
          {/* Close / Open */}
          <button
            onClick={() => setOpen(prev => !prev)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg leading-none"
            aria-label="Toggle note"
          >
            {open ? "×" : "+"  }
          </button>

          {/* <h3 className="font-bricolage text-lg text-gray-900 mb-1">
            Note
          </h3> */}

          {open && (
            <p className="font-quicksand text-base text-gray-700 leading-relaxed">
            The Daily,Monthly, and Annual savings is the amount you would realize by implementing the recommendation and not the full cost of the resource
            </p>
          )}
        </div>
      </div>
    </div>
   

    <h2 className="font-bricolage text-xl md:text-2xl lg:text-3xl my-4"> 
Dismissing Savings Opportunities 

 </h2>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">If a discovered Savings Opportunity is not relevant to your environment, you can dismiss it. This will remove it from the active list, and the opportunity costs will not be reflected in the Potential Savings or Realized Savings  </p>

 
 </div>
  );
};

export default Optimizations;
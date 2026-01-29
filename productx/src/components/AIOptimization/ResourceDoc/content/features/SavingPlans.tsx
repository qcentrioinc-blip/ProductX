  

const SavingPlans: React.FC = () => {
 
 
  return (
    <div className="space-y-4">
     <h1 className=" text-lg md:text-3xl lg:text-4xl my-4 font-bricolage ">
          Saving Plans
        </h1>

      
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">The Savings Plan Designer helps you make data-driven decisions and run what-if analyses to optimize savings plan strategy. Key components include Visualizations, Slicers, and Resource-level Details.  </p>

  <h3 className="font-bricolage  text-xl lg:text-2xl my-4">  Visualizations </h3>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">The graph shows usage patterns of resources eligible for a Savings Plan. It displays spending only for qualifying compute resources. For example, it includes VM compute SKU costs but excludes disks and other non-covered expenses. </p>

<img className="pl-16" src="/AI-CloudFinOps/Resources/SavingPlans1.webp" alt="Savings Plan Visualization"/>

<div className="overflow-x-auto pl-16 mt-6">
  <table className="min-w-full border border-gray-300 text-left font-quicksand">
    <thead className="bg-gray-200">
      <tr>
        <th className="border border-gray-300 px-4 py-2 text-lg font-semibold">
          Category
        </th>
        <th className="border border-gray-300 px-4 py-2 text-lg font-semibold">
          Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="align-top">
        <td className="border border-gray-300 px-4 py-3 font-semibold">
          Actual Billed Spend
        </td>
        <td className="border border-gray-300 px-4 py-3">
          The billed cost of Savings Plan-eligible compute resources over the
          last 30 days, including discounts. Covers eligible resources without
          an existing Savings Plan or Reserved Instance. Used to calculate your
          future commitment and visualize past Savings Plan utilization.
        </td>
      </tr>

      <tr className="align-top bg-gray-100">
        <td className="border border-gray-300 px-4 py-3 font-semibold">
          What-if Savings Plan Spend
        </td>
        <td className="border border-gray-300 px-4 py-3">
          The projected cost if a Savings Plan had been applied to eligible
          resources.
        </td>
      </tr>

      <tr className="align-top">
        <td className="border border-gray-300 px-4 py-3 font-semibold">
          What-if Pay-As-You-Go Spend
        </td>
        <td className="border border-gray-300 px-4 py-3">
          The additional cost incurred at Pay-As-You-Go rates after the Savings
          Plan is fully used.
        </td>
      </tr>

      <tr className="align-top bg-gray-100">
        <td className="border border-gray-300 px-4 py-3 font-semibold">
          Recommended Savings Plan Commitment
        </td>
        <td className="border border-gray-300 px-4 py-3">
          The suggested commitment based on your filters. Matches the What-if
          Savings Plan Spend and visually guides you toward an optimal purchase.
        </td>
      </tr>
    </tbody>
  </table>
</div>


     <h3 className="font-bricolage  text-xl lg:text-2xl my-4">   Designer </h3>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">The Designer enables you to model what-if scenarios by adjusting Savings Plan terms, commitment percentages, and identifying resources that could become eligible with SKU changes.</p>

 <p className="font-quicksand text-base text-gray-700 leading-relaxed">For example, recommendations may include ineligible App Service Plans. Only the Premium V3 SKU qualifies. CloudDIET flags these plans and assesses whether they can be upgraded with minimal risk. </p>
<img className="pl-16 h-[650px] w-[80%]"  src="/AI-CloudFinOps/Resources/SavingPlans2.webp" alt="Savings Plan Visualization"/>
        
<div className="flex gap-4 rounded-lg bg-green-50 border-l-4 border-green-600 p-5 my-6">
  {/* Icon */}
  <div className="text-green-700">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3a7 7 0 00-4 12.74V19a1 1 0 001 1h6a1 1 0 001-1v-3.26A7 7 0 0012 3z"
      />
    </svg>
  </div>

  {/* Content */}
  <div>
    <h4 className="font-bricolage text-lg font-semibold text-green-800 mb-1">
      TIP
    </h4>

    <p className="font-quicksand text-base text-green-900 leading-relaxed">
      CloudDIET uses a conservative default Commitment Percent of 70%. For example,
      if your maximum commitment is $100, the Designer recommends $70. You can
      adjust this percentage based on your business needs and expected usage
      changes to avoid overcommitment.
    </p>
  </div>
</div>

 

<h2 className="font-bricolage text-xl md:text-2xl lg:text-3xl my-4">Frequently Asked Questions </h2>

   <h3 className="font-bricolage  text-xl lg:text-2xl my-4">1. Why choose Savings Plans over Reserved Instances? </h3>
  <p className="font-quicksand text-base text-gray-700 leading-relaxed"> Savings Plans offer greater flexibility and can yield higher overall savings. Reserved Instances are tied to specific SKUs and regions (e.g., a Dv2 VM in West US). If the resource changes, the Reservation may be wasted.  </p>

 <p className="font-quicksand text-base text-gray-700 leading-relaxed">Savings Plans apply automatically to all eligible resources without specifying SKUs or regions, prioritizing those with the highest discount. </p>

   <h3 className="font-bricolage  text-xl lg:text-2xl my-4"> 

2. Can I commit to multiple Savings Plans?   </h3>
  <p className="font-quicksand text-base text-gray-700 leading-relaxed">Yes. You can create multiple Savings Plan commitments over time. This lets you start with a smaller amount and gradually increase your coverage as needed.   </p>
    
    <h3 className="font-bricolage  text-xl lg:text-2xl my-4">3. Which Azure services are eligible for a Savings Plan?  </h3>
  <p className="font-quicksand text-base text-gray-700 leading-relaxed">The following Azure services are generally eligible, though some underlying SKUs may be excluded  </p>
    
  <ul className="list-disc list-inside space-y-2  text-gray-700 font-quicksand text-lg leading-tight tracking-wide">
     

<li>Virtual Machines</li>

<li>App Service Premium v3</li>

<li>App Service Isolated v2</li>
<li>Functions Premium</li>
<li>Container Instances</li>
<li>Container Apps</li>
<li>Dedicated Host</li>
<li>Spring Apps Enterprise</li>
 </ul>
 </div>
  );
};

export default SavingPlans;
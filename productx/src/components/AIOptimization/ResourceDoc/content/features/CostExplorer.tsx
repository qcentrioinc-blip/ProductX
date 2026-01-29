  

const CostExplorer: React.FC = () => {
 
 
  return (
    <div className="space-y-4">
     <h1 className=" text-lg md:text-3xl lg:text-4xl my-4 font-bricolage ">
       Cost Explorer
        </h1>

      
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">CloudDIET provides deeper cost insights than standard Azure billing. For instance, while Azure aggregates Log Analytics costs at the Workspace level, CloudDIET breaks them down by Table, identifying high-cost tables clearly.  </p>

<h2 className="font-bricolage text-xl md:text-2xl lg:text-3xl my-4"> 

Search, Filter, and View Resource Cost Trends </h2>

 <p className="font-quicksand text-base text-gray-700 leading-relaxed">Examine Azure resources and costs in detail. Filter, view, and analyze resources across your environment. Track daily, weekly, and monthly cost trends. Drill into specific resources for deeper insight.  </p>

<img className="pl-16" src="/AI-CloudFinOps/Resources/CostExpo1.webp" alt="Savings Plan Visualization"/>




    <h2 className="font-bricolage text-xl md:text-2xl lg:text-3xl my-4"> Cost Attribution </h2>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">CloudDIET attributes costs at a finer level than Azure billing. Using Log Analytics as an example, costs are shown per Table rather than per Workspace. </p>
<img className="pl-16" src="/AI-CloudFinOps/Resources/CostExpo2.webp" alt="Savings Plan Visualization"/>
 

    <h2 className="font-bricolage text-xl md:text-2xl lg:text-3xl my-4">Metric Attribution </h2>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">Along with detailed cost views, CloudDIET shows granular utilization metrics. For example, view logs ingested per Table and source resource in Log Analytics. Visualizations can be filtered and pivoted beyond Azure Monitor’s capabilities.  </p>
<img className="pl-16" src="/AI-CloudFinOps/Resources/CostExpo3.webp" alt="Savings Plan Visualization"/>

<img className="pl-16" src="/AI-CloudFinOps/Resources/CostExpo4.webp" alt="Savings Plan Visualization"/>

 </div>
  );
};

export default CostExplorer;
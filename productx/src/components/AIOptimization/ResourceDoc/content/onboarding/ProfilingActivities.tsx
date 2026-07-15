import { useState } from "react";
 


const ProfilingActivities: React.FC = () => {
const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggle = (index: number) => {
  setOpenIndex(openIndex === index ? null : index);
};

 
  return (
    <div className="space-y-2">
     <h1 className=" text-lg md:text-3xl text-[#00AA72] lg:text-4xl my-4 font-quadran   ">
            Profiling Activities
        </h1>

        <p className="font-quicksand  dark:text-white text-lg leading-tight tracking-wide">CloudDIET profiling is divided into three categories:   </p>
        

    
         <ol className="list-decimal list-inside dark:text-white space-y-6 font-quicksand text-lg leading-tight tracking-wide">
  <li>  <b>Billing:</b> CloudDIET analyzes your Azure Billing to capture actual spend, including discounts, Savings Plans, and Reserved Instances. </li>
  

  <li>  <b>Usage Metrics:</b> CloudDIET examines Azure Monitor Metrics to see resource utilization, such as a Storage Account holding 4TB, without accessing the stored data.  </li>
   

  <li>  <b>Resource Configuration:</b> CloudDIET inspects Azure control-plane configurations, like a Storage Account set to Geo-Redundant Storage (GRS) in East US and its creation date, without viewing any customer data.  </li>
   
</ol>
 <h2 className="font-quadran   text-xl dark:text-white md:text-2xl lg:text-3xl my-6">
  Frequently Asked Questions
</h2>

<div className="space-y-6">
  {/* FAQ 1 */}
  <div className="border  bg-gray-100 border-gray-300 p-4">
    <button
      onClick={() => toggle(0)}
      className="w-full text-left flex justify-between items-center   text-xl lg:text-lg"
    >
      <span>1. How long does it take CloudDIET to produce results?</span>
      <span>{openIndex === 0 ? "−" : "+"}</span>
    </button>

    {openIndex === 0 && (
      <div className="mt-3 space-y-3">
        <p className="font-quicksand    text-base text-gray-700 leading-relaxed">
          After adding a Subscription, CloudDIET may take from a few minutes to several hours to begin displaying data. Timing depends on the number of resources in the Azure Subscription.
        </p>
        <p className="font-quicksand text-base text-gray-700 leading-relaxed">
          Savings opportunities can appear within minutes or take up to two weeks. For a new Subscription, CloudDIET builds a profile and baseline of configuration, usage, and cost trends. While some optimizations are immediate, others require days or weeks of utilization analysis.
        </p>
      </div>
    )}
  </div>

  {/* FAQ 2 */}
   <div className="border  bg-gray-300 border-gray-300 p-4">
    <button
      onClick={() => toggle(1)}
      className="w-full text-left flex justify-between items-center   text-xl lg:text-lg"
    >
      <span>2. How often does CloudDIET profiling happen?</span>
      <span>{openIndex === 1 ? "−" : "+"}</span>
    </button>

    {openIndex === 1 && (
      <p className="mt-3  font-quicksand text-base text-gray-700 leading-relaxed">
        Profiling runs at least daily to track changes, usage patterns, and trends. Savings opportunities can be identified and presented at any time throughout the day.
      </p>
    )}
  </div>

  {/* FAQ 3 */}
   <div className="border  bg-gray-100 border-gray-300 p-4">
    <button
      onClick={() => toggle(2)}
      className="w-full text-left flex justify-between items-center   text-xl lg:text-lg"
    >
      <span>3. Does CloudDIET impact my Azure bill?</span>
      <span>{openIndex === 2 ? "−" : "+"}</span>
    </button>

    {openIndex === 2 && (
      <p className="mt-3    font-quicksand text-base text-gray-700 leading-relaxed">
        No, CloudDIET does not incur any costs on your Azure Subscription(s).
      </p>
    )}
  </div>

  {/* FAQ 4 */}
    <div className="border  bg-gray-300 border-gray-300 p-4">
    <button
      onClick={() => toggle(3)}
      className="w-full text-left flex justify-between items-center   text-xl lg:text-lg"
    > 
      <span>4. Can CloudDIET impact my Azure services?</span>
      <span>{openIndex === 3 ? "−" : "+"}</span>
    </button>

    {openIndex === 3 && (
      <p className="mt-3    font-quicksand text-base text-gray-700 leading-relaxed">
        No. CloudDIET does not interact with Azure resources directly. It operates at the control plane level using Azure Resource Manager APIs. There is no performance impact or risk of disruption.
      </p>
    )}
  </div>
</div>

      
      <h2 className="font-quadran   text-xl dark:text-white  md:text-2xl lg:text-3xl my-4"> 
Examples of what CloudDIET can access </h2>
 <p className="font-quicksand text-base dark:text-white  text-gray-700 leading-relaxed">These examples show what CloudDIET can and cannot access. CloudDIET does not view all metrics or configurations, and it lacks permission and the ability to access data plane content. </p>
<div className="overflow-x-auto mt-6 xl:pl-16">
  <table className="min-w-full border border-gray-300 text-left font-quicksand">
    <thead className="bg-gray-100 ">
      <tr>
        <th className="border border-gray-300 px-4 py-2 text-lg font-semibold">
          Service
        </th>
        <th className="border border-gray-300 px-4 py-2 text-lg font-semibold">
          Can Access
        </th>
        <th className="border border-gray-300 px-4 py-2 text-lg font-semibold">
          Cannot Access
        </th>
      </tr>
    </thead>
    <tbody>
      {/* Azure SQL */}
      <tr className="align-top dark:text-white ">
        <td className="border border-gray-300 px-4 py-3 font-semibold">
          Azure SQL
        </td>
        <td className="border border-gray-300 px-4 py-3">
          <ul className="list-disc list-inside space-y-1">
            <li>Costs for the Azure SQL instance</li>
            <li>CPU utilization</li>
            <li>Number of sessions</li>
            <li>Deployed Azure region</li>
            <li>Licensing</li>
          </ul>
        </td>
        <td className="border border-gray-300 px-4 py-3">
          <ul className="list-disc list-inside space-y-1">
            <li>Data plane data (databases, tables, schemas, etc.)</li>
            <li>No ability to execute queries</li>
            <li>No ability to view user accounts, permissions, or query activity within the database</li>
          </ul>
        </td>
      </tr>

      {/* Azure Storage */}
      <tr className="align-top dark:text-white ">
        <td className="border border-gray-300 px-4 py-3 font-semibold">
          Azure Storage
        </td>
        <td className="border border-gray-300 px-4 py-3">
          <ul className="list-disc list-inside space-y-1">
            <li>Costs for the Azure Storage Account</li>
            <li>Storage account type</li>
            <li>Storage utilization</li>
            <li>Deployed Azure region</li>
            <li>Creation date</li>
          </ul>
        </td>
        <td className="border border-gray-300 px-4 py-3">
          <p>
            No data plane data (containers, tables, queues, files, etc.)
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    
    </div>
  );
};

export default ProfilingActivities;
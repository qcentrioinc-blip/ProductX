import { useState } from "react";
import { P } from "../../../../../styles/Typography";

 
  

const AddingSubscriptions: React.FC = () => {
  const [open, setOpen] = useState(true);
 
  return (
    <div className="space-y-2">
     <h1 className=" text-lg md:text-3xl text-[#254D70] lg:text-4xl my-4 font-bricolage ">
            Adding Subscriptions
        </h1>

        <P className="font-quicksand text-lg leading-tight tracking-wide">Once you have added at least one Service Principal in CloudDIET, you can add your Azure Subscriptions.  </P>
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
            <P className="font-quicksand text-base text-gray-700 leading-relaxed">
              You must have completed the previous Adding Service Principals steps before proceeding.
            </P>
          )}
        </div>
      </div>
    </div>

     <h2 className="font-bricolage text-xl md:text-2xl lg:text-3xl dark:text-white  my-4">Configuration Steps  </h2>
         <ol className="list-decimal dark:text-white list-inside space-y-6 font-quicksand text-lg leading-tight tracking-wide">
  <li>  Log in to CloudDIET and navigate to Settings </li>
  <img  className="xl:pl-16 " src="/AI-CloudFinOps/Resources/AddingSubs1.webp" alt="" />

  <li>  Click Add Subscription and enter the Azure Subscription ID (GUID) along with the associated credential. The subscription will be validated automatically to ensure successful authentication. </li>
  <img   className="xl:pl-16 " src="/AI-CloudFinOps/Resources/AddingSubs2.webp" alt="" />

  <li>   Once added and validated, you will see the Azure Subscription(s) listed and the current status. CloudDIET will automatically begin profiling your Azure Subscription. Depending on the amount of resources in the Subscription, this can take anywhere from a few minutes to several hours. </li>
  <img  className="xl:pl-16 " src="/AI-CloudFinOps/Resources/AddingSubs3.webp" alt="" />

</ol>
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
             As long as CloudDIET is not actively profiling the Subscription, it can be paused or removed at any time.
            </p>
          )}
        </div>
      </div>
    </div>

 
   
    </div>
  );
};

export default AddingSubscriptions;
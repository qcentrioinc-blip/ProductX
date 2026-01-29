import { useState } from "react";

  

const Subscriptions: React.FC = () => {
 
  const [open, setOpen] = useState(true);
  return (
    <div className="space-y-4">
     <h1 className=" text-lg text-[#254D70]  md:text-3xl lg:text-4xl my-4 font-bricolage ">
          Subscriptions 
        </h1>

      
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">CloudDIET leverages Service Principals to access your Azure environment in a secure and auditable way </p>

  <h3 className="font-bricolage  text-xl lg:text-2xl my-4">  Adding Subscriptions to CloudDIET  </h3>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">



Azure Subscriptions can be added to CloudDIET at any time, but you must first have created at least one Credential (Service Principal). Once added, you will see the Azure Subscription(s) listed and the current status. CloudDIET will automatically begin profiling your Azure Subscription. Depending on the amount of resources in the Subscription, this can take anywhere from a few minutes to several hours  </p>

<img className="pl-16" src="/AI-CloudFinOps/Resources/Service1.webp" alt="Savings Plan Visualization"/>
     


  <h3 className="font-bricolage  text-xl lg:text-2xl my-4">  
Changing Credentials 
  </h3>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">

The Credentials associated with an Azure Subscription can be changed at any time as long as that Subscription is not actively being profiled.  </p>

    <h3 className="font-bricolage  text-xl lg:text-2xl my-4"> Pausing and Resuming Subscription Profiling   </h3>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">



Subscriptions can be paused at any time as long as that Subscription is not actively being profiled. The Subscription and all of its profiling metadata will be retained indefinately while paused. 

   </p>

 



 <div className="my-6">
      <div className="flex border border-orange-300 rounded-md overflow-hidden bg-white shadow-sm">
        
        {/* LEFT BLUE BAR */}
        <div className="w-22 bg-orange-300 flex items-center justify-center pt-4">
          <div className="w-7 h-7 rounded-full bg-white   flex items-center justify-center font-bold text-sm">
            !
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
        Pausing a Subscription will prevent any further profiling. Once resumed, there may be a gap in reporting as CloudDIET will not attempt to evaluate missed days. 

  
            </p>
          )}
        </div>
      </div>
    </div>


<h3 className="font-bricolage  text-xl lg:text-2xl my-4">  Removing Subscriptions   </h3>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">

Subscriptions can be removed at any time as long as that Subscription is not actively being profiled. 

  
</p>  


 <div className="my-6">
      <div className="flex border border-orange-300 rounded-md overflow-hidden bg-white shadow-sm">
        
        {/* LEFT BLUE BAR */}
        <div className="w-22 bg-orange-300 flex items-center justify-center pt-4">
          <div className="w-7 h-7 rounded-full bg-white   flex items-center justify-center font-bold text-sm">
            !
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
      Removing an Azure Subscription from CloudDIET will also delete all profiling metadata. 

  
            </p>
          )}
        </div>
      </div>
    </div>



    <h3 className="font-bricolage  text-xl lg:text-2xl my-4">  Subscriptions Status 
  </h3>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">
 


The status of an Azure Subscription is based on the result of its most recent profiling. Ideally, the status should be "Active" or display the current state of any profiling activities. Errors will also be displayed and can range from authentication issues to deleted Subscriptions. The error message will display the reason and aid in any troubleshooting. 

  
</p> 

 </div>
  );
};

export default Subscriptions;
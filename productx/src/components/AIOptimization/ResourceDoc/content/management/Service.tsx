import { useState } from "react";

  

const Service: React.FC = () => {
 
  const [open, setOpen] = useState(true);
  return (
    <div className="space-y-4">
     <h1 className=" text-lg text-[#254D70] md:text-3xl lg:text-4xl my-4 font-bricolage ">
          Service Principals
        </h1>

      
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">CloudDIET uses Service Principals to securely and auditably access your Azure environment.   </p>

  <h3 className="font-bricolage  text-xl lg:text-2xl my-4">  Adding Credentials to CloudDIET </h3>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">

Create Service Principals in Azure Active Directory using the Onboarding Guide. Then add their credentials in CloudDIET settings. Most customers use one Service Principal, but multiple are supported. Each Azure Subscription must link to only one Service Principal, but different Subscriptions may use different ones.   </p>

<img className="pl-16" src="/AIOptimization/Service1.png" alt="Savings Plan Visualization"/>




   

      
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
     Credentials are stored in an HSM-backed vault under a zero-trust model. To revoke access, delete credentials in CloudDIET or remove the Service Principal secret/account in Azure AD. 

 
            </p>
          )}
        </div>
      </div>
    </div>

  <h3 className="font-bricolage  text-xl lg:text-2xl my-4">   Updating Secrets  </h3>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">

You can rotate Service Principal secrets anytime in CloudDIET settings. Once saved, secrets are not visible but can be updated again later.  </p>

    <h3 className="font-bricolage  text-xl lg:text-2xl my-4">   Removing Credentials   </h3>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">

Remove credentials from CloudDIET anytime if no Azure Subscription is linked. Removed credentials cannot be recovered. 

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
        To change credentials linked to a Subscription: First create a new Service Principal, then update the Subscription in CloudDIET. Do not delete and re-add the Subscription, or profiling metadata will be lost. 

  
            </p>
          )}
        </div>
      </div>
    </div>


<h3 className="font-bricolage  text-xl lg:text-2xl my-4">  Auditing   </h3>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">

Service Principal activity can be audited in Azure Active Directory using native tools like Sign-in logs. 
</p>  
 </div>
  );
};

export default Service;
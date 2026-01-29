import { useState } from "react";

 
  

const AddingService: React.FC = () => {
  const [open, setOpen] = useState(true);
 
  return (
    <div className="space-y-2">
     <h1 className=" text-lg md:text-3xl lg:text-4xl my-4 font-bricolage ">
            Adding Service Principals 
        </h1>

        <p className="font-quicksand text-lg leading-tight tracking-wide">Once you created the Service Principal(s) with the required permissions in your Azure environment, you must configure them in CloudDIET.  </p>

     <h2 className="font-bricolage text-xl md:text-2xl lg:text-3xl my-4">Configuration Steps  </h2>
         <ol className="list-decimal list-inside space-y-6 font-quicksand text-lg leading-tight tracking-wide">
  <li> Log in to CloudDIET, navigate to Settings, and then Credentials. </li>
  <img className="pl-16 " src="/AI-CloudFinOps/Resources/Adding1.webp" alt="" />

  <li> Click the Add Credentials button and provide the Service Principal details from the previous CloudDIET Permissions step. The Service Principal will be validated automatically to ensure it can properly authenticate </li>
  <img className="pl-16 " src="/AI-CloudFinOps/Resources/Adding2.webp" alt="" />

  <li>  Once added and validated, you will see the Service Principal(s) listed and the secret expiration date. You can now configure your Azure Subscriptions in CloudDIET. </li>
  <img className="pl-16 " src="/AI-CloudFinOps/Resources/Adding3.webp" alt="" />

</ol>

 <h3 className="font-bricolage  text-xl lg:text-2xl my-4">Note </h3>
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
              Credentials are securely stored in an HSM-backed vault with a
              zero-trust security model. At any time, you can revoke access to
              your credentials by deleting them from the CloudDIET portal or by
              deleting the Service Principal(s) secret and/or account from your
              Azure Active Directory.
            </p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddingService;
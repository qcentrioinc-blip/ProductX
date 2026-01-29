import { useState } from "react";

  

const UserPermission: React.FC = () => {
 
  const [open, setOpen] = useState(true);
  return (
    <div className="space-y-4">
     <h1 className=" text-lg md:text-3xl lg:text-4xl my-4 font-bricolage ">
          User Permissions
        </h1>

      
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">CloudDIET authentication and single sign-on are integrated with your Azure Active Directory. Additional CloudDIET roles are available to manage user access.   </p>

  <h3 className="font-bricolage  text-xl lg:text-2xl my-4">  Adding Users </h3>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">No manual user addition is needed—authentication uses your Azure Active Directory. Users are automatically added and listed when they log in with their organizational account.  </p>

<img className="pl-16" src="/AI-CloudFinOps/Resources/UserPemi.webp" alt="Savings Plan Visualization"/>

<div className="overflow-x-auto pl-16 mt-6">
  <table className="min-w-full border border-gray-300 text-left font-quicksand">
    <thead className="bg-gray-200">
      <tr>
        <th className="border border-gray-300 px-4 py-2 text-lg font-semibold">
      Role
        </th>
        <th className="border border-gray-300 px-4 py-2 text-lg font-semibold">
       Permissions
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="align-top">
        <td className="border border-gray-300 px-4 py-3 font-semibold">
         Administrator
        </td>
        <td className="border border-gray-300 px-4 py-3">
         Can view all data and manage all Subscriptions, Credentials, and User acccess. 
        </td>
      </tr>

      <tr className="align-top bg-gray-100">
        <td className="border border-gray-300 px-4 py-3 font-semibold">
         Viewers
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Can view all data, Subscriptions, Credentials, and User acccess, but not make any changes. 
        </td>
      </tr>

      <tr className="align-top">
        <td className="border border-gray-300 px-4 py-3 font-semibold">
         No Access
        </td>
        <td className="border border-gray-300 px-4 py-3">
          Can sign in, but cannot view data, Subscriptions, Credentials, or User Access.
        </td>
      </tr>

      
    </tbody>
  </table>
</div>


     <h3 className="font-bricolage  text-xl lg:text-2xl my-4">   Removing Users  </h3>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">

Users can be removed from by navigating to Users & Roles, selecting the user, and clicking Remove User. </p>


        
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
           Removing a user from Users & Roles will not prevent them from signing back into CloudDIET unless you take the below Restricting Users action. 
            </p>
          )}
        </div>
      </div>
    </div>


    <h3 className="font-bricolage  text-xl lg:text-2xl my-4">   Restricting  Users  </h3>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">

By default, users in your organizational Azure Active Directory can sign in and access CloudDIET. You can restrict who can sign in by changing the CloudDIET Enterprise Application properties within your Azure Active Directory.  </p>

 <ul className="list-disc pl-5 font-quicksand text-base text-gray-700 leading-relaxed">
  <li>Sign in to the Azure Active Directory administration portal.
</li>
  <li>Navigate to Enterprise applications and search for CloudDIET AI.</li>
  <li>
Under Properties, select Yes for Assignment required. </li>
  
  </ul>
 <p className="font-quicksand text-base text-gray-700 leading-relaxed">This will restrict users from accessing CloudDIET unless they are provided access in Users and groups. </p>



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
         Find additional details in Restrict your Microsoft Entra app to a set of users in a Microsoft Entra tenant. 
            </p>
          )}
        </div>
      </div>
    </div>

 </div>
  );
};

export default UserPermission;
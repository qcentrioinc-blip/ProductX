import { H2 } from "../../styles/Typography";
import { ContactUs } from "../../styles/Button";

const Contact: React.FC = () => {
  return (
   
    <section className="w-full min-h-[666px] flex relative bg-gray-50 p-4 md:p-10 lg:pl-6 overflow-hidden">
     
      <div className="absolute md:hidden inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_2px,_transparent_1px)] [background-size:12px_12px]  opacity-50" />
 
      <div className="w-full mt-10   z-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
        
       
        <div className="flex flex-col h-auto w-full max-w-lg mx-auto lg:mx-0 lg:w-[517px] justify-center lg:col-span-1 p-0 sm:p-4">
          
          <H2 className="text-black   font-bold mb-6 ">Quam finibus</H2>
          
          <form className="space-y-4">
           
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-black">
              {/* Ensure a default option is selected */}
              <option disabled selected>What are you looking for?</option>
              <option>Manufacturing</option>
              <option>Healthcare</option>
              <option>Finance</option>
            </select>

            <textarea
              placeholder="Message (Optional)"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-black"
            />
 
            <div className="inline-block"> 
              <ContactUs> SUBMIT</ContactUs>
            </div>
            
          </form>
        </div>

       
        
               <div className="relative hidden lg:block ml-40 lg:col-span-2 h-[600px]">
 <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_2px,_transparent_1px)] [background-size:12px_12px]" />
 </div>
      </div>
    </section>
  );
};

export default Contact;
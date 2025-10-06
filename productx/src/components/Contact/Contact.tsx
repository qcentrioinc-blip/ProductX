
import { H2 } from "../../styles/Typography";
import { ContactUs } from "../../styles/Button";
const Contact: React.FC = () => {
  return (
    <section className="w-full h-[666px] flex bg-white pl-6 ">
      <div className="  mt-20 grid grid-cols-1 lg:grid-cols-3 ">
        
        {/* Left Side - Contact Form */}
        <div className="flex flex-col  h-[458px] w-[517px]  ml-[40px] justify-center lg:col-span-1">


          {/* <h2 className="text-3xl md:text-[64px] font-bold text-gray-900 mb-6">
            Quam finibus
          </h2>
 */}
          <H2 className="text-black mb-6">Quam finibus</H2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg   focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg   focus:outline-none focus:ring-2 focus:ring-black"
            />

            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg   focus:outline-none focus:ring-2 focus:ring-black">
              <option>What are you looking for?</option>
              <option>Manufacturing</option>
              <option>Healthcare</option>
              <option>Finance</option>
            </select>

            <textarea
              placeholder="Message (Optional)"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg   focus:outline-none focus:ring-2 focus:ring-black"
            />

            <ContactUs> SUBMIT</ContactUs>
           
          </form>
        </div>

      
            <div className="relative ml-40 lg:col-span-2">
            <div className="absolute inset-0  bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_2px,_transparent_1px)] [background-size:12px_12px]" />
            </div>

      </div>
    </section>
  );
};

export default Contact;

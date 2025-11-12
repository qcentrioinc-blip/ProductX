import React from "react";
import { ArrowUpRight } from "lucide-react";
import { H2 } from "../../../styles/Typography";
// Using a simple stub for H2 to keep the file runnable for demonstration:
// const H2 = ({ children, className }) => <h2 className={className}>{children}</h2>;

const TitleSec: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#E6FFEF] to-[#C8FFD7] flex items-center justify-center py-10 px-4">
      {/* Changed lg:grid-cols-3 to lg:grid-cols-2 for a 50/50 split on large screens */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-3 mt-10">

        {/* --- LEFT: FORM (50% width on large screens) --- */}
        {/* Changed lg:col-span-2 to lg:col-span-1 */}
        <div className="lg:col-span-1 flex justify-center lg:justify-start">
          {/* Changed max-w-2xl to max-w-full to utilize the new, larger column width */}
          <div className="bg-white shadow-md rounded-2xl p-8 sm:p-10 lg:p-12 w-full max-w-3xl">
            <H2 className="text-green-900 mb-6 text-center lg:text-left">
              Front Desk Office Executive
            </H2>

            <form className="space-y-5">
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-green-400 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-150"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-green-400 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-150"
                />
              </div>

              {/* Resume Upload */}
              <div className="flex justify-between items-center border border-green-400 rounded-lg px-4 py-3">
                <span id="fileName" className="text-gray-500">Resume</span>
                <label
                  htmlFor="resumeUpload"
                  className="bg-green-100 text-green-700 font-semibold cursor-pointer px-4 py-1 rounded-full hover:bg-green-200 transition duration-150"
                >
                  Upload
                </label>
                <input
                  type="file"
                  id="resumeUpload"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      document.getElementById('fileName')!.textContent = file.name;
                    } else {
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      document.getElementById('fileName')!.textContent = 'Resume';
                    }
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  placeholder="Tell us about yourself"
                  rows={4}
                  className="w-full border border-green-400 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-150"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition-all duration-300"
              >
                APPLY NOW <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* --- RIGHT: IMAGE (50% width on large screens) --- */}
        {/* This column implicitly takes lg:col-span-1 */}
        <div className="relative flex justify-center lg:justify-start items-center">
          <div className="w-full h-full flex justify-center lg:justify-start">
            <img
              src="/EHR-PMS/ApplicationForm/shape1.png"
              alt="Application form illustration"
              className="
                w-full /* Now uses full width of its 50% column at all breakpoints */
                sm:w-full
                md:w-[80%]
                lg:w-full
                max-w-[1000px]
                h-auto
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleSec;

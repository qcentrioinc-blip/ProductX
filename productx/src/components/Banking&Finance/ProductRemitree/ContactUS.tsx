import { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { H2 } from '../../../styles/Typography';

const OPTIONS = ['Product Enquiry', 'Partnerships', 'General Support'];

const ContactUS = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: [] as string[],
    message: '',
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.09]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['24px', '0px']);
  const clipPath = useTransform(scrollYProgress, [0, 1], [
    'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    'polygon(0 6%, 100% 0, 100% 100%, 0 100%)',
  ]);

  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const smoothBorderRadius = useSpring(borderRadius, { stiffness: 100, damping: 30 });
  const smoothClip = useSpring(clipPath, { stiffness: 100, damping: 25 });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div
      ref={targetRef}
      className="relative z-30 h-screen pointer-events-auto bg-white overflow-hidden" id='ContactUs'
    >
      <div className="sticky top-0 flex items-center justify-center h-screen w-full">
        <motion.div
          style={{
            scale: smoothScale,
            borderRadius: smoothBorderRadius,
            clipPath: smoothClip,
          }}
          className="relative w-full max-w-[1400px] mx-auto overflow-hidden md:h-[95vh]"
        >
          {/* MOBILE LAYOUT */}
          <div className="md:hidden flex flex-col  h-screen">
            {/* Blue Header Section with Curve */}
            <div className="relative bg-[#2B68C3] h-[50%] pt-12 pb-32 px-6">
              {/* Yellow Curve - SVG */}
              <img
                src="/ContactSection/yellowCurve.png"
                alt="Background curve graphic"
                className=" absolute h-[180px]  -rotate-20 left-0 object-cover"
              />

              {/* Heading */}
              <div className="relative ml-6 mt-28 z-10 pt-8">
                <H2 className="text-white text-3xl font-bold leading-tight">
                  Shaping the Future
                  <br />
                  Across B and F.
                </H2>
              </div>
            </div>

            {/* Form Card - Overlapping */}
            <div className="relative -mt-56  p-8 flex-1">
              <div className="bg-white rounded-3xl p-6 shadow-2xl">
                <div className="space-y-5">
                  {/* Name */}
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-sm"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Enter your mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-sm"
                  />

                  {/* MULTI-SELECT DROPDOWN */}
                  <div ref={dropdownRef} className="relative">
                    <div
                      onClick={() => setShowDropdown((prev) => !prev)}
                      className="w-full px-5 py-3.5 rounded-full border-2 border-gray-200 cursor-pointer flex items-center justify-between"
                    >
                      <span className="text-sm text-gray-700 truncate">
                        {formData.query.length > 0
                          ? formData.query.join(', ')
                          : 'What are you looking for?'}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform flex-shrink-0 ${showDropdown ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {showDropdown && (
                      <div className="absolute mt-2 w-full bg-white rounded-2xl border border-gray-200 shadow-lg z-20 p-3 space-y-2">
                        {OPTIONS.map((option) => {
                          const checked = formData.query.includes(option);
                          return (
                            <label key={option} className="flex items-center gap-3 px-2 py-2 cursor-pointer rounded-lg hover:bg-gray-100">
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    query: checked ? prev.query.filter((o) => o !== option) : [...prev.query, option],
                                  }))
                                }
                                className="accent-black w-4 h-4"
                              />
                              <span className="text-sm text-gray-800">{option}</span>
                            </label>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <textarea
                    placeholder="Message (Optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-5 py-3.5 rounded-3xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none resize-none text-sm"
                  />

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-black text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group"
                  >
                    SUBMIT
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="hidden md:block">
            <div className="absolute inset-0 bg-[#2B68C3] h-[66vh] mt-34">
              <img
                src="/ContactSection/yellowCurve.png"
                alt="Background curve graphic"
                className="w-full absolute left-2 h-[480px] pointer-events-none object-cover"
              />

              <div className="absolute top-50 xl:top-60 left-8 md:left-16 lg:left-32 z-10 max-w-2xl">
                <h2 className="text-white text-5xl font-bold leading-tight">
                  Shaping the Future
                  <br />
                  Across B and F.
                </h2>
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 lg:right-16 z-30 w-full max-w-[440px] xl:h-[85%] mt-4">
              <div className="bg-white rounded-[32px] p-6 md:p-8 shadow-2xl h-full flex flex-col justify-center">
                <div className="space-y-8">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Enter your mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                  />

                  <div ref={dropdownRef} className="relative">
                    <div
                      onClick={() => setShowDropdown((prev) => !prev)}
                      className="w-full px-5 py-3.5 rounded-full border-2 border-gray-200 cursor-pointer flex items-center justify-between"
                    >
                      <span className="text-base text-gray-700 truncate">
                        {formData.query.length > 0 ? formData.query.join(', ') : 'What are you looking for?'}
                      </span>
                      <svg className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {showDropdown && (
                      <div className="absolute mt-2 w-full bg-white rounded-2xl border border-gray-200 shadow-lg z-20 p-3 space-y-2">
                        {OPTIONS.map((option) => {
                          const checked = formData.query.includes(option);
                          return (
                            <label key={option} className="flex items-center gap-3 px-2 py-2 cursor-pointer rounded-lg hover:bg-gray-100">
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    query: checked ? prev.query.filter((o) => o !== option) : [...prev.query, option],
                                  }))
                                }
                                className="accent-black w-4 h-4"
                              />
                              <span className="text-sm text-gray-800">{option}</span>
                            </label>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <textarea
                    placeholder="Message (Optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-5 py-3.5 rounded-[24px] border-2 border-gray-200 focus:border-blue-500 focus:outline-none resize-none"
                  />

                  <button
                    onClick={handleSubmit}
                    className="bg-black text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-800 transition-all flex items-center gap-2 group"
                  >
                    SUBMIT
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUS;

import { H2, P,Li } from "../../../styles/Typography";
import linkedinLogo from "/LinkedIn.png";
import xLogo from "/Twitter.png";
import { useEffect,useRef,useState } from "react";
import { ArrowUpRight,ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const OverviewSection = () => {
   const [showBar, setShowBar] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Show bar only when this section is in view
  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setShowBar(entry.isIntersecting),
      { threshold: 0.3 } // Adjust threshold to control visibility trigger
    );

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
      observer.disconnect();
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="bg-[#E5F0FF] -mt-10 w-full py-20  overflow-visible"
    >
      <div className="max-w-8xl  flex flex-col lg:flex-row  mx-4 px-4 justify-between md:px-8 md:mx-10">
        
        {/* Left Section */}
        <div className="max-w-4xl mt-10">
          <div className="mb-12">
            <H2 className="mb-4">Role Overview:</H2>
            <P className="text-[#141414] md:py-6 text-justify leading-tight opacity-80">
              We are seeking a highly organized and customer-focused senior content specialist
              to join our team. The ideal candidate will serve as the first point of contact
              for clients, visitors, and employees, ensuring a welcoming and professional
              environment. This role requires excellent communication, multitasking, and
              problem-solving skills.
            </P>
          </div>

          <div className="mb-12">
            <H2 className="mb-4">Roles and Responsibilities:</H2>
            <ul className="list-disc ml-6 md:py-6 leading-tight opacity-80">
              <Li>Greet and assist visitors, clients, and staff in a friendly and professional manner.</Li>
              <Li>Manage incoming calls, emails, and correspondence efficiently.</Li>
              <Li>Handle check-ins, check-outs, and general inquiries at the front desk.</Li>
              <Li>Maintain the reception area, ensuring it is clean, organized, and presentable.</Li>
              <Li>Manage scheduling, appointments, and meeting room bookings.</Li>
              <Li>Support administrative tasks such as data entry, filing, and record maintenance.</Li>
              <Li>Coordinate with departments to ensure smooth operations.</Li>
              <Li>Monitor and manage office supplies, placing orders when necessary.</Li>
            </ul>
          </div>

          <div className="mb-12">
            <H2 className="mb-4">Key Skills & Competencies:</H2>
            <ul className="list-disc md:py-6 ml-6 text-[] leading-tight opacity-80">
              <Li>Proven experience in a front office or similar role.</Li>
              <Li>Exceptional interpersonal and communication skills.</Li>
              <Li>Proficiency in Microsoft Office Suite and related software.</Li>
              <Li>Strong organizational and multitasking abilities.</Li>
              <Li>Ability to maintain a positive attitude under pressure.</Li>
              <Li>High level of professionalism and discretion.</Li>
            </ul>
          </div>

          <div className="mb-12">
            <H2 className="mb-4">Qualifications & Skillsets:</H2>
            <ul className="list-disc ml-6 md:py-6 leading-tight opacity-80">
              <Li>Bachelor’s degree in Business Administration or related field.</Li>
              <Li>Minimum 1–4 years of relevant experience.</Li>
              <Li>Experience in IT or service industry is an advantage.</Li>
              <Li>Familiarity with office management systems and procedures.</Li>
            </ul>
          </div>

          <div>
            <H2 className="mb-4">Why Join Us?</H2>
            <P className="  text-justify leading-tight opacity-80">
              At Qnest, we are at the forefront of digital transformation, helping businesses
              across the globe achieve operational excellence through innovative technology
              solutions. You will play a critical role in shaping our future and driving impactful
              solutions that make a difference in our customers’ success stories. We encourage
              dynamic leaders with a passion for technology and business transformation to apply.
            </P>
            <P className="  text-justify   opacity-60">
              Arche Global Private Limited is an equal opportunity employer. All qualified applicants
              will receive consideration for employment without regard to ancestry, color, gender,
              identity, or any other characteristic protected by applicable laws.
            </P>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-start mt-10 sticky top-24 self-start w-[280px]">
          <Link to="/industries/banking-and-finance/jobapplication">
          <button
            className="group flex items-center justify-center gap-2 w-[250px] h-[48px]
                       px-[24px] py-[12px] rounded-[8px] font-quicksand font-bold text-[16px]
                       border-2 border-[#141414] bg-black text-white shadow-md
                       transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
          >
            SUBMIT APPLICATION
            <span className="relative flex items-center h-[20px] w-[20px]">
              <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
              <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
          </button>
          </Link>

          <div className="mt-8 space-y-4 items-start">
            <P className="text-gray-600 font-semibold">Share Job</P>
            <div className="flex items-start gap-4">
              <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8 cursor-pointer hover:opacity-80" />
              <img src={xLogo} alt="X" className="w-8 h-8 cursor-pointer hover:opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom bar (visible only when OverviewSection is in view) */}
      {showBar && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-[50] bg-white border-t border-gray-300 flex justify-end gap-4 items-center  
         shadow-[0_-2px_6px_rgba(0,0,0,0.1)] transition-transform duration-500">
          <div className="flex gap-4">
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              className="w-8 h-8 cursor-pointer hover:opacity-80"
            />
            <img
              src={xLogo}
              alt="X"
              className="w-8 h-8 cursor-pointer hover:opacity-80"
            />
          </div>
          <button
            className="group flex items-center justify-center gap-2 px-[20px] py-[10px] rounded-[8px]
                       font-quicksand font-bold text-[15px] border-2 border-[#141414]
                       bg-black text-white shadow-md
                       transition-all duration-300 ease-in-out
                       hover:bg-white hover:text-black"
          >
            Apply Now
            <span className="relative flex items-center h-[20px] w-[20px]">
              <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
              <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
          </button>
          <div className="h-20"></div>
        </div>
        
      )}


    </section>
  );
};

export default OverviewSection;
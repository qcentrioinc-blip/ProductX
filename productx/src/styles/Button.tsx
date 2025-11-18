import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

/* -------------------- CONTACT US BUTTON -------------------- */
export const ContactUs = ({ children, className = "" }: ButtonProps) => {
  return (
    <Link to="/industries/banking-and-finance/contactform">
    <button
      className={`
        group
        flex items-center justify-center
        w-[160px] sm:w-[185px] h-[44px] sm:h-[48px]
        px-[20px] sm:px-[24px] py-[10px] sm:py-[12px]
        rounded-[8px]
        font-quicksand font-bold text-[14px] sm:text-[16px]
        bg-[#141414] text-white
        transition-all duration-300 ease-in-out
        border border-transparent
        hover:bg-white hover:text-[#141414]
        hover:border-[#010101]
        hover:border-t-[1px] hover:border-r-[1px] hover:border-b-[4px] hover:border-l-[1px]
        hover:-translate-y-[2px]
        shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
        ${className}
      `}
    >
      <span className="flex items-center gap-[8px]">
        {children}
        <span
          className="
            relative flex items-center justify-center
            w-[20px] sm:w-[23.5px] h-[20px] sm:h-[23.5px] p-[4px] sm:p-[5px]
          "
        >
          {/* Default icon (ArrowUpRight) */}
          <ArrowUpRight
            className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
          />
          {/* Hover icon (ArrowRight) */}
          <ArrowRight
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </span>
      </span>
    </button>
    </Link>
  );
};

/* -------------------- SUBMIT BUTTON -------------------- */
export const Submit = ({ children, className = "" }: ButtonProps) => {
  return (
    <button
      className={`
        group
        flex items-center justify-center
        w-[110px] sm:w-[130px] h-[44px] sm:h-[48px]
        px-[16px] sm:px-[20px] py-[10px] sm:py-[12px]
        rounded-[8px]
        font-quicksand font-bold text-[14px] sm:text-[16px]
        bg-white text-[#141414]
        border border-[#141414]
        shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
        transition-all duration-300 ease-in-out
        hover:bg-[#141414] hover:text-white
        hover:-translate-y-[2px]
        ${className}
      `}
    >
      <span className="flex items-center gap-[8px]">
        {children}
        <span
          className="
            relative flex items-center justify-center
            w-[13px] sm:w-[15px] h-[13px] sm:h-[15px]
          "
        >
          {/* Default icon (ArrowUpRight) */}
          <ArrowUpRight
            className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
          />
          {/* Hover icon (ArrowRight) */}
          <ArrowRight
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </span>
      </span>
    </button>
  );
};

import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
 
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}
 
export const ContactUs = ({ children, className = "" }: ButtonProps) => {
  return (
    <button
      className={`
        group
        flex items-center justify-center
        w-[185px] h-[48px]
        px-[24px] py-[12px]
        rounded-[8px]
        font-quicksand font-bold
        text-[16px] 
        border-2 border-[#141414]
        bg-white text-[#141414]
        shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
        transition-all duration-300 ease-in-out

        hover:bg-[#141414] hover:text-white
        ${className}
      `}
    >
      <span className="flex items-center gap-2">
        {children}
        <span className="relative flex items-center h-[20px] w-[20px]">
          {/* Default icon */}
          <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
          {/* Hover icon */}
          <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </span>
      </span>
    </button>
  );
};

export const Submit = ({ children, className = "" }: ButtonProps) => {
  return (
    <button
      className={`
        group
        flex items-center justify-center
        w-[130px] h-[48px]
        px-[20px] py-[12px]
        rounded-[8px]
        font-quicksand font-bold
        text-[16px] 
        border-2 border-[#141414]
        bg-white text-[#141414]
        shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
        transition-all duration-300 ease-in-out

        hover:bg-[#141414] hover:text-white
        ${className}
      `}
    >
      <span className="flex items-center gap-2">
        {children}
        <span className="relative flex items-center h-[15px] w-[15px]">
          {/* Default icon */}
          <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
          {/* Hover icon */}
          <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </span>
      </span>
    </button>
  );
};
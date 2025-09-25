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
        
        flex items-center justify-center
        w-[185px] h-[48px]
        px-[24px] py-[12px]
        rounded-[8px]
        font-quicksand
        text-[14px] sm:text-[16px] md:text-[16px]
        font-bold
        border-2
      
        ${className}
      `}
    >
      <span className="flex items-center gap-2">
        {children}
        <span className="relative flex items-center h-[20px] w-[20px]">
          {/* Default icon, visible by default */}
          <ArrowUpRight className="absolute inset-0 opacity-100 transition-all duration-300 group-hover:opacity-0" />
          {/* Hover icon, hidden by default */}
          <ArrowRight className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100" />
        </span>
      </span>
    </button>
  );
};
 
export const Submit = ({ children, className = "" }: ButtonProps) => {
  return (
    <button
      className={`
        relative overflow-hidden
        flex items-center justify-center
        w-[185px] h-[48px]
        px-[24px] py-[12px]
        rounded-[8px]
        font-quicksand
        text-[14px] sm:text-[16px] md:text-[16px]
        font-bold
        bg-[rgba(1,1,1,1)]
        text-white
        transition-all duration-300 ease-in-out
        hover:bg-white
        hover:text-black
        hover:border-b-4 hover:border-black
        group
        ${className}
      `}
    >
      <span className="flex items-center gap-2">
        {children}
        <span className="relative flex items-center h-[20px] w-[20px]">
          {/* Default icon, visible by default */}
          <ArrowUpRight className="absolute inset-0 opacity-100 transition-all duration-300 group-hover:opacity-0" />
          {/* Hover icon, hidden by default */}
          <ArrowRight className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100" />
        </span>
      </span>
    </button>
  );
};
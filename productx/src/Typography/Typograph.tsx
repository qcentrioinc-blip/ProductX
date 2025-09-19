
import type { ReactNode } from "react";

type TypographyProps = {
  children: ReactNode;       // content inside the heading
  className?: string;        // optional extra styles
};

export const H1 = ({ children, className = "" }: TypographyProps) => {
  return (
    <h1
      className={`text-5xl sm:text-4xl text-red-700 md:text-3xl lg:text-2xl font-bold leading-[120%] ${className}`}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, className = "" }: TypographyProps) => {
  return (
    <h2
      className={`text-4xl text-blue-700 sm:text-3xl md:text-2xl lg:text-7xl font-semibold leading-[120%] ${className}`}
    >
      {children}
    </h2>
  );
};

export const H2variant = ({ children, className = "" }: TypographyProps) => {
  return (
    <h2
      className={`text-4xl text-amber-500 sm:text-3xl md:text-2xl lg:text-7xl font-semibold leading-[120%] ${className}`}
    >
      {children}
    </h2>
  );
};

export const Paragraph = ({ children, className = "" }: TypographyProps) => {
  return (
    <p className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed ${className}`}>    
      {children}
    </p>
  )};


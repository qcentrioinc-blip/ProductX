import type { ReactNode, CSSProperties } from "react";

type TypographyProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const H1 = ({ children, className = "" }: TypographyProps) => {
  return (
    <h1
      className={`
        text-2xl md:text-5xl
        mb-2 sm:mb-3 md:mb-4 
        font-bricolage
        font-bold
        leading-tight
        
        ${className}`}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, className = "" }: TypographyProps) => {
  return (
    <h2
      className={`
        text-xl sm:text-2xl md:text-4xl
        font-bricolage
        font-semibold
        leading-tight
        ${className}`}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, className = "" }: TypographyProps) => {
  return (
    <h3
      className={`
        text-lg sm:text-xl md:text-2xl
        mb-2 sm:mb-3 md:mb-4 
        font-bricolage
        font-semibold
        leading-tight
     
        ${className}`}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ children, className = "" }: TypographyProps) => {
  return (
    <h4
      className={`
        text-base sm:text-lg md:text-xl
        mb-2 sm:mb-3 md:mb-4 
        font-bricolage
        font-semibold
        leading-tight
       
        ${className}`}
    >
      {children}
    </h4>
  );
};

export const P = ({ children, className = "" }: TypographyProps) => {
  return (
    <p
      className={`
        text-sm sm:text-base md:text-base
        font-quicksand
        leading-tight
        
        ${className}`}
    >
      {children}
    </p>
  );
};

// S - Supporting text
export const S = ({ children, className = "" }: TypographyProps) => {
  return (
    <p
      className={`
        text-xs sm:text-xs md:text-sm
        font-quicksand
        leading-tight
       
        ${className}`}
    >
      {children}
    </p>
  );
};
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
        text-[32px] md:text-[48px] lg:text-[64px]
        font-bricolage
        font-bold
        leading-[120%]
        
        ${className}`}
    >
      {children}
    </h1>
  );
};

// H2
export const H2 = ({ children, className = "" }: TypographyProps) => {
  return (
    <h2
      className={`
        text-[24px] md:text-[32px] lg:text-[40px]
        font-bricolage
        font-semibold
        leading-[120%]
        ${className}`}
    >
      {children}
    </h2>
  );
};

// H3
export const H3 = ({ children, className = "" }: TypographyProps) => {
  return (
    <h3
      className={`
        text-[20px] md:text-[24px] lg:text-[32px]
        font-bricolage
        font-semibold
        leading-[120%]
     
        ${className}`}
    >
      {children}
    </h3>
  );
};

// H4
export const H4 = ({ children, className = "" }: TypographyProps) => {
  return (
    <h4
      className={`
        text-[16px] md:text-[20px] lg:text-[24px]
        font-bricolage
        font-semibold
        leading-[120%]
       
        ${className}`}
    >
      {children}
    </h4>
  );
};

// Paragraph
export const P = ({ children, className = "" }: TypographyProps) => {
  return (
    <p
      className={`
        text-[14px] md:text-[16px] lg:text-[16px]
        font-quicksand
        leading-[120%]
        
        ${className}`}
    >
      {children}
    </p>
  );
};

// Supporting text
export const S = ({ children, className = "" }: TypographyProps) => {
  return (
    <p
      className={`
        text-[12px] md:text-[12px] lg:text-[14px]
        font-quicksand
        leading-[120%]
       
        ${className}`}
    >
      {children}
    </p>
  );
};
import type { ReactNode, CSSProperties } from "react";

type TypographyProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const hasTextColor = (className: string) => className.includes("text-");

export const H1 = ({ children, className = "" }: TypographyProps) => {
  return (
    <h1
      className={`
        text-[32px] sm:text-[48px] md:text-[64px]
        mb-[8px] sm:md-[12px] md:mn-[16px] 
        font-bricolage
        font-bold
        leading-[120%]
        ${hasTextColor(className) ? "" : "text-white"}
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
        text-[24px] sm:text-[32px] md:text-[40px]
        mb-[8px] sm:md-[12px] md:mn-[16px] 
        font-bricolage
        font-semibold
        leading-[120%]
        ${hasTextColor(className) ? "" : "text-white"}
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
        text-[20px] sm:text-[24px] md:text-[32px]
        mb-[8px] sm:md-[12px] md:mn-[16px] 
        font-bricolage
        font-semibold
        leading-[120%]
        ${hasTextColor(className) ? "" : "text-white"}
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
        text-[16px] sm:text-[20px] md:text-[24px]
        mb-[8px] sm:md-[12px] md:mn-[16px] 
        font-bricolage
        font-semibold
        leading-[120%]
        ${hasTextColor(className) ? "" : "text-white"}
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
        text-[14px] sm:text-[16px] md:text-[16px]
        mb-[16px] sm:md-[24px] md:mn-[32px] 
        font-quicksand
        leading-[120%]
        ${hasTextColor(className) ? "" : "text-white"}
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
        text-[12px] sm:text-[12px] md:text-[14px]
        font-quicksand
        leading-[120%]
        ${hasTextColor(className) ? "" : "text-white"}
        ${className}`}
    >
      {children}
    </p>
  );
};

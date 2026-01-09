import { type ReactNode } from "react";

// --- Heading Transformer to DOM + IDs ---
function generateId(text: ReactNode) {
  if (typeof text !== "string") return "";
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export const RD_H1 = ({ children, className = "" }: HeadingProps) => {
  const id = generateId(children);
  return (
    <h1 id={id} className={`text-[32px] md:text-[48px] lg:text-[72px] font-bricolage leading-[120%] ${className}`}>
      {children}
    </h1>
  );
};

export const RD_H2 = ({ children, className = "" }: HeadingProps) => {
  const id = generateId(children);
  return (
    <h2 id={id} className={`text-[24px] md:text-[32px] lg:text-[64px] font-bricolage font-semibold leading-[120%] ${className}`}>
      {children}
    </h2>
  );
};

export const RD_H3 = ({ children, className = "" }: HeadingProps) => {
  const id = generateId(children);
  return (
    <h3 id={id} className={`text-[20px] md:text-[24px] lg:text-[32px] font-bricolage font-semibold leading-[120%] ${className}`}>
      {children}
    </h3>
  );
};

export const RD_P = ({ children, className = "" }: HeadingProps) => {
  return (
    <p className={`text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] font-quicksand leading-[120%] text-[#141414] ${className}`}>
      {children}
    </p>
  );
};

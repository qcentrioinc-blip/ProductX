import { useState, useRef } from "react";
import { useLocation,   } from "react-router-dom";
import { H1, H4, P } from "../../../styles/Typography";
 
type SectionKey = "terms" | "privacy" | "cookies";
 
const EFFECTIVE_DATES: Record<SectionKey, string> = {
  terms: "Effective date 29/10/2025",
  privacy: "Effective date 12/09/2025",
  cookies: "Effective date 01/08/2025",
};
 
const TERMS_TEXT = `WDSFE lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

WDSFE lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
WDSFE lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
WDSFE lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
WDSFE lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`;
const PRIVACY_TEXT = `Sed ut perspiciatis unde omnis iste natus erro DSFDVCDV`;
const COOKIES_TEXT = `xssvf consectetur adipiscing elit,`;
 
export default function PolicySectionWrapper() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const section = searchParams.get("section");
  
  const [active, setActive] = useState<SectionKey>(() => {
  return (section as SectionKey) || "terms";
});

  const [fade, setFade] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
 
   
  // useEffect(() => {
  //   if (section && section !== active) {
  //     setActive(section as SectionKey);
  //   }
  // }, [section]);
 
   
  const path = location.pathname;
 
  const isEHR = path.startsWith("/industries/ehr-and-pms");
  const isBanking = path.startsWith("/industries/banking-and-finance");
 
  const COLORS = {
    ehr: {
      BgColor: "#FFFFFF",
      TextColor: "#166D48",
      AccentColor: "#166D48",
      BtnBgInactive: "#166D4820",
    },
    banking: {
      BgColor: "#FFFFFF",
      TextColor: "#2B68C3",
      AccentColor: "#2B68C3",
      BtnBgInactive: "#2B68C320",
    },
    hightech: {
      BgColor: "#000000",
      TextColor: "#F99526",
      AccentColor: "#F99526",
      BtnBgInactive: "#F9952620",
    },
  };
 
  const theme = isEHR
    ? COLORS.ehr
    : isBanking
    ? COLORS.banking
    : COLORS.hightech;
 
  const { BgColor, TextColor, AccentColor, BtnBgInactive } = theme;
 
  const getText = (key: SectionKey) => {
    switch (key) {
      case "terms":
        return TERMS_TEXT;
      case "privacy":
        return PRIVACY_TEXT;
      case "cookies":
        return COOKIES_TEXT;
    }
  };
 
 
 const switchSection = (key: SectionKey) => {
  if (key === active) return;

  setFade(false); // fade out

  setTimeout(() => {
    setActive(key); // change text
    setFade(true);  // fade back in
   
  }, 200);
};

 
  const allButtons = [
    { key: "terms" as SectionKey, label: "Terms & Conditions" },
    { key: "privacy" as SectionKey, label: "Privacy Policy" },
    { key: "cookies" as SectionKey, label: "Cookie Policy" },
  ];
 
  return (
    <section
      className="w-full py-12 px-4  transition-colors duration-500"
      style={{
        backgroundColor: BgColor,
        color: TextColor,
      }}
    >
      <div
        ref={sectionRef}
        className="max-w-8xl mx-auto flex flex-col lg:flex-row justify-between gap-12 pt-22"
      >
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[70%]">
          <div className="flex items-center justify-between pb-6">
            <H1
              className="text-4xl sm:text-5xl font-extrabold"
              style={{ color: AccentColor }}
            >
              {active === "terms"
                ? "Terms and Conditions"
                : active === "privacy"
                ? "Privacy Policy"
                : "Cookie Policy"}
            </H1>
          </div>
 
          <H4
            className="text-sm sm:text-base font-semibold mb-8 transition-colors duration-500"
            style={{ color: AccentColor }}
          >
            {EFFECTIVE_DATES[active]}
          </H4>
 
          <div
            className={`mt-6 space-y-8 whitespace-pre-wrap transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            } text-base leading-relaxed`}
            style={{
              color: TextColor === "#000000" ? "#4A4A4A" : TextColor,
            }}
          >
            {getText(active)
              .split("\n\n")
              .map((p, i) => (
                <P
                  key={i}
                  className="text-sm md:text-base leading-relaxed mb-4"
                >
                  {p}
                </P>
              ))}
          </div>
        </div>
 
        {/* RIGHT NAV */}
        <div className="relative w-full lg:w-[22%] flex-shrink-0 ">
          <div className="lg:sticky lg:top-24">
 
            {/* Glow */}
            <div
              className="
                absolute
                top-[-200px] sm:top-[-250px] lg:top-[-80px]
                left-[0px] sm:left-[10px] lg:left-[50px]
                w-[250px] sm:w-[300px] md:w-[330px] lg:w-[300px]
                h-[250px] sm:h-[300px] md:h-[330px] lg:h-[300px]
                opacity-40
                blur-[100px]
                rounded-full
                z-0
                pointer-events-none
              "
              style={{ backgroundColor: AccentColor }}
            ></div>
 
            <div className="flex relative z-10">
              <div
                className="w-[5px]"
                style={{ backgroundColor: AccentColor }}
              />
 
              <div className="flex flex-col w-full">
                {allButtons.map((btn) => {
                  const isActive = btn.key === active;
                  return (
                    <button
                      key={btn.key}
                      onClick={() => switchSection(btn.key)}
                      className={`text-left font-medium px-4 py-4 transition-colors duration-150 border-l-[5px]
                          ${isActive ? "font-bold" : "hover:opacity-80"}
                        `}
                      style={{
                        backgroundColor: isActive
                          ? BtnBgInactive
                          : "transparent",
                        color: isActive ? AccentColor : TextColor,
                        borderColor: isActive
                          ? AccentColor
                          : "transparent",
                      }}
                    >
                      {btn.label}
                    </button>
                  );
                })}
              </div>
            </div>
 
          </div>
        </div>
      </div>
    </section>
  );
}
import { useLocation } from "react-router-dom";
import React from "react";

import TitleSecBnF from "./TitleSecBnF";
import TitleSecEHR from "./TitleSecEHR";
import TitleSecHT from "./TitleSecHT";
import TitleSecAI from "./TitleSecAI";

export default function TitleSectionSwitcher() {
  const { pathname } = useLocation();

  const sectionMap: Record<string, React.ReactNode> = {
    "/industries/banking-and-finance/built-for": <TitleSecBnF />,
    "/industries/ehr-and-pms/built-for": <TitleSecEHR />,
    "/industries/high-tech/built-for": <TitleSecHT />,
    "/industries/ai-optimization/built-for": <TitleSecAI />,
  };

  return sectionMap[pathname] || null;
}

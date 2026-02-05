import { useLocation } from "react-router-dom";

const IndustryLayout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  const isEhrPms = pathname.includes("/industries/ehr-and-pms");

  return (
    <div className={isEhrPms ? "ehr-pms" : ""}>
      {children}
    </div>
  );
};

export default IndustryLayout;
 
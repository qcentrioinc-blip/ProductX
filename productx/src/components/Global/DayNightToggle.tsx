 
import { useLocation } from "react-router-dom";
import { useTheme } from "./ThemeContext";

// const NAVBAR_TOGGLE_ROUTES = ["/industries/cloud-finops-ai"];
const ALLOWED_FLOATING_ROUTES = [
  "/industries/banking-and-finance/products/",
  "/industries/banking-and-finance",
  "/",
  "/contact"
];

// ─── Floating toggle (all pages EXCEPT navbar routes) ───────────────────────
const DayNightToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const { pathname } = useLocation();

  // const isInNavbar = NAVBAR_TOGGLE_ROUTES.some((r) => pathname.startsWith(r));

 const shouldShowFloating = ALLOWED_FLOATING_ROUTES.some((r) =>
  r === "/" ? pathname === "/" : pathname.startsWith(r)
);

// Hide everywhere except allowed routes
if (!shouldShowFloating) return null;

 

  // Hide floating button on routes that embed it in the navbar
  // if (isInNavbar) return null;

  return (
    <button
      onClick={toggleTheme}
      className="hidden xl:block"
      style={{
        position: "fixed",
        top:"72px",
        right: "28px",
        zIndex: 9999,
        width: 50,
        height: 35,
        borderRadius: 20,
        background: isDark ? "#1e293b" : "#efefef",
        border: `0.5px solid ${isDark ? "#334155" : "#141414"}`,
        cursor: "pointer",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 5,
          left: isDark ? 20 : 3,
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: isDark ? "#1e293b" : "#ffffff",
          border: `0.5px solid ${isDark ? "#475569" : "#141414"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "left 0.3s, background 0.3s",
          boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
        }}
      >
        {isDark ? (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#e2e8f0" stroke="none">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="2" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </span>
    </button>
  );
};

export default DayNightToggle;

// ─── Navbar-embedded toggle (used inside AINavbar and other industry navbars) ─
export const NavbarDayNightToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      style={{
        width: 50,
        height: 30,
        borderRadius: 20,
        flexShrink: 0,
        position: "relative",
        background: isDark ? "#1e293b" : "#efefef",
        border: `0.5px solid ${isDark ? "#334155" : "#141414"}`,
        cursor: "pointer",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 3,
          left: isDark ? 22 : 3,
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: isDark ? "#1e293b" : "#ffffff",
          border: `0.5px solid ${isDark ? "#475569" : "#141414"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "left 0.3s, background 0.3s",
          boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
        }}
      >
        {isDark ? (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#e2e8f0" stroke="none">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="2" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </span>
    </button>
  );
};
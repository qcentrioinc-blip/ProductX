import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeContext";

const DayNightToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const [position, setPosition] = useState(0);
  const targetRef = useRef(0);
  const currentRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      targetRef.current = window.scrollY + window.innerHeight / 2 - 20;
    };

    const animate = () => {
      // 🔥 smooth interpolation (lerp)
      currentRef.current += (targetRef.current - currentRef.current) * 0.1;

      setPosition(currentRef.current);
      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize

    animate(); // start loop

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="hidden xl:block"
      style={{
        position: "absolute",
        top: position,
        left: "10px",
        zIndex: 9999,

        width: 50,
        height: 35,
        borderRadius: 20,
        background: isDark ? "#1e293b" : "#efefef",
        border: `0.5px solid ${isDark ? "#334155" : "#141414"}`,
        cursor: "pointer",

        // optional extra smoothness
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
          // Moon — filled crescent SVG
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#e2e8f0" stroke="none">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          // Sun — outline SVG
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
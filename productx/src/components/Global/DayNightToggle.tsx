// src/components/DayNightToggle.tsx

import { useTheme } from "./ThemeContext";

 

const DayNightToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle day/night mode"
      className="relative w-14 h-7 rounded-full transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      style={{
        background: theme === 'dark'
          ? 'linear-gradient(135deg, #1a1a2e, #16213e)'
          : 'linear-gradient(135deg, #87CEEB, #FDB813)',
      }}
    >
      {/* Track stars (dark mode) */}
      {theme === 'dark' && (
        <>
          <span className="absolute top-1 left-2 w-0.5 h-0.5 bg-white rounded-full opacity-80" />
          <span className="absolute top-2 left-5 w-0.5 h-0.5 bg-white rounded-full opacity-60" />
          <span className="absolute bottom-1.5 left-3 w-0.5 h-0.5 bg-white rounded-full opacity-70" />
        </>
      )}

      {/* Thumb — Sun or Moon */}
      <span
        className="absolute top-0.5 w-6 h-6 rounded-full shadow-md flex items-center justify-center text-sm transition-all duration-500"
        style={{
          left: theme === 'dark' ? 'calc(100% - 1.75rem)' : '0.125rem',
          background: theme === 'dark'
            ? 'linear-gradient(135deg, #e2e8f0, #cbd5e1)'
            : 'linear-gradient(135deg, #FDB813, #F97316)',
        }}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
    </button>
  );
};

export default DayNightToggle;
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

type Theme = 'light' | 'dark';
interface ThemeContextType { theme: Theme; toggleTheme: () => void; }

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light', toggleTheme: () => {},
});

const DARK_MODE_PAGES = [
  "/industries/banking-and-finance/products/pago",
  // future pages yahan add karo
];

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isAllowed = DARK_MODE_PAGES.includes(location.pathname);

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme;
    const isAllowedOnLoad = DARK_MODE_PAGES.includes(window.location.pathname);
    return (saved === 'dark' && isAllowedOnLoad) ? 'dark' : 'light';
  });

  // Apply/remove dark class based on theme + page
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark' && isAllowed) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme, isAllowed]);

  // Reset when navigating away from allowed page
  useEffect(() => {
    if (!isAllowed) {
      setTheme('light');
      localStorage.removeItem('theme');
    }
  }, [isAllowed]);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
 const [isDark, setIsDark] = useState(() => {
  const saved = localStorage.getItem('theme');

  // DEFAULT DARK MODE
  if (!saved) return true;

  try {
    return JSON.parse(saved);
  } catch {

    if (saved === 'dark') return true;

    if (saved === 'light') return false;

    return true;
  }
});

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

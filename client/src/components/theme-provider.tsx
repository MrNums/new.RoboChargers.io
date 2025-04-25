import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Check time-based theme setting
    const updateThemeBasedOnTime = () => {
      const currentHour = new Date().getHours();
      const isDarkModeTime = currentHour >= 20 || currentHour < 8; // 8pm to 8am
      
      setTheme(isDarkModeTime ? 'dark' : 'light');
    };

    // Initial setup
    updateThemeBasedOnTime();
    
    // Set up interval to check every minute
    const interval = setInterval(updateThemeBasedOnTime, 60000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    
    // Update localStorage for persistence across page refreshes
    localStorage.setItem('robochargers-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
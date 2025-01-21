import React, { createContext, useContext, useEffect, useState } from 'react';
import { themes } from '@/themes';
import type { Theme } from '@/types/theme';

interface ThemeContextType {
  theme: keyof typeof themes;
  setTheme: (theme: keyof typeof themes) => void;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<keyof typeof themes>('modern');

  useEffect(() => {
    const root = document.documentElement;
    const currentTheme = themes[theme];

    // Set CSS variables for colors
    Object.entries(currentTheme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

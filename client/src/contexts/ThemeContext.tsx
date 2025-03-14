import { createContext, useContext, useState, useEffect } from 'react';
import { ThemeType } from '@/theme/theme';

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
  isDarkMode: boolean;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as ThemeType) || 'light';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isDarkMode: theme === 'dark',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

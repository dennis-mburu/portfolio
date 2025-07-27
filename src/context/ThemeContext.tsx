import React, { createContext, useEffect, useState } from "react";

// 1. Define the possible theme values
type Theme = "light" | "dark";

// 2. Define the shape of the context
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// 3. Create the context with an initial undefined value
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 4. ThemeProvider component that wraps the app and provides the theme logic
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");
    return (savedTheme as Theme) || "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Apply the selected theme to <html> for CSS variable styling
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

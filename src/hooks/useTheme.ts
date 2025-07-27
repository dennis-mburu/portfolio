import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/**
 * Custom hook to access the current theme and the toggle function.
 *
 * useContext lets us "consume" the context from anywhere in the app,
 * as long as it's inside a <ThemeProvider>.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);

  // If this hook is used outside the ThemeProvider, throw an error
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  // Returns the theme state and toggleTheme function
  return context;
};

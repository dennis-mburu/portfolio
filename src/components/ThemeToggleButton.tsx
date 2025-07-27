import { useTheme } from "../hooks/useTheme";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="text-xl p-2 rounded-full bg-[var(--color-muted)]/10 hover:bg-[var(--color-muted)]/20 transition"
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-blue-600" />
      )}
    </motion.button>
  );
};

export default ThemeToggleButton;

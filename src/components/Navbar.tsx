import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggleButton from "./ThemeToggleButton";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[var(--color-bg)] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold text-[var(--color-accent)]"
        >
          Dennis.dev
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggleButton />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--color-bg)] overflow-hidden shadow-sm"
          >
            <div className="flex flex-col px-4 py-2 space-y-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition"
                >
                  {link.name}
                </a>
              ))}
              <ThemeToggleButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

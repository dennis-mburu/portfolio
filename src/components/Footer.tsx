import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../data/profile.json";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-[var(--color-bg-alt)] text-[var(--color-text)] py-4 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <p className="text-sm text-[var(--color-muted)]">
          &copy; {year} Dennis Mburu. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

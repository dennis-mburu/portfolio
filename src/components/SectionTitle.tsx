// src/components/SectionTitle.tsx

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-4xl font-bold mb-8 text-center text-[var(--color-text)]"
    >
      <span className="relative inline-block after:block after:h-1 after:w-16 after:bg-[var(--color-accent)] after:mt-2 after:mx-auto">
        {title}
      </span>
    </motion.h2>
  );
};

export default SectionTitle;

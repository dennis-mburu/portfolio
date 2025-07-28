// src/components/ProjectCard.tsx

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  github: string;
  live: string;
}

const ProjectCard = ({
  title,
  image,
  description,
  github,
  live,
}: ProjectCardProps) => {
  return (
    <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-accent)] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover border-b border-[var(--color-border)]"
      />
      <div className="p-5 flex flex-col h-[16rem] justify-between">
        <div>
          <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
            {title}
          </h3>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex justify-between mt-2 ">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium bg-[var(--color-accent)] text-white px-3 py-2 rounded-lg hover:brightness-110 transition"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium border border-[var(--color-accent)] text-[var(--color-accent)] px-3 py-2 rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition"
          >
            <FaExternalLinkAlt />
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

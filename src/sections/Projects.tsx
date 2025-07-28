// src/sections/Projects.tsx

import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import profile from "../data/profile.json";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4">
      <SectionTitle title="Projects" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {profile.projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

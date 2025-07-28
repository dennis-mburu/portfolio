import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiPython,
  SiRuby,
  SiRubyonrails,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPhp,
  SiGit,
  SiGithub,
  SiPostman,
  //   SiMicrosoftazure,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import SectionTitle from "../components/SectionTitle";

type SkillCategory = {
  [key: string]: { name: string; icon: React.JSX.Element }[];
};

const skillCategories: SkillCategory = {
  Frontend: [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Material UI", icon: <SiMui /> },
  ],
  "Backend & Databases": [
    { name: "Python", icon: <SiPython /> },
    { name: "Ruby", icon: <SiRuby /> },
    { name: "Rails", icon: <SiRubyonrails /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "PHP", icon: <SiPhp /> },
  ],
  Tools: [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Azure", icon: <VscAzure /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
  ],
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.3 },
  }),
};

const SkillGrid = () => {
  return (
    <section id="skills" className="py-16 px-4">
      <SectionTitle title="Skills" />
      <div className="space-y-12">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-accent)]">
              {category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text)] text-sm hover:shadow-md hover:scale-105 transition-transform duration-200"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                >
                  <span className="text-lg text-[var(--color-accent)]">
                    {skill.icon}
                  </span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillGrid;

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../data/profile.json";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[var(--color-bg)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hi, I'm <span className="text-[var(--color-accent)]">{profile.name}</span>
        </h1>

        <TypeAnimation
          sequence={[
            profile.title, 2000,
            profile.tagline, 2500,
            "Let’s build something amazing 💻", 2500
          ]}
          speed={30}
          repeat={Infinity}
          className="text-xl md:text-2xl text-[var(--color-muted)] mb-6"
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <a
            href="#projects"
            className="bg-[var(--color-accent)] text-white px-6 py-3 rounded-full hover:opacity-90 transition font-medium"
          >
            View Projects
          </a>
          <a
            href={profile.cvLink}
            download
            className="border border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-3 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition font-medium"
          >
            Download CV
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-12 animate-bounce text-[var(--color-muted)]"
      >
        <FaArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;

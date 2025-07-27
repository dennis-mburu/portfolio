import profile from "../data/profile.json";
import { motion } from "framer-motion";
import dennis from "../assets/dennis.png";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <section
      id="about"
      className="pb-20 px-6 bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <SectionTitle title="About Me" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image with Blob + Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full flex justify-center items-center"
        >
          {/* Blob Background */}
          <div className="absolute w-[360px] h-[360px] rounded-full bg-[var(--color-accent)] opacity-30 blur-2xl" />

          {/* Image Box */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-[var(--color-accent)] shadow-lg">
            <img
              src={dennis}
              alt="Dennis Mburu"
              className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform"
            />

            <div className="absolute bottom-0 w-full text-center bg-[var(--color-accent)] text-white py-1 text-sm font-semibold">
              Full Stack Dev
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            About <span className="text-[var(--color-accent)]">Me</span>
          </h2>

          <p className="text-lg leading-relaxed mb-6">{profile.about.bio}</p>

          <div className="space-y-3 flex flex-col items-center">
            {profile.about.funFacts.map((fact, index) => (
              <p
                key={index}
                className="text-[var(--color-muted)] flex items-center before:content-['💡'] before:mr-2"
              >
                {fact}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

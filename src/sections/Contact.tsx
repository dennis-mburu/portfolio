import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import profile from "../data/profile.json";
import SectionTitle from "../components/SectionTitle";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    if (form.current) {
      emailjs
        .sendForm(
          "service_ofic85k",
          "template_uq2802w",
          form.current,
          "f_XQ1WcX93thVv4OJ"
        )
        .then(
          () => setStatus("success"),
          () => setStatus("error")
        );
    }
  };

  const { email, phone, location, github, linkedin } = profile.contact;

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-8 lg:px-16 bg-[var(--color-bg-alt)]"
    >
      <SectionTitle title="Contact Me" />
      <div className="grid md:grid-cols-2 gap-12 mt-8 items-start">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[var(--color-text)]">
            Let's Get In Touch
          </h3>
          <p className="text-[var(--color-muted)] mb-6">
            I’m open to collaborations, projects or just a quick hello.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-[var(--color-text)]">
              <FaEnvelope className="text-[var(--color-accent)]" /> {email}
            </li>
            <li className="flex items-center gap-3 text-[var(--color-text)]">
              <FaPhone className="text-[var(--color-accent)]" /> {phone}
            </li>
            <li className="flex items-center gap-3 text-[var(--color-text)]">
              <FaMapMarkerAlt className="text-[var(--color-accent)]" />{" "}
              {location}
            </li>
          </ul>

          <h4 className="mt-8 text-lg font-medium text-[var(--color-text)]">
            Follow Me
          </h4>
          <div className="flex gap-4 mt-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-[var(--color-accent)] text-white px-4 py-2 rounded-lg hover:brightness-110 transition"
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm border border-[var(--color-accent)] text-[var(--color-accent)] px-4 py-2 rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-[var(--color-bg)] p-6 rounded-2xl shadow-md space-y-4"
        >
          <input
            name="user_name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-md bg-[var(--color-bg-alt)] text-[var(--color-text)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          />
          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-md bg-[var(--color-bg-alt)] text-[var(--color-text)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 rounded-md bg-[var(--color-bg-alt)] text-[var(--color-text)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          />
          <button
            type="submit"
            className="bg-[var(--color-accent)] text-white px-6 py-2 rounded-md hover:brightness-110 transition"
          >
            Send Message
          </button>

          {status === "success" && (
            <p className="text-green-500 text-sm mt-2">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

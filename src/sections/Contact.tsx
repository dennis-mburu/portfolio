// components/Contact.tsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

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

  return (
    <section id="contact" className="py-16 px-4">
      <SectionTitle title="Contact Me" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6 text-[var(--color-text)] flex flex-col justify-center mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">Let's get in touch</h3>
            {/* <p className="text-sm leading-relaxed">
              Whether you have a question, want to work together, or just want
              to say hi — my inbox is always open.
            </p> */}
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-lg text-[var(--color-accent)]" />
              <span>dennismburu@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-lg text-[var(--color-accent)]" />
              <span>+254 712 345678</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-lg text-[var(--color-accent)]" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-6 mb-2">Follow me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/dennis-mburu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-[var(--color-accent)] transition"
              >
                <FaGithub className="text-lg" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/dennis-mburu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-[var(--color-accent)] transition"
              >
                <FaLinkedin className="text-lg" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="p-3 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text)]"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="p-3 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text)]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="p-3 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text)]"
          ></textarea>
          <button
            type="submit"
            className="self-start px-6 py-3 bg-[var(--color-accent)] text-white rounded-md hover:opacity-90 transition"
          >
            Send Message
          </button>

          {status === "success" && (
            <p className="text-green-500">Message sent successfully! ✅</p>
          )}
          {status === "error" && (
            <p className="text-red-500">Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

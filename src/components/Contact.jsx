import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-24 text-center scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">
        Let’s Work Together
      </h2>

      <p className="text-slate-600 dark:text-slate-400 mb-10">
        I’m currently open to new opportunities and collaborations.
        Feel free to reach out if you’d like to work together or have any questions.
      </p>

      {/* CTA BUTTON */}
      <div className="flex justify-center mb-10">
        <a
          href="mailto:farisan@email.com"
          className="inline-flex items-center gap-2
          px-6 py-3 rounded-full
          bg-slate-900 text-white
          hover:bg-slate-700
          dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200
          transition"
        >
          <Mail size={18} />
          Contact Me
        </a>
      </div>

      {/* SOCIAL LINKS */}
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/username"
          target="_blank"
          className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
        >
          <Github size={28} />
        </a>

        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
        >
          <Linkedin size={28} />
        </a>
      </div>
    </motion.section>
  );
}

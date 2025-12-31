import { motion } from "framer-motion";

export default function About() {
  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Vite",
    "Git",
  ];

  return (
    <motion.section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Saya{" "}
            <span className="font-medium text-slate-900 dark:text-white">
              Farisan Amanuddin
            </span>
            , seorang Frontend Developer yang fokus pada UI modern dan UX yang
            nyaman.
          </p>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Terbiasa menggunakan React & Tailwind untuk membangun aplikasi yang
            rapi, responsif, dan scalable.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full text-sm
                bg-slate-100 dark:bg-slate-800
                text-slate-700 dark:text-slate-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

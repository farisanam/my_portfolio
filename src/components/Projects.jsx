import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { container } from "./animations"; // Import dari kode kedua
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard"; // Import dari kode kedua

const projects = [
  {
    id: 1,
    title: "Cat Breed Classification",
    short: "CNN-based image classification using VGG16",
    description:
      "A deep learning project to classify cat breeds (Persian, Himalayan, Domestic) using Transfer Learning with VGG16. Includes data augmentation and evaluation metrics.",
    tech: ["CNN", "VGG16", "Python"],
    github: "https://github.com/yourusername/cat-breed-classification",
    demo: "",
  },
  {
    id: 2,
    title: "Sentiment Analysis Twitter",
    short: "Naive Bayes sentiment analysis on Indonesian tweets",
    description:
      "A natural language processing project to analyze public sentiment from Twitter data using the Naive Bayes algorithm.",
    tech: ["NLP", "Naive Bayes", "Python"],
    github: "#",
    demo: "",
  },
  {
    id: 3,
    title: "IoT Security System",
    short: "SVM-based threat detection on IoT network",
    description:
      "Implementing Support Vector Machine (SVM) to detect and classify security threats in IoT network environments.",
    tech: ["IoT", "SVM", "Security"],
    github: "#",
    demo: "",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <AnimatedSection delay={0.2}>
      <section
        id="projects"
        className="min-h-screen py-24 px-6 bg-white dark:bg-slate-950 transition-colors"
      >
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white"
          >
            Projects
          </motion.h2>

          {/* Grid menggunakan variants 'container' dari kode kedua */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <div 
                key={project.title} 
                onClick={() => setSelected(project)} 
                className="cursor-pointer"
              >
                {/* Menggunakan komponen ProjectCard dari kode kedua */}
                <ProjectCard 
                  title={project.title} 
                  desc={project.short} 
                  tech={project.tech} 
                />
              </div>
            ))}
          </motion.div>

          {/* Modal tetap dipertahankan dari kode pertama untuk detail */}
          <AnimatePresence>
            {selected && (
              <motion.div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-slate-900 max-w-lg w-full rounded-2xl p-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                    {selected.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                    {selected.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selected.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {selected.github && (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </AnimatedSection>
  );
}

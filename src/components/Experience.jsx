import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection"; // Import ditambahkan

const experiences = [
  {
    year: "2024",
    title: "Web Developer Intern",
    place: "Company / Institution Name",
    desc: "Developed web applications using React, REST API, and GitHub. Assisted in debugging, feature development, and UI improvements.",
  },
  {
    year: "2023",
    title: "IoT & Web Project",
    place: "Academic Project",
    desc: "Built IoT-based monitoring system using ESP32 with web dashboard integration.",
  },
];

const education = [
  {
    year: "2021 – Present",
    title: "S1 Teknik Informatika",
    place: "Universitas Muhammadiyah Sukabumi",
    desc: "Focused on Artificial Intelligence, Machine Learning, and Web Development.",
  },
];

export default function Experience() {
  return (
    // Membungkus dengan AnimatedSection dan memberikan delay 0.1
    <AnimatedSection delay={0.1}>
      <section
        id="experience"
        className="min-h-screen py-24 px-6 bg-slate-50 dark:bg-slate-900 transition-colors"
      >
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white"
          >
            Experience & Education
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-slate-800 dark:text-slate-200">
                Experience
              </h3>

              <div className="space-y-8 border-l border-slate-300 dark:border-slate-700 pl-6">
                {experiences.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                      {item.place}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-slate-800 dark:text-slate-200">
                Education
              </h3>

              <div className="space-y-8 border-l border-slate-300 dark:border-slate-700 pl-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                      {item.place}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

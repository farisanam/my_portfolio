import { motion } from "framer-motion";
import { item } from "./animations";

export default function ProjectCard({ title, desc, tech }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6 }}
      className="rounded-2xl border border-slate-200 dark:border-slate-800
                 bg-white dark:bg-slate-900 p-6 shadow-sm
                 transition-shadow hover:shadow-lg"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
        {desc}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full
                       bg-slate-100 dark:bg-slate-800"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="bg-white dark:bg-slate-900 max-w-lg w-full rounded-xl p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-900"
        >
          <X />
        </button>

        <img src={project.image} className="rounded-lg mb-4" />

        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          {project.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

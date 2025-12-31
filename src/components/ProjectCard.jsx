import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      className="cursor-pointer rounded-xl overflow-hidden
      bg-white dark:bg-slate-900
      border border-slate-200 dark:border-slate-800
      shadow-sm hover:shadow-lg transition"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-40 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio dengan React dan Tailwind.",
    tech: ["React", "Tailwind", "Vite"],
    image: "https://via.placeholder.com/600x400",
    github: "#",
    live: "#",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </motion.section>
  );
}

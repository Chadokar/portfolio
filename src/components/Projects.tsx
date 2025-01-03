import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce website",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    github: "#",
    hover: "",
    live: "#",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
    github: "#",
    live: "#",
    tags: ["React", "OpenAI", "WebSocket"],
  },
  {
    title: "Portfolio Website",
    description: "3D animated portfolio built with React and Three.js",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    github: "#",
    live: "#",
    tags: ["React", "Three.js", "Framer Motion"],
  },
];

function Projects(): React.ReactElement {
  return (
    <div className="space-y-8">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        whileHover={{ scale: 1.05 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            // initial={{ opacity: 0, y: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

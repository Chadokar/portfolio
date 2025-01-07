import { GithubIcon, ExternalLinkIcon } from "lucide-react";
import { Card3D } from "./ui/Card3D";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tags: string[];
}

export function ProjectCard({
  title,
  description,
  image,
  github,
  live,
  tags,
}: ProjectCardProps) {
  return (
    <Card3D className="group">
      <motion.div
        className="bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/20"
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-6 transform-gpu transition-transform duration-300 group-hover:translate-z-10">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-blue-500/10 rounded-full text-sm text-blue-400 transition-colors duration-300 hover:bg-blue-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <motion.a
              href={github}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              whileHover={{
                scale: 1.1,
                rotate: [15, -15],
                transition: {
                  repeat: Infinity,
                  duration: 0.5,
                  repeatType: "mirror",
                },
              }}
              animate={{
                scale: 1, // Default scale when not hovering
                rotate: 0, // Default rotation when not hovering
                transition: {
                  duration: 0.5, // Smooth transition back to default
                },
              }}
            >
              <GithubIcon className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={live}
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{
                scale: 1.1,
                originX: [-1.5, -1.5],
                originY: [1.5, 1.5],
                transition: {
                  repeat: Infinity,
                  duration: 0.5,
                  repeatType: "mirror",
                },
              }}
              animate={{
                scale: 1, // Default scale when not hovering
                rotate: 0, // Default rotation when not hovering
                transition: {
                  duration: 0.5, // Smooth transition back to default
                },
              }}
            >
              <ExternalLinkIcon className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </Card3D>
  );
}

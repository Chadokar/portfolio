import { motion } from "framer-motion";
import { BriefcaseIcon } from "lucide-react";
import { Card3D } from "./ui/Card3D";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  tags,
}: ExperienceCardProps) {
  return (
    <Card3D>
      <motion.div
        className="flex gap-4 bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex-shrink-0">
          <motion.div
            className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <BriefcaseIcon className="w-6 h-6 text-blue-500" />
          </motion.div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-blue-500">{company}</p>
          <p className="text-sm text-gray-400">{period}</p>
          <p className="mt-2 text-gray-300">{description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 bg-blue-500/10 rounded-full text-sm text-blue-400 transition-colors duration-300 hover:bg-blue-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Card3D>
  );
}

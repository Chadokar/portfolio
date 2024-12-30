import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Rhombuz",
    period: "May 23 - Aug 23",
    description:
      "Built a scalable platform using React, Redux Toolkit, and React Query for optimized state management and API integration; implemented advanced search and interactive D3.js visualizations.",
  },
  {
    title: "Full Stack Developer",
    company: "Prandit",
    period: "Nov 2022 - Feb 2023",
    description:
      "Developed and maintained full-stack web applications, and deployed them to AWS EC2 instances with CI/CD pipelines",
  },
  {
    title: "Frontend Developer",
    company: "Stealth Mode Startup",
    period: "Aug 2022 - Oct 2022",
    description: "Built responsive web interfaces and implemented RESTful APIs",
  },
];

export function WorkExperience() {
  return (
    <div className="space-y-8">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        whileHover={{ scale: 1.05 }}
      >
        Work Experience
      </motion.h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ExperienceCard {...exp} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

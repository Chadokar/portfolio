import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";

const experiences = [
  {
    title: "Python Developer",
    company: "Unsiloed AI",
    period: "Jan 25 - Current",
    description:
      "I implemented Retrieval-Augmented Generation (RAG) with Chain-of-Thought (COT) using semantic search via an LLM and designed a FastAPI-based API for a vision-language model, optimizing it with multithreading and deploying it on AWS EC2.",
    tags: [
      "Python",
      "FastAPI",
      "Multithreading",
      "RAG",
      "COT",
      "LLM",
      "AWS",
      "EC2",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Rhombuz",
    period: "May 23 - Aug 23",
    description:
      "Developed a scalable web platform leveraging React, Redux Toolkit, and React Query for efficient state management and seamless API integration. Implemented advanced search functionality and interactive data visualizations using D3.js for enhanced user experience and data insights.",
    tags: ["React", "Redux", "D3.js", "React Query", "React Hooks"],
  },
  {
    title: "Full Stack Developer",
    company: "Prandit",
    period: "Nov 2022 - Feb 2023",
    description:
      "Developed and maintained full-stack web applications using React, Redux and Express js, and deployed them to AWS EC2 instances with CI/CD pipelines",
    tags: [
      "Express.js",
      "Node js",
      "AWS",
      "CI/CD",
      "React",
      "Redux",
      "Restful API",
      "PostgreSQL",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Stealth Mode Startup",
    period: "Aug 2022 - Oct 2022",
    description:
      "Built responsive web interfaces and integrated RESTful APIs using React and Redux.",
    tags: ["React", "Redux", "RESTful API"],
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
            // initial={{ opacity: 0, x: -50 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ExperienceCard {...exp} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

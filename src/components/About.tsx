import { motion } from "framer-motion";
import { skills } from "./Skills";

// const technologies = [
//   {
//     category: "Core Technologies",
//     items: [
//       { icon: <DiJavascript1 className="w-8 h-8" />, name: "JavaScript" },
//       { icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript" },
//       { icon: <DiReact className="w-8 h-8" />, name: "React.js" },
//     ],
//   },
//   {
//     category: "Backend & Database",
//     items: [
//       { icon: <DiPostgresql className="w-8 h-8" />, name: "PostgreSQL" },
//       { icon: <SiNodedotjs className="w-8 h-8" />, name: "Node.js" },
//       { icon: <SocketIOIcon />, name: "Socket.IO" },
//     ],
//   },
//   {
//     category: "DevOps & Tools",
//     items: [
//       { icon: <DiDocker className="w-8 h-8" />, name: "Docker" },
//       { icon: <DiGitBranch className="w-8 h-8" />, name: "GitHub Actions" },
//       { icon: <DiAws className="w-8 h-8" />, name: "AWS EC2" },
//     ],
//   },
// ];

export function About() {
  return (
    <div className="min-h-screen text-white py-20">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        whileHover={{ scale: 1.05 }}
      >
        Get to know me
      </motion.h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <motion.div
            // initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-blue-400">
              Hello! I'm Shubham Chadokar
            </h2>
            <p className="text-xl text-gray-300">
              I'm a passionate Fullstack developer with experience in building
              web applications. My journey in tech started with a curiosity
              about how things work on the internet, and it has evolved into a
              career where I get to build those things myself.
            </p>
            <p className="text-xl text-gray-300">
              I specialize in full-stack development using modern technologies
              like React, Node.js, Express.js, JavaScript, TypeScript and
              deployment services. I'm particularly interested in creating
              performant, scalable applications that solve real-world problems.
            </p>
            <p className="text-xl text-gray-300">
              When I'm not coding, you can find me reading different tech blogs,
              learning new technologies, or playing video games. I'm always
              looking for new opportunities to learn and grow as a developer.
            </p>
          </motion.div>

          <motion.div
            // initial={{ opacity: 0, x: 50 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-blue-400">
              Skills
            </h3>

            {skills.map((category) => (
              <motion.div
                key={category.category}
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm"
              >
                <h4 className="text-xl font-semibold mb-4 text-blue-300">
                  {category.category}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center space-x-3 bg-gray-700/30 p-3 rounded-lg hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300"
                    >
                      <motion.div>{item.icon}</motion.div>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

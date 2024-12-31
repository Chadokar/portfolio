import React from "react";
// import reactLogo from "./assets/react.svg";
import { motion } from "framer-motion";
import AnimatedBg from "./components/AnimatedBg";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import { Code2Icon } from "lucide-react";
import { WorkExperience } from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { About } from "./components/About";

function App() {
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mouse-x", `${x}%`);
      document.documentElement.style.setProperty("--mouse-y", `${y}%`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen relative">
      <AnimatedBg />
      <Navbar />
      <Section
        id="home"
        className="flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,255,0.1),transparent)] animate-pulse" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-8"
          >
            <Code2Icon className="w-20 h-20 text-blue-500" />
          </motion.div>
          <h1 className="text-6xl font-bold mb-4">Shubham Chadokar</h1>
          <p className="text-2xl text-gray-300">Full Stack Developer</p>
        </motion.div>
      </Section>

      <Section id="about" className="bg-black/20">
        {/* <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              I'm a passionate Fullstack developer with experience in building
              web applications. My journey in tech started with a curiosity
              about how things work on the internet, and it has evolved into a
              career where I get to build those things myself.
            </p>
            <p>
              I specialize in full-stack development using modern technologies
              like React, Node.js, Express.js, JavaScript, TypeScript and
              deployment services. I'm particularly interested in creating
              performant, scalable applications that solve real-world problems.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source
              projects, writing technical blog posts, or exploring new
              technologies.
            </p>
          </div>
        </div> */}
        <About />
      </Section>

      <Section id="experience" className="bg-black/10">
        <WorkExperience />
      </Section>
      <Section id="projects" className="bg-black/20">
        <Projects />
      </Section>
      <Section id="contact" className="bg-black/10">
        <Contact />
      </Section>
    </div>
  );
}

export default App;

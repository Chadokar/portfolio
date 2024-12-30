import React from "react";
// import reactLogo from "./assets/react.svg";
import { motion } from "framer-motion";
import "./App.css";
import AnimatedBg from "./components/AnimatedBg";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import { Code2Icon } from "lucide-react";

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
    </div>
  );
}

export default App;

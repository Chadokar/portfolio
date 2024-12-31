import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

function Contact(): JSX.Element {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
      <motion.div
        // initial={{ opacity: 0, y: 50 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <p className="text-xl text-gray-300">
          I'm currently looking for new opportunities. Think we should work
          together? Reach out to me at
        </p>
        <a
          href="mailto:shubhamchadokar36@gmail.com"
          className="inline-block px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors"
        >
          Say Hello
        </a>
        <div className="flex justify-center gap-8 mt-12">
          <a
            href="https://github.com/Chadokar"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/chadokar/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="mailto:shubhamchadokar36@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;

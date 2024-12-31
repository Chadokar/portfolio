import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { cn } from "../lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  return (
    <motion.section
      // ref={ref}
      // initial={{ opacity: 0, y: 50 }}
      // animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      // transition={{ duration: 0.8 }}
      className={cn("min-h-screen py-20 px-4 sm:px-6 lg:px-8", className)}
      id={id}
    >
      {children}
    </motion.section>
  );
}

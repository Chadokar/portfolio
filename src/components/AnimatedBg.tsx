import React from "react";
import useBgAnimation from "../hooks/useBgAnimation";

const AnimatedBg: React.FC = () => {
  const bgRef: React.RefObject<HTMLDivElement> = useBgAnimation();
  return (
    <div
      ref={bgRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(circle at 50% var(--mouse-y, 50%), rgba(29, 78, 216, 0.15) 0%, transparent 50%),
          radial-gradient(circle at var(--mouse-x, 50%) 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
          radial-gradient(circle at calc(100% - var(--mouse-x, 50%)) calc(100% - var(--mouse-y, 50%)), rgba(239, 68, 68, 0.15) 0%, transparent 50%)
        `,
        transform:
          "rotate(var(--gradient-rotation, 0deg)) scale(var(--gradient-scale, 1))",
        transition: "transform 0.1s ease-out",
      }}
    />
  );
};

export default AnimatedBg;

import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useBgAnimation: () => React.RefObject<HTMLDivElement> = () => {
  const bgRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!bgRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.to(bgRef.current, {
      "--gradient-rotation": "360deg",
      "--gradient-scale": 1.5,
      duration: 1,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return bgRef;
};

export default useBgAnimation;

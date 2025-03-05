"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Preloader = ({ isLoaded, onAnimationComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setAnimationComplete(true);
        onAnimationComplete();
      },
    });

    tl.to(".tedx", {
      text: "TEDx",
      duration: 1.5,
      ease: "power2.out",
      delay: 0.3,
    })
      .to(".tedx", { x: "-50%", duration: 1, ease: "power2.inOut" }, "-=0.5") // Move left while keeping 'TE' visible
      .fromTo(
        ".ajce",
        { opacity: 0 }, // Keep AJCE fixed in position
        { opacity: 1, duration: 0.5, ease: "power2.out" , delay: 0.3 },
        "-=0.5" // Reveal AJCE as TEDx moves left
      );
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={isLoaded && animationComplete ? { opacity: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="relative text-4xl font-bold flex items-center">
        <motion.span className="tedx inline-block text-red-600 typewriter"></motion.span>
        <span
          className="ajce relative inline-block text-gray-500 overflow-hidden"
          style={{ position: "absolute", left: "calc(100% - 2ch)", opacity: 0 }}
        >
          <span className="relative font-thin">AJCE</span>
        </span>
      </div>
    </motion.div>
  );
};

export default Preloader;

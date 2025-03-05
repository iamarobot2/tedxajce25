"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Desktoptheme() {
  const [isRed, setIsRed] = useState(true);

  const handleMouseEnter = () => setIsRed(true);
  const handleMouseLeave = () => setIsRed(false);

  const textContainerVariants = {
    default: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    slide: { x: isRed ? "-100%" : "100%", opacity: 0 },
    enter: { x: isRed ? "100%" : "-100%", opacity: 0 },
  };
  return (
    <div className="flex flex-col items-center justify-center w-[90%] md:max-w-full mx-auto overflow-hidden my-20">
      <h2 className="p-8 text-3xl font-light">
        OUR <span className="text-red-600 font-semibold italic">THEME</span>
      </h2>
      <div className="flex flex-row items-center justify-center w-[90%] md:max-w-full mx-auto overflow-hidden">
        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{ scale: 0.9, opacity: 0, rotateX: 5 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          className={`border-2 border-red-600 w-[50%]  h-[70vh] rounded-3xl rounded-br-none rounded-tr-none border-r-[1] hover:bg-red-600 transition-all`}
        >
          <motion.div
            className=""
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isRed ? "red" : "default"}
                initial="enter"
                animate="default"
                exit="slide"
                variants={textContainerVariants}
                className={`w-full ${
                  isRed ? "text-left" : "text-right"
                } text-white italic font-light text-xl leading-normal tracking-wide`}
              >
                {isRed ? (
                  <div className="flex flex-col items-start">
                    <div className="text-2xl font-medium italic mb-1">
                      " Unwavering
                    </div>
                    <div className="text-2xl font-bold italic mb-3 text-black">
                      Choices
                    </div>
                    <div className="text-lg font-extralight">
                      Where Every Path
                    </div>
                    <div className="text-lg font-extralight">Shapes</div>
                    <div className="text-lg font-light italic">Tomorrow."</div>
                    <div className="text-[10px] mt-6 opacity-80 italic">
                      AN INDEPENDENTLY ORGANIZED{" "}
                      <span className="text-white font-extrabold">TED</span>{" "}
                      EVENT
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-end">
                    <div className="text-2xl font-medium italic mb-1">
                      " Unwavering
                    </div>
                    <div className="text-2xl font-bold italic mb-3 text-red-600">
                      Choices
                    </div>
                    <div className="text-lg font-extralight ">
                      Where Every Path
                    </div>
                    <div className="text-lg font-extralight italic">Shapes</div>
                    <div className="text-lg font-light italic">Tomorrow.</div>
                    <div className="text-[10px] mt-6 opacity-80 italic">
                      AN INDEPENDENTLY ORGANIZED{" "}
                      <span className="text-red-600 font-extrabold">TED</span>{" "}
                      EVENT
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{ scale: 0.9, opacity: 0, rotateX: 5 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          className={`border-2 border-red-600 w-[50%]  h-[70vh] rounded-3xl rounded-bl-none rounded-tl-none border-l-[1px] hover:bg-red-600 transition-all`}
        >
          <motion.div
            className="font-extralight w-full leading-relaxed relative"
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isRed ? "red" : "default"}
                initial="enter"
                animate="default"
                exit="slide"
                variants={textContainerVariants}
                className={`w-full ${
                  isRed ? "text-left" : "text-right"
                } text-white italic font-light text-xl leading-normal tracking-wide`}
              >
                {isRed ? (
                  <div className="flex flex-col items-start">
                    <div className="text-2xl font-medium italic mb-1">
                      " Unwavering
                    </div>
                    <div className="text-2xl font-bold italic mb-3 text-black">
                      Choices
                    </div>
                    <div className="text-lg font-extralight">
                      Where Every Path
                    </div>
                    <div className="text-lg font-extralight">Shapes</div>
                    <div className="text-lg font-light italic">Tomorrow."</div>
                    <div className="text-[10px] mt-6 opacity-80 italic">
                      AN INDEPENDENTLY ORGANIZED{" "}
                      <span className="text-white font-extrabold">TED</span>{" "}
                      EVENT
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-end">
                    <div className="text-2xl font-medium italic mb-1">
                      " Unwavering
                    </div>
                    <div className="text-2xl font-bold italic mb-3 text-red-600">
                      Choices
                    </div>
                    <div className="text-lg font-extralight ">
                      Where Every Path
                    </div>
                    <div className="text-lg font-extralight italic">Shapes</div>
                    <div className="text-lg font-light italic">Tomorrow.</div>
                    <div className="text-[10px] mt-6 opacity-80 italic">
                      AN INDEPENDENTLY ORGANIZED{" "}
                      <span className="text-red-600 font-extrabold">TED</span>{" "}
                      EVENT
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const useTypingAnimation = (text, isActive) => {
  const [displayText, setDisplayText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (!isActive) {
      setDisplayText(text);
      setCurrentIndex(text.length);
      return;
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 40);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isActive, text]);

  React.useEffect(() => {
    if (!isActive) {
      setDisplayText(text);
      setCurrentIndex(text.length);
    } else {
      setDisplayText("");
      setCurrentIndex(0);
    }
  }, [text, isActive]);

  return displayText;
};

const ThemeTitle = () => {
  return (
    <motion.h2
      className="relative mt-32 h-80vh text-3xl text-center text-white max-md:mt-16 max-sm:mt-12 max-sm:text-3xl tracking-wider"
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.6, 0.05, 0.5, 0.95],
        delay: 0.2,
      }}
    >
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        OUR
      </motion.span>{" "}
      <motion.span
        className="font-semibold text-[#eb0028] italic"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        THEME
      </motion.span>
    </motion.h2>
  );
};

const AnimatedTextLine = ({
  line,
  isRed,
  isChoices,
  isEmbrace,
  isMark,
  isLast,
  cursorVariants,
}) => {
  const displayText = useTypingAnimation(line, isRed);

  return (
    <div
      className={`flex items-center ${
        isRed ? "justify-start" : "justify-end"
      } max-md:justify-center`}
    >
      <span
        className={`${isChoices ? "font-medium text-white" : ""} ${
          isEmbrace || isMark ? "font-semibold" : ""
        } max-md:text-4xl max-sm:text-3xl`}
      >
        {displayText}
      </span>

      {isRed && isLast && (
        <motion.span
          variants={cursorVariants}
          animate="blinking"
          className="inline-block w-[4px] h-[52px] max-md:h-[42px] max-sm:h-[32px] bg-white ml-1"
        />
      )}
    </div>
  );
};

const LeftColumn = React.memo(({ layout, setLayout }) => {
  const handleMouseEnter = React.useCallback(
    () => layout === 0 && setLayout(1),
    [layout, setLayout]
  );
  const handleMouseLeave = React.useCallback(
    () => layout === 1 && setLayout(0),
    [layout, setLayout]
  );
  const isRed = layout === 1;

  const defaultText = React.useMemo(
    () => ["ASCENT : ", "EVERY", "STEP", "LEAVES", "A", "MARK"],
    []
  );
  const hoverText = React.useMemo(
    () => ["WE", "CLIMB", "BY", "THE", "CHOICES", "WE", "MAKE"],
    []
  );

  const cursorVariants = React.useMemo(
    () => ({
      blinking: {
        opacity: [0, 1, 0],
        transition: { duration: 1, repeat: Infinity, ease: "linear" },
      },
    }),
    []
  );

  const textContainerVariants = React.useMemo(
    () => ({
      default: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      },
      slide: { x: isRed ? "-100%" : "100%", opacity: 0 },
      enter: { x: isRed ? "100%" : "-100%", opacity: 0 },
    }),
    [isRed]
  );

  return (
    <motion.div
      className={`group flex flex-col justify-center items-center px-12 py-20 max-md:px-6 max-md:py-12 max-sm:px-4 max-sm:py-8 text-xl whitespace-nowrap rounded-l-[30px] max-md:rounded-r-[30px] max-md:rounded-bl-none h-full shadow-lg overflow-hidden ${
        isRed
          ? "bg-red-600 text-white"
          : "bg-black border-2 border-red-600 text-white"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      initial={{ scale: 0.9, opacity: 0, rotateX: 5 }}
      animate={{ scale: 1, opacity: 1, rotateX: 0 }}
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
            } text-white italic font-light text-[52px] max-md:text-4xl max-sm:text-3xl leading-tight tracking-wide`}
          >
            {isRed ? (
              <div className="flex flex-col items-start space-y-0.5">
                {hoverText.map((line, idx) => {
                  const isChoices = line === "CHOICES";
                  const isMake = line === "MAKE";
                  const isLast = idx === hoverText.length - 1;

                  return (
                    <motion.div
                      key={idx}
                      className={`${
                        idx === 4 || idx === 6 ? "mt-1 max-md:mt-0.5" : ""
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.1 + 0.2,
                      }}
                    >
                      <span
                        className={`${
                          isChoices ? "text-black font-medium" : ""
                        } ${isMake ? "font-semibold" : ""}`}
                      >
                        {line}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-end space-y-0.5">
                {defaultText.map((line, idx) => {
                  const isAscent = line === "ASCENT : ";
                  const isLeaves = line === "LEAVES";
                  const isMark = line === "MARK";

                  return (
                    <motion.div
                      key={idx}
                      className={`${
                        idx === 3 || idx === 5 ? "mt-1 max-md:mt-0.5" : ""
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.1,
                      }}
                    >
                      <span
                        className={`${
                          isAscent ? "text-red-600 font-bold" : ""
                        } ${isLeaves || isMark ? "font-semibold" : ""}`}
                      >
                        {line}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
});

LeftColumn.displayName = "LeftColumn";

const AnimatedParagraph = ({ text, isRed, cursorVariants }) => {
  const displayText = useTypingAnimation(text, isRed);

  return (
    <div className="flex items-start leading-relaxed">
      <span>{displayText}</span>
      <motion.span
        variants={cursorVariants}
        animate="blinking"
        className="inline-block w-[2px] h-[16px] bg-white ml-1 mt-1"
      />
    </div>
  );
};

const RightColumn = React.memo(({ layout, setLayout }) => {
  const handleMouseEnter = React.useCallback(
    () => layout === 0 && setLayout(2),
    [layout, setLayout]
  );
  const handleMouseLeave = React.useCallback(
    () => layout === 2 && setLayout(0),
    [layout, setLayout]
  );
  const isRed = layout === 2;

  const paragraphs = React.useMemo(
    () => [
      "Choices define us. In the quiet darkness, as sleep evades us, we revisit crossroads not taken, wondering about alternate lives unlived.",
      "Our lives are vertical journeys. We climb mountains of opportunity, descend into valleys of reflection, and pause on plateaus of contemplation. Every ascent requires choice: which handhold to grasp, which path to follow, which summit to pursue.",
      "In a world of endless possibilities, courage isn't found in perfect decisions but in making them at all. Every step—faltering or confident—marks your journey. Every choice—impulsive or calculated—contributes to your story.",
    ],
    []
  );

  const cursorVariants = React.useMemo(
    () => ({
      blinking: {
        opacity: [0, 1, 0],
        transition: { duration: 1, repeat: Infinity, ease: "linear" },
      },
    }),
    []
  );

  const textContainerVariants = React.useMemo(
    () => ({
      default: { x: 0, opacity: 1 },
      slide: { x: isRed ? "100%" : "-100%", opacity: 0 },
      enter: { x: isRed ? "-100%" : "100%", opacity: 0 },
    }),
    [isRed]
  );

  return (
    <motion.div
      className={`group flex flex-col items-center justify-center px-10 py-10 max-md:px-6 max-md:py-8 max-sm:px-4 max-sm:py-6 w-full text-sm rounded-r-[30px] max-md:rounded-l-[30px] max-md:rounded-tr-none h-full cursor-pointer shadow-lg overflow-hidden ${
        isRed
          ? "bg-red-600 text-white"
          : "bg-black border-2 border-red-600 text-white"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      initial={{ scale: 0.9, opacity: 0, rotateX: -5 }}
      animate={{ scale: 1, opacity: 1, rotateX: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.6,
      }}
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
              isRed ? "text-left" : "text-left"
            } text-base tracking-wide max-md:text-sm`}
            style={{ fontFamily: "Helvetica Neue" }}
          >
            {isRed ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <AnimatedParagraph
                  text={paragraphs[0]}
                  isRed={isRed}
                  cursorVariants={cursorVariants}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div
                  className="leading-relaxed space-y-1"
                  style={{ fontFamily: "Helvetica Neue" }}
                >
                  <span
                    className={`font-bold italic ${
                      isRed ? "text-black" : "text-red-500"
                    }`}
                  >
                    Choices
                  </span>{" "}
                  define us. In the quiet darkness, as sleep evades us, we
                  revisit{" "}
                  <span
                    className={`font-medium italic ${
                      isRed ? "text-black" : "text-red-500"
                    }`}
                  >
                    crossroads
                  </span>{" "}
                  not taken, wondering about alternate lives unlived.
                </div>
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <br className="max-md:hidden" />
              <br className="max-md:hidden" />
              <div
                className="leading-relaxed space-y-1"
                style={{ fontFamily: "Helvetica Neue" }}
              >
                Our lives are{" "}
                <span
                  className={`font-medium italic ${
                    isRed ? "text-black" : "text-red-500"
                  }`}
                >
                  vertical journeys
                </span>
                . We{" "}
                <span
                  className={`font-medium italic ${
                    isRed ? "text-black" : "text-red-500"
                  }`}
                >
                  climb
                </span>{" "}
                mountains of opportunity,{" "}
                <span
                  className={`font-medium italic ${
                    isRed ? "text-black" : "text-red-500"
                  }`}
                >
                  descend
                </span>{" "}
                into valleys of reflection, and{" "}
                <span
                  className={`font-medium italic ${
                    isRed ? "text-black" : "text-red-500"
                  }`}
                >
                  pause
                </span>{" "}
                on plateaus of contemplation. Every{" "}
                <span
                  className={`font-medium italic ${
                    isRed ? "text-black" : "text-red-500"
                  }`}
                >
                  ascent
                </span>{" "}
                requires choice: which handhold to grasp, which path to follow,
                which summit to pursue.
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <br className="max-md:hidden" />
              <br className="max-md:hidden" />
              <div
                className="leading-relaxed space-y-1"
                style={{ fontFamily: "Helvetica Neue" }}
              >
                In a world of endless possibilities, courage isn't found in
                perfect decisions but in{" "}
                <span
                  className={`font-medium italic ${
                    isRed ? "text-black" : "text-red-500"
                  }`}
                >
                  making them at all
                </span>
                . Every step—faltering or confident—
                <span
                  className={`font-medium italic ${
                    isRed ? "text-black" : "text-red-500"
                  }`}
                >
                  marks your journey
                </span>
                . Every choice—impulsive or calculated—contributes to your
                story.
                <br className="max-md:hidden" />
                <br className="max-md:hidden" />
                Your{" "}
                <span
                  className={`font-bold italic ${
                    isRed ? "text-black" : "text-red-500"
                  }`}
                >
                  ascent
                </span>{" "}
                begins with a single step. Choose wisely. Choose boldly. But
                above all,{" "}
                <span className="text-red-600 font-semibold">choose</span>.
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
});

RightColumn.displayName = "RightColumn";

const ThemeContent = ({ layout, setLayout }) => {
  return (
    <motion.section
      className="relative mt-8 w-full max-w-[1441px] max-md:mt-6 max-md:max-w-full px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{
        duration: 0.8,
        ease: [0.6, 0.05, 0.5, 0.95],
        delay: 0.4,
      }}
    >
      <div className="flex gap-5 max-md:gap-5 max-md:flex-col w-full h-[500px] max-md:h-auto max-md:min-h-[700px] max-sm:min-h-[600px]">
        <div className="w-1/2 max-md:w-full h-full max-md:h-auto">
          <AnimatePresence mode="wait">
            <LeftColumn key="left" layout={layout} setLayout={setLayout} />
          </AnimatePresence>
        </div>
        <div className="w-1/2 max-md:w-full h-full max-md:h-auto">
          <AnimatePresence mode="wait">
            <RightColumn key="right" layout={layout} setLayout={setLayout} />
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default function BentoTheme() {
  const [layout, setLayout] = React.useState(0);

  return (
    <motion.section
      className="overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col w-full  max-md:max-w-full">
        <div className="relative flex flex-col items-center pb-40 w-full max-md:pb-20 max-md:max-w-full">
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <div className="relative z-10 w-full max-w-7xl mx-auto">
            <ThemeTitle />
            <ThemeContent layout={layout} setLayout={setLayout} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

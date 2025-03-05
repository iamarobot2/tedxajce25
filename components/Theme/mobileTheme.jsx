"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";

// Header Component (TEDx AJCE + Circle Menu)

// Main Banner (Unwavering Choices) with Click Transition
const MainBanner = () => {
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
    <motion.div
      className={`group flex flex-col justify-center items-center px-8 py-16 max-md:px-4 max-md:py-8 max-sm:px-2 max-sm:py-4 text-lg whitespace-nowrap rounded-3xl h-full shadow-lg overflow-hidden ${
        isRed
          ? "bg-red-600 text-white"
          : "bg-black border-2 border-red-600 text-white"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      initial={{ scale: 0.9, opacity: 0, rotateX: 5 }}
      animate={{ scale: 1, opacity: 1, rotateX: 0 }}
      onClick={() => setIsRed(!isRed)}
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
                <div className="text-2xl font-bold italic mb-3 text-black">Choices</div>
                <div className="text-lg font-extralight">
                  Where Every Path
                </div>
                <div className="text-lg font-extralight">Shapes</div>
                <div className="text-lg font-light italic">Tomorrow."</div>
                <div className="text-[10px] mt-6 opacity-80 italic">
                  AN INDEPENDENTLY ORGANIZED <span className="text-white font-extrabold">TED</span> EVENT
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-end">
                <div className="text-2xl font-medium italic mb-1">
                  " Unwavering
                </div>
                <div className="text-2xl font-bold italic mb-3 text-red-600">Choices</div>
                <div className="text-lg font-extralight ">
                  Where Every Path
                </div>
                <div className="text-lg font-extralight italic">Shapes</div>
                <div className="text-lg font-light italic">Tomorrow.</div>
                <div className="text-[10px] mt-6 opacity-80 italic">
                  AN INDEPENDENTLY ORGANIZED <span className="text-red-600 font-extrabold">TED</span> EVENT
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

// Reusable Hover Card Component
const HoverCard = ({ children, defaultRed = false }) => {
  const [isRed, setIsRed] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isRed ? "red" : "black"}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className={`relative rounded-3xl p-4 cursor-pointer overflow-hidden shadow-md hover:shadow-xl ${
          isRed
            ? "bg-red-600 text-white"
            : "bg-black border-2 border-red-600 text-white"
        }`}
        onMouseEnter={() => setIsRed(true)}
        onMouseLeave={() => setIsRed(false)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Image Section
const ImageSection = () => (
  <div className="rounded-3xl overflow-hidden w-full h-full bg-gray-800">
    <div className="relative w-full h-full">
      <img
        src="/assets/bento1.png"
        alt="TEDx event"
        className="w-full h-full object-cover"
      />
      <img
        src="/assets/tedxajce.png"
        alt="TEDx event"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 object-center"
      />
    </div>
  </div>
);

const ImageSection1 = () => (
  <div className="rounded-3xl border-2 border-red-600 overflow-hidden ">
    <img
      src="/assets/bento2.png"
      alt="TEDx event"
      className="w-full h-full object-cover"
    />
  </div>
);

const handleSmoothScroll = (event, targetId) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Get Tickets Button
const TicketButton = () => (
  <HoverCard defaultRed>
    <motion.div
      className="flex items-center justify-center py-4 text-lg font-bold"
      whileHover={{ scale: 1.1 }}
    >
      <Link href="#TICKETS" onClick={(e) => handleSmoothScroll(e, "TICKETS")}>
        GET TICKETS
      </Link>
    </motion.div>
  </HoverCard>
);

// Main Component
const MobileBentoView = () => {
  return (
    <div className="bg-black px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ImageSection />

        <MainBanner />

        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col justify-center gap-8 w-[35%] max-h-[300px] h-[250px]">
            <ImageSection1 />
            <TicketButton />
          </div>
          <div className="flex items-center justify-center rounded-3xl overflow-y-scroll text-ellipsis p-4 cursor-pointer border-2 border-red-600  shadow-md hover:shadow-xl h-[250px] max-w-[65%] max-h-[300px]">
            {/* info section */}
            <div className="text-sm leading-relaxed ">
              <span className="text-white">Welcome to </span>
              <span className="text-red-600 font-medium">TEDXAJCE</span>
              <span className="text-gray-400">
                , where passion and minds share ideas worth spreading. Join us
                at{" "}
              </span>
              <span className="text-white font-medium">
                Amal Jyothi College of Engineering
              </span>
              <span className="text-gray-400">
                {" "}
                bringing together innovators and inspiring speakers from our
                local community.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBentoView;

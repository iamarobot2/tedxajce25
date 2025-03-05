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
                <div className="text-xl font-light italic mb-1">
                  " Unwavering
                </div>
                <div className="text-xl font-bold italic mb-3">Choices</div>
                <div className="text-lg font-light italic">
                  Where Every Path
                </div>
                <div className="text-lg font-light italic">Shapes</div>
                <div className="text-lg font-light italic">Tomorrow.</div>
                <div className="text-[10px] mt-6 opacity-80 italic">
                  AN INDEPENDENTLY ORGANIZED TED EVENT
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-end">
                <div className="text-xl font-light italic mb-1">
                  " Unwavering
                </div>
                <div className="text-xl font-bold italic mb-3">Choices</div>
                <div className="text-lg font-light italic">
                  Where Every Path
                </div>
                <div className="text-lg font-light italic">Shapes</div>
                <div className="text-lg font-light italic">Tomorrow.</div>
                <div className="text-[10px] mt-6 opacity-80 italic">
                  AN INDEPENDENTLY ORGANIZED TED EVENT
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
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 object-cover"
      />
    </div>
  </div>
);

const ImageSection1 = () => (
  <div className="rounded-full overflow-hidden w-1/2 h-full bg-gray-800">
    <img
      src="/assets/bento2.png"
      alt="TEDx event"
      className="w-full h-full object-cover"
    />
  </div>
);

// Info Section
const InfoSection = () => (
  <div className="relative rounded-3xl p-4 cursor-pointer border-2 border-red-600  overflow-hidden shadow-md hover:shadow-xl">
    <div className="text-sm leading-relaxed px-2">
      <span className="text-gray-400">Welcome to </span>
      <span className="text-white font-medium">TEDXAJCE</span>
      <span className="text-gray-400">
        , where passion and minds share ideas worth spreading. Join us at{" "}
      </span>
      <span className="text-white font-medium">
        Amal Jyothi College of Engineering
      </span>
      <span className="text-gray-400">
        {" "}
        bringing together innovators and inspiring speakers from our local
        community.
      </span>
    </div>
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
      className="flex items-center justify-center py-6 text-2xl h-11 m-20 font-bold"
      whileHover={{ scale: 1.1 }}
    >
      <Link href="#TICKETS" onClick={(e) => handleSmoothScroll(e, "TICKETS")}>
        
        GET TICKETS
      </Link>
    </motion.div>
  </HoverCard>
);

// Page Indicator
const PageIndicator = () => (
  <motion.div
    className="w-full text-center text-gray-500 text-xs mb-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.7 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    [ THE PAGES ARE SUPPOSED TO CHANGE TO THE NEXT AS YOU SCROLL ]
  </motion.div>
);

// Main Component
const MobileBentoView = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-6 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ImageSection />

        <MainBanner />

        <InfoSection />
        <div className="flex justify-between items-center space-x-4">
          <ImageSection1 />
          <TicketButton />
        </div>
        <PageIndicator />
      </div>
    </div>
  );
};

export default MobileBentoView;

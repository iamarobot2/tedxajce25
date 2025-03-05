"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const items = [
    {
      image: "/assets/ted.png",
      imageWidth: 100, // Adjust these values based on your image dimensions
      imageHeight: 50,
      content: "By spreading ideas worthy enough to be shared, we create the power of inspiration and change. TED embodies a global movement. It is devoted to amplifying transformative ideas from every discipline and culture imaginable. As a non-profit media organization, TED illuminates profound undercurrents of ideas and perspectives. Since emerging in 1984, TED talks have forged deep emotional connections with audiences. They maintain their global relevance and impact. The distinctive power of TED gatherings remains timeless. They ignite personal transformation and compel individuals to pursue their highest potential."
    },
    {
      image: "/assets/tedx.png",
      imageWidth: 120,
      imageHeight: 50,
      content: "TEDx events represent independently organized gatherings. They embody TED's core mission of \"ideas worth spreading.\" These events are curated by passionate communities and organizers worldwide. They aim to create distinctive local experiences. These experiences unleash innovation and inspire change. TEDx provides an arena where fresh perspectives flow freely. Meaningful connections emerge through dialogue. By featuring both screened TED Talk videos and live speakers, TEDx events catalyze fresh thinking. They stimulate powerful conversations. Having surpassed the remarkable milestone of 100,000 talks, TEDx presentations now reach a global audience. They achieve over 3 billion annual views."
    },
    {
      image: "/assets/tedxajce.png",
      imageWidth: 150,
      imageHeight: 50,
      content: "Born from a vision to bring TED's global inspiration to Amal Jyothi College of Engineering, Kanjirappally, TEDxAJCE launched in 2018. It is an independently organized forum designed to ignite perseverance and intellectual curiosity. Our vibrant ecosystem unites students and professionals. It creates a thriving blend of innovation within nature's embrace. TEDxAJCE strives to expand horizons. We illuminate our community with diverse knowledge from across the globe. Ultimately, we empower and enrich our collective experience through transformative ideas from the world's most passionate thinkers."
    }
  ];

  const columnVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const paginate = (newDirection) => {
    let newIndex = currentIndex + newDirection;
    if (newIndex < 0) newIndex = items.length - 1;
    if (newIndex >= items.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  // Automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <div className="flex flex-col w-[90%] items-center justify-center md:max-w-full mx-auto overflow-hidden my-6">
      <h2 className="text-3xl font-medium text-center mb-20 tracking-wider italic">
        ABOUT
      </h2>

      {/* Desktop Layout */}
      <div className="hidden md:grid container mx-auto px-4 grid-cols-3 gap-8 mb-16 relative w-full text-ellipsis">
        {/* TED Column */}
        <motion.div
          className="flex flex-col gap-6 items-center justify-between h-[600px] relative p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , x:0 }}
          // variants={leftVariant}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-center mb-8">
              <Image
                src="/assets/ted.png"
                alt="TED"
                width={100}
                height={50}
                priority
              />
            </div>
            <p className="text-center mx-4 text-xs leading-relaxed font-helvetica-light px-2 flex-grow">
              {items[0].content}
            </p>
          </div>
          <Link
            href="https://www.ted.com/"
            className="bg-red-800 text-white text-[10px] px-4 py-2 rounded-full hover:bg-red-700 transition-colors mt-4"
          >
            READ MORE
          </Link>
        </motion.div>

        {/* Vertical Line after TED */}
        <div className="hidden md:block absolute left-1/3 top-[15%] bottom-[20%] w-[1px] bg-red-600"></div>

        {/* TEDx Column */}
        <motion.div
          className="flex flex-col items-center gap-6 justify-between h-[600px] relative p-6"
          initial="hidden"
          whileInView="visible"
          variants={columnVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-center mb-8">
              <Image
                src="/assets/tedx.png"
                alt="TEDx"
                width={120}
                height={50}
                priority
              />
            </div>
            <p className="text-center mx-4 text-xs leading-relaxed font-helvetica-light px-2 flex-grow">
              {items[1].content}
            </p>
          </div>
          <Link
            href="https://www.ted.com/about/programs-initiatives/tedx-program"
            className="bg-red-800 text-white text-[10px] px-4 py-2 rounded-full hover:bg-red-700 transition-colors mt-4"
          >
            READ MORE
          </Link>
        </motion.div>

        {/* Vertical Line after TEDx */}
        <div className="hidden md:block absolute left-2/3 top-[15%] bottom-[20%] w-[1px] bg-red-600"></div>

        {/* TEDx AJCE Column */}
        <motion.div
          className="flex flex-col gap-6 items-center justify-between h-[600px] relative p-6"
          initial="hidden"
          whileInView="visible"
          variants={columnVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-center mb-8">
              <Image
                src="/assets/tedxajce.png"
                alt="TEDx AJCE"
                width={150}
                height={50}
                priority
              />
            </div>
            <p className="text-center mx-4 text-xs leading-relaxed font-helvetica-light px-2 flex-grow">
              {items[2].content}
            </p>
          </div>
          <Link
            href="https://www.ted.com/tedx/events/61391"
            className="bg-red-800 text-white text-[10px] px-4 py-2 rounded-full hover:bg-red-700 transition-colors mt-4"
          >
            READ MORE
          </Link>
        </motion.div>
      </div>

      {/* Mobile Carousel Layout */}
      <div className="md:hidden w-full relative">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            className="flex flex-col items-center justify-between h-[600px] px-4 mx-2 border border-red-600 rounded-3xl p-6"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -1000) {
                paginate(1); // Swipe left
              } else if (swipe > 1000) {
                paginate(-1); // Swipe right
              }
            }}
          >
            <div className="flex flex-col h-full">
              <div className="text-center mb-8">
                <Image
                  src={items[currentIndex].image}
                  alt={`TED Logo ${currentIndex + 1}`}
                  width={items[currentIndex].imageWidth}
                  height={items[currentIndex].imageHeight}
                  priority
                  className="mx-auto"
                />
              </div>
              <p className="text-center text-xs leading-relaxed font-helvetica-light w-full px-4 flex-grow">
                {items[currentIndex].content}
              </p>
              <Link
                href="#"
                className="bg-red-800 text-white text-[10px] px-4 py-2 rounded-full hover:bg-red-700 transition-colors mt-4"
              >
                READ MORE
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
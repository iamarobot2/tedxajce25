"use client";
import { motion } from "framer-motion";
import { speakerData } from "./speakerData";
import SpeakerCard from "./card";

const SpeakerStack = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 md:gap-28 w-[90%] md:max-w-full mx-auto overflow-hidden">
      <motion.div // Use motion.section for animation
        id="SPEAKERINTRO"
        className="flex  text-white bg-black text-center justify-center items-center mx-auto"
        transition={{ duration: 1 }}
        initial={{ y: 100, opacity: 0, x: 0 }}
        whileInView={{ y: 0, opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "0px 0px -100px 0px" }}
      >
        <div className="flex flex-col gap-20 items-center justify-center md:flex-row w-full ">
          <h1
            id="hero-title"
            className="text-white text-3xl font-normal text-right w-full md:w-[25%]  max-md:text-center max-sm:text-[28px] uppercase"
          >
            <span className="italic font-semibold">Unveiling </span> the{" "}
            <span className="text-red-600 italic font-semibold">
              Visionaries:
            </span>
            <br />
            <span>TEDxAJCE 2025</span>
            <br />
            <span className="text-red-600 italic font-semibold">
              Speaker
            </span>{" "}
            <span>Lineup</span>
          </h1>
          <div className="flex flex-col justify-center items-center text-white mt-3 text-center md:text-start font-extralight md:w-[60%] sm:text-base">
            <p>
              Be inspired by our exceptional TEDxAJCE 2025 speakers! This year
              features bold trailblazers redefining possibilities across public
              service, technology, arts, and beyond.
            </p>
            <p>
              Each speaker brings unique perspectives that will transform your
              worldview. United by brilliance and diverse in background, these
              thought leaders offer an unforgettable journey of discovery and
              innovation. Experience ideas worth spreading at TEDxAJCE 2025!
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        id="SPEAKERSTACK"
        className="flex flex-col gap-16 justify-center items-center my-4"
        transition={{ duration: 1 }}
        initial={{ y: 100, opacity: 0, x: 0 }}
        whileInView={{ y: 0, opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "0px 0px -100px 0px" }}
      >
        {speakerData.map((speaker, index) => {
          return <SpeakerCard key={index} {...speaker} />;
        })}
      </motion.div>
    </div>
  );
};

export default SpeakerStack;

import { motion } from "framer-motion";

export default function SpeakerCard({ id, quote, name, designation, src }) {
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      initial={{ y: 80, opacity: 0, x: 0 }}
      whileInView={{ y: 0, opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "0px 0px -100px 0px" }}
      className="card flex flex-col md:flex-row gap-16 md:gap-40 items-center justify-center w-full"
    >
      <img
        src={src}
        className="bg-red-500 w-[350] rounded-4xl object-cover"
        alt={name}
      />
      <div className="flex flex-col items-start justify-center gap-4 w-[90%] md:w-[30%] line-clamp-3">
        <div className="gap-6">
          <h2 className="font-semibold text-3xl md:text-4xl">{name}</h2>
          <span>{designation}</span>
        </div>
        <p className="font-extralight md:text-md">"{quote}"</p>
      </div>
    </motion.div>
  );
}

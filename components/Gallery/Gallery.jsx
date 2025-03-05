import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const imgPaths = [
    "/assets/gallery/img1.png",
    "/assets/gallery/img2.png",
    "/assets/gallery/img3.png",
    "/assets/gallery/img4.png",
    "/assets/gallery/img5.png",
    "/assets/gallery/img6.png",
    "/assets/gallery/img7.png",
    "/assets/gallery/img8.png",
    "/assets/gallery/img9.png",
    "/assets/gallery/img10.png",
  ];

  const imgRefs = useRef([]);
  const containerRef = useRef();
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setColumns(width < 640 ? 2 : width < 1024 ? 3 : 4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const setupAnimation = () => {
      imgRefs.current.forEach((img, index) => {
        if (!img) return;

        const row = Math.floor(index / columns);
        const direction = row % 2 === 0 ? -1 : 1;
        const speed = 0.4;

        gsap.fromTo(
          img.parentNode,
          {
            x: direction * window.innerWidth * 0.2,
          },
          {
            x: -direction * window.innerWidth * 0.2,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const velocity = self.getVelocity() * 0.0002;
                gsap.to(img, {
                  rotation: velocity,
                  overwrite: true,
                });
              },
            },
          }
        );
      });
    };

    const timer = setTimeout(setupAnimation, 100);
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [columns]);

  return (
    <>
      <motion.div // Use motion.section for animation
        id="SPEAKERINTRO"
        className="flex  text-white bg-black text-center justify-start items-center "
        transition={{ duration: 1 }}
        initial={{ y: 100, opacity: 0, x: 0 }}
        whileInView={{ y: 0, opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "0px 0px -100px 0px" }}
      >
        <h1
          id="hero-title"
          className="text-white text-3xl font-normal text-center w-full   uppercase"
        >
          <span className=" font-bold">RELIVE &nbsp;</span>THE&nbsp;
          <span className="text-red-600 italic font-bold">
            BEST MOMENT &nbsp;
          </span>
          <span>WITH OUR &nbsp;</span>
          <span className="text-red-600 italic font-bold">GALLERY</span>
        </h1>
      </motion.div>
      <div
        className="container mx-auto px-4 py-12 overflow-x-hidden"
        ref={containerRef}
      >
        <motion.div
          className={`grid w-full min-w-0 gap-4`}
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {imgPaths.map((path, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
              }}
              className="relative aspect-[4/3] p-2 min-w-0 overflow-visible"
            >
              <div className="relative h-full w-full transform-gpu overflow-visible group">
                <div
                  className="absolute inset-0 rounded-xl bg-red-600/30 blur-lg 
                            transition-all duration-300 group-hover:blur-xl 
                            group-hover:opacity-50 -z-10"
                />
                <img
                  ref={(el) => (imgRefs.current[index] = el)}
                  src={path}
                  alt={`Gallery image ${index + 1}`}
                  className="absolute inset-0 h-full w-full rounded-xl object-cover 
                         shadow-[0_0_20px_3px_rgba(220,38,38,0.3)] transform-gpu 
                         border-2 border-red-600/20 will-change-transform
                         hover:shadow-[0_0_40px_8px_rgba(220,38,38,0.4)] 
                         transition-all duration-300"
                  loading="lazy"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? 2 : -2}deg)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Gallery;

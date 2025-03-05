"use client";

import Navbar from "../components/Navbar/Navbar";
import SpeakerStack from "../components/card/SpeakerStack";
import Preloader from "../components/Preloader/Preloader";
import { useState, useEffect } from "react";
import MobileBentoView from "../components/Theme/mobileTheme";
import BentoTheme from "../components/Theme/Theme";
import Desktoptheme from "../components/Theme/Desktoptheme";
import About from "../components/About/About";
import Ticket from "../components/Ticket/ticket";
import PreviousHighlights from "../components/highlights/highlights";
import InfiniteMovingCardsDemo from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Testimonial from "../components/Testimonials/Testimonials";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  return (
    <>
      {!animationComplete && (
        <Preloader
          isLoaded={isLoaded}
          onAnimationComplete={() => setAnimationComplete(true)}
        />
      )}
      {animationComplete && (
        <>
          <Navbar />
          <main className="flex flex-col w-full gap-16 bg-black items-center justify-center font-[family-name:var(--font-geist-sans)]">
            {/* {isMobile ? <MobileBentoView /> : <BentoTheme />}
            <SpeakerStack />
            <About />
            <Ticket />
            <PreviousHighlights />
            {/* <HeroParallaxDemo /> */}
            {/* <InfiniteMovingCardsDemo /> */}
            {/* <Footer /> */}
            <section
              id="THEME"
              className="flex flex-col w-full gap-16 bg-black items-center justify-center"
            >
              {isMobile ? <MobileBentoView /> : <BentoTheme />}
            </section>
            <section
              id="SPEAKERS"
              className="flex flex-col w-full gap-16 bg-black items-center justify-center"
            >
              <SpeakerStack />
            </section>
            <section
              id="ABOUT"
              className="flex flex-col w-full gap-16 bg-black items-center justify-center"
            >
              <About />
            </section>
            <section
              id="TICKETS"
              className="flex flex-col w-full gap-16 bg-black items-center justify-center"
            >
              <Ticket />
            </section>
            <section
              id="HIGHLIGHTS"
              className="flex flex-col w-full gap-16 bg-black items-center justify-center"
            >
              <PreviousHighlights />
            </section>
            <section
              id="GALLERY"
              className="flex flex-col w-full gap-16 bg-black items-center justify-center"
            >
              <Gallery />
            </section>
            <section
              id="TESTIMONIAL"
              className="flex flex-col w-full gap-16 bg-black items-center justify-center"
            >
              <Testimonial />
            </section> 
            <section
              id="FOOTER"
              className="flex flex-col w-full gap-16 bg-black items-center justify-center"
            >
              <div className="flex flex-col w-full gap-16 bg-black items-center justify-center ">
                {/* <AnimatedPinDemo /> */}
                <Footer />
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
}

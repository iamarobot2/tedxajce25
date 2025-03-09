"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isPastHero, setIsPastHero] = useState(false);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const heroHeight = window.innerHeight; // Assuming hero takes full viewport height

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if we've scrolled past the hero section
      setIsPastHero(currentScrollY > heroHeight * 0.8);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Set scrolled state for styling
      setIsScrolled(currentScrollY > 50);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="">
      {/* Desktop Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ease-in-out flex justify-center items-center top-0 ${
          !isVisible && isPastHero ? "-translate-y-full" : "translate-y-0"
        } ${isScrolled ? "py-2" : "py-4"} bg-transparent`}
      >
        <div
          className={
            "flex items-center justify-between px-4 md:w-[600px] md:h-[50px] md:rounded-[25px] md:border-[0.5px] md:border-red-600 md:bg-black/80 w-full h-14"
          }
        >
          {/* Combined Navigation Links and Button Container */}
          <div className="hidden md:flex w-full items-center justify-between">
            {/* Navigation Links */}
            <div className="flex space-x-5">
              <Link
                key="THEME"
                href={`#THEME`}
                onClick={(e) => handleSmoothScroll(e, "THEME")}
                className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium relative group"
              >
                THEME
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                key="SPEAKERS"
                href={`#SPEAKERS`}
                onClick={(e) => handleSmoothScroll(e, "SPEAKERS")}
                className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium relative group"
              >
                SPEAKERS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                key="ABOUT"
                href={`#ABOUT`}
                onClick={(e) => handleSmoothScroll(e, "ABOUT")}
                className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium relative group"
              >
                ABOUT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                key="GALLERY"
                href={`#GALLERY`}
                onClick={(e) => handleSmoothScroll(e, "GALLERY")}
                className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium relative group"
              >
                GALLERY
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Ticket Button (Right-aligned) */}
            <Link
              href="#TICKETS"
              onClick={(e) => handleSmoothScroll(e, "TICKETS")}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 flex items-center justify-center"
              style={{ height: "50px", marginRight: "-18px" }}
            >
              GET TICKETS
            </Link>
          </div>

          {/* Mobile menu button - moved to left side */}
          <div className="md:hidden flex items-center absolute left-4 top-4">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center p-3 rounded-full border-2 border-red-600 text-red-600 hover:text-red-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-8 w-8" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`fixed inset-0 z-50 bg-red-600 transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 1000 }} // Ensure it overlaps other components
      >
        <div className="flex items-start justify-between p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-red-600 p-3 border-2 border-white"
          >
            <span className="sr-only">Close menu</span>
            <X className="h-8 w-8 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="px-6 pt-12 pb-6 space-y-8 flex flex-col items-center">
          <Link
            href="#THEME"
            className="text-white hover:text-gray-200 px-3 py-2 text-xl font-medium"
            onClick={() => setIsOpen(false)}
          >
            THEME
          </Link>
          <Link
            href="#SPEAKERS"
            className="text-white hover:text-gray-200 px-3 py-2 text-xl font-medium"
            onClick={() => setIsOpen(false)}
          >
            SPEAKERS
          </Link>
          <Link
            href="#ABOUT"
            className="text-white hover:text-gray-200 px-3 py-2 text-xl font-medium"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="#GALLERY"
            className="text-white hover:text-gray-200 px-3 py-2 text-xl font-medium"
            onClick={() => setIsOpen(false)}
          >
            GALLERY
          </Link>
          <div className="pt-8">
            <Link
              href="#TICKETS"
              className="bg-black text-white px-8 py-3 rounded-full font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              GET TICKETS
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        className={`transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-64" : "translate-x-0"}
        `}
      >
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Navbar;

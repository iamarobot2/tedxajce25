"use client";

import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import Image from 'next/image';
import AnimatedPinDemo from "../Location/Location3d";
export default function Footer() {
   const d = new Date();
   let year = d.getFullYear();
  return (
    <footer className="bg-black text-white flex flex-col  justify-center w-[90%] mx-auto overflow-hidden mb-8 ">
       <AnimatedPinDemo />
        {/* Top section with three columns */}
        <div className="flex flex-col md:flex-row  justify-between gap-8 my-10">
          {/* Location Column */}
          <div>
            <h3 className="text-sm text-start font-thin mb-4">Location</h3>
            <p className="text-lg text-start italic font-medium">
              Amal Jyothi College of Engineering,
              <br />
              Kanjirappally, Kottayam.
            </p>
          </div>

          {/* Contact Column */}
          <div className="text-start md:text-center justify-center mr-20">
            <h3 className="text-sm font-thin mb-4">Contact</h3>
            <p className="text-lg italic font-medium mb-2">Alan Thomas Shaji</p>
            <p className="text-sm text-gray-400 italic">Organizer</p>
            <div className="hidden md:w-16 h-0.5 bg-red-600 mx-auto my-4"></div>
            <p className="text-sm">+91 86064 52189</p>
          </div>

          {/* Email Column */}
          <div className="text-start md:text-right justify-end">
            <h3 className="text-sm font-thin mb-4">Email</h3>
            <p className="text-lg italic font-medium">
              tedxajce@amaljyothi.ac.in
            </p>
          </div>
        </div>

        {/* Bottom section with logo, social links and copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between px-12  ">

          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link
              href="https://www.instagram.com/tedxajce/"
              aria-label="Instagram"
              className="text-red-600 hover:text-red-500 transition-colors"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/tedx-ajce/"
              aria-label="LinkedIn"
              className="text-red-600 hover:text-red-500 transition-colors"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@tedxajce"
              aria-label="YouTube"
              className="text-red-600 hover:text-red-500 transition-colors"
            >
              <Youtube size={20} />
            </Link>
          </div>

          {/* Logo */}
          <div className="mb-6 md:mb-0 ml-8">
            <Link href="/" className="text-xl">
                <Image src={'/assets/tedxajce.png'} alt="TEDx AJCE Logo" width={150} height={50} />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-xs italic text-gray-400">Copyright {year} - TEDxAJCE</div>
        </div>
    </footer>
  );
}

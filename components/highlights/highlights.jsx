"use client"; // Needed for Swiper in Next.js App Router

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const previousHighlights = [
  {
    thumbnail: "/assets/highlights/highlight1.png",
    url: "https://www.youtube.com/watch?si=kqK6NtB4MdjX2RBf&v=4o6Qda3la7g&feature=youtu.be",
  },
  {
    thumbnail: "/assets/highlights/highlight2.png",
    url: "https://www.youtube.com/watch?v=GAWs0_VVCec",
  },
  {
    thumbnail: "/assets/highlights/highlight3.png",
    url: "https://www.youtube.com/watch?si=_r4bdBMZUz6M16J1&v=AxjzXDZocoo&feature=youtu.be",
  },
  {
    thumbnail: "/assets/highlights/highlights4.png",
    url: "https://www.youtube.com/watch?si=zvynWswuRa2j6vTz&v=3pTjs9uqG-4&feature=youtu.be",
  },
  {
    thumbnail: "/assets/highlights/highlights5.png",
    url: "https://www.youtube.com/watch?si=lUjJ-AtgxY7hWHx-&v=O0DuhhfPEI0&feature=youtu.be",
  },
  {
    thumbnail: "/assets/highlights/highlights6.png",
    url: "https://www.youtube.com/watch?si=7Z1BizJelEfxc-JC&v=zReX-EIs3Gs&feature=youtu.be",
  },
  {
    thumbnail: "/assets/highlights/highlights7.png",
    url: "https://www.youtube.com/watch?si=XxrjFOet0YMh3-I4&v=2rvwLZwUESQ&feature=youtu.be",
  },
  {
    thumbnail: "/assets/highlights/highlights8.png",
    url: "https://www.youtube.com/watch?si=xOvx54frETYgBWLv&v=KGBXCTkzS0k&feature=youtu.be",
  },
];

export default function PreviousHighlights() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-4 my-6 md:my-16 w-[90%] md:max-w-full mx-auto overflow-hidden">
      {/* Title Section */}
      <div className="text-white text-left md:w-1/4">
        <h2 className="text-3xl font-bold uppercase md:text-left text-center glow">
          Previous <br /> <span className="text-red-500 italic">Highlights</span>
        </h2>
      </div>
    <br />
      {/* Video Carousel */}
      <div className="md:w-3/4 w-full mt-4">
        <Swiper
          slidesPerView={1.5} // Adjust for responsiveness
          spaceBetween={150} // Increased space for mobile view to prevent overlap
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="w-full"
          speed={800} // Increased speed of the transition
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 30 }, // Increased space for mobile view
            768: { slidesPerView: 2.5, spaceBetween: 15 }, // Default space for desktop
            1024: { slidesPerView: 3 },
          }}
        >
          {previousHighlights.map((highlight, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-68 md:w-72 h-40 rounded-2xl border border-red-600 shadow-[0_0_20px_3px_rgba(220,38,38,0.3)] overflow-hidden bg-black">
                <Image
                  src={highlight.thumbnail}
                  alt="Video Thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <a href={highlight.url} target="_blank" rel="noopener noreferrer">
                    <FaPlay className="text-white text-3xl opacity-80 hover:opacity-100 transition" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
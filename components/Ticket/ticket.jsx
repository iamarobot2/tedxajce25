"use client";
import * as React from "react";

const Ticket = () => {
  const [isActive, setIsActive] = React.useState(false);

  const handleMobileClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center  box-border p-10 md:p-16 border-0 md:border-2 border-red-600 rounded-[30px] relative  md:max-h-[600px] w-[90%] md:max-w-full mx-auto overflow-hidden">
      {/* Come Join Us section */}
      <div className="absolute right-4 md:left-10 top-4 md:top-10 text-[30px] text-right md:text-left">
        <div>
          <span className="text-white font-[100]">Come</span>
        </div>
        <div className="flex md:hidden">
          <span className="text-[#EB0028] font-medium italic">JOIN</span>
          <span className="text-white font-normal">&nbsp;US</span>
        </div>
        <div className="hidden md:block">
          <div>
            <span className="text-[#EB0028] font-medium italic">JOIN</span>
          </div>
          <div>
            <span className="text-white font-normal">Us!</span>
          </div>
        </div>
      </div>

      {/* Date and time section - desktop */}
      <div className="hidden md:block absolute right-4 top-4 text-base italic space-y-2 text-right md:right-10 md:top-10">
        <div>
          <span>Date: </span>
          <span className="text-red-600">12th March 2025</span>
        </div>
        <div>
          <span>Venue: </span>
          <span className="text-red-600">
            Amal Jyothi College of Engineering
          </span>
        </div>
      </div>

      {/* Main container with overflow-hidden to prevent overflow */}
      <div>
        <div className="flex flex-col md:flex-col items-center mt-24  gap-8">
          <div
            className={`border-2 border-red-600 rounded-[30px] w-full md:w-[320px] min-h-[500px] md:min-h-[400px] shadow-2xl group overflow-hidden relative block transition-all duration-700 md:hover:scale-[1.02]`}
            onClick={() => handleMobileClick()}
          >
            {/* Desktop hyperlink overlay */}
            <a
              href="https://e.ajce.in/cy1p5h"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block absolute inset-0 z-30 opacity-0 group-hover:opacity-100"
            ></a>

            {/* Arrow icon */}
            <div
              className={`absolute top-6 right-6 md:top-8 md:right-8 z-20 transition-all duration-700 transform ${
                isActive
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : "opacity-0 translate-x-4 -translate-y-4"
              } md:group-hover:opacity-100 md:group-hover:translate-x-0 md:group-hover:translate-y-0`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="transform -rotate-0 w-24 h-24 md:w-12 md:h-12"
              >
                <path
                  d="M5 19L19 5M19 5H8.5M19 5V15.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Background overlay */}
            <div
              className={`absolute inset-0 bg-red-600 transition-all duration-700 ease-in-out transform origin-top ${
                isActive ? "scale-y-100" : "scale-y-[0.3]"
              } md:group-hover:scale-y-100 z-0 drop-shadow-2xl`}
            ></div>

            <div className="bg-red-600 text-center p-8 rounded-t-[30px] relative z-10">
              <div className="flex justify-center items-center overflow-hidden relative h-[50px]">
                <div
                  className={`transform transition-transform duration-700 absolute ${
                    isActive ? "translate-x-[-30%] text-left" : "translate-x-0"
                  } md:group-hover:translate-x-[-60%] md:group-hover:text-left`}
                >
                  <div className="text-lg md:text-base font-medium text-white">
                    FULL ACCESS
                  </div>
                  <div className="text-2xl md:text-xl italic font-bold text-white">
                    TICKET
                  </div>
                </div>
              </div>
            </div>

            {/* ticket content section */}
            <div className="px-10 py-12 md:py-8 space-y-4 md:space-y-3 relative z-10 h-full">
              <div
                className={`transition-all duration-700 ${
                  isActive ? "opacity-0 invisible" : "opacity-100 visible"
                } md:group-hover:opacity-0 md:group-hover:invisible`}
              >
                <div className="text-3xl font-semibold mt-8 md:mt-4 text-white ">
                  ₹1180
                </div>
                <br />
                {[
                  "Access to all talks",
                  "Chance to interact with our distinguished speakers",
                  "Lunch and Refreshments",
                  "TEDx certificate of participation",
                  "Goodies and merchandise",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm font-light text-left"
                  >
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Desktop Buy Now text */}
              <div
                className={`absolute bottom-6 left-10 text-white text-xl font-medium opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-full group-hover:translate-y-0 hidden md:block ${
                  isActive ? "opacity-100 translate-y-0" : ""
                }`}
              >
                Buy
              </div>
              {/* Mobile Buy Now button */}
              <a
                href="https://e.ajce.in/cy1p5h"
                target="_blank"
                rel="noopener noreferrer"
                className={`md:hidden absolute bottom-2 left-6 text-white border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-red-600 z-20 transition-all duration-700 ${
                  isActive ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                Buy
              </a>
            </div>
          </div>

          <div className="md:hidden text-base italic space-y-2 text-center w-full">
            <div>
              <span>Date: </span>
              <span className="text-red-600">12th March 2025</span>
            </div>
            <div>
              <span>Venue: </span>
              <span className="text-red-600">
                Amal Jyothi College of Engineering
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute bottom-6 left-10 text-xs font-light italic">
          <span className="text-white">AN INDEPENDENTLY ORGANIZED </span>
          <span className="text-[#EB0028]">TEDx</span>
          <span className="text-white"> EVENT</span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;

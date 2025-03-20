import React, { useEffect, useRef } from "react";
import image from "../assets/Designer.png";
import { FaArrowRight } from "react-icons/fa6";

const BannerDesign = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.classList.add("typewriter");
    }
  }, []);

  const handleScrollToDiscoverClick = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll to the bottom of the current viewport
      behavior: "smooth", // Add smooth scrolling animation
    });
  };

  return (
    <div className="bg-gradient-to-b from-[#121212] to-[#0A0A13] text-white min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex space-x-2 mb-4">
            <span className="bg-[#374151] text-gray-300 px-3 py-1 rounded-full text-xs font-mono">
              Framer
            </span>
            <span className="bg-[#374151] text-gray-300 px-3 py-1 rounded-full text-xs font-mono">
              Figma
            </span>
            <span className="bg-[#374151] text-gray-300 px-3 py-1 rounded-full text-xs font-mono">
              Adobe
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-heading font-black">
            <span ref={headingRef}>
              Hello, I'm <br /> Devansh.
            </span>
          </h1>
          <p className="text-xl mt-4 font-body">
            An experienced full-stack website developer with a passion for{" "}
            <br />
            crafting unique digital experiences.
          </p>
          <div className="flex space-x-4 mt-8">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-800 text-gray-300 py-3 px-6 rounded-lg font-bold font-body">
              Get in touch
            </button>
            <button className="bg-[#374151] hover:bg-[#4b5563] text-gray-300 py-3 px-6 rounded-lg font-bold font-body">
              Learn more
            </button>
          </div>
        </div>
        <div>
          <div className="p-4 rounded-lg">
            <img src={image} alt="Banner" />
          </div>
        </div>
      </div>
      <div
        className="flex mt-12 gap-3 cursor-pointer items-center justify-center"
        onClick={handleScrollToDiscoverClick}
      >
        <div className="text-center text-gray-300 font-body">
          Scroll to discover
        </div>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default BannerDesign;

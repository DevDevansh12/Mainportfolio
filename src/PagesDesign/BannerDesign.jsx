import React, { useEffect, useRef } from "react";
import image from "../assets/Designer.png";
import { FaArrowRight } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";

const BannerDesign = () => {
  const headingRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, transition: { duration: 1 } });
    if (headingRef.current) {
      headingRef.current.classList.add("typewriter");
    }
  }, [controls]);

  const handleScrollToDiscoverClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className="bg-gradient-to-b from-[#121212] via-[#1a202c] to-[#0A0A13] text-white min-h-screen flex flex-col justify-center items-center"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex flex-wrap space-x-2 mb-4">
            <span className="bg-[#374151] text-gray-300 px-3 py-1 rounded-full text-xs font-mono mb-2">
              Framer
            </span>
            <span className="bg-[#374151] text-gray-300 px-3 py-1 rounded-full text-xs font-mono mb-2">
              Figma
            </span>
            <span className="bg-[#374151] text-gray-300 px-3 py-1 rounded-full text-xs font-mono mb-2">
              Adobe
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black">
            <span ref={headingRef}>
              Hello, I'm <br /> Devansh.
            </span>
          </h1>
          <p className="text-lg md:text-xl mt-5 font-body">
            A passionate aspiring designer, dedicated to crafting unique <br />
            and impactful digital experiences.
          </p>
          <div className="flex flex-wrap space-x-4 mt-8">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-800 text-gray-300 py-3 px-6 rounded-lg font-bold font-body mb-2">
              Get in touch
            </button>
            <button className="bg-[#374151] hover:bg-[#4b5563] text-gray-300 py-3 px-6 rounded-lg font-bold font-body mb-2">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="p-4 rounded-lg">
            <img src={image} alt="Banner" className="max-w-full h-auto" />
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
    </motion.div>
  );
};

export default BannerDesign;

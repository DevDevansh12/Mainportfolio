import React from "react";

const GetInTouch = () => {
  return (
    <div className="bg-[#0A0A13] text-white py-24 md:py-32 lg:py-40 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's work <span className="text-[#EB531A]">together.</span>
        </h2>
        <p className="text-lg md:text-xl font-light mb-8">
          I'm currently available for freelance work and open to discussing new
          projects.
        </p>
        <a href="mailto:74devanshvariya@gmail.com">
          <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
            Get in touch
          </button>
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;

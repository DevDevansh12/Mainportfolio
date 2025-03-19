import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#0A0A13] text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <p className="text-4xl md:text-2xl font-light leading-relaxed mb-8">
          I'm an experienced full-stack developer proficient in{" "}
          <span className="font-medium">TypeScript</span>,{" "}
          <span className="font-medium">Tailwind</span>, and{" "}
          <span className="font-medium">Next.js</span> since 2021. My experience
          spans from startups to mid-sized companies, where I've been
          instrumental in the entire product design process; from ideation and
          wireframing, through prototyping, to the delivery of the final
          product, all while efficiently collaborating with cross-functional
          teams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-6xl text-[#7C96FE] font-bold mb-2">10+</p>
            <p className="text-lg font-light">Personal Projects</p>
          </div>
          <div>
            <p className="text-6xl text-[#7C96FE] font-bold mb-2">8+</p>
            <p className="text-lg font-light">Technologies Explored</p>
          </div>
          <div>
            <p className="text-6xl text-[#7C96FE] font-bold mb-2">3+</p>
            <p className="text-lg font-light">Challenge completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

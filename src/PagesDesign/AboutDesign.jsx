import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBehance,
  FaDribbble,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const AboutDesign = () => {
  const socialLinks = {
    github: "https://github.com/DevDevansh12",
    linkedin: "https://www.linkedin.com/in/devansh-variya/",
    behance: "https://www.behance.net/devanshvariya1s",
    dribbble: "https://dribbble.com/DevanshDev",
    twitter: "https://x.com/DevanshVariyaa",
    instagram: "https://www.instagram.com/uiux_by_devansh/",
  };

  return (
    <div className="bg-[#0A0A13] text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg md:text-2xl font-light leading-relaxed mb-8">
          Since 2021, I've been a designer specializing in{" "}
          <span className="font-medium">UX/UI Design</span>,{" "}
          <span className="font-medium">Wireframing</span>, and{" "}
          <span className="font-medium">Prototyping</span>, utilizing tools like
          Figma and Adobe Creative Suite to build impactful digital experiences.
          My journey spans startups to mid-sized companies, where I've driven
          product design from initial concept to polished visuals, consistently
          collaborating with cross-functional teams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          {" "}
          {/* increased mb */}
          <div>
            <p className="text-6xl text-[#7C96FE] font-bold mb-2">20+</p>
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

        {/* Social Links Section */}
        <div className="flex justify-center gap-10 flex-wrap">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 my-1 hover:text-[#7C96FE]"
          >
            <FaGithub />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 my-1 hover:text-[#7C96FE]"
          >
            <FaLinkedin />
          </a>
          <a
            href={socialLinks.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 my-1 hover:text-[#7C96FE]"
          >
            <FaBehance />
          </a>
          <a
            href={socialLinks.dribbble}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 my-1 hover:text-[#7C96FE]"
          >
            <FaDribbble />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 my-1 hover:text-[#7C96FE]"
          >
            <FaTwitter />
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 my-1 hover:text-[#7C96FE]"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutDesign;

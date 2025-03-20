import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBehance,
  FaDribbble,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const AboutUs = () => {
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
          As a full-stack developer with expertise in{" "}
          <span className="font-medium">React.js</span>,{" "}
          <span className="font-medium">TailwindCss</span>, and{" "}
          <span className="font-medium">Node.js</span>, I bring a holistic
          approach to web development. From the spark of an idea to the polished
          final product, I've been deeply involved in every stage, including
          ideation, wireframing, prototyping, and deployment. My experience in
          both startup and mid-sized environments has honed my ability to
          collaborate effectively with diverse teams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          <div>
            <p className="text-6xl text-[#eb531a] font-bold mb-2">10+</p>
            <p className="text-lg font-light">Personal Projects</p>
          </div>
          <div>
            <p className="text-6xl text-[#eb531a] font-bold mb-2">8+</p>
            <p className="text-lg font-light">Technologies Explored</p>
          </div>
          <div>
            <p className="text-6xl text-[#eb531a] font-bold mb-2">3+</p>
            <p className="text-lg font-light">Challenge completed</p>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-10">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 my-1 hover:text-[#eb531a]"
          >
            <FaGithub />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 my-1 hover:text-[#eb531a]"
          >
            <FaLinkedin />
          </a>
          <a
            href={socialLinks.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 my-1 hover:text-[#eb531a]"
          >
            <FaBehance />
          </a>
          <a
            href={socialLinks.dribbble}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 my-1 hover:text-[#eb531a]"
          >
            <FaDribbble />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 my-1 hover:text-[#eb531a]"
          >
            <FaTwitter />
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 my-1 hover:text-[#eb531a]"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

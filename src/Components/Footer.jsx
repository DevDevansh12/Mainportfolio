import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0A0A13] text-white py-4 px-4 md:px-8 lg:px-16 w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs mb-2 md:mb-0">Made with ❤️ by Devansh</p>

        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/devansh-variya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/uiux_by_devansh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/DevanshVariyaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://dribbble.com/DevanshDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaDribbble className="h-5 w-5" />
            </a>
            <a
              href="https://www.behance.net/devanshvariya1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaBehance className="h-5 w-5" />
            </a>
          </div>

          <a
            href="mailto:74devanshvariya@gmail.com"
            className="text-xs border border-gray-600 rounded-md px-3 py-1 hover:border-purple-400 transition duration-300"
          >
            Devansh@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

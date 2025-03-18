import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa"; // Import react-icons

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-[#111113] p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <HashLink
          to="/#home"
          className="text-white font-bold text-xl font-body"
        >
          Devansh
        </HashLink>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <HashLink
            to="/#about"
            smooth
            className="text-gray-300 hover:text-white font-body"
          >
            About
          </HashLink>
          <HashLink
            to="/#projects"
            smooth
            className="text-gray-300 hover:text-white font-body"
          >
            Projects
          </HashLink>
          <HashLink
            to="/#services"
            smooth
            className="text-gray-300 hover:text-white font-body"
          >
            Services
          </HashLink>
        </div>
      </div>
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} mt-2`}>
        <div className="flex flex-col space-y-2">
          <HashLink
            to="/about"
            smooth
            className="text-gray-300 hover:text-white font-body block py-2 px-4"
            onClick={toggleMobileMenu}
          >
            About
          </HashLink>
          <HashLink
            to="/projects"
            smooth
            className="text-gray-300 hover:text-white font-body block py-2 px-4"
            onClick={toggleMobileMenu}
          >
            Projects
          </HashLink>
          <HashLink
            to="/#services"
            smooth
            className="text-gray-300 hover:text-white font-body block py-2 px-4"
            onClick={toggleMobileMenu}
          >
            Services
          </HashLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

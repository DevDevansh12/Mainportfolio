import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ onToggleMode, isDesignerMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleToggle = () => {
    onToggleMode(!isDesignerMode);
  };

  const designerButtonColor = "bg-gradient-to-r from-blue-500 to-purple-600";
  const developmentButtonColor = "bg-gradient-to-r from-red-500 to-orange-600";
  const designerButtonHoverColor = "hover:from-blue-700 hover:to-purple-800";
  const developmentButtonHoverColor = "hover:from-red-700 hover:to-orange-800";

  const closeMobileMenuAndNavigate = (to) => {
    setMobileMenuOpen(false);
    // Delay navigation to allow animation to complete
    setTimeout(() => {
      window.location.hash = to;
      window.scrollTo({
        top: document.querySelector(to).offsetTop,
        behavior: "smooth",
      });
    }, 300); // 300ms matches the animation duration
  };

  return (
    <nav className="bg-[#101012] p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <HashLink
          to="/#home"
          className="text-white font-bold text-xl font-body"
          smooth
          onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
        >
          Devansh
        </HashLink>

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

        <div className="hidden md:flex space-x-4 items-center">
          <HashLink
            to="/#about"
            smooth
            className="text-gray-300 hover:text-white font-body"
            onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
          >
            About
          </HashLink>
          <HashLink
            to="/#projects"
            smooth
            className="text-gray-300 hover:text-white font-body"
            onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
          >
            Projects
          </HashLink>
          <HashLink
            to="/#services"
            smooth
            className="text-gray-300 hover:text-white font-body"
            onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
          >
            Services
          </HashLink>
          <motion.button
            onClick={handleToggle}
            className={`text-white font-bold py-2 px-4 rounded ${
              isDesignerMode
                ? `${designerButtonColor} ${designerButtonHoverColor}`
                : `${developmentButtonColor} ${developmentButtonHoverColor}`
            }`}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {isDesignerMode ? "Development Mode" : "Designer Mode"}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-2"
          >
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => closeMobileMenuAndNavigate("#about")}
                className="text-gray-300 hover:text-white font-body block py-2 px-4"
              >
                About
              </button>
              <button
                onClick={() => closeMobileMenuAndNavigate("#projects")}
                className="text-gray-300 hover:text-white font-body block py-2 px-4"
              >
                Projects
              </button>
              <button
                onClick={() => closeMobileMenuAndNavigate("#services")}
                className="text-gray-300 hover:text-white font-body block py-2 px-4"
              >
                Services
              </button>
              <motion.button
                onClick={handleToggle}
                className={`text-white font-bold py-2 px-4 rounded ${
                  isDesignerMode
                    ? `${designerButtonColor} ${designerButtonHoverColor}`
                    : `${developmentButtonColor} ${developmentButtonHoverColor}`
                }`}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {isDesignerMode ? "Development Mode" : "Designer Mode"}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

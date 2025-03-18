import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0A0A13] text-white py-4 px-4 md:px-8 lg:px-16 flex items-center justify-between w-full ">
      <div className="flex items-center justify-between container mx-auto">
        <p className="text-xs mr-4">Made with ❤️ by Devansh</p>

        <div className="flex items-center">
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

import React from "react";

const Projects = () => {
  return (
    <div className="bg-[#0A0A13] text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-4">
          <span className="text-sm text-purple-400 mr-2">✦</span>
          <h2 className="text-sm text-purple-400 uppercase font-semibold">
            Projects
          </h2>
        </div>

        <h1 className="text-3xl font-bold mb-2">
          Streamlined digital experiences.
        </h1>
        <p className="text-lg font-light mb-8">
          I've worked on a variety of projects, from small websites to
          large-scale web applications. Here are some of my favorites:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src="path/to/ecommerce-project.jpg" // Replace with actual image path
              alt="E-commerce Platform"
              className="w-full rounded-lg"
            />
            <p className="absolute bottom-4 left-4 text-sm bg-black bg-opacity-50 p-2 rounded-md">
              E-commerce platform for selling digital products
            </p>
          </div>

          <div className="relative">
            <img
              src="path/to/discord-bots-project.jpg" // Replace with actual image path
              alt="Discord Bots Hosting"
              className="w-full rounded-lg"
            />
            <p className="absolute bottom-4 left-4 text-sm bg-black bg-opacity-50 p-2 rounded-md">
              High performance VPS hosting solution
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-8 text-center">1/5 projects</p>
      </div>
    </div>
  );
};

export default Projects;

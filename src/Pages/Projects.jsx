import React from "react";
import Img from "../assets/ss.png";
import Imgtwo from "../assets/ss2.png";
const Projects = () => {
  return (
    <div className="bg-[#0A0A13] text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-4">
          <span className="text-sm text-[#eb531a] mr-2">✦</span>
          <h2 className="text-4xl text-[#eb531a] uppercase font-bold">
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
            <a href="https://medico-ashy.vercel.app/" target="_blank">
              <img src={Img} alt="Medico" className="w-full rounded-lg" />
              <p className="absolute bottom-4 left-4 text-sm bg-black bg-opacity-50 p-2 rounded-md">
                Medico : Doctor Appointment Website
              </p>
            </a>
          </div>
          <div className="relative">
            <a href="https://saleshub-eta.vercel.app/" target="_blank">
              <img src={Imgtwo} alt="Medico" className="w-full rounded-lg" />
              <p className="absolute bottom-4 left-4 text-sm bg-black bg-opacity-50 p-2 rounded-md">
                SalesHub : Luxury Ecommerce Online Store (Version 1)
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

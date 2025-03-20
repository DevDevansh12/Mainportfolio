import React, { useState } from "react";

const ServicesDesign = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: "frontend",
      icon: "<>",
      title: "Frontend Development",
      description:
        "Creating stellar user interfaces and web experiences using the latest technologies.",
    },
    {
      id: "ux",
      icon: "#",
      title: "UX Design",
      description:
        "Building intuitive, user-centric designs that drive engagement and conversion.",
    },
    {
      id: "seo",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      ),
      title: "SEO Optimization",
      description:
        "Enhancing your website's visibility in search engines for increased organic traffic.",
    },
    {
      id: "responsive",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5h3m-6.75-9.75a1.5 1.5 0 0 1 3 0m-3 0a1.5 1.5 0 1 0 3 0M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0Z"
          />
        </svg>
      ),
      title: "Responsive Design",
      description:
        "Designing websites that look and perform equally well on all devices and screen sizes.",
    },
    {
      id: "backend",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a3 3 0 0 0-3-3H6.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h9.75a3 3 0 0 0 3-3V13.5m-3 0h-3.75a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5H15M16.5 10.5 18 12m-1.5-1.5L18 9"
          />
        </svg>
      ),
      title: "Backend Development",
      description:
        "Developing robust, scalable server-side logic for a wide range of web applications.",
    },
  ];

  return (
    <div className="bg-[#0A0A13] text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Need more info?</h2>
          <p className="text-3xl font-bold text-[#7C96FE] mb-4">I got you.</p>
          <p className="text-lg font-light">
            Here are some of the services I offer. If you have any questions,
            feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-[#1E1E1E] p-6 rounded-lg transition-transform transform-gpu duration-300 ${
                hoveredCard === service.id ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl text-[#7C96FE] mr-2">
                  {service.icon}
                </span>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-sm font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDesign;

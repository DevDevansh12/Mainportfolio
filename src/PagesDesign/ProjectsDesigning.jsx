import React, { useRef, useEffect } from "react";
import One from "../assets/01.png";
import Two from "../assets/02.png";
import Three from "../assets/03.png";
import Four from "../assets/04.png";
import Five from "../assets/05.png";
import Six from "../assets/06.png";
import Seven from "../assets/07.png";
import Eight from "../assets/08.png";
import Nine from "../assets/09.png";
import Ten from "../assets/10.png";
import Eleven from "../assets/11.png";
import Tweleve from "../assets/12.png";
import { motion, useAnimation, useInView } from "framer-motion";

const ProjectsDesigning = () => {
  const projects = [
    {
      image: One,
      link: "https://dribbble.com/shots/25788679-FLO-PERIOD-TRACKING-APPLICATION",
      description: "FLO : PERIOD TRACKING APPLICATION",
    },
    {
      image: Two,
      link: "https://dribbble.com/shots/25788724-GOOGLE-PAY-UPI-PAYMENT-APPLICATION",
      description: "Google Pay UPI Application - Case Study",
    },
    {
      image: Three,
      link: "https://dribbble.com/shots/25788747-Amazon-Application-Clone-Case-Study",
      description: "Amazon App Clone: E-commerce",
    },
    {
      image: Four,
      link: "https://dribbble.com/shots/25788767-Kaju-Katli-Sweet-Box-Raksha-Bandhan-Special",
      description: "Kaju Katli Sweet Box - Raksha Bandhan Special",
    },
    {
      image: Five,
      link: "https://dribbble.com/shots/25788795-LuxeLine-Minimalist-E-commerce-Experience",
      description: "LuxeLine: Minimalist E-commerce Experience",
    },
    {
      image: Six,
      link: "https://dribbble.com/shots/25788824-Starbucks-TripleShot-DoubleShot-Energy-Case-Study",
      description:
        "Starbucks TripleShot & DoubleShot Energy Drink - Case Study",
    },
    {
      image: Seven,
      link: "https://dribbble.com/shots/25788834-Apna-Turf-Sports-Facility-Booking-App",
      description: "Apna Turf: Sports Facility Booking App",
    },
    {
      image: Eight,
      link: "https://dribbble.com/shots/25788850-Fruit-Cider-Duo-Packaging-Design",
      description: "Fruit Cider Duo: Packaging Design",
    },
    {
      image: Nine,
      link: "https://dribbble.com/shots/25788876-Zomato-App-Clone-Food-Delivery-Experience",
      description: "Zomato App Clone: Food Delivery Experience - Case Study",
    },
    {
      image: Ten,
      link: "https://dribbble.com/shots/25788902-Haldiram-s-Aloo-Bhujia-Packaging-Design",
      description: "Haldiram's Aloo Bhujia Packaging Design - Case Study",
    },
    {
      image: Eleven,
      link: "https://dribbble.com/shots/25788939-Coffee-Hazelnut-Packaging-Design",
      description: "Coffee Hazelnut Packaging Design - Case Study",
    },
    {
      image: Tweleve,
      link: "https://dribbble.com/shots/25788928-Black-Sands-Brewing-Company-Apple-Ale-Packaging-Design",
      description:
        "Black Sands Brewing Company: Apple Ale Packaging Design - Case Study",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeInOut" }, // Added ease
      });
    } else {
      animation.start({
        opacity: 0,
        y: 50,
        transition: { duration: 0.8, ease: "easeInOut" }, // Added ease
      });
    }
  }, [isInView, animation]);

  return (
    <div className="bg-[#0A0A13] text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-4">
          <span className="text-sm text-[#7893ff] mr-2">✦</span>
          <h2 className="text-4xl text-[#7893ff] uppercase font-semibold">
            Projects
          </h2>
        </div>

        <h1 className="text-3xl font-bold mb-2">
          Streamlined digital experiences.
        </h1>
        <p className="text-md font-light mb-8">
          I've tackled diverse design challenges, spanning user experience,
          visual identity, and interactive prototypes. Here are some of my
          favorite design endeavors:
        </p>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={animation}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.description}
                  className="w-full rounded-lg"
                />
                <p className="absolute bottom-4 left-4 text-sm bg-black bg-opacity-50 p-2 rounded-md">
                  {project.description}
                </p>
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsDesigning;

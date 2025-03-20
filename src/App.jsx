import React, { useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Banner from "./Pages/Banner";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import GetInTouch from "./Pages/GetInTouch";
import Footer from "./Components/Footer";
import DesignerPortfolio from "./Pages/DesignerPortfolio";
import BannerDesign from "./PagesDesign/BannerDesign";
import AboutDesign from "./PagesDesign/AboutDesign";
import ProjectsDesigning from "./PagesDesign/ProjectsDesigning";

function App() {
  const [showDesigner, setShowDesigner] = useState(false);

  const handleModeToggle = (isDesigner) => {
    setShowDesigner(isDesigner);
  };

  return (
    <Router>
      <Navbar onToggleMode={handleModeToggle} isDesignerMode={showDesigner} />
      {showDesigner ? (
        <div id="designer">
          <div id="home">
            <BannerDesign />
          </div>
          <div id="about">
            <AboutDesign />
          </div>
          <div id="projects">
            <ProjectsDesigning />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="getintouch">
            <GetInTouch />
          </div>
        </div>
      ) : (
        <div>
          <div id="home">
            <Banner />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="getintouch">
            <GetInTouch />
          </div>
        </div>
      )}
      <Footer />
    </Router>
  );
}

export default App;

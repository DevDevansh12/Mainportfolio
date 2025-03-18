import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Banner from "./Pages/Banner";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import GetInTouch from "./Pages/GetInTouch";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
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
      <Footer />
    </Router>
  );
}

export default App;

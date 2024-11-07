import React from "react";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Projects from "./components/Projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VeilleTechnologique from "./components/VeilleTechnologique";
import EcoleEntreprise from  "./components/EcoleEntreprise"

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />

      <Education />
      <EcoleEntreprise />
      <Work />
      <Projects />
      <VeilleTechnologique />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

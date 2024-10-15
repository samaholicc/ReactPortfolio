import React from "react";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import EcoleEntreprise from "./components/EcoleEntreprise"

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <EcoleEntreprise/>
      <Experience />
      <Education />
      <Services />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

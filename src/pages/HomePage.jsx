import React from "react";
// import './App.css';
// import './media-query.css'

/* ------------------------------------ Components ----------------------------------- */
import Hero from "../components/Hero";


import Skills from "../components/Skills";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

function HomePage() {
  return (
    <React.Fragment>
     
      
      <Hero />
      <Skills />
      <Projects />
      <AboutMe/>
    </React.Fragment>
  );
}

export default HomePage;
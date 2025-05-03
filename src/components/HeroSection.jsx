
import React from "react";
import "../styles/heroSection.css";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="content-wrapper">
        <h1>Hi, my name is</h1>
        <h2>John Developer.</h2>
        <h3>I build things for the web.</h3>
        <p>
          I'm a software engineer specializing in building exceptional digital experiences. 
          Currently, I'm focused on creating accessible, human-centered products.
        </p>
        <a href="#projects" className="btn btn-outline btn-with-arrow">
          Check out my work
          <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

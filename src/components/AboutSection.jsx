
import React from "react";
import "../styles/aboutSection.css";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding about-section">
      <h2 className="numbered-heading">
        <span>01.</span> About Me
      </h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Hello! My name is John and I enjoy creating things that live on the internet. 
            My interest in web development started back in 2012 when I decided to try 
            editing custom Tumblr themes — turns out hacking together a custom reblog 
            button taught me a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at 
            <a href="#"> an advertising agency</a>,
            <a href="#"> a start-up</a>,
            <a href="#"> a huge corporation</a>, and
            <a href="#"> a student-led design studio</a>. 
            My main focus these days is building accessible, inclusive products and 
            digital experiences at <a href="#">Upstatement</a> for 
            a variety of clients.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="skills-list">
            {["JavaScript (ES6+)", "React", "Node.js", "Next.js", "Tailwind CSS", "GraphQL"].map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="about-pic-wrapper">
          <div className="about-pic">
            <div className="about-pic-container">
              <img src="/avatar.png" alt="Developer portrait" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

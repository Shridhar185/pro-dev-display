
import React, { useState, useEffect } from "react";
import "../styles/skillsSection.css";

const SkillBar = ({ name, level }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setAnimated(true);
          }, 200);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`skill-${name.replace(/\s+/g, '-')}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [name]);

  return (
    <div className="skill-bar" id={`skill-${name.replace(/\s+/g, '-')}`}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div 
          className="skill-bar-fill" 
          style={{ width: animated ? `${level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skills = {
    frontend: [
      { name: "HTML5", level: 90 },
      { name: "CSS3/SASS", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Redux", level: 75 },
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 85 },
      { name: "Python", level: 70 },
      { name: "Django", level: 65 },
      { name: "GraphQL", level: 70 },
      { name: "REST API", level: 85 },
      { name: "MongoDB", level: 75 },
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Jest", level: 75 },
      { name: "CI/CD", level: 65 },
      { name: "Webpack", level: 70 },
      { name: "Figma", level: 60 },
      { name: "AWS", level: 60 },
    ],
  };

  const otherTech = [
    "Vue.js", "Angular", "Svelte", "Ruby on Rails", "Laravel", "Gatsby", 
    "Storybook", "WebGL", "Three.js", "TensorFlow.js", "PHP", "jQuery", "Bootstrap"
  ];

  return (
    <section id="skills" className="section-padding skills-section">
      <h2 className="numbered-heading">
        <span>04.</span> Skills & Technologies
      </h2>
      
      <div className="skills-tabs">
        <div className="tabs-list">
          {Object.keys(skills).map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        {Object.keys(skills).map((tab) => (
          <div
            key={tab}
            className={`tab-content ${activeTab === tab ? "active" : ""}`}
            id={`${tab}-content`}
          >
            <div className="skills-grid">
              {skills[tab].map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="other-tech">
        <h3>Other technologies I've worked with:</h3>
        <div className="tech-badges">
          {otherTech.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

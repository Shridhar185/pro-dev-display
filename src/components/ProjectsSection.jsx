
import React from "react";
import "../styles/projectsSection.css";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Task Management",
      description: "A smart task manager that uses AI to categorize, prioritize, and suggest optimal times for completing tasks based on user patterns and preferences.",
      tech: ["React", "Node.js", "MongoDB", "TensorFlow.js"],
      image: "/project1.jpg",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Real-Time Collaboration Platform",
      description: "A collaborative workspace allowing real-time document editing, video conferencing, and project management all in one seamless interface.",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      image: "/project2.jpg",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "E-Commerce Recommendation Engine",
      description: "A sophisticated product recommendation system for e-commerce sites that learns from user behavior and preferences.",
      tech: ["Next.js", "Python", "Django", "AWS"],
      image: "/project3.jpg",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="section-padding projects-section">
      <h2 className="numbered-heading">
        <span>03.</span> Some Things I've Built
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
            </div>
            <div className="project-content">
              <span className="featured-label">Featured Project</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-tech-list">
                {project.tech.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

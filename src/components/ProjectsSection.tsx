
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce analytics with real-time data visualization, inventory management, and sales tracking. Built with React, TypeScript, and Chart.js.",
    technologies: ["React", "TypeScript", "Redux", "Chart.js", "Tailwind CSS"],
    github: "https://github.com",
    external: "https://example.com",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and team collaboration with features like drag-and-drop organization, notifications, and task dependencies.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "tRPC", "Tailwind CSS"],
    github: "https://github.com",
    external: "https://example.com",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "AI Content Generator",
    description: "A machine learning-powered application that generates high-quality content for marketing, blogs, and social media. Features include tone adjustment, format customization, and SEO optimization.",
    technologies: ["React", "Node.js", "Express", "OpenAI API", "MongoDB"],
    github: "https://github.com",
    external: "https://example.com",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <Card className="bg-navy-light rounded-lg overflow-hidden border-navy-lightest group transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-aqua/30 z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-slate-lightest text-xl font-semibold mb-2">
          <span className="text-aqua text-sm mr-2">Featured Project</span>
          <br />
          {project.title}
        </h3>
        <p className="text-slate mb-4">{project.description}</p>
        <ul className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <li key={tech} className="text-xs text-slate-light bg-navy-lightest px-3 py-1 rounded-full">
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-lightest hover:text-aqua transition-colors"
            aria-label="GitHub Repository"
          >
            <Github size={20} />
          </a>
          <a 
            href={project.external} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-lightest hover:text-aqua transition-colors"
            aria-label="Live Demo"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </Card>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <h2 className="heading text-2xl md:text-3xl mb-12 numbered-heading">
        <span>02.</span> Some Things I've Built
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

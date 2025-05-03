
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import "../styles/index.css";

const Index = () => {
  useEffect(() => {
    // Add scroll reveal animations
    const revealElements = document.querySelectorAll(".section-padding");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    revealElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="bg-navy min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

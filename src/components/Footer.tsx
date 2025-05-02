
import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-navy-lightest">
      <div className="max-w-6xl mx-auto">
        <div className="md:hidden flex justify-center mb-6 space-x-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate hover:text-aqua transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate hover:text-aqua transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate hover:text-aqua transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </div>
        
        <div className="text-center text-slate text-sm">
          <p className="mb-2">Designed & Built by John Developer</p>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

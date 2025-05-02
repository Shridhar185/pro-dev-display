
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 px-6 md:px-12 transition-all duration-300 ${
        scrolled ? "bg-navy/90 backdrop-blur shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center">
          <a href="#hero" className="text-aqua font-bold text-2xl">JD.</a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ol className="flex space-x-8">
            {[
              { name: "About", url: "#about" },
              { name: "Projects", url: "#projects" },
              { name: "Skills", url: "#skills" },
              { name: "Contact", url: "#contact" },
            ].map((item, i) => (
              <li key={item.name}>
                <a 
                  href={item.url} 
                  className="text-slate hover:text-aqua transition-colors duration-300"
                >
                  <span className="text-aqua mr-1">0{i + 1}.</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ol>
          <Button asChild className="bg-transparent hover:bg-aqua/10 text-aqua border border-aqua">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-lightest z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6 text-aqua" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`fixed top-0 right-0 h-screen w-[300px] bg-navy-light py-24 px-8 flex flex-col justify-center transition-transform duration-300 transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden shadow-2xl`}
        >
          <ol className="flex flex-col space-y-6 items-center mb-10">
            {[
              { name: "About", url: "#about" },
              { name: "Projects", url: "#projects" },
              { name: "Skills", url: "#skills" },
              { name: "Contact", url: "#contact" },
            ].map((item, i) => (
              <li key={item.name}>
                <a 
                  href={item.url} 
                  className="text-slate-lightest text-lg hover:text-aqua transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-aqua block text-center mb-1">0{i + 1}.</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ol>
          <Button asChild className="bg-transparent hover:bg-aqua/10 text-aqua border border-aqua mt-4 mx-auto">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

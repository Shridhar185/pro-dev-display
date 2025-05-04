
import React, { useState, useEffect } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <nav className="navbar">
        <div className="nav-content">
          <a href="#" className="logo">JD.</a>
          
          <div className="nav-links">
            <ol className="nav-list">
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ol>
            <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <svg className="hamburger" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg className="close" style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <ol className="mobile-nav-list">
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#education" onClick={closeMenu}>Education</a></li>
              <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ol>
            <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

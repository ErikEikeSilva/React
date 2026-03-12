// components/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src="/api/placeholder/50/50" alt="Dermalux Logo" />
          <span className="logo-text">Dermalux</span>
        </div>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><button onClick={() => scrollToSection('home')}>Início</button></li>
            <li><button onClick={() => scrollToSection('about')}>Sobre</button></li>
            <li><button onClick={() => scrollToSection('services')}>Serviços</button></li>
            <li><button onClick={() => scrollToSection('team')}>Profissionais</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contato</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
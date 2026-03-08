import React, { useState } from 'react';
import './NavMenu.css';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-menu">
      <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Início</a></li>
        <li><a href="#sobre" onClick={() => setIsOpen(false)}>Sobre</a></li>
        <li><a href="#animais" onClick={() => setIsOpen(false)}>Animais</a></li>
        <li><a href="#beneficios" onClick={() => setIsOpen(false)}>Benefícios</a></li>
        <li><a href="#contato" onClick={() => setIsOpen(false)}>Contato</a></li>
      </ul>
    </nav>
  );
};

export default NavMenu;
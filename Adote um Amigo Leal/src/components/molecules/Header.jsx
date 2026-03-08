import React from 'react';
import Container from '../atoms/Container';
import NavMenu from '../molecules/NavMenu';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Container className="header-container">
        <div className="logo">
          <a href="#home">Amigo <span>Leal</span></a>
        </div>
        <NavMenu />
      </Container>
    </header>
  );
};

export default Header;
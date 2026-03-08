import React from 'react';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <Container className="hero-container">
        <div className="hero-content">
          <h1>Adote um amigo,<br />mude uma vida <span>para sempre</span>.</h1>
          <p>Conheça cães e gatos que esperam por um lar cheio de amor. Todos vacinados, castrados e microchipados.</p>
          <div className="hero-buttons">
            <Button variant="primary">Conhecer Animais</Button>
            <Button variant="secondary">Como Adotar</Button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600" alt="Cachorro feliz" />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
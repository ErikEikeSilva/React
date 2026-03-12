// components/Hero.jsx - Versão Profissional
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-badge">Excelência em Dermatologia</span>
        <h1 className="hero-title">
          Dermalux<br />
          <span className="hero-subtitle">Sua pele merece o melhor cuidado</span>
        </h1>
        <p className="hero-description">
          Tecnologia avançada e atendimento humanizado para realçar sua beleza natural<br />
          com segurança e resultados excepcionais.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Agendar Consulta</a>
          <a href="#services" className="btn btn-outline">Conheça nossos serviços</a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-number">15+</span>
          <span className="stat-label">Anos de Excelência</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10k+</span>
          <span className="stat-label">Pacientes Atendidos</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">98%</span>
          <span className="stat-label">Satisfação</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
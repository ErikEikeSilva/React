// components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Dermalux</h3>
            <p>Cuidando da sua pele com excelência e dedicação.</p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#team">Profissionais</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Serviços</h4>
            <ul>
              <li>Dermatologia Clínica</li>
              <li>Dermatologia Estética</li>
              <li>Prevenção ao Câncer</li>
              <li>Tratamentos Corporais</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Horário de Atendimento</h4>
            <ul className="hours">
              <li>Seg - Sex: 8h - 20h</li>
              <li>Sábado: 9h - 14h</li>
              <li>Domingo: Fechado</li>
            </ul>
            <p className="emergency">
              <span>🚨</span>
              Emergências: (11) 98765-4321
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Dermalux Clínica de Dermatologia. 
            Todos os direitos reservados.
          </p>
          <p className="credits">
            Desenvolvido com ❤️ por Nossa Equipe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
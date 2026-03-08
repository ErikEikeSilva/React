import React from 'react';
import Container from '../atoms/Container';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contato" className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-info">
            <h3>Amigo <span>Leal</span></h3>
            <p>Transformando vidas através da adoção responsável.</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="WhatsApp">📱</a>
            </div>
          </div>
          <div className="footer-contact">
            <h4>Contato</h4>
            <p>📍 Rua dos Animais, 123 - São Paulo/SP</p>
            <p>📞 (11) 99999-9999</p>
            <p>✉️ contato@amigoleal.org</p>
          </div>
          <div className="footer-hours">
            <h4>Horário de Visitas</h4>
            <p>Segunda a Sexta: 10h às 18h</p>
            <p>Sábados: 10h às 16h</p>
            <p>Domingos: Fechado (apenas feiras)</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Amigo Leal. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
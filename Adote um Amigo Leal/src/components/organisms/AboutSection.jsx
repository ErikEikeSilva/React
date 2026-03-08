import React from 'react';
import Container from '../atoms/Container';
import SectionTitle from '../atoms/SectionTitle';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="sobre" className="about">
      <Container>
        <SectionTitle 
          title="Sobre o Amigo Leal" 
          subtitle="Há mais de 10 anos conectando corações e transformando vidas através da adoção responsável."
          align="left"
        />
        <div className="about-content">
          <div className="about-text">
            <p>Somos uma organização sem fins lucrativos dedicada ao resgate, cuidado e encaminhamento de cães e gatos para adoção. Acreditamos que todo animal merece uma chance de ter um lar amoroso.</p>
            <p>Nossa equipe é formada por veterinários, voluntários e apaixonados por animais que trabalham incansavelmente para reabilitar e preparar cada bichinho para uma nova família.</p>
            <div className="about-stats">
              <div className="stat">
                <strong>+500</strong>
                <span>Animais adotados</span>
              </div>
              <div className="stat">
                <strong>10 anos</strong>
                <span>de história</span>
              </div>
              <div className="stat">
                <strong>+50</strong>
                <span>voluntários</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?w=600" alt="Equipe do abrigo" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
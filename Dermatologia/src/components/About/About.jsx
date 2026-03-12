// src/components/About/About.jsx - CORRIGIDO
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Sobre Nós</span>
          <h2>Excelência em Cuidados Dermatológicos</h2>
          <p className="section-description">
            Conheça a Dermalux, onde tecnologia de ponta encontra o cuidado humanizado
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1168&q=80" 
              alt="Clínica Dermalux - Estrutura moderna" 
            />
            <div className="image-caption">Clínica Dermalux - Estrutura moderna</div>
          </div>
          
          <div className="about-text">
            <h3>Dermalux: Sua pele em boas mãos</h3>
            <p className="about-description">
              A Dermalux nasceu do sonho de oferecer um atendimento dermatológico 
              diferenciado, combinando tecnologia de ponta com um toque humano e acolhedor. 
              Nossa clínica é referência em tratamentos personalizados e resultados naturais.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🔬</div>
                <div className="feature-text">
                  <h4>Tecnologia Avançada</h4>
                  <p>Equipamentos de última geração para diagnósticos precisos</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">👥</div>
                <div className="feature-text">
                  <h4>Equipe Especializada</h4>
                  <p>Profissionais renomados e em constante atualização</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">💚</div>
                <div className="feature-text">
                  <h4>Atendimento Humanizado</h4>
                  <p>Cuidado individualizado e acolhedor para cada paciente</p>
                </div>
              </div>
            </div>

            <div className="about-mission">
              <div className="mission-box">
                <h4>Missão</h4>
                <p>Proporcionar saúde e bem estar através do cuidado dermatológico de excelência</p>
              </div>
              <div className="mission-box">
                <h4>Visão</h4>
                <p>Ser referência nacional em dermatologia até 2028</p>
              </div>
              <div className="mission-box">
                <h4>Valores</h4>
                <p>Ética, inovação, respeito e responsabilidade com resultados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
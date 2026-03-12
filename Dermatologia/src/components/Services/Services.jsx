// components/Services.jsx
import React from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    icon: '🔬',
    title: 'Dermatologia Clínica',
    description: 'Diagnóstico e tratamento de doenças da pele, cabelos e unhas',
    features: ['Acne', 'Dermatites', 'Psoríase', 'Alopecia']
  },
  {
    id: 2,
    icon: '✨',
    title: 'Dermatologia Estética',
    description: 'Procedimentos para rejuvenescimento e harmonização facial',
    features: ['Toxina Botulínica', 'Preenchimento', 'Peeling', 'Laser']
  },
  {
    id: 3,
    icon: '🔍',
    title: 'Prevenção ao Câncer',
    description: 'Acompanhamento e tratamento preventivo do câncer de pele',
    features: ['Mapeamento de pintas', 'Exame dermatoscópico', 'Cirurgias']
  },
  {
    id: 4,
    icon: '💆',
    title: 'Tratamentos Corporais',
    description: 'Procedimentos para rejuvenescimento corporal',
    features: ['Criolipólise', 'Radiofrequência', 'Ultrassom']
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Nossos Serviços</h2>
        <p className="services-subtitle">
          Oferecemos tratamentos completos com tecnologia de ponta
        </p>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="service-link">Saiba mais →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
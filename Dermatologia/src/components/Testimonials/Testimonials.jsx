import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Dra. Maria Santos',
    text: 'Excelente atendimento! A Dra. Ana foi muito atenciosa e o tratamento para minha acne foi extremamente eficaz. Recomendo muito!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    profession: 'Médica',
    age: 45
  },
  {
    id: 2,
    name: 'João Pereira',
    text: 'Fiz um procedimento a laser para remoção de manchas e o resultado superou minhas expectativas. Estrutura moderna e equipe muito competente.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
    profession: 'Empresário',
    age: 52
  },
  {
    id: 3,
    name: 'Carla Oliveira',
    text: 'Ambiente acolhedor e profissionais atualizados. Me sinto segura e bem cuidada desde a primeira consulta.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
    profession: 'Advogada',
    age: 38
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Depoimentos</span>
          <h2>O que nossos pacientes dizem</h2>
          <p className="section-description">
            Histórias reais de quem confiou na Dermalux
          </p>
        </div>

        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            >
              <div className="testimonial-content">
                <div className="testimonial-stars"></div>
                
                <p className="testimonial-text">"{testimonial.text}"</p>
                
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.profession} • {testimonial.age} anos</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
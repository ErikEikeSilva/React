// components/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você pode adicionar a lógica para enviar o formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Entre em Contato</h2>
        <p className="contact-subtitle">
          Agende sua consulta ou tire suas dúvidas
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Telefone</h3>
              <p>(11) 3456-7890</p>
              <p>(11) 98765-4321</p>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>E-mail</h3>
              <p>contato@dermalux.com.br</p>
              <p>agendamento@dermalux.com.br</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Endereço</h3>
              <p>Av. Paulista, 1000</p>
              <p>São Paulo - SP, 01310-100</p>
            </div>

            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3>Horário de Funcionamento</h3>
              <p>Segunda a Sexta: 8h às 20h</p>
              <p>Sábado: 9h às 14h</p>
            </div>

            <a 
              href="#" 
              className="btn btn-whatsapp"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://wa.me/5511999999999', '_blank');
              }}
            >
              <span className="whatsapp-icon">📱</span>
              WhatsApp
            </a>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
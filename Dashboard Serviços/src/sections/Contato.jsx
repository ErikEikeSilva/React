import { useState } from 'react';
import './Contato.css';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Dados do formulário:', formData);
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <section className="contato">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">
          Estamos prontos para atender você
        </p>

        <div className="contato-grid">
          <div className="contato-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h3>Endereço</h3>
                <p>Av. Paulista, 1000 - São Paulo/SP</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h3>Telefone</h3>
                <p>(11) 1234-5678</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h3>Email</h3>
                <p>contato@dashboard.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🕒</span>
              <div>
                <h3>Horário</h3>
                <p>Seg - Sex: 9h às 18h</p>
              </div>
            </div>
          </div>

          <form className="contato-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Seu nome completo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                placeholder="Digite sua mensagem..."
                rows="5"
              />
            </div>
            <button type="submit" className="btn-submit">
              Enviar Mensagem
            </button>
            {enviado && (
              <div className="mensagem-sucesso">
                Mensagem enviada com sucesso!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contato;
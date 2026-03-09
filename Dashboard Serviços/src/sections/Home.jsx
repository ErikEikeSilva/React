import './Home.css';

function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Bem-vindo à <span className="highlight">Dashboard Serviços</span>
          </h1>
          <p className="hero-subtitle">
            Soluções inovadoras para impulsionar seu negócio ao próximo nível
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.location.href = '/servicos'}>
              Nossos Serviços
            </button>
            <button className="btn-secondary" onClick={() => window.location.href = '/contato'}>
              Fale Conosco
            </button>
          </div>
        </div>

        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Inovação</h3>
            <p>Tecnologias de ponta para soluções modernas</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Expertise</h3>
            <p>Time especializado com anos de experiência</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Suporte</h3>
            <p>Atendimento personalizado 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
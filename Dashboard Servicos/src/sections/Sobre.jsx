import './Sobre.css';

function Sobre() {
  return (
    <section className="sobre">
      <div className="container">
        <h2 className="section-title">Sobre Nós</h2>
        
        <div className="sobre-content">
          <div className="sobre-texto">
            <h3>Quem Somos</h3>
            <p>
              Somos uma empresa especializada em soluções digitais, com mais de 10 anos de experiência 
              no mercado. Nossa missão é ajudar negócios a crescerem através da tecnologia e inovação.
            </p>
            
            <h3>Nossa Missão</h3>
            <p>
              Transformar ideias em realidade, oferecendo soluções personalizadas que realmente 
              fazem a diferença para nossos clientes.
            </p>
            
            <h3>Nossos Valores</h3>
            <ul className="valores-lista">
              <li>✨ Inovação constante</li>
              <li>🤝 Transparência com clientes</li>
              <li>⭐ Qualidade acima de tudo</li>
              <li>🌱 Sustentabilidade</li>
            </ul>
          </div>
          
          <div className="sobre-stats">
            <div className="stat-card">
              <span className="stat-number">10+</span>
              <span className="stat-label">Anos de Mercado</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projetos Entregues</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">200+</span>
              <span className="stat-label">Clientes Satisfeitos</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Suporte Disponível</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">🐾</span>
            <h1>Amigo <span className="highlight">Leal</span></h1>
          </div>
          <nav className="nav">
            <a href="#home">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#animais">Animais</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Adote um amigo,<br />mude uma vida <span className="highlight">para sempre</span></h1>
            <p>Conheça cães e gatos que esperam por um lar cheio de amor. Todos vacinados, castrados e microchipados.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Conhecer Animais</button>
              <button className="btn btn-secondary">Como Adotar</button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Cachorro e gato juntos" 
            />
          </div>
        </div>
      </section>

      {/* SOBRE SECTION */}
      <section id="sobre" className="about">
        <div className="container">
          <div className="section-header">
            <h2>Sobre o <span className="highlight">Amigo Leal</span></h2>
            <p>Há mais de 10 anos conectando corações e transformando vidas</p>
          </div>
          
          <div className="about-content">
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Equipe do abrigo" 
              />
            </div>
            <div className="about-text">
              <p>Somos uma organização sem fins lucrativos dedicada ao resgate, cuidado e encaminhamento de cães e gatos para adoção. Acreditamos que todo animal merece uma chance de ter um lar amoroso.</p>
              <p>Nossa equipe é formada por veterinários, voluntários e apaixonados por animais que trabalham incansavelmente para reabilitar e preparar cada bichinho para uma nova família.</p>
              
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number">+500</span>
                  <span className="stat-label">Animais adotados</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10</span>
                  <span className="stat-label">Anos de história</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">+50</span>
                  <span className="stat-label">Voluntários</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANIMAIS SECTION */}
      <section id="animais" className="animals">
        <div className="container">
          <div className="section-header">
            <h2>Quem espera por <span className="highlight">você</span></h2>
            <p>Todos os nossos animais são vermifugados, vacinados e castrados</p>
          </div>

          <div className="animals-grid">
            {/* Card 1 */}
            <div className="animal-card">
              <div className="animal-image">
                <img 
                  src="https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Rex" 
                />
              </div>
              <div className="animal-info">
                <h3>Rex</h3>
                <p className="animal-breed">Vira-lata • 3 anos</p>
                <p className="animal-location">📍 São Paulo, SP</p>
                <p className="animal-description">Amigável e cheio de energia, adora brincar com bolinhas e fazer novos amigos.</p>
                <div className="animal-tags">
                  <span className="tag">Amigável</span>
                  <span className="tag">Brincalhão</span>
                  <span className="tag">Energético</span>
                </div>
                <button className="btn btn-primary btn-full">Quero Adotar</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="animal-card">
              <div className="animal-image">
                <img 
                  src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Mia" 
                />
              </div>
              <div className="animal-info">
                <h3>Mia</h3>
                <p className="animal-breed">Siamês • 2 anos</p>
                <p className="animal-location">📍 São Paulo, SP</p>
                <p className="animal-description">Carinhosa e tranquila, adora um colo e uma janela para ver o movimento.</p>
                <div className="animal-tags">
                  <span className="tag">Carinhosa</span>
                  <span className="tag">Tranquila</span>
                  <span className="tag">Curiosa</span>
                </div>
                <button className="btn btn-primary btn-full">Quero Adotar</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="animal-card">
              <div className="animal-image">
                <img 
                  src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Bob" 
                />
              </div>
              <div className="animal-info">
                <h3>Bob</h3>
                <p className="animal-breed">Vira-lata • 4 anos</p>
                <p className="animal-location">📍 São Paulo, SP</p>
                <p className="animal-description">Calmo e protetor, já viveu em um quintal e agora busca um lar com espaço.</p>
                <div className="animal-tags">
                  <span className="tag">Calmo</span>
                  <span className="tag">Protetor</span>
                  <span className="tag">Leal</span>
                </div>
                <button className="btn btn-primary btn-full">Quero Adotar</button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="btn btn-secondary">Ver Mais Animais</button>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS SECTION */}
      <section className="benefits">
        <div className="container">
          <div className="section-header">
            <h2>Por que <span className="highlight">adotar?</span></h2>
            <p>A adoção é um ato de amor que transforma duas vidas</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🐾</div>
              <h3>Amor Incondicional</h3>
              <p>Ganhe um companheiro para todas as horas, que vai te encher de alegria e carinho.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">❤️</div>
              <h3>Saúde e Bem-estar</h3>
              <p>Estudos mostram que ter um pet reduz o estresse e melhora a saúde cardiovascular.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Apoio Pós-Adoção</h3>
              <p>Oferecemos suporte veterinário e comportamental para toda a vida do animal.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏡</div>
              <h3>Lar Temporário</h3>
              <p>Se não puder adotar, seja um lar temporário e ajude um animal a se preparar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Amigo <span className="highlight">Leal</span></h3>
              <p>Transformando vidas através da adoção responsável.</p>
              <div className="social-links">
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="WhatsApp">📱</a>
              </div>
            </div>
            <div className="footer-contact">
              <h4>Contato</h4>
              <p>📍 Rua dos Animais, 123 - Distrito Federal/DF</p>
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
        </div>
      </footer>
    </div>
  );
}

export default App;
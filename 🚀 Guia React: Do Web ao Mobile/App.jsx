import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import './App.css'

function App() {
  // Dados dos cards (simulando uma API)
  const cardsData = [
    {
      id: 1,
      nome: "Ana Silva",
      descricao: "Desenvolvedora Front-end especializada em React",
      imagem: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Ana"
    },
    {
      id: 2,
      nome: "João Santos",
      descricao: "Especialista em Back-end e Node.js",
      imagem: "https://via.placeholder.com/150/33FF57/FFFFFF?text=João"
    },
    {
      id: 3,
      nome: "Maria Oliveira",
      descricao: "UI/UX Designer e Desenvolvedora Mobile",
      imagem: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Maria"
    },
    {
      id: 4,
      nome: "Pedro Costa",
      descricao: "Full Stack Developer e Instrutor",
      imagem: "https://via.placeholder.com/150/FF33F5/FFFFFF?text=Pedro"
    }
  ]

  return (
    <>
      <Header />
      
      <main className="container">
        <h2 className="section-title">Nossa Equipe</h2>
        <div className="cards-grid">
          {/* Renderizando múltiplos cards com props diferentes */}
          {cardsData.map(card => (
            <Card 
              key={card.id}
              nome={card.nome}
              descricao={card.descricao}
              imagem={card.imagem}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
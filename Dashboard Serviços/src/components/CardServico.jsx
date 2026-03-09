import './CardServico.css';

function CardServico({ titulo, descricao, icone = "🔧" }) {
  return (
    <div className="card-servico">
      <div className="card-icon">{icone}</div>
      <h3 className="card-title">{titulo}</h3>
      <p className="card-description">{descricao}</p>
      <button className="card-button">
        Saiba mais <span className="arrow">→</span>
      </button>
    </div>
  )
}

export default CardServico;
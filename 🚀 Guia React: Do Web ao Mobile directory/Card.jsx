// src/components/Card/Card.jsx
import './Card.css'

function Card({ titulo, descricao, imagem }) {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} className="card-img" />
      <div className="card-content">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </div>
  )
}

export default Card
import React from 'react'

function Card({ nome, descricao, imagem }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imagem} alt={nome} />
      </div>
      <div className="card-content">
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <div className="card-footer">
          <span className="tag">Profissional</span>
        </div>
      </div>
    </div>
  )
}

export default Card
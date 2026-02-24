// src/pages/Home/Home.jsx
import { useState } from 'react'  // IMPORTANDO O HOOK DE ESTADO
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'

function Home() {
  // ESTADO: variável "fofoqueira" que atualiza a tela
  const [contador, setContador] = useState(0)
  const [usuarios, setUsuarios] = useState(['Ana', 'João', 'Maria'])

  // FUNÇÕES DE EVENTO
  const incrementar = () => {
    setContador(contador + 1)  // Atualiza o estado
  }

  const adicionarUsuario = () => {
    // REGRA DE OURO: NUNCA MUTAR O ESTADO DIRETAMENTE
    // ERRADO: usuarios.push('Pedro')
    // CERTO: criar novo array
    setUsuarios([...usuarios, 'Pedro'])
  }

  return (
    <div className="home">
      <h1>Página Inicial</h1>
      
      {/* EXEMPLO DE ESTADO */}
      <div className="contador">
        <h2>Contador: {contador}</h2>
        <Button 
          texto="Incrementar" 
          cor="azul" 
          onClick={incrementar}
        />
      </div>

      {/* EXEMPLO DE LISTA DINÂMICA */}
      <div className="usuarios">
        <h2>Usuários</h2>
        <ul>
          {usuarios.map((usuario, index) => (
            <li key={index}>{usuario}</li>
          ))}
        </ul>
        <Button 
          texto="Adicionar Usuário" 
          cor="vermelho"
          onClick={adicionarUsuario}
        />
      </div>

      {/* EXEMPLO DE COMPONENTES COM PROPS */}
      <div className="cards">
        <Card 
          titulo="React"
          descricao="Biblioteca para interfaces"
          imagem="https://via.placeholder.com/300"
        />
        <Card 
          titulo="JavaScript"
          descricao="Linguagem do navegador"
          imagem="https://via.placeholder.com/300"
        />
      </div>
    </div>
  )
}

export default Home
import { useState } from 'react'
import './App.css'

function App() {
  // Estados para controlar a interface
  const [contador, setContador] = useState(0)
  const [tema, setTema] = useState('claro')
  const [notificacoes, setNotificacoes] = useState(false)
  const [usuarios, setUsuarios] = useState(['Ana', 'João', 'Maria'])

  // Funções de interação
  const incrementar = () => {
    setContador(contador + 1)
  }

  const decrementar = () => {
    setContador(contador - 1)
  }

  const resetar = () => {
    setContador(0)
  }

  const alternarTema = () => {
    setTema(tema === 'claro' ? 'escuro' : 'claro')
  }

  const alternarNotificacoes = () => {
    setNotificacoes(!notificacoes)
  }

  const adicionarUsuario = () => {
    const novoUsuario = `Usuário ${usuarios.length + 1}`
    setUsuarios([...usuarios, novoUsuario])
  }

  return (
    <div className={`app ${tema}`}>
      {/* Header com navegação */}
      <header className="header">
        <div className="logo">
          <span className="logo-icon">⚛️</span>
          <h1>React Pro</h1>
        </div>
        
        <div className="header-controls">
          <button 
            className="btn btn-tema" 
            onClick={alternarTema}
          >
            {tema === 'claro' ? '🌙 Escuro' : '☀️ Claro'}
          </button>
          
          <button 
            className="btn btn-notificacao"
            onClick={alternarNotificacoes}
          >
            {notificacoes ? '🔔 Ativas' : '🔕 Inativas'}
          </button>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="main">
        {/* Card do Contador */}
        <div className="card">
          <h2>Contador Interativo</h2>
          <div className="contador-display">
            <span className={`numero ${contador > 0 ? 'positivo' : contador < 0 ? 'negativo' : ''}`}>
              {contador}
            </span>
          </div>
          
          <div className="botoes-grupo">
            <button className="btn btn-primary" onClick={incrementar}>
              ➕ Incrementar
            </button>
            <button className="btn btn-secondary" onClick={decrementar}>
              ➖ Decrementar
            </button>
            <button className="btn btn-danger" onClick={resetar}>
              🔄 Resetar
            </button>
          </div>
        </div>

        {/* Card de Usuários */}
        <div className="card">
          <h2>Lista de Usuários</h2>
          
          <div className="lista-usuarios">
            {usuarios.map((usuario, index) => (
              <div key={index} className="item-usuario">
                <span className="usuario-avatar">👤</span>
                <span className="usuario-nome">{usuario}</span>
                <span className="usuario-id">#{index + 1}</span>
              </div>
            ))}
          </div>
          
          <button className="btn btn-success" onClick={adicionarUsuario}>
            ➕ Adicionar Usuário
          </button>
        </div>

        {/* Card de Status */}
        <div className="card">
          <h2>Status do Sistema</h2>
          
          <div className="status-item">
            <span>🔹 Tema atual:</span>
            <span className={`badge ${tema}`}>{tema}</span>
          </div>
          
          <div className="status-item">
            <span>🔹 Notificações:</span>
            <span className={`badge ${notificacoes ? 'ativo' : 'inativo'}`}>
              {notificacoes ? 'Ativadas' : 'Desativadas'}
            </span>
          </div>
          
          <div className="status-item">
            <span>🔹 Total usuários:</span>
            <span className="badge info">{usuarios.length}</span>
          </div>
          
          <div className="status-item">
            <span>🔹 Cliques no contador:</span>
            <span className="badge info">{Math.abs(contador)}</span>
          </div>
        </div>

        {/* Ações Rápidas */}
        <div className="card acoes-rapidas">
          <h3>Ações Rápidas</h3>
          <div className="botoes-mini">
            <button className="btn-mini" onClick={() => setContador(10)}>
              🔟 Contador = 10
            </button>
            <button className="btn-mini" onClick={() => setContador(100)}>
              1️⃣0️⃣0️⃣ Contador = 100
            </button>
            <button className="btn-mini" onClick={() => setUsuarios(['Ana', 'João', 'Maria'])}>
              🔄 Resetar Lista
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>🚀 React Profissional - Aprendendo State e Interatividade</p>
        <p className="version">Versão 1.0.0</p>
      </footer>
    </div>
  )
}

export default App
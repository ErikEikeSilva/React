import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  const [mostrarToast, setMostrarToast] = useState(false);
  const [mensagemToast, setMensagemToast] = useState('');

  // Carregar tarefas do LocalStorage quando o app inicia
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  // Salvar tarefas no LocalStorage sempre que elas mudarem
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    mostrarNotificacao('Tarefas salvas! 💾');
  }, [tarefas]);

  const mostrarNotificacao = (mensagem) => {
    setMensagemToast(mensagem);
    setMostrarToast(true);
    setTimeout(() => {
      setMostrarToast(false);
    }, 2000);
  };

  const adicionarTarefa = (e) => {
    e.preventDefault();
    
    if (novaTarefa.trim() === '') {
      mostrarNotificacao('Digite uma tarefa válida!');
      return;
    }

    // Verificar duplicatas
    if (tarefas.some(tarefa => tarefa.texto.toLowerCase() === novaTarefa.toLowerCase())) {
      mostrarNotificacao('❌ Esta tarefa já existe!');
      return;
    }

    const nova = {
      id: Date.now(),
      texto: novaTarefa,
      completa: false
    };

    setTarefas([...tarefas, nova]);
    setNovaTarefa('');
    mostrarNotificacao('✅ Tarefa adicionada!');
  };

  const toggleTarefa = (id) => {
    setTarefas(
      tarefas.map(tarefa =>
        tarefa.id === id 
          ? { ...tarefa, completa: !tarefa.completa }
          : tarefa
      )
    );
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
    mostrarNotificacao('🗑️ Tarefa removida');
  };

  const limparTudo = () => {
    setTarefas([]);
    setMostrarConfirmacao(false);
    mostrarNotificacao('🧹 Todas as tarefas foram removidas');
  };

  const tarefasCompletas = tarefas.filter(t => t.completa).length;
  const progresso = tarefas.length > 0 
    ? Math.round((tarefasCompletas / tarefas.length) * 100) 
    : 0;

  return (
    <div className="app">
      {/* Toast de notificação */}
      {mostrarToast && (
        <div className="toast">
          {mensagemToast}
        </div>
      )}

      <div className="container">
        <h1>📝 Minha Lista Inteligente</h1>
        
        {/* Barra de progresso (extra) */}
        {tarefas.length > 0 && (
          <div className="progresso-container">
            <div className="progresso-info">
              <span>Progresso: {progresso}% concluído</span>
              <span>{tarefasCompletas}/{tarefas.length} tarefas</span>
            </div>
            <div className="progresso-bar">
              <div 
                className="progresso-preenchido" 
                style={{ width: `${progresso}%` }}
              ></div>
            </div>
          </div>
        )}

        <form onSubmit={adicionarTarefa} className="form-tarefa">
          <input
            type="text"
            placeholder="Digite uma nova tarefa..."
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          />
          <button type="submit" className="btn-adicionar">
            ➕ Adicionar
          </button>
        </form>

        {/* Empty State */}
        {tarefas.length === 0 ? (
          <div className="empty-state">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/7486/7486754.png" 
              alt="Lista vazia"
              className="empty-image"
            />
            <h2>Sua lista está vazia! 🌟</h2>
            <p>Que tal adicionar sua primeira tarefa?</p>
            <p className="dica">💡 Digite algo no campo acima e clique em "Adicionar"</p>
          </div>
        ) : (
          <ul className="lista-tarefas">
            {tarefas.map(tarefa => (
              <li key={tarefa.id} className={tarefa.completa ? 'completa' : ''}>
                <input
                  type="checkbox"
                  checked={tarefa.completa}
                  onChange={() => toggleTarefa(tarefa.id)}
                />
                <span>{tarefa.texto}</span>
                <button 
                  onClick={() => removerTarefa(tarefa.id)}
                  className="btn-remover"
                  title="Remover tarefa"
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Botão Limpar Tudo com confirmação */}
        {tarefas.length > 0 && (
          <div className="acoes-risco">
            {!mostrarConfirmacao ? (
              <button 
                onClick={() => setMostrarConfirmacao(true)}
                className="btn-limpar"
              >
                🧹 Limpar Tudo
              </button>
            ) : (
              <div className="confirmacao">
                <p>Tem certeza? Isso apagará TODAS as tarefas!</p>
                <div className="botoes-confirmacao">
                  <button 
                    onClick={limparTudo}
                    className="btn-confirmar"
                  >
                    ✅ Sim, apagar tudo
                  </button>
                  <button 
                    onClick={() => setMostrarConfirmacao(false)}
                    className="btn-cancelar"
                  >
                    ❌ Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
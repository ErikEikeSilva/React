import React from 'react';
import { useTasks } from '../context/TaskContext';
import { TaskItem } from './TaskItem';
import { EmptyState } from './EmptyState';
import './TaskList.css';

export function TaskList() {
  const { tasks, loading, error } = useTasks();

  // Estado de carregamento
  if (loading) {
    return (
      <div className="task-list-loading">
        <div className="loading-spinner"></div>
        <p>Carregando suas tarefas...</p>
      </div>
    );
  }

  // Estado de erro
  if (error) {
    return (
      <div className="task-list-error">
        <span className="error-icon">⚠️</span>
        <p>Ops! Algo deu errado: {error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="btn-retry"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  // Lista vazia
  if (tasks.length === 0) {
    return <EmptyState />;
  }

  // Estatísticas rápidas
  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const progress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="task-list-container">
      {/* Mini resumo */}
      <div className="task-list-summary">
        <div className="summary-item">
          <span className="summary-label">Total</span>
          <span className="summary-value total">{totalCount}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Concluídas</span>
          <span className="summary-value completed">{completedCount}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Progresso</span>
          <span className="summary-value progress">{progress}%</span>
        </div>
      </div>

      {/* Lista de tarefas */}
      <ul className="task-list" aria-label="Lista de tarefas">
        {tasks.map((task, index) => (
          <li key={task.id} className="task-list-item" style={{ animationDelay: `${index * 0.05}s` }}>
            <TaskItem task={task} />
          </li>
        ))}
      </ul>

      {/* Rodapé da lista */}
      {tasks.length > 5 && (
        <div className="task-list-footer">
          <p className="scroll-hint">
            ↓ Role para ver mais tarefas ({tasks.length} no total)
          </p>
        </div>
      )}
    </div>
  );
}

// Versão alternativa com filtros (opcional)
export function TaskListWithFilters() {
  const { tasks, filter, setFilter } = useTasks();
  
  const filters = [
    { value: 'all', label: 'Todas', icon: '📋' },
    { value: 'active', label: 'Ativas', icon: '⏳' },
    { value: 'completed', label: 'Concluídas', icon: '✅' }
  ];

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="task-list-with-filters">
      {/* Filtros */}
      <div className="filter-buttons">
        {filters.map(f => (
          <button
            key={f.value}
            className={`filter-btn ${filter === f.value ? 'active' : ''}`}
            onClick={() => setFilter(f.value)}
          >
            <span>{f.icon}</span>
            {f.label}
            {filter === f.value && (
              <span className="filter-count">
                ({filteredTasks.length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Lista filtrada */}
      <TaskList tasks={filteredTasks} />
    </div>
  );
}
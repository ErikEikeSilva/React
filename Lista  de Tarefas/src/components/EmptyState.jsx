import React from 'react';
import './EmptyState.css';

export function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-illustration">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="#667eea"/>
        </svg>
      </div>
      <h3>Sua lista está vazia</h3>
      <p>Comece adicionando sua primeira tarefa!</p>
      <p className="empty-tip">💡 Dica: Tarefas claras e específicas são mais fáceis de completar</p>
    </div>
  );
}
import React from 'react';
import { useTasks } from '../context/TaskContext';
import './ProgressBar.css';

export function ProgressBar() {
  const { tasks, completedTasks, progress } = useTasks();

  if (tasks.length === 0) return null;

  return (
    <div className="progress-container">
      <div className="progress-header">
        <span className="progress-label">Progresso</span>
        <span className="progress-stats">
          {completedTasks} de {tasks.length} tarefas
        </span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${progress}%` }}
        >
          <span className="progress-percentage">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
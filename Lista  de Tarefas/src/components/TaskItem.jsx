import React, { memo } from 'react';
import { useTasks } from '../context/TaskContext';
import './TaskItem.css';

export const TaskItem = memo(({ task }) => {
  const { toggleTask, deleteTask } = useTasks();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span className="checkmark"></span>
        </label>
        
        <div className="task-info">
          <span className="task-text">{task.text}</span>
          <span className="task-date">{formatDate(task.createdAt)}</span>
        </div>

        <button
          onClick={() => deleteTask(task.id)}
          className="btn-delete"
          aria-label="Deletar tarefa"
        >
          🗑️
        </button>
      </div>
    </li>
  );
});

TaskItem.displayName = 'TaskItem';
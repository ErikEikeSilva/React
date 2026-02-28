import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import './TaskInput.css';

export function TaskInput() {
  const [inputValue, setInputValue] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = addTask(inputValue);
    if (success) {
      setInputValue('');
    }
  };

  return (
    <form className="task-input-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="O que você precisa fazer?"
          className="task-input"
          autoFocus
        />
        <button type="submit" className="btn-add">
          <span>➕</span> Adicionar
        </button>
      </div>
    </form>
  );
}
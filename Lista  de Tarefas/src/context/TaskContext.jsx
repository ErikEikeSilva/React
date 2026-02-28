import React, { createContext, useContext, useCallback, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useToast } from '../hooks/useToast';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const { toast, showToast, hideToast } = useToast();

  const addTask = useCallback((text) => {
    if (!text.trim()) {
      showToast('Digite uma tarefa válida!', 'error');
      return false;
    }

    // Verificar duplicatas (case insensitive)
    const taskExists = tasks.some(
      task => task.text.toLowerCase() === text.toLowerCase().trim()
    );

    if (taskExists) {
      showToast('Esta tarefa já existe!', 'error');
      return false;
    }

    const newTask = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    setTasks(prev => [...prev, newTask]);
    showToast('Tarefa adicionada com sucesso!', 'success');
    return true;
  }, [tasks, setTasks, showToast]);

  const toggleTask = useCallback((id) => {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    showToast('Status atualizado!', 'info');
  }, [setTasks, showToast]);

  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
    showToast('Tarefa removida!', 'info');
  }, [setTasks, showToast]);

  const clearAllTasks = useCallback(() => {
    setTasks([]);
    showToast('Todas as tarefas foram removidas!', 'warning');
  }, [setTasks, showToast]);

  const completedTasks = useMemo(() => 
    tasks.filter(task => task.completed).length, [tasks]
  );

  const progress = useMemo(() => 
    tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0
  , [tasks.length, completedTasks]);

  const value = {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    clearAllTasks,
    completedTasks,
    progress,
    toast,
    hideToast
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}
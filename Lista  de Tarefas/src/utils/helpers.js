/**
 * Formata uma data para exibição
 * @param {string|Date} date - Data a ser formatada
 * @param {string} format - Formato (padrão: 'pt-BR')
 * @returns {string} Data formatada
 */
export const formatDate = (date, format = 'pt-BR') => {
  if (!date) return '';
  
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    // Verificar se é uma data válida
    if (isNaN(dateObj.getTime())) {
      return '';
    }

    return dateObj.toLocaleDateString(format, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (error) {
    console.error('Erro ao formatar data:', error);
    return '';
  }
};

/**
 * Gera um ID único
 * @returns {string} ID único
 */
export const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Valida se uma tarefa é duplicada
 * @param {Array} tasks - Lista de tarefas
 * @param {string} newTaskText - Texto da nova tarefa
 * @returns {boolean} True se for duplicada
 */
export const isDuplicateTask = (tasks, newTaskText) => {
  const normalizedNewText = newTaskText.toLowerCase().trim();
  return tasks.some(task => 
    task.text.toLowerCase().trim() === normalizedNewText
  );
};

/**
 * Filtra tarefas por status
 * @param {Array} tasks - Lista de tarefas
 * @param {string} filter - 'all', 'completed', 'active'
 * @returns {Array} Tarefas filtradas
 */
export const filterTasksByStatus = (tasks, filter = 'all') => {
  switch (filter) {
    case 'completed':
      return tasks.filter(task => task.completed);
    case 'active':
      return tasks.filter(task => !task.completed);
    default:
      return tasks;
  }
};

/**
 * Ordena tarefas por data de criação
 * @param {Array} tasks - Lista de tarefas
 * @param {string} order - 'asc' ou 'desc'
 * @returns {Array} Tarefas ordenadas
 */
export const sortTasksByDate = (tasks, order = 'desc') => {
  return [...tasks].sort((a, b) => {
    const dateA = new Date(a.createdAt || 0);
    const dateB = new Date(b.createdAt || 0);
    
    return order === 'desc' 
      ? dateB - dateA 
      : dateA - dateB;
  });
};

/**
 * Calcula estatísticas das tarefas
 * @param {Array} tasks - Lista de tarefas
 * @returns {Object} Estatísticas
 */
export const getTaskStats = (tasks) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const active = total - completed;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    total,
    completed,
    active,
    progress
  };
};

/**
 * Debounce para evitar chamadas excessivas
 * @param {Function} func - Função a ser executada
 * @param {number} wait - Tempo de espera em ms
 * @returns {Function} Função com debounce
 */
export const debounce = (func, wait) => {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Valida se uma string está vazia ou só tem espaços
 * @param {string} text - Texto a ser validado
 * @returns {boolean} True se for válido
 */
export const isValidTaskText = (text) => {
  return text && text.trim().length > 0;
};
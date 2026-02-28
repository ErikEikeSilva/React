markdown
# 📋 TaskFlow - Gerenciador Inteligente de Tarefas

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

> Um aplicativo moderno de lista de tarefas com persistência local, design elegante e experiência do usuário aprimorada.

![TaskFlow Screenshot](https://via.placeholder.com/800x400/667eea/ffffff?text=TaskFlow+-+Sua+Lista+Inteligente)

## ✨ Demonstração

![Demo](https://via.placeholder.com/600x300/764ba2/ffffff?text=TaskFlow+em+Ação)

## 🚀 Funcionalidades

### 📌 Gerenciamento de Tarefas
- ✅ **Adicionar tarefas** com validação inteligente
- 🔄 **Marcar como concluída** com um clique
- 🗑️ **Remover tarefas individualmente**
- 🧹 **Limpar todas as tarefas** com confirmação

### 💾 Persistência Inteligente
- 🔒 **Salvamento automático** no localStorage
- 🔄 **Sincronização entre abas** do navegador
- 💪 **Dados persistem** após fechar/abrir o navegador
- 📊 **Estatísticas em tempo real**

### 🎨 Experiência do Usuário
- 🌅 **Empty State** acolhedor para primeira visita
- 🔔 **Toast notifications** para feedback imediato
- 📈 **Barra de progresso** animada
- 🎯 **Contador de tarefas** por status
- ⚡ **Animações suaves** em todas interações

### 🛡️ Segurança e Validações
- 🚫 **Prevenção de tarefas duplicadas**
- ⚠️ **Confirmação para ações destrutivas**
- ✅ **Validação de entrada** (sem tarefas vazias)
- 🔄 **Debounce** para evitar ações repetidas

## 🖥️ Capturas de Tela

| Tela Inicial | Com Tarefas | Confirmação |
|--------------|-------------|-------------|
| ![Empty State](https://via.placeholder.com/250x400/667eea/ffffff?text=Empty+State) | ![Com Tarefas](https://via.placeholder.com/250x400/48bb78/ffffff?text=Com+Tarefas) | ![Modal](https://via.placeholder.com/250x400/f56565/ffffff?text=Confirmação) |

## 🛠️ Tecnologias Utilizadas

- **Frontend:**
  - ⚛️ React 18
  - 🔗 Context API
  - 🎣 Custom Hooks
  - 🎨 CSS3 Moderno (Flexbox, Grid, Animações)

- **Armazenamento:**
  - 💾 LocalStorage API
  - 🔄 Sincronização entre abas

- **Ferramentas:**
  - 📦 Vite (Build tool)
  - 🧹 ESLint
  - ✨ Prettier

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/taskflow.git

# Entre no diretório
cd taskflow

# Instale as dependências
npm install

# Execute o projeto
npm run dev
🏗️ Estrutura do Projeto
text
taskflow/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── TaskInput.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   ├── EmptyState.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── Toast.jsx
│   │   └── ConfirmationModal.jsx
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   └── useToast.js
│   ├── context/
│   │   └── TaskContext.jsx
│   ├── utils/
│   │   └── helpers.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
🎯 Funcionalidades em Detalhe
1. 📝 Gerenciamento de Tarefas
javascript
// Adicionar tarefa com validação
const addTask = (text) => {
  if (!text.trim()) return false;  // Não permite vazio
  if (isDuplicate(tasks, text)) return false;  // Não permite duplicatas
  // ... salva a tarefa
}
2. 💾 Persistência com LocalStorage
javascript
// Hook personalizado useLocalStorage
const [tasks, setTasks] = useLocalStorage('tasks', []);
// Automatiza leitura/escrita no localStorage
3. 🎨 Design Responsivo
📱 Mobile-first

🖥️ Desktop otimizado

📊 Tablets suportados

📊 Métricas e Estatísticas
Tarefas Totais: Contagem completa

Tarefas Concluídas: Acompanhamento

Progresso: Barra percentual animada

Filtros: Por status (Todas/Ativas/Concluídas)

🎨 Paleta de Cores
css
:root {
  --primary-color: #667eea;    /* Roxo principal */
  --secondary-color: #764ba2;   /* Roxo escuro */
  --success-color: #48bb78;     /* Verde */
  --danger-color: #f56565;      /* Vermelho */
  --warning-color: #ecc94b;     /* Amarelo */
  --text-primary: #2d3748;      /* Texto escuro */
  --text-secondary: #718096;    /* Texto claro */
}
🤝 Como Contribuir
🍴 Faça um fork do projeto

🌿 Crie uma branch (git checkout -b feature/AmazingFeature)

💾 Commit suas mudanças (git commit -m 'Add some AmazingFeature')

📤 Push para a branch (git push origin feature/AmazingFeature)

🔍 Abra um Pull Request

📝 Licença
Distribuído sob a licença MIT. Veja LICENSE para mais informações.

📧 Contato
Lazar - @seu-twitter - email@example.com

Link do Projeto: https://github.com/seu-usuario/taskflow

🙏 Agradecimentos
React

Vite

Ícones

Inspiração de Design

📊 Status do Projeto
https://img.shields.io/badge/build-passing-brightgreen
https://img.shields.io/badge/coverage-85%2525-yellow
https://img.shields.io/badge/maintenance-active-green

<div align="center"> <sub>Feito com ❤️ por Lazar</sub> </div> ```

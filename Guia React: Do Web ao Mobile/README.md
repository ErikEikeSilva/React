markdown
# React Pro - Do Web ao Mobile

### Aplicação React Profissional com Componentes Interativos

[![Ver Demo](https://img.shields.io/badge/Ver_Demo-007ACC?style=for-the-badge&logo=vercel&logoColor=white)](https://seu-link-demo.com)
[![Instalação](https://img.shields.io/badge/Instalação-2ECC40?style=for-the-badge&logo=npm&logoColor=white)](#instalação)
[![Aprenda Mais](https://img.shields.io/badge/Aprenda_Mais-FF851B?style=for-the-badge&logo=react&logoColor=white)](#conceitos-react-aplicados)
[![Reportar Bug](https://img.shields.io/badge/Reportar_Bug-FF4136?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario/guia-react-web-mobile/issues)

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Componentes](#componentes)
- [Conceitos React Aplicados](#conceitos-react-aplicados)
- [Estilo e Design](#estilo-e-design)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Contato](#contato)

---

## 🎯 Sobre o Projeto

Este projeto é uma aplicação React profissional desenvolvida para demonstrar os principais conceitos da biblioteca, desde o básico até técnicas avançadas. Criado como parte do curso "Guia React: Do Web ao Mobile", o objetivo é fornecer uma base sólida para desenvolvedores que desejam dominar o ecossistema React.

### Preview do Projeto
┌─────────────────────────────────────────────────────┐
│ React Pro [Claro] [Escuro] │
├───────────────────────────────────────────────────────┤
│ ┌─────────────────┐ ┌─────────────────────────────┐ │
│ │ CONTADOR │ │ USUÁRIOS │ │
│ │ │ │ │ │
│ │ [0] │ │ • Ana Silva │ │
│ │ │ │ • João Pedro │ │
│ │ [+] [-] [↺] │ │ • Maria Oliveira │ │
│ └─────────────────┘ └─────────────────────────────┘ │
│ ┌─────────────────┐ ┌─────────────────────────────┐ │
│ │ STATUS │ │ AÇÕES RÁPIDAS │ │
│ │ │ │ │ │
│ │ • Ativo │ │ [Notificar] [Exportar] │ │
│ │ • Online │ │ [Processar] [Limpar] │ │
│ └─────────────────┘ └─────────────────────────────┘ │
└───────────────────────────────────────────────────────┘

text

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Ícone | Descrição |
|------------|--------|-------|-----------|
| React | 18.2.0 | ⚛️ | Biblioteca principal |
| Vite | 5.0.0 | ⚡ | Build tool e dev server |
| JavaScript | ES6+ | 📜 | Linguagem de programação |
| CSS3 | - | 🎨 | Estilização |
| npm | 9.0+ | 📦 | Gerenciador de pacotes |
| Git | 2.40+ | 🔧 | Controle de versão |

---

## ✨ Funcionalidades

### Implementadas ✅

- **Tema Claro/Escuro** - Alternância dinâmica de temas com persistência
- **Contador Interativo** - Com botões +, - e reset com animações
- **Lista de Usuários** - Gerenciamento dinâmico com adição/remoção
- **Status em Tempo Real** - Dashboard informativo com métricas
- **Ações Rápidas** - Atalhos para testes e demonstrações
- **Design Responsivo** - Adaptação perfeita para mobile
- **Animações Suaves** - Transições e hover effects refinados
- **Scrollbar Personalizada** - UI/UX refinada e consistente

### Em Desenvolvimento 🚧

- Autenticação de usuários com JWT
- Integração com API REST
- Testes unitários (Jest + React Testing Library)
- PWA (Progressive Web App)
- Modo offline com Service Workers
- Internacionalização (i18n) com suporte a 3 idiomas

---

## 📁 Estrutura do Projeto
Guia-React-Web-Mobile/
├── 📂 public/
│ └── vite.svg
├── 📂 src/
│ ├── 📂 assets/
│ │ ├── images/
│ │ └── styles/
│ ├── 📂 components/
│ │ ├── 📂 Button/
│ │ ├── 📂 Card/
│ │ └── 📂 Navbar/
│ ├── 📂 pages/
│ │ ├── 📂 Home/
│ │ ├── 📂 About/
│ │ └── 📂 Contact/
│ ├── 📂 hooks/
│ ├── 📂 utils/
│ ├── 📂 services/
│ ├── App.jsx
│ ├── App.css
│ ├── main.jsx
│ └── index.css
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── .gitignore

text

---

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- **Node.js** (versão 16.0 ou superior)
- **npm** (versão 8.0 ou superior)
- **Git** (opcional, para clonar o repositório)
- Um editor de código (recomendamos **VS Code**)

### Extensões Recomendadas (VS Code)

- ESLint
- Prettier
- React Native Tools
- Color Highlight
- Auto Rename Tag
- ES7+ React/Redux snippets

---

## ⚙️ Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/guia-react-web-mobile.git
Entre na pasta do projeto

bash
cd guia-react-web-mobile
Instale as dependências

bash
npm install
Inicie o servidor de desenvolvimento

bash
npm run dev
Acesse no navegador

text
http://localhost:3000
💻 Como Usar
Interface Principal
Ação	Como Fazer	Resultado
Alternar Tema	Clique no botão ☀️/🌙	Interface muda de cor
Incrementar	Clique em ➕	Contador aumenta
Decrementar	Clique em ➖	Contador diminui
Resetar	Clique em ↺	Contador volta a 0
Adicionar Usuário	Clique em "Adicionar Usuário"	Novo usuário na lista
Visualizar Status	Acesse o painel de status	Dados atualizados em tempo real
Ações Rápidas	Clique nos botões de ação	Executa ações pré-definidas
Exemplos de Uso
jsx
// Exemplo: Adicionar um usuário personalizado
const adicionarUsuarioPersonalizado = (nome) => {
  setUsuarios([...usuarios, { id: Date.now(), nome }]);
};

// Exemplo: Contador com limite
const incrementarComLimite = () => {
  if (contador < 100) {
    setContador(contador + 1);
  }
};

// Exemplo: Alternar tema com persistência
const alternarTema = () => {
  const novoTema = tema === 'claro' ? 'escuro' : 'claro';
  setTema(novoTema);
  localStorage.setItem('tema', novoTema);
};
🧩 Componentes
Button
jsx
<Button 
  texto="Clique Aqui" 
  cor="azul" 
  tamanho="grande"
  onClick={handleClick}
  disabled={false}
/>
Propriedades:

texto: string - Texto do botão

cor: 'azul' | 'verde' | 'vermelho' - Cor do botão

tamanho: 'pequeno' | 'medio' | 'grande' - Tamanho do botão

onClick: function - Função de callback

disabled: boolean - Estado desabilitado

Card
jsx
<Card
  titulo="Título do Card"
  descricao="Descrição aqui..."
  imagem="url-da-imagem.jpg"
  acoes={<Button texto="Ver mais" />}
/>
Navbar
jsx
<Navbar 
  onNavigate={setPaginaAtual}
  itens={['Home', 'Sobre', 'Contato']}
  logo="./logo.png"
/>
📚 Conceitos React Aplicados
Conceito	Aplicação no Projeto	Exemplo
Componentes	Button, Card, Navbar	Criação de peças reutilizáveis
Estado (State)	Contador, Usuários, Tema	useState()
Props	Passagem de dados	<Button texto="Enviar" />
Eventos	onClick, onChange	onClick={incrementar}
Renderização Condicional	Tema claro/escuro	{tema === 'claro' ? ...}
Listas e Keys	Usuários	{usuarios.map(user => <li key={user.id}>{user.nome}</li>)}
Imutabilidade	Atualizações de estado	setUsuarios([...usuarios, novo])
Hooks	useState, useEffect	Gerenciamento de estado e efeitos
Custom Hooks	useTheme, useCounter	Lógica reutilizável
Context API	Tema global	Compartilhamento de estado
Virtual DOM	Otimização	React atualiza apenas o necessário
🎨 Estilo e Design
Cores
css
:root {
  --primary: #0d6efd;    /* Azul principal */
  --secondary: #6c757d;  /* Cinza secundário */
  --success: #198754;    /* Verde para sucesso */
  --danger: #dc3545;     /* Vermelho para erros */
  --warning: #ffc107;    /* Amarelo para alertas */
  --info: #0dcaf0;       /* Azul claro para informações */
  --light: #f8f9fa;      /* Fundo claro */
  --dark: #212529;       /* Fundo escuro */
}

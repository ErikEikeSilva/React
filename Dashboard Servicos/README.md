[# Dashboard de Serviços – Projeto React

Este repositório contém um projeto educacional desenvolvido durante as aulas do curso de React ministrado por **Hudson Neves**. O objetivo deste projeto é ajudar alunos iniciantes a compreender os fundamentos do React de maneira prática, utilizando um projeto simples, organizado e progressivo.

O projeto consiste em um **Dashboard de Serviços**, onde apresentamos diferentes serviços através de componentes reutilizáveis. Durante o desenvolvimento, os alunos aprendem conceitos fundamentais como criação de componentes, uso de props, organização de pastas e renderização dinâmica de dados.

---

## 🎯 Objetivo do Projeto

O objetivo principal é ensinar a construção de uma interface funcional que apresenta serviços em formato de cartões. A proposta pedagógica foca não apenas no código, mas nas decisões de estrutura e organização profissional.

**Principais aprendizados:**
* Como iniciar um projeto React com Vite.
* Estruturação de pastas profissional.
* Criação de componentes reutilizáveis.
* Comunicação entre componentes via **Props**.
* Renderização de listas dinâmicas com `map()`.
* Versionamento de código com Git e GitHub.

---

## 🛠 Tecnologias Utilizadas

* **React** (Biblioteca principal)
* **Vite** (Ferramenta de build rápida)
* **JavaScript (ES6+)**
* **CSS3**
* **Git & GitHub**

---

## 📂 Estrutura do Projeto

A organização foi pensada para facilitar a escalabilidade e manutenção do código:

```text
src
 ├── components      # Componentes menores e reutilizáveis (Ex: CardServico)
 ├── sections        # Seções maiores que agrupam componentes (Ex: Servicos)
 ├── styles          # Arquivos de estilização CSS
 ├── App.jsx         # Componente principal
 └── main.jsx        # Ponto de entrada da aplicação
](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white
https://img.shields.io/badge/License-MIT-green?style=for-the-badge

📋 Índice
Sobre o Projeto

Tecnologias Utilizadas

Funcionalidades

Pré-requisitos

Instalação

Estrutura do Projeto

Componentes

Estilização

Como Usar

Contribuição

Licença

Contato

🚀 Sobre o Projeto
Dashboard de Serviços é uma aplicação web moderna desenvolvida em React, projetada para apresentar serviços de forma elegante e profissional. O projeto conta com design responsivo, modo escuro automático e interface intuitiva.

✨ Destaques
🎯 Design moderno e profissional

📱 Totalmente responsivo

🌓 Modo escuro automático

⚡ Performance otimizada com Vite

♿ Acessibilidade melhorada

🎨 Páginas completas (Home, Serviços, Contato, Sobre)

🛠 Tecnologias Utilizadas
Tecnologia	Versão	Descrição
React	18.3+	Biblioteca principal
Vite	7.3+	Build tool e dev server
React Router DOM	6.8+	Roteamento
CSS3	-	Estilização
JavaScript ES6+	-	Lógica da aplicação
⚙️ Funcionalidades
✅ Implementadas
Header Fixo - Menu de navegação sticky

Cards de Serviços - Apresentação dos serviços

Design Responsivo - Adaptação para todos os dispositivos

Modo Escuro - Suporte automático baseado no sistema

Animações - Transições suaves

Menu Mobile - Hamburger menu para dispositivos móveis

Páginas Completas - Home, Serviços, Contato e Sobre

🔄 Em Desenvolvimento
Integração com API

Formulário de contato funcional

Carrossel de serviços

Testes unitários

📋 Pré-requisitos
Antes de começar, você precisará ter instalado:

Node.js (versão 16 ou superior)

npm (geralmente vem com Node.js) ou yarn

bash
# Verificar versões instaladas
node --version
npm --version
🔧 Instalação
Passo a Passo
Clone o repositório

bash
git clone https://github.com/seu-usuario/dashboard-servicos.git
cd dashboard-servicos
Instale as dependências

bash
npm install
# ou
yarn install
Instale o React Router DOM

bash
npm install react-router-dom
# ou
yarn add react-router-dom
Inicie o servidor de desenvolvimento

bash
npm run dev
# ou
yarn dev
Acesse a aplicação

text
http://localhost:5173
📁 Estrutura do Projeto
text
📦 dashboard-servicos
├── 📂 public
│   └── 📄 vite.svg
├── 📂 src
│   ├── 📂 assets
│   │   └── 📄 react.svg
│   ├── 📂 components
│   │   ├── 📄 CardServico.jsx
│   │   ├── 📄 CardServico.css
│   │   ├── 📄 Header.jsx
│   │   └── 📄 Header.css
│   ├── 📂 sections
│   │   ├── 📄 Home.jsx
│   │   ├── 📄 Home.css
│   │   ├── 📄 Servicos.jsx
│   │   ├── 📄 Servicos.css
│   │   ├── 📄 Contato.jsx
│   │   ├── 📄 Contato.css
│   │   ├── 📄 Sobre.jsx
│   │   └── 📄 Sobre.css
│   ├── 📂 styles
│   │   └── 📄 global.css
│   ├── 📄 App.jsx
│   ├── 📄 App.css
│   ├── 📄 main.jsx
│   └── 📄 index.css
├── 📄 .gitignore
├── 📄 eslint.config.js
├── 📄 index.html
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 README.md
└── 📄 vite.config.js
🧩 Componentes
Header (src/components/Header.jsx)
Menu de navegação responsivo

Logo com link para home

Indicador de página ativa

Menu mobile com toggle

CardServico (src/components/CardServico.jsx)
Ícone personalizado

Título e descrição

Botão com efeito hover

Suporte a dark mode

Animações suaves

📍 Páginas/Sections
Página	Arquivo	Descrição
Home	sections/Home.jsx	Página inicial com apresentação
Serviços	sections/Servicos.jsx	Lista de serviços em cards
Contato	sections/Contato.jsx	Formulário e informações
Sobre	sections/Sobre.jsx	Informações da empresa
🎨 Estilização
Arquivos CSS
css
src/
├── components/
│   ├── CardServico.css    # Estilo dos cards
│   └── Header.css         # Estilo do cabeçalho
├── sections/
│   ├── Home.css           # Estilo da página inicial
│   ├── Servicos.css       # Estilo da página de serviços
│   ├── Contato.css        # Estilo da página de contato
│   └── Sobre.css          # Estilo da página sobre
├── styles/
│   └── global.css         # Estilos globais
├── App.css                 # Estilo principal
└── index.css               # Estilo de reset
Cores Principais
css
--gradient-primary: linear-gradient(135deg, #667eea, #764ba2);
--text-primary: #333333;
--text-secondary: #666666;
--bg-light: #f5f7fa;
--bg-dark: #1a1a1a;
Breakpoints Responsivos
Dispositivo	Largura
Mobile	< 480px
Tablet	768px - 1024px
Desktop	> 1024px
💻 Como Usar
Scripts Disponíveis
bash
# Desenvolvimento
npm run dev         # Inicia servidor de desenvolvimento

# Build
npm run build       # Cria versão de produção
npm run preview     # Visualiza build localmente

# Linting
npm run lint        # Verifica problemas no código
Rotas da Aplicação
Rota	Página	Componente
/	Home	<Home />
/servicos	Serviços	<Servicos />
/contato	Contato	<Contato />
/sobre	Sobre	<Sobre />
🤝 Contribuição
Fork o projeto

Crie uma branch (git checkout -b feature/MinhaFeature)

Commit suas mudanças (git commit -m 'Add: nova funcionalidade')

Push para a branch (git push origin feature/MinhaFeature)

Abra um Pull Request

Padrões de Commit
✨ Add: - Novas funcionalidades

🐛 Fix: - Correções de bugs

📚 Docs: - Documentação

🎨 Style: - Estilização

♻️ Refactor: - Refatoração

✅ Test: - Testes

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

👨‍💻 Desenvolvedor
Erik - Desenvolvimento Full Stack

📧 Email: erik.silva@email.com

💼 LinkedIn: linkedin.com/in/erik-dev

🐱 GitHub: github.com/erik-dev

📊 Status do Projeto
https://img.shields.io/badge/Progress-70%2525-yellowgreen?style=for-the-badge
https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge
https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge

<div align="center"> <sub>Desenvolvido com ❤️ por <strong>Erik</strong></sub> <br> <sub>© 2024 Dashboard Serviços. Todos os direitos reservados.</sub> <br> <sub>🚀 Projeto em constante evolução</sub> </div>

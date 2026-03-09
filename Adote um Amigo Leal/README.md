# 🐾 Adote um Amigo Leal - Landing Page

<div align="center">
  
  ![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
  ![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF?style=for-the-badge&logo=vite)
  ![CSS Modules](https://img.shields.io/badge/CSS-Modules-000000?style=for-the-badge&logo=css3)
  ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-222222?style=for-the-badge&logo=github)
  
  <h3>🐕 Uma landing page acolhedora para incentivar a adoção de animais</h3>
  
  <p>
    <a href="#-sobre-o-projeto">🔗 Ver Demonstração</a> •
    <a href="#-como-executar">📝 Relatar Bug</a> •
    <a href="#-contribuição">✨ Solicitar Feature</a>
  </p>
</div>

## 📋 Índice
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [UX/UI Design](#-uxui-design)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Componentes](#-componentes)
- [Como Executar](#-como-executar)
- [Deploy no GitHub Pages](#-deploy-no-github-pages)
- [Performance](#-performance)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Contato](#-contato)

## 🎯 Sobre o Projeto

**Adote um Amigo Leal** é uma landing page desenvolvida para o tema "Adote um Amigo (Abrigo de Animais)", como parte de um desafio de front-end. O projeto tem como objetivo criar uma experiência emocionante e intuitiva para conectar pessoas a animais que precisam de um lar.

### 🎨 O Desafio

✅ **Mobile-First**: Design totalmente responsivo  
✅ **Componentização**: Arquitetura baseada em Atomic Design (atoms, molecules, organisms)  
✅ **Semântica HTML**: Tags semânticas para SEO e acessibilidade  
✅ **Interatividade**: Menu mobile hambúrguer, animações e cards interativos  
✅ **Deploy**: Publicado no GitHub Pages  

## ✨ Funcionalidades

### 🏠 Hero Section
- Banner acolhedor com chamada para adoção
- Botões CTA "Quero Adotar" e "Sobre Nós"
- Animação suave de entrada

### 🐕 Seção de Animais (AnimalsSection)
- Cards com fotos e histórias dos animais
- Informações como nome, idade, personalidade
- Botão "Conhecer" para cada animal
- Animações no hover dos cards

### ❤️ Seção de Benefícios (BenefitsSection)
- Cards destacando vantagens da adoção
- Ícones ilustrativos para cada benefício
- Design clean e informativo

### 📱 Menu Mobile (Hambúrguer)
- Menu responsivo com animação suave
- Links âncora para seções da página
- Overlay com blur effect

### 🦴 Header Fixo
- Logo e navegação principal
- Efeito de scroll com mudança de cor
- Design consistente em todas as telas

### 📞 Footer Completo
- Links rápidos
- Redes sociais
- Informações de contato
- Copyright

## 🚀 Tecnologias

### Core
| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| React | 18.2.0 | Biblioteca principal |
| Vite | 4.4.0 | Build tool e dev server |
| CSS Modules | - | Estilização isolada por componente |
| JavaScript | ES6+ | Lógica da aplicação |

### UX/UI
| Tecnologia | Finalidade |
|------------|------------|
| Atomic Design | Estrutura de componentes organizada |
| Mobile-First | Abordagem responsiva |
| Semântica HTML | Acessibilidade e SEO |

### DevOps
| Tecnologia | Finalidade |
|------------|------------|
| GitHub Pages | Hospedagem gratuita |
| Git | Versionamento de código |
| Vite | Otimização de build |

## 🎨 UX/UI Design

### Princípios de Design Aplicados

#### 1. Hierarquia Visual
```css
/* Exemplo de estilização consistente */
.section-title {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  color: var(--primary-dark);
  margin-bottom: var(--space-lg);
}
2. Acessibilidade (a11y)
jsx
// Botões com ARIA labels
<button 
  className={styles.menuButton}
  aria-label="Abrir menu de navegação"
  aria-expanded={isOpen}
>
  <span className={styles.hamburgerIcon}></span>
</button>

// Imagens com alt descritivo
<img 
  src={animal.image} 
  alt={`Foto do ${animal.name}, um ${animal.breed} de ${animal.age} anos`}
  loading="lazy"
/>
3. Design System Consistente
css
:root {
  /* Cores acolhedoras */
  --primary: #4CAF50;      /* Verde - esperança, vida */
  --primary-dark: #2E7D32;  /* Verde escuro - confiança */
  --secondary: #FF9800;     /* Laranja - alegria, energia */
  --accent: #2196F3;        /* Azul - confiança */
  --light: #F5F5F5;         /* Background claro */
  --dark: #333333;          /* Texto principal */
  
  /* Espaçamento padronizado */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-xxl: 48px;
  
  /* Transições suaves */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
}
Paleta de Cores
🎨 Primária: #4CAF50 (Verde) - Esperança, vida nova

🎨 Secundária: #FF9800 (Laranja) - Alegria, energia positiva

🎨 Destaque: #2196F3 (Azul) - Confiança, segurança

🎨 Background: #F5F5F5 (Off-white) - Acolhimento

🎨 Texto: #333333 (Dark) - Legibilidade

Tipografia
Títulos: Poppins - Amigável e moderna

Corpo: Open Sans - Excelente legibilidade em telas

Escala responsiva: Uso de clamp() para tamanhos fluidos

📁 Estrutura do Projeto
text
adote-um-amigo-leal/
├── public/
│   ├── index.html
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── animals/
│   │   │   ├── benefits/
│   │   │   └── hero/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   └── Button.module.css
│   │   │   ├── Container/
│   │   │   └── SectionTitle/
│   │   │
│   │   ├── molecules/
│   │   │   ├── AnimalCard/
│   │   │   ├── BenefitCard/
│   │   │   └── NavMenu/
│   │   │
│   │   └── organisms/
│   │       ├── Header/
│   │       ├── HeroSection/
│   │       ├── AnimalsSection/
│   │       ├── BenefitsSection/
│   │       └── Footer/
│   │
│   ├── App.jsx
│   ├── App.module.css
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
🧩 Componentes
Átomos (Atoms)
Componentes básicos e reutilizáveis:

Componente	Descrição
Button	Botão com variantes (primário, secundário, outline)
Container	Wrapper com largura máxima e padding
SectionTitle	Título padronizado para seções
Moléculas (Molecules)
Combinações de átomos para formar unidades funcionais:

Componente	Descrição
AnimalCard	Card com foto e informações do animal
BenefitCard	Card com ícone e texto sobre benefícios
NavMenu	Menu de navegação responsivo
Organismos (Organisms)
Seções completas da página:

Componente	Descrição
Header	Cabeçalho com logo e navegação
HeroSection	Seção principal com chamada para ação
AnimalsSection	Grade com cards de animais para adoção
BenefitsSection	Benefícios de adotar um animal
Footer	Rodapé com links e contato
💻 Como Executar
Pré-requisitos
Node.js (v14 ou superior)

npm ou yarn

Git

Passo a Passo
bash
# 1. Clone o repositório
git clone https://github.com/seu-username/adote-um-amigo-leal.git

# 2. Entre no diretório
cd adote-um-amigo-leal

# 3. Instale as dependências
npm install
# ou
yarn install

# 4. Execute em desenvolvimento
npm run dev
# ou
yarn dev

# 5. Acesse no navegador
http://localhost:5173
Comandos Úteis
bash
# Build de produção
npm run build

# Visualizar build localmente
npm run preview
🚀 Deploy no GitHub Pages
Configuração para Vite
bash
# 1. Instale o gh-pages
npm install --save-dev gh-pages

# 2. No vite.config.js, adicione:
export default defineConfig({
  base: '/adote-um-amigo-leal/', // Nome do seu repositório
  plugins: [react()],
})

# 3. No package.json, adicione:
{
  "homepage": "https://seu-username.github.io/adote-um-amigo-leal",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# 4. Execute o deploy
npm run deploy
Configuração Manual
Crie um repositório no GitHub

Ative o GitHub Pages em Settings > Pages

Escolha a branch gh-pages como source

📊 Performance
Otimizações Implementadas
✅ Lazy Loading em imagens dos cards
✅ Code Splitting automático com Vite
✅ CSS Modules para estilos isolados
✅ Imagens otimizadas para web
✅ Fontes com fallback para performance

Métricas Esperadas
Métrica	Desktop	Mobile
Performance	95+	90+
Acessibilidade	100	100
Boas Práticas	100	100
SEO	100	100
🤝 Contribuição
Contribuições são bem-vindas! Siga estes passos:

Fork o projeto

Crie uma branch (git checkout -b feature/NovaFuncionalidade)

Commit suas mudanças (git commit -m 'Add: nova funcionalidade')

Push para a branch (git push origin feature/NovaFuncionalidade)

Abra um Pull Request

Padrões de Commit
feat: Nova funcionalidade

fix: Correção de bug

docs: Documentação

style: Estilização

refactor: Refatoração

test: Testes

📝 Licença
Distribuído sob a licença MIT. Veja LICENSE para mais informações.

📬 Contato
Seu Nome - @seu_twitter - email@exemplo.com

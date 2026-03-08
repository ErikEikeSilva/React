🐾 Adote um Amigo Leal - Landing Page
https://via.placeholder.com/1200x630/4CAF50/FFFFFF?text=Adote+um+Amigo+Leal

<div align="center">
https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react
https://img.shields.io/badge/Vite-4.4.0-646CFF?style=for-the-badge&logo=vite
https://img.shields.io/badge/CSS-Modules-000000?style=for-the-badge&logo=css3
https://img.shields.io/badge/GitHub_Pages-Deployed-222222?style=for-the-badge&logo=github

<h3>🐕 Uma landing page acolhedora para incentivar a adoção de animais</h3>
🔗 Ver Demonstração •
📝 Relatar Bug •
✨ Solicitar Feature

</div>
📋 Índice
Sobre o Projeto

Funcionalidades

Tecnologias

UX/UI Design

Estrutura do Projeto

Componentes

Como Executar

Deploy no GitHub Pages

Performance

Contribuição

Licença

Contato

🎯 Sobre o Projeto
Adote um Amigo Leal é uma landing page desenvolvida para o tema "Adote um Amigo (Abrigo de Animais)", como parte de um desafio de front-end. O projeto tem como objetivo criar uma experiência emocionante e intuitiva para conectar pessoas a animais que precisam de um lar.

🎨 O Desafio
Este projeto atende todos os requisitos do desafio:

✅ Mobile-First: Design totalmente responsivo

✅ Componentização: Arquitetura baseada em Atomic Design (atoms, molecules, organisms)

✅ Semântica HTML: Tags semânticas para SEO e acessibilidade

✅ Interatividade: Menu mobile hambúrguer, animações e cards interativos

✅ Deploy: Publicado no GitHub Pages

✨ Funcionalidades
🏠 Hero Section
Banner acolhedor com chamada para adoção

Botões CTA "Quero Adotar" e "Sobre Nós"

Animação suave de entrada

🐕 Seção de Animais (AnimalsSection)
Cards com fotos e histórias dos animais

Informações como nome, idade, personalidade

Botão "Conhecer" para cada animal

Animações no hover dos cards

❤️ Seção de Benefícios (BenefitsSection)
Cards destacando vantagens da adoção

Ícones ilustrativos para cada benefício

Design clean e informativo

📱 Menu Mobile (Hambúrguer)
Menu responsivo com animação suave

Links âncora para seções da página

Overlay com blur effect

🦴 Header Fixo
Logo e navegação principal

Efeito de scroll com mudança de cor

Design consistente em todas as telas

📞 Footer Completo
Links rápidos

Redes sociais

Informações de contato

Copyright

🚀 Tecnologias
Core
Tecnologia	Versão	Finalidade
React	18.2.0	Biblioteca principal
Vite	4.4.0	Build tool e dev server
CSS Modules	-	Estilização isolada por componente
JavaScript	ES6+	Lógica da aplicação
UX/UI
Tecnologia	Finalidade
Atomic Design	Estrutura de componentes organizada
Mobile-First	Abordagem responsiva
Semântica HTML	Acessibilidade e SEO
DevOps
Tecnologia	Finalidade
GitHub Pages	Hospedagem gratuita
Git	Versionamento de código
Vite	Otimização de build
🎨 UX/UI Design
Princípios de Design Aplicados
1. Hierarquia Visual
css
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
css
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
│   │   │   ├── Button.css
│   │   │   ├── Button.jsx
│   │   │   ├── Container.css
│   │   │   ├── Container.jsx
│   │   │   ├── SectionTitle.css
│   │   │   └── SectionTitle.jsx
│   │   │
│   │   ├── molecules/
│   │   │   ├── AnimalCard.css
│   │   │   ├── AnimalCard.jsx
│   │   │   ├── BenefitCard.css
│   │   │   ├── BenefitCard.jsx
│   │   │   ├── Header.css
│   │   │   ├── Header.jsx
│   │   │   ├── NavMenu.css
│   │   │   └── NavMenu.jsx
│   │   │
│   │   └── organisms/
│   │       ├── AnimalsSection.jsx
│   │       ├── BenefitsSection.css
│   │       ├── BenefitsSection.jsx
│   │       ├── Footer.css
│   │       ├── Footer.jsx
│   │       ├── HeroSection.css
│   │       └── HeroSection.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
🧩 Componentes
Átomos (Atoms)
Componentes básicos e reutilizáveis:

Componente	Descrição
Button.jsx	Botão com variantes (primário, secundário, outline)
Container.jsx	Wrapper com largura máxima e padding
SectionTitle.jsx	Título padronizado para seções
Moléculas (Molecules)
Combinações de átomos para formar unidades funcionais:

Componente	Descrição
AnimalCard.jsx	Card com foto e informações do animal
BenefitCard.jsx	Card com ícone e texto sobre benefícios
Header.jsx	Cabeçalho com logo e navegação
NavMenu.jsx	Menu de navegação responsivo
Organismos (Organisms)
Seções completas da página:

Componente	Descrição
HeroSection.jsx	Seção principal com chamada para ação
AnimalsSection.jsx	Grade com cards de animais para adoção
BenefitsSection.jsx	Benefícios de adotar um animal
Footer.jsx	Rodapé com links e contato
💻 Como Executar
Pré-requisitos
Node.js (v14 ou superior)

npm ou yarn

Git

Passo a Passo
bash
# 1. Clone o repositório
git clone https://github.com/seuusername/adote-um-amigo-leal.git

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

# Deploy no GitHub Pages
npm run deploy
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
  "homepage": "https://seuusername.github.io/adote-um-amigo-leal",
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

Link do Projeto: https://github.com/seuusername/adote-um-amigo-leal

<div align="center">
⭐ Ajude um animal a encontrar um lar - Compartilhe este projeto!
https://img.shields.io/github/stars/seuusername/adote-um-amigo-leal?style=social
https://img.shields.io/github/forks/seuusername/adote-um-amigo-leal?style=social

<br/>
Desenvolvido com 🐾 para o desafio de front-end

⬆ Voltar ao topo

</div>

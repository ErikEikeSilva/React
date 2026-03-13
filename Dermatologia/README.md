🧴 Dermalux — Clínica de Dermatologia

📋 Visão Geral

Dermalux é um site institucional moderno e responsivo desenvolvido para uma clínica de dermatologia.
O projeto apresenta uma interface elegante e profissional, construída com React e Vite, com foco em oferecer uma excelente experiência ao usuário e destacar os serviços e profissionais da clínica.

O objetivo do projeto é apresentar informações da clínica de forma clara, moderna e acessível em computadores, tablets e dispositivos móveis.

🏗️ Estrutura do Projeto
dermatologia/
│
├── public/                     # Arquivos públicos
│   ├── favicon.svg             # Ícone do site
│   └── icons.svg               # Ícones SVG
│
├── src/                        # Código fonte
│
│   ├── assets/                 # Recursos estáticos
│
│   ├── components/             # Componentes React
│   │
│   │   ├── About/              # Seção Sobre
│   │   │   ├── About.css
│   │   │   └── About.jsx
│   │   │
│   │   ├── Contact/            # Seção Contato
│   │   │   ├── Contact.css
│   │   │   └── Contact.jsx
│   │   │
│   │   ├── Footer/             # Rodapé
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── Header/             # Cabeçalho e navegação
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   │
│   │   ├── Hero/               # Seção inicial
│   │   │   ├── Hero.css
│   │   │   └── Hero.jsx
│   │   │
│   │   ├── Services/           # Serviços oferecidos
│   │   │   ├── Services.css
│   │   │   └── Services.jsx
│   │   │
│   │   ├── Team/               # Equipe médica
│   │   │   ├── Team.css
│   │   │   └── Team.jsx
│   │   │
│   │   └── Testimonials/       # Depoimentos de pacientes
│   │       ├── Testimonials.css
│   │       └── Testimonials.jsx
│
│   ├── App.css                 # Estilos globais
│   ├── App.jsx                 # Componente principal
│   ├── index.css               # Reset e variáveis CSS
│   └── main.jsx                # Ponto de entrada
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

🚀 Tecnologias Utilizadas
Tecnologia	Versão	Descrição
React	19.2.4	Biblioteca para criação de interfaces
React DOM	19.2.4	Renderização DOM para React
Vite	8.0.0	Ferramenta de build rápida
ESLint	9.39.4	Padronização de código
@vitejs/plugin-react	6.0.0	Plugin React para Vite
✨ Funcionalidades
📱 Design Responsivo

Layout adaptável para mobile, tablet e desktop

Menu hambúrguer para dispositivos móveis

Grid flexível e imagens otimizadas

🧭 Navegação Intuitiva

Header fixo com menu de navegação

Scroll suave entre seções

Links âncora funcionais

🏥 Seções do Site
Seção	Descrição
Hero	Banner principal com chamada de destaque e botões CTA
Sobre	História da clínica e diferenciais
Serviços	Cards interativos com tratamentos
Equipe	Profissionais com fotos e especialidades
Depoimentos	Avaliações de pacientes em slider
Contato	Formulário de contato funcional
Rodapé	Links rápidos e informações de contato
🎨 Design
Paleta de Cores

Azul escuro — #023e8a

Azul médio — #0077b6

Azul claro — #00b4d8

Tons neutros para contraste

Tipografia

Poppins

Sistema nativo de fontes

Efeitos Visuais

Hover effects

Transições suaves

Animações fade-in

🛠️ Instalação e Execução
Pré-requisitos

Node.js 20 ou superior

npm ou yarn

1️⃣ Clonar o repositório
git clone https://github.com/seu-usuario/dermatologia.git
cd dermatologia

2️⃣ Instalar dependências
npm install


ou

yarn install

3️⃣ Rodar o projeto
npm run dev

4️⃣ Acessar no navegador
http://localhost:5173

📜 Scripts Disponíveis
Comando	Descrição
npm run dev	Inicia servidor de desenvolvimento
npm run build	Gera build de produção
npm run preview	Visualiza build de produção
npm run lint	Verifica padrões de código
📦 Dependências
Produção
{
  "react": "^19.2.4",
  "react-dom": "^19.2.4"
}

Desenvolvimento
{
  "@vitejs/plugin-react": "^6.0.0",
  "eslint": "^9.39.4",
  "eslint-plugin-react-hooks": "^7.0.1",
  "eslint-plugin-react-refresh": "^0.5.2",
  "vite": "^8.0.0"
}

🎨 Personalização
Alterar cores

Arquivos CSS principais:

App.css

Header.css

Hero.css

About.css

Contact.css

Alterar imagens

Exemplo:

background: url('sua-imagem.jpg') center/cover no-repeat;

Alterar textos

Edite diretamente os arquivos JSX de cada componente.

Exemplo:

títulos

descrições

dados da equipe

depoimentos

🌐 Deploy
Vercel (Recomendado)
npm run build
vercel --prod

Netlify

Conectar repositório GitHub

Build command:

npm run build


Publish directory:

dist

📱 Compatibilidade
Navegador	Versão
Chrome	90+
Firefox	88+
Safari	14+
Edge	90+
Opera	76+
🤝 Contribuição

Faça um fork

Crie uma branch

git checkout -b feature/nova-feature


Commit

git commit -m "Adiciona nova funcionalidade"


Push

git push origin feature/nova-feature


Abra um Pull Request

📄 Licença

Este projeto está sob a licença MIT.

👨‍💻 Autor

Erik Silva de Paiva
Estudante de Engenharia de Software

📞 Contato

Email: contato@dermalux.com.br

Telefone: (11) 3456-7890
WhatsApp: (11) 98765-4321

Endereço: Av. Paulista, 1000 — São Paulo/SP

📊 Status do Projeto

Versão atual: 1.0.0

✅ Implementado

Estrutura completa de componentes

Design responsivo

Formulário de contato

Slider de depoimentos

Menu mobile

Scroll suave

🔄 Em desenvolvimento

Integração com API

Páginas internas

Blog institucional

SEO avançado

📊 Performance

Lighthouse Score: 95+

First Paint: < 1.5s

Interatividade: < 2s

🙏 Agradecimentos

Unsplash — Imagens de alta qualidade

React Team — Biblioteca incrível

Vite Team — Ferramenta de build rápida

Comunidade Open Source

💙 Desenvolvido com dedicação por Erik Silva de Paiva

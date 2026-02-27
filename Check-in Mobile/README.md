📱 Check-in Mobile
https://via.placeholder.com/800x400?text=Check-in+Mobile+Preview

Sistema moderno de check-in com formulário responsivo e persistência de dados local.

✨ Sobre o Projeto
O Check-in Mobile é uma aplicação React desenvolvida para facilitar o processo de check-in de hóspedes ou visitantes. Com uma interface limpa e moderna, o formulário coleta informações essenciais como nome, e-mail, telefone, data do check-in, número de pessoas e observações, salvando automaticamente os dados no localStorage do navegador.

🎯 Principais Características
✅ Persistência Automática - Os dados são salvos automaticamente no localStorage

📱 Design Responsivo - Funciona perfeitamente em dispositivos móveis, tablets e desktop

🎨 Interface Moderna - Gradientes sutis e animações suaves

⚡ Alta Performance - Construído com React e Vite

🔒 Validação de Campos - Campos obrigatórios devidamente sinalizados

🛠️ Tecnologias Utilizadas
React 19 - Biblioteca para construção de interfaces

Vite 7 - Build tool e servidor de desenvolvimento

CSS3 Puro - Estilização responsiva e moderna

LocalStorage API - Persistência de dados no navegador

📁 Estrutura do Projeto
text
checkin-mobile/
├── public/                  # Arquivos públicos
├── src/                     # Código fonte
│   ├── assets/              # Imagens e recursos
│   ├── components/          # Componentes React
│   │   └── CheckinForm/     # Formulário de check-in
│   │       ├── CheckinForm.css   # Estilos do formulário
│   │       └── index.jsx          # Lógica do formulário
│   ├── hooks/                # Hooks personalizados
│   │   └── useLocalStorage.js     # Hook para localStorage
│   ├── styles/               # Estilos globais
│   │   └── global.css             # Reset e estilos base
│   ├── utils/                 # Utilitários
│   │   └── storage.js              # Funções de localStorage
│   ├── App.css                # Estilos do App
│   ├── App.jsx                # Componente principal
│   ├── index.css              # Estilos de entrada
│   └── main.jsx               # Ponto de entrada
├── .gitignore                 # Arquivos ignorados pelo git
├── eslint.config.js           # Configuração do ESLint
├── index.html                 # HTML principal
├── package.json               # Dependências e scripts
├── package-lock.json          # Lock das dependências
├── README.md                  # Documentação
└── vite.config.js             # Configuração do Vite
🚀 Como Executar
Pré-requisitos
Node.js (versão 20.19 ou superior)

npm ou yarn

Passo a Passo
Clone o repositório

bash
git clone https://github.com/seu-usuario/checkin-mobile.git
cd checkin-mobile
Instale as dependências

bash
npm install
# ou
yarn install
Execute o projeto

bash
npm run dev
# ou
yarn dev
Acesse no navegador

text
http://localhost:5173
📱 Funcionalidades do Formulário
Campo	Tipo	Obrigatório	Descrição
Nome Completo	Texto	✅	Nome do hóspede
E-mail	Email	✅	E-mail para contato
Telefone	Telefone	✅	Telefone com DDD
Data do Check-in	Data	✅	Data prevista para check-in
Nº de Pessoas	Número	✅	Quantidade de pessoas (1-10)
Observações	Textarea	❌	Informações adicionais
💾 Persistência de Dados
Os dados do formulário são automaticamente salvos no localStorage do navegador com a chave checkinData. Isso significa que:

Se o usuário fechar a página e voltar depois, os dados preenchidos ainda estarão lá

O botão "Limpar Dados" remove todas as informações do formulário e do localStorage

Uma mensagem de confirmação aparece antes de limpar os dados

🎨 Estilização
O projeto utiliza CSS puro com:

Design Mobile-First - Otimizado primeiro para dispositivos móveis

Media Queries - Breakpoints para diferentes tamanhos de tela:

600px, 480px, 380px, 320px para mobile

768px para tablets

Landscape para celulares em modo paisagem

Animações - Efeito slide-up suave ao carregar o formulário

Gradientes - Fundo com gradiente azul profissional (#0B1E33 → #1A2F4A)

Sombras - Box shadows elegantes para profundidade

🧪 Scripts Disponíveis
npm run dev - Inicia o servidor de desenvolvimento

npm run build - Gera a versão de produção

npm run preview - Visualiza a versão de produção localmente

npm run lint - Executa a verificação de linting

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

👨‍💻 Autor
Desenvolvido por Erik - @seudev

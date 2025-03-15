# 🚀 Desafio Técnico Fullstack - Coopercarga

[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://react.dev/)
[![AdonisJS](https://img.shields.io/badge/AdonisJS-5.9-green?logo=adonisjs)](https://adonisjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-darkblue?logo=typescript)](https://www.typescriptlang.org/)

Repositório contendo a solução completa para o desafio técnico composto por 2 partes principais:

## 📚 Parte 1: Questões Teóricas (6 Questões)

**Localização:** [`/questoes-teoricas`](./questoes-teoricas)  
**Formato:** Documentos Markdown individuais com explicações detalhadas

### Questões:

**[Q1 - Análise de Algoritmos](./questoes-teoricas/questao-1.md)**
Comportamento de estruturas de controle e operadores

**[Q2 - Clean Code](./questoes-teoricas/questao-2.md)**
Princípios SOLID e boas práticas de refatoração

**[Q3 - Refatoração Prática](./questoes-teoricas/questao-3.md)**
Exemplo real com melhoria na legibilidade

**[Q4 - Middleware no Express.js](./questoes-teoricas/questao-4.md)**
Padrões de reuso e composição

**[Q5 - ORM vs Query Builder](./questoes-teoricas/questao-5.md)**
Comparação técnica e escolha de abordagem

**[Q6 - Consulta SQL](./questoes-teoricas/questao-6.md)**
Joins e Agregação

## 🛍️ Parte 2: Marketplace Fullstack

**Aplicação completa para e-commerce de roupas e acessórios com:**

### Frontend

![React][React.js] + ![TypeScript][TypeScript] + ![Vite][Vite]

**Stack:**

- React 18 + Vite
- TypeScript 5.0
- Styled Components
- React Router

**Features Principais:**

✅ Sistema de filtros dinâmicos (preço, tamanho, categoria)  
✅ Modal de detalhes de produtos com zoom  
✅ Troca de temas (light/dark) persistente no localStorage  
✅ Internacionalização com i18n (Português, Inglês e Espanhol)  
✅ Preloader para carregamento de dados  
✅ Carregamento de dados assíncronos  
✅ Paginação otimizada  
✅ Sistema de busca com sugestão de dados

### Backend

![Adonis][Adonis]

**Endpoints Principais:**

```http
GET    /api/products       Listagem com filtros
GET    /api/products/:id   Detalhes do produto
```

## ⚡ Instalação Rápida

### Pré-requisitos

    Node.js 18.x

    PostgreSQL 14+

    Yarn 1.22+

### Instalação

```bash
# Clonar repositório
git clone https://github.com/arthurgian/marketplace-coopercarga.git
cd marketplace-coopercarga

# Frontend
cd client
npm install ou yarn
npm run dev ou yarn run dev

# Backend
cd ../server
npm install ou yarn
node ace serve --watch
```

## 📬 Contato

### Candidato: Arthur Gian

### [LinkedIn](https://linkedin.com/in/arthur-gian)

### Email: arthur.ogian.kontakt@gmail.com

<!-- MARKDOWN LINKS & IMAGES -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Adonis]: https://img.shields.io/badge/AdonisJS-220052?style=for-the-badge&logo=adonisjs&logoColor=white

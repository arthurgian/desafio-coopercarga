# Q4 - Middleware no Express.js

## Enunciado

Explique como os middlewares no Express.js podem ser utilizados para evitar repetição de código.

## Passo 1: O que são middlewares?

**Middlewares** são funções que interceptam requisições HTTP no Express.js, permitindo executar lógica antes que a rota

## Passo 2: Formas de evitar repetição de código

### 1. Centralização de Lógica Comum

```js
// Rotas com validação repetida
app.get("/pedidos", verificaAuth, verificaPermissao, (req, res) => {
  /* ... */
});
app.post("/pedidos", verificaAuth, verificaPermissao, (req, res) => {
  /* ... */
});
```

```js
// Middleware centralizado
const authMiddleware = (req, res, next) => {
  if (!req.user) return res.status(401).send("Não autorizado!");
  next();
};

// Aplicação única
app.use("/pedidos", authMiddleware);
```

### 2. Encadeamento de Operações

```js
app.use(express.json()); // Parsing de JSON
```

### 3. DRY

- Repetição de validações

```js
app.post("/clientes", (req, res) => {
  if (!req.body.email.includes("@")) {
    /* validação em cada rota */
  }
  // ...
});

app.put("/clientes/:id", (req, res) => {
  if (!req.body.email.includes("@")) {
    /* mesma validação */
  }
  // ...
});
```

- Middleware centralizado

```js
const validaEmail = (req, res, next) => {
  if (!req.body.email?.includes("@")) {
    return res.status(400).send("E-mail inválido!");
  }
  next();
};

app.post("/clientes", validaEmail /* ... */);
app.put("/clientes/:id", validaEmail /* ... */);
```

### 4. Globalização de Erros

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Erro interno");
});
```

## Conclusão

Middlewares permitem centralizar lógica comum, evitar repetição de código e melhorar a organização do código.

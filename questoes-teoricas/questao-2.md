# Q2 - Clean Code

## Enunciado

O [`código`](./utils/main.js) está bem estruturado e legível? Liste os principais problemas encontrados e sugira melhorias seguindo os princípios do Clean Code.

## Passo 1: Problemas encontrados

### 1. Nomes de Variáveis e Funções

```js
// A nomenclatura das variáveis e funções não é clara
let M = 1000;
let RR = 50;
let CC = 4;
let ORDMAX = 30;
```

### 2. Acoplamento

```js
// Toda funcionalidade em um único método
static main(args) {
  // ...
}
```

### 3. Comentários

- Falta de comentários explicativos nos métodos e variáveis

## Passo 2: Sugestões de Melhoria

### 1. Nomenclatura das variáveis

```js
// Antes
let RR = 50;

// Depois
const ROWS_PER_PAGE = 50;
```

### 2. Modularidade

```js
// Dividir em funções menores
// Exemplo:
function printPaginatedResults(pages)
```

## Conclusão

O código pode ser melhorado seguindo os princípios do Clean Code, com melhorias na nomenclatura, modularidade e comentários, assim o código ficará mais legível e fácil de manter.

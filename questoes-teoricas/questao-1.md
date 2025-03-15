# Q1: Análise de Algoritmos

## Enunciado

Qual será a saída do [`algoritmo`](./utils/main.js) fornecido?

## Passo 1: Execução do Código

```bash
# Executei diretamente pelo terminal com Node.js
node main.js
```

## Passo 2: Saída Observada

```bash
Page  1
2|233|547|877
3|239|557|881
5|241|563|883
7|251|569|887
11|257|571|907
13|263|577|911
17|269|587|919
19|271|593|929
23|277|599|937
29|281|601|941
31|283|607|947
...
```

## Passo 3: Análise

### Variáveis e Funções

- **M**: Número de números primos gerados
- **CC**: Número de colunas
- **RR**: Linhas por página
- `console.log(aux.join("|"));`: Separação dos números por coluna
- `console.log("Page ", PAGENUMBER);`: Paginação dos números

## Conclusão

O arquivo [`main.js`](./utils/main.js) é um script em JavaScript que gera uma tabela de números primos.
